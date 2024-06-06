import React from 'react'
import img from "../../img/full1.jpg";
import arrow from "../../assets/svgs/arrow.svg";
import image from '../../img/full6.jpg';
import flag from '../../assets/svgs/flag-basque.svg';

const Presentation = () => {
    return (
        <section className="presentation-section">
            <div className="presentation-section__title flex"><h1 className="main-side">Studio</h1><h2 className="secondary-side">©2024</h2></div>
            <div className="presentation-section__content flex">
                <h2 className="presentation-section__sub-title main-side">A propos de nous
                    <img className="studio-section__arrow" src={arrow} alt="arrow"/>
                </h2>
                <div className="secondary-side">
                    <p className="presentation-section__description ">
                        Notre mission est de créer des œuvres poussées, belles et exceptionnelles.
                        projet avec le plus grand soin et une attention méticuleuse aux détails.
                        Notre équipe passionnée et innovante travaille sans relâche pour offrir des solutions uniques et
                        sur mesure. Nous nous engageons à respecter les délais, à
                        communiquer de manière transparente et à assurer la satisfaction de nos clients à chaque étape.
                        Atypica, c'est l'atelier où chaque idée devient une réalité.
                    </p>
                    <img src={image} alt="Visuel de l'équipe" className="presentation-section__img"/>
                </div>
            </div>
            <div className="presentation-section__content--secondary flex">
                <div className="presentation-section__sub-title flex">Produit à Bayonne
                    <img src={flag} alt="Drapeau basque" className="flag"/>
                </div>
                <div className="presentation-section__sub-title">Studio Digital</div>
            </div>
        </section>
    )
}

export default Presentation