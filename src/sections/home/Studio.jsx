import React from 'react';
import img from "../../img/full1.jpg";
import arrow from "../../assets/svgs/arrow.svg";
import SketchComponent from "../../components/Sketch.jsx";

const Studio = () => {
    return (
        <section className="studio-section flex">
            <div className="studio-section__content main-side flex">
                <h2 className="studio-section__title">Le studio
                    <img className="studio-section__arrow" src={arrow} alt="arrow"/>
                </h2>
                <p className="studio-section__description">
                    Pas de banalité, juste de l'exceptionnel
                    Fini les sites web ordinaires et les applications classiques. Atypica, c'est un studio qui casse les
                    codes. Nous sommes spécialisés dans la conception d'expériences numériques interactives et
                    atypiques, alliant créativité et performance.
                </p>
            </div>
            <div className="flex studio-section__content--secondary">
                <div className="studio-section__box">
                    <SketchComponent textureImage={img}/>
                </div>
                <div className="flex studio-section__item-list">
                    <div className="studio-section__title--secondary">Services</div>
                    <div className="studio-section__item">Web design</div>
                    <div className="studio-section__item">Web development</div>
                    <div className="studio-section__item">User experience</div>
                    <div className="studio-section__item">User interface</div>
                    <div className="studio-section__item">Motion</div>
                    <div className="studio-section__item">3D</div>
                </div>
            </div>
            <line></line>
        </section>
    );
};

export default Studio;