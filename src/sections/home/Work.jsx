import React, {useEffect, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import imagesLoaded from 'imagesloaded';
import logo from '../../assets/svgs/main-logo-atypica-white.svg';
import image1 from '../../img/full1.jpg';
import image2 from '../../img/full2.jpg';
import image3 from '../../img/full3.jpg';
import image4 from '../../img/full4.jpg';
import image5 from '../../img/full5.jpg';
import image6 from '../../img/full6.jpg';
import image7 from '../../img/full7.jpg';
import image8 from '../../img/full8.jpg';
import image9 from '../../img/full9.jpg';
import img from "../../img/full1.jpg";
import arrow from "../../assets/svgs/arrow.svg";

gsap.registerPlugin(ScrollTrigger);

const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9
];

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

const duplicateImagesToFillContainer = (images, containerHeight, imageHeight) => {
    const numImagesPerColumn = Math.ceil(containerHeight / imageHeight);
    return Array.from({length: numImagesPerColumn}, () => images).flat();
};

const Work = () => {
    const [duplicatedImages, setDuplicatedImages] = useState([]);

    useEffect(() => {
        const containerHeight = window.innerHeight * 2;
        const imageHeight = 300;

        setDuplicatedImages(duplicateImagesToFillContainer(images, containerHeight, imageHeight));

        preloadImages().then(() => {
            const scrollOffset = 500;

            const animateColumn = (column, direction) => {
                const yStart = 0;
                const yEnd = direction === 'up' ? `-=${scrollOffset}` : `+=${scrollOffset}`;

                gsap.fromTo(column,
                    {y: yStart},
                    {
                        y: yEnd,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: column,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: true,
                            onUpdate: (self) => {
                                const adjustedDirection = direction === 'up' ? -scrollOffset : scrollOffset;
                                gsap.set(column, {y: self.progress * adjustedDirection - 50});
                            }
                        }
                    }
                );
            };

            document.querySelectorAll('.column--odd').forEach((column) => {
                animateColumn(column, 'up');
            });

            document.querySelectorAll('.column--pair').forEach((column) => {
                animateColumn(column, 'down');
            });
        });
    }, []);

    const getColumnImages = (columnIndex) => {
        return duplicatedImages
            .filter((_, index) => index % 5 === columnIndex)
            .map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`work ${index + 1}`}/>
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
                <img className="work-section__arrow" src={arrow} alt="arrow"/>
            </h2>
            </div>
            <p className="work-section__description">
                Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des émotions dans
                le cœur des personnes qui interagissent avec nous. Nous sommes fiers de nous démarquer,
                dans une réalité contemporaine saturée de solutions standardisées. Nous vous invitons à nous rejoindre
                pour créer quelque chose de vraiment unique. </p>
            </div>
            <div className="work-section__playground">
                <div className="column column--odd">
                    {getColumnImages(0)}
                </div>
                <div className="column column--pair">
                    {getColumnImages(1)}
                </div>
                <div className="column column--odd">
                    {getColumnImages(2)}
                </div>
                <div className="column column--pair">
                    {getColumnImages(3)}
                </div>
                <div className="column column--odd">
                    {getColumnImages(4)}
                </div>
            </div>
            <img className="work-section--logo" src={logo} alt="Logo atypica"/>
        </section>
    );
};

export default Work;
