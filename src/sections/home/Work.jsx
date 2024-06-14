import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { gsap } from 'gsap';
import image1 from '../../img/1.jpg';
import image2 from '../../img/full2.jpg';
import image3 from '../../img/full3.jpg';
import image4 from '../../img/full4.jpg';
import image5 from '../../img/full5.jpg';
import image6 from '../../img/6.jpg';
import image7 from '../../img/7.jpg';
import image8 from '../../img/8.jpg';
import image9 from '../../img/9.jpg';
import image10 from '../../img/full1.jpg';
import image11 from '../../img/full2.jpg';
import image12 from '../../img/full3.jpg';
import image13 from '../../img/full4.jpg';
import image14 from '../../img/5.jpg';
import image15 from '../../img/6.jpg';
import image16 from '../../img/full7.jpg';
import image17 from '../../img/full8.jpg';
import image18 from '../../img/9.jpg';
import image19 from '../../img/full1.jpg';
import arrow from "../../assets/svgs/arrow.svg";

const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19
];

const Work = () => {
    return (
        <section className="work-section">
            <div className="work-section__content flex">
                <div className="main-side flex">
                    <h2 className="work-section__title">Playground
                        <img className="work-section__arrow" src={arrow} alt="arrow" />
                    </h2>
                </div>
                <p className="work-section__description">
                    Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des émotions.
                    Nous tentons de nous démarquer, dans une réalité contemporaine saturée de solutions standardisées.
                    Nous vous invitons à nous rejoindre
                    pour créer quelque chose de vraiment unique. </p>
            </div>
            <div className="work-section__playground">
                <ul className="work-section__playground--container">
                    <li className="work-section__playground--item flex">
                        <a href="#!" className="work-section__playground--link">
                            <div className="work-section__playground--row flex">
                                <div className="work-section__playground--title-wrapper flex">
                                    <span className="work-section__playground--title">Spotify remake</span>
                                    <span className="work-section__playground--subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work-section__playground--number">1</span>
                            </div>
                            <div className="work-section__playground--image-wrapper">
                                <img src={image2} alt="Spotify remake" className="work-section__playground--image" />
                                <img src={image2} alt="Spotify remake" className="work-section__playground--image" />
                                <img src={image2} alt="Spotify remake" className="work-section__playground--image" />
                                <img src={image2} alt="Spotify remake" className="work-section__playground--image" />
                                <img src={image2} alt="Spotify remake" className="work-section__playground--image" />
                            </div>
                        </a>
                    </li>
                    <li className="work-section__playground--item flex">
                        <a href="#!" className="work-section__playground--link">
                            <div className="work-section__playground--row flex">
                                <div className="work-section__playground--title-wrapper flex">
                                    <span className="work-section__playground--title">Shop for Fox</span>
                                    <span className="work-section__playground--subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work-section__playground--number">2</span>
                            </div>
                            <div className="work-section__playground--image-wrapper">
                                <img src={image3} alt="Shop for Fox" className="work-section__playground--image" />
                                <img src={image3} alt="Shop for Fox" className="work-section__playground--image" />
                                <img src={image3} alt="Shop for Fox" className="work-section__playground--image" />
                                <img src={image3} alt="Shop for Fox" className="work-section__playground--image" />
                                <img src={image3} alt="Shop for Fox" className="work-section__playground--image" />
                            </div>
                        </a>
                    </li>
                    <li className="work-section__playground--item flex">
                        <a href="#!" className="work-section__playground--link">
                            <div className="work-section__playground--row flex">
                                <div className="work-section__playground--title-wrapper flex">
                                    <span className="work-section__playground--title">Immobilier neuf</span>
                                    <span className="work-section__playground--subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work-section__playground--number">3</span>
                            </div>
                            <div className="work-section__playground--image-wrapper">
                                <img src={image4} alt="Immobilier neuf" className="work-section__playground--image" />
                                <img src={image4} alt="Immobilier neuf" className="work-section__playground--image" />
                                <img src={image4} alt="Immobilier neuf" className="work-section__playground--image" />
                                <img src={image4} alt="Immobilier neuf" className="work-section__playground--image" />
                                <img src={image4} alt="Immobilier neuf" className="work-section__playground--image" />
                            </div>
                        </a>
                    </li>
                    <li className="work-section__playground--item flex">
                        <a href="#!" className="work-section__playground--link">
                            <div className="work-section__playground--row flex">
                                <div className="work-section__playground--title-wrapper flex">
                                    <span className="work-section__playground--title">Portfolio perso</span>
                                    <span className="work-section__playground--subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work-section__playground--number">4</span>
                            </div>
                            <div className="work-section__playground--image-wrapper">
                                <img src={image5} alt="Portfolio perso" className="work-section__playground--image" />
                                <img src={image5} alt="Portfolio perso" className="work-section__playground--image" />
                                <img src={image5} alt="Portfolio perso" className="work-section__playground--image" />
                                <img src={image5} alt="Portfolio perso" className="work-section__playground--image" />
                                <img src={image5} alt="Portfolio perso" className="work-section__playground--image" />
                            </div>
                        </a>
                    </li>
                    <li className="work-section__playground--item flex">
                        <a href="#!" className="work-section__playground--link">
                            <div className="work-section__playground--row flex">
                                <div className="work-section__playground--title-wrapper flex">
                                    <span className="work-section__playground--title">Play Quizzos</span>
                                    <span className="work-section__playground--subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work-section__playground--number">5</span>
                            </div>
                            <div className="work-section__playground--image-wrapper">
                                <img src={image6} alt="Play Quizzos" className="work-section__playground--image" />
                                <img src={image6} alt="Play Quizzos" className="work-section__playground--image" />
                                <img src={image6} alt="Play Quizzos" className="work-section__playground--image" />
                                <img src={image6} alt="Play Quizzos" className="work-section__playground--image" />
                                <img src={image6} alt="Play Quizzos" className="work-section__playground--image" />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Work;
