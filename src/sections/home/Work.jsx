import React from 'react';
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
        <section className="work">
            <div className="work__content flex">
                <div className="main-side flex">
                    <h2 className="work__title">Playground
                        <img className="work__arrow" src={arrow} alt="arrow" />
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
                        <a href="#!" className="work__playground-link">
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Spotify remake</span>
                                    <span className="work__playground-subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work__playground-number">1</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image2} alt="Spotify remake"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image2} alt="Spotify remake"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link">
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Shop for Fox</span>
                                    <span className="work__playground-subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work__playground-number">2</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image3} alt="Shop for Fox"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image3} alt="Shop for Fox"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link">
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Immobilier neuf</span>
                                    <span className="work__playground-subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work__playground-number">3</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image4} alt="Immobilier neuf"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image4} alt="Immobilier neuf"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image4} alt="Immobilier neuf"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image4} alt="Immobilier neuf"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image4} alt="Immobilier neuf"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link">
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Portfolio perso</span>
                                    <span className="work__playground-subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work__playground-number">4</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image5} alt="Portfolio perso"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image5} alt="Portfolio perso"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image5} alt="Portfolio perso"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image5} alt="Portfolio perso"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image5} alt="Portfolio perso"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li className="work__playground-item flex">
                        <a href="#!" className="work__playground-link">
                            <div className="work__playground-row flex">
                                <div className="work__playground-title-wrapper flex">
                                    <span className="work__playground-title">Play Quizzos</span>
                                    <span className="work__playground-subtitle">/ ceci est une topline</span>
                                </div>
                                <span className="work__playground-number">5</span>
                            </div>
                            <div className="work__playground-image-wrapper">
                                <div className="work__playground-arrow">→</div>
                                <ul className="work__playground-image-wrapper-list flex">
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image6} alt="Play Quizzos"/></li>
                                    <li className="work__playground-image"><img className="work__playground-image-item" src={image6} alt="Play Quizzos"/></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Work;
