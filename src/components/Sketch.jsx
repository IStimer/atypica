import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import fragment from "../shaders/distordedPixels/fragment.glsl";
import vertex from "../shaders/distordedPixels/vertex.glsl";

function SketchComponent({ textureImage }) {
    const containerRef = useRef(null);
    const [textureLoaded, setTextureLoaded] = useState(false);

    useEffect(() => {
        console.log("SketchComponent mounted");
        return () => {
            console.log("SketchComponent unmounted");
        };
    }, []);

    useEffect(() => {
        if (containerRef.current && textureLoaded) {
            console.log("Initializing Sketch");
            const sketch = new Sketch({
                dom: containerRef.current,
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
                textureImage: textureImage,
            });

            return () => {
                console.log("Cleaning up Sketch");
                sketch.isPlaying = false;
            };
        }
    }, [textureLoaded, textureImage]);

    useEffect(() => {
        console.log("Loading texture");
        const loader = new THREE.TextureLoader();
        loader.load(
            textureImage,
            (texture) => {
                console.log("Texture loaded successfully");
                texture.format = THREE.RGBAFormat;
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false;
                setTextureLoaded(true);
            },
            undefined,
            (error) => {
                console.error("An error occurred while loading the texture:", error);
            }
        );
    }, [textureImage]);

    return (
        <div ref={containerRef} id="canvasContainer" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, color: 'white', zIndex: 10 }}>
            </div>
            <img src={textureImage} alt="" style={{ display: 'none' }} />
        </div>
    );
}

class Sketch {
    constructor(options) {
        this.container = options.dom;
        this.width = options.width;
        this.height = options.height;
        this.textureImage = options.textureImage;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true,
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);

        const frustumSize = 1;
        const aspect = this.width / this.height;
        this.camera = new THREE.OrthographicCamera(
            frustumSize / -2,
            frustumSize / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000
        );
        this.camera.position.set(0, 0, 2);

        this.time = 0;
        this.mouse = {
            x: 0,
            y: 0,
            prevX: 0,
            prevY: 0,
            vX: 0,
            vY: 0,
        };

        this.isPlaying = true;
        this.isMouseOverImage = false;
        this.distortionStrength = 1;

        this.settings();
        this.addObjects();
        this.resize();
        this.render();
        this.setupResize();
        this.mouseEvents();
    }

    getValue(val) {
        return parseFloat(this.container.getAttribute("data-" + val));
    }

    mouseEvents() {
        this.container.addEventListener("mousemove", (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = (e.clientX - rect.left) / this.width;
            this.mouse.y = 1 - (e.clientY - rect.top) / this.height;

            this.mouse.vX = this.mouse.x - this.mouse.prevX;
            this.mouse.vY = this.mouse.y - this.mouse.prevY;

            this.mouse.prevX = this.mouse.x;
            this.mouse.prevY = this.mouse.y;

            this.isMouseOverImage = true;
            this.distortionStrength = 1;
        });

        this.container.addEventListener("mouseleave", () => {
            this.isMouseOverImage = false;
        });
    }

    settings() {
        this.settings = {
            grid: this.getValue("grid") || 50,
            mouse: this.getValue("mouse") || 0.25,
            strength: this.getValue("strength") || 0.11,
            relaxation: this.getValue("relaxation") || 0.9,
        };
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;

        const imageAspect = 1 / 1.5;
        let a1, a2;
        if (this.height / this.width > imageAspect) {
            a1 = (this.width / this.height) * imageAspect;
            a2 = 1;
        } else {
            a1 = 1;
            a2 = (this.height / this.width) / imageAspect;
        }

        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;

        this.camera.updateProjectionMatrix();
        this.regenerateGrid();
    }

    regenerateGrid() {
        const size = this.settings.grid;
        const width = size;
        const height = size;
        const data = new Float32Array(4 * width * height);

        for (let i = 0; i < data.length; i += 4) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
            data[i + 3] = 255;
        }

        this.texture = new THREE.DataTexture(
            data,
            width,
            height,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        this.texture.magFilter = this.texture.minFilter = THREE.NearestFilter;
        this.texture.needsUpdate = true;

        if (this.material) {
            this.material.uniforms.uDataTexture.value = this.texture;
            this.material.uniforms.uDataTexture.value.needsUpdate = true;
        }
    }

    addObjects() {
        this.regenerateGrid();

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(this.textureImage, (tex) => {
            tex.format = THREE.RGBAFormat;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
            this.material.needsUpdate = true;
        });

        this.material = new THREE.ShaderMaterial({
            extensions: {
                derivatives: "#extension GL_OES_standard_derivatives : enable",
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { value: 0 },
                resolution: { value: new THREE.Vector4() },
                uTexture: { value: texture },
                uDataTexture: { value: this.texture },
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        });

        this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }

    updateDataTexture() {
        const data = this.texture.image.data;

        if (!this.isMouseOverImage) {
            this.distortionStrength *= 0.95;
            if (this.distortionStrength < 0.01) {
                this.distortionStrength = 0;
            }
        }

        for (let i = 0; i < data.length; i += 4) {
            data[i] *= this.settings.relaxation * this.distortionStrength;
            data[i + 1] *= this.settings.relaxation * this.distortionStrength;
        }

        const gridMouseX = this.settings.grid * this.mouse.x;
        const gridMouseY = this.settings.grid * this.mouse.y;
        const maxDist = this.settings.grid * this.settings.mouse;
        const aspect = this.height / this.width;

        for (let i = 0; i < this.settings.grid; i++) {
            for (let j = 0; j < this.settings.grid; j++) {
                const distance = ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2;
                const maxDistSq = maxDist ** 2;

                if (distance < maxDistSq) {
                    const index = 4 * (i + this.settings.grid * j);
                    let power = maxDist / Math.sqrt(distance);
                    power = Math.min(power, 10);

                    data[index] += this.settings.strength * 100 * this.mouse.vX * power * this.distortionStrength;
                    data[index + 1] -= this.settings.strength * 100 * this.mouse.vY * power * this.distortionStrength;
                }
            }
        }

        this.mouse.vX *= 0.9;
        this.mouse.vY *= 0.9;
        this.texture.needsUpdate = true;
    }

    render() {
        if (!this.isPlaying) return;
        this.time += 0.05;
        this.updateDataTexture();
        this.material.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
}

export default SketchComponent;