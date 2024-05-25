import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import imagesLoaded from 'imagesloaded';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import image6 from '../../img/6.jpg';
import image7 from '../../img/7.jpg';
import image8 from '../../img/8.jpg';
import image9 from '../../img/9.jpg';
import image10 from '../../img/10.jpg';
import image11 from '../../img/11.jpg';
import image12 from '../../img/12.jpg';
import image13 from '../../img/13.jpg';
import image14 from '../../img/14.jpg';
import image15 from '../../img/15.jpg';
import image16 from '../../img/full1.jpg';
import image17 from '../../img/full2.jpg';
import image18 from '../../img/full3.jpg';
import image19 from '../../img/full4.jpg';
import image20 from '../../img/full5.jpg';
import image21 from '../../img/full6.jpg';
import image22 from '../../img/full7.jpg';
import image23 from '../../img/full8.jpg';
import image24 from '../../img/full9.jpg';

gsap.registerPlugin(ScrollTrigger);

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

const Work = () => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        lenis.on('scroll', ScrollTrigger.update);

        const applyAnimation = (grid) => {
            const gridWrap = grid.querySelector('.grid-wrap');
            const gridItems = grid.querySelectorAll('.grid__item');
            const gridItemsInner = [...gridItems].map((item) =>
                item.querySelector('.grid__item-inner')
            );

            const timeline = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    trigger: gridWrap,
                    start: 'top bottom+=5%',
                    end: 'bottom top-=5%',
                    scrub: true,
                },
            });

            grid.style.setProperty('--grid-width', '105%');
            grid.style.setProperty('--grid-columns', '8');
            grid.style.setProperty('--perspective', '1500px');
            grid.style.setProperty('--grid-inner-scale', '0.5');

            timeline
                .set(gridItems, {
                    transformOrigin: '50% 0%',
                    z: () => gsap.utils.random(-5000, -2000),
                    rotationX: () => gsap.utils.random(-65, -25),
                    filter: 'brightness(0%)',
                })
                .to(
                    gridItems,
                    {
                        xPercent: () => gsap.utils.random(-150, 150),
                        yPercent: () => gsap.utils.random(-300, 300),
                        rotationX: 0,
                        filter: 'brightness(200%)',
                    },
                    0
                )
                .to(
                    gridWrap,
                    {
                        z: 6500,
                    },
                    0
                )
                .fromTo(
                    gridItemsInner,
                    {
                        scale: 2,
                    },
                    {
                        scale: 1,
                    },
                    0
                );
        };

        const scroll = () => {
            const grids = document.querySelectorAll('.grid');
            grids.forEach((grid) => {
                applyAnimation(grid);
            });
        };

        preloadImages('.grid__item-inner').then(() => {
            scroll();
            document.body.classList.remove('loading');
        });

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            lenis.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="work-section">
            <div className="work-section__title">Work</div>
            <div className="work-section__playground grid">
                <div className="grid-wrap">
                    {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24].map((src, index) => (
                        <div className="grid__item" key={index}>
                            <div
                                className="grid__item-inner"
                                style={{backgroundImage: `url(${src})`}}
                            ></div>
                        </div>
                    ))}
                </div>
                <div className="work-section__title">Work</div>

            </div>
        </section>
    );
};

export default Work;
