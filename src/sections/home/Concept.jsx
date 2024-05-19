import React from 'react';
import img from "../../img/full1.jpg";
import arrow from "../../svgs/arrow.svg";


const Concept = () => {
    return (
        <section className="studio-section flex">
            <div className="studio-section__content main-side flex">
                <h2 className="studio-section__title">Digital studio
                    <img className="studio-section__arrow" src={arrow} alt="arrow"/>
                </h2>
                <p className="studio-section__description">
                    Chez Atypica, nous savons que votre temps est précieux. C'est pourquoi nous mettons un point
                    d'honneur à privilégier la simplicité et l'efficacité. Notre équipe possède l'expertise et la
                    créativité nécessaires pour prendre en charge tout, de la recherche et la planification au design
                    personnalisé et au développement. Ainsi, vous êtes libéré de la charge de la microgestion.
                </p>
            </div>
            <div>©2024</div>
        </section>
    );
}

export default Concept;