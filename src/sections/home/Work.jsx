import React, { useRef, useState } from 'react';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { useNavigation } from '../../utils/NavigationContext';
import image2 from '../../img/full2.jpg';
import image3 from '../../img/full3.jpg';
import image4 from '../../img/full4.jpg';
import image5 from '../../img/full5.jpg';
import image6 from '../../img/6.jpg';
import arrow from "../../assets/svgs/arrow.svg";

const Work = () => {
    const [overlayImage, setOverlayImage] = useState(null);
    const overlayRef = useRef(null);
    const overlayImageRef = useRef(null);
    const navigate = useNavigate();
    const { navigate: startTransition } = useNavigation();

    const handleImageClick = (id, imageSrc, e) => {
        setOverlayImage(imageSrc);

        const imageRect = e.target.getBoundingClientRect();
        const overlayImage = overlayImageRef.current;

        overlayImage.src = imageSrc;
        overlayImage.style.position = 'absolute';
        overlayImage.style.top = `${imageRect.top}px`;
        overlayImage.style.left = `${imageRect.left}px`;
        overlayImage.style.width = `${imageRect.width}px`;
        overlayImage.style.height = `${imageRect.height}px`;

        gsap.to(overlayImage, {
            top: '50%',
            left: '50%',
            width: '90%',
            height: '90%',
            x: '-50%',
            y: '-50%',
            ease: 'power3.inOut',
            duration: 1,
            onComplete: () => {
                startTransition(`/project/${id}`, navigate);
            }
        });

        overlayRef.current.style.display = 'block';
    };

    const handleMouseEnter = (e) => {
        const images = e.currentTarget.querySelectorAll('.work__playground-image-item');
        const titleWrapper = e.currentTarget.querySelector('.work__playground-title-wrapper');
        const arrow = e.currentTarget.querySelector('.work__playground-arrow');

        gsap.killTweensOf([images, titleWrapper, arrow]);

        gsap.timeline()
            .to(titleWrapper, {
                opacity: 0,
                duration: 0.1,
            })
            .to(arrow, {
                x: 0,
                opacity: 1,
                ease: 'power3.inOut',
                duration: 0.3,
            }, "+=0.1")
            .to(images, {
                y: '-100%',
                opacity: 1,
                stagger: 0.05,
                ease: 'power3.inOut',
                duration: 0.3,
            }, "-=0.2");
    };

    const handleMouseLeave = (e) => {
        const images = e.currentTarget.querySelectorAll('.work__playground-image-item');
        const titleWrapper = e.currentTarget.querySelector('.work__playground-title-wrapper');
        const arrow = e.currentTarget.querySelector('.work__playground-arrow');

        gsap.killTweensOf([images, titleWrapper, arrow]);

        gsap.timeline()
            .to(images, {
                y: '0%',
                opacity: 0,
                stagger: 0.05,
                ease: 'power3.inOut',
                duration: 0.3,
            })
            .to(arrow, {
                x: '-100%',
                opacity: 0,
                ease: 'power3.inOut',
                duration: 0.3,
            }, "-=0.2")
            .to(titleWrapper, {
                opacity: 1,
                ease: 'power3.inOut',
                duration: 0.1,
            }, "+=0.1");
    };
    return (
        <section className="work">
            <div className="work__content flex">
                <div className="main-side flex">
                    <h2 className="work__title">Playground
                        <img className="work__arrow" src={arrow} alt="arrow"/>
                    </h2>
                </div>
                <p className="work__description">
                    Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des émotions.
                    Nous tentons de nous démarquer, dans une réalité contemporaine saturée de solutions standardisées.
                    Nous vous invitons à nous rejoindre
                    pour créer quelque chose de vraiment unique.
                </p>
            </div>
            <div className="work__playground">
                <ul className="work__playground-container">
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleImageClick(1, image2, e)}>
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Harmony'Gallery</span>
                                    <span className="work__playground-subtitle">/design animations et transitions</span>
                                </div>
                                <span className="work__playground-number">1</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image2} alt="Spotify remake"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleImageClick(3, image4, e)}>
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Acheterduneuf</span>
                                    <span className="work__playground-subtitle">/developpement complexe</span>
                                </div>
                                <span className="work__playground-number">3</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image4} alt="Immobilier neuf"/>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleImageClick(2, image3, e)}>
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Portail scene</span>
                                    <span className="work__playground-subtitle">/logiciel et langages 3d</span>
                                </div>
                                <span className="work__playground-number">2</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image3} alt="Shop for Fox"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleImageClick(4, image5, e)}>
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Portfolio</span>
                                    <span className="work__playground-subtitle">/design et developpement</span>
                                </div>
                                <span className="work__playground-number">4</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image5} alt="Portfolio perso"/>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleImageClick(5, image6, e)}>
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">quizzos</span>
                                    <span className="work__playground-subtitle">/developpement mobile</span>
                                </div>
                                <span className="work__playground-number">5</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item"
                                                                                src={image6} alt="Play Quizzos"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="image-overlay" ref={overlayRef} style={{display: 'none'}}>
                <img className="image-overlay__img" ref={overlayImageRef} alt="Overlay"/>
            </div>
        </section>
    );
};

export default Work;
