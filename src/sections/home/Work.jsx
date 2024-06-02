import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import image1 from '../../img/full1.jpg';
import image2 from '../../img/full2.jpg';
import image3 from '../../img/full3.jpg';
import image4 from '../../img/full4.jpg';
import image5 from '../../img/full5.jpg';
import image6 from '../../img/full6.jpg';
import image7 from '../../img/full7.jpg';
import image8 from '../../img/full8.jpg';
import image9 from '../../img/full9.jpg';
import image10 from '../../img/full1.jpg';
import image11 from '../../img/full2.jpg';
import image12 from '../../img/full3.jpg';
import image13 from '../../img/full4.jpg';
import image14 from '../../img/full5.jpg';
import image15 from '../../img/full6.jpg';
import image16 from '../../img/full7.jpg';
import image17 from '../../img/full8.jpg';
import image18 from '../../img/full9.jpg';
import image19 from '../../img/full1.jpg';
import arrow from "../../assets/svgs/arrow.svg";

gsap.registerPlugin(ScrollTrigger);

const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19
];

const Work = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const imgsLoaded = imagesLoaded(document.querySelector('.work-section__playground'), { background: true });

        imgsLoaded.on('done', () => {
            const scrollOffset = 0;

            const animateColumn = (column, direction) => {
                const yStart = direction === 'up' ? 0 : -scrollOffset;
                const yEnd = direction === 'up' ? -scrollOffset : 0;

                gsap.fromTo(column,
                    { y: yStart },
                    {
                        y: yEnd,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.work-section',
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true
                        }
                    }
                );
            };

            // Target only the middle column for animation
            const columns = document.querySelectorAll('.image-container');
            for (let i = 1; i < columns.length; i += 3) {
                animateColumn(columns[i], 'up');
            }
        });
    }, []);

    useEffect(() => {
        if (selectedImage) {
            const { element } = selectedImage;
            const bounds = element.getBoundingClientRect();
            const x = window.innerWidth / 2 - (bounds.left + bounds.width / 2);
            const y = window.innerHeight / 2 - (bounds.top + bounds.height / 2);

            element.classList.add('selected');

            gsap.timeline()
                .set(element, { zIndex: 1000, position: 'relative' })
                .to(element, {
                    x: x,
                    y: y,
                    transformOrigin: '50% 50%',
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'power2.inOut',
                    onComplete: () => {
                    }
                });
        }
    }, [selectedImage]);

    const handleImageClick = (e, image) => {
        if (selectedImage) {
            selectedImage.element.classList.remove('selected');
        }
        setSelectedImage({ element: e.currentTarget, image });
    };

    const renderImages = () => {
        return images.map((image, index) => (
            <div
                key={index}
                className={`image-container ${selectedImage && selectedImage.image === image ? 'no-hover' : ''}`}
                onClick={(e) => handleImageClick(e, image)}
            >
                <img src={image} alt={`work ${index + 1}`} />
                <div className="image-caption">
                    <span className="image-title">Title {index + 1}</span>
                    <span className="image-year">{2023 + (index % 2)}</span>
                </div>
            </div>
        ));
    };

    return (
        <section className="work-section">
            <div className="work-section__content flex">
                <div className="main-side flex">
                    <h2 className="work-section__title">Playground
                        <img className="work-section__arrow" src={arrow} alt="arrow" />
                    </h2>
                </div>
                <p className="work-section__description">
                    Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des émotions dans
                    le cœur des personnes qui interagissent avec nous. Nous sommes fiers de nous démarquer,
                    dans une réalité contemporaine saturée de solutions standardisées. Nous vous invitons à nous rejoindre
                    pour créer quelque chose de vraiment unique. </p>
            </div>
            <div className="work-section__playground">
                {renderImages()}
            </div>
        </section>
    );
};

export default Work;
