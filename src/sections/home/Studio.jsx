import React from 'react'
import img from "../../img/full1.jpg"
import arrow from "../../assets/svgs/arrow.svg"

const Studio = () => {
    return (
        <section className="studio-section flex">
            <div className="studio-section__content main-side flex">
                <h2 className="studio-section__title">Le studio
                    <img className="studio-section__arrow" src={arrow} alt="arrow"/>
                </h2>
                <p className="studio-section__description">
                    Un studio qui casse les codes ! Chez nous, pas de sites web ennuyeux ni d'applications ordinaires.
                    nous sommes spécialisés dans la création d’expériences numériques folles et des plus atypiques
                </p>
            </div>
            <div className="flex studio-section__content--secondary">
            <img className="studio-section__img" src={img} alt="Visuel de l'équipe"/>
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
        </section>
    )
}

export default Studio;