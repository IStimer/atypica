import React from 'react'
import img from "../../img/full1.jpg";
import image from '../../img/full6.jpg';
import image2 from '../../img/full9.jpg';
import image3 from '../../img/full7.jpg';
import image4 from '../../img/10.jpg';
import flag from '../../assets/svgs/flag-basque.svg';

const Presentation = () => {
    return (
        <section className="presentation-section">
            <div className="presentation-section__title flex"><h1 className="main-side">Studio</h1><h2
                className="secondary-side">©2024</h2></div>
            <div className="presentation-section__content flex">
                <h2 className="presentation-section__sub-title main-side">A notre propos
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
                    <div className="flex presentation-section__item-list">
                        <div className="presentation-section__title--secondary">Services</div>
                        <div className="presentation-sectionn__item">Web design</div>
                        <div className="presentation-sectionn__item">Web development</div>
                        <div className="presentation-sectionn__item">User experience</div>
                        <div className="presentation-sectionn__item">User interface</div>
                        <div className="presentation-sectionn__item">Motion</div>
                        <div className="presentation-sectionn__item">3D</div>
                    </div>
                </div>
            </div>
            <div className="presentation-section__content--you flex">
                <div>
                    Notre collab
                </div>
                <div className="main-side">
                    Avec Atypica, les personnes sont placées avant les profits. Notre approche consiste à prendre
                    soin
                    de nos employés, de nos clients et de notre communauté. Pour y parvenir, nous nous concentrons
                    sur la fourniture de produits et services de haute qualité tout en étant transparents sur nos
                    pratiques commerciales. Nous accordons également une grande importance aux retours de nos
                    clients et répondons rapidement à leurs préoccupations. Nous reconnaissons l'importance des
                    entreprises pour la croissance économique, mais jamais au détriment de la santé, de la sécurité
                    et de la dignité des individus.

                    <img src={image2} alt="Visuel de l'équipe" className="presentation-section__img"/>
                </div>
            </div>
            <div className="presentation-section__content--manifest flex">
                <h2 className="presentation-section__sub-title--manifest">Manifeste</h2>
                <p className="presentation-section__description--manifest">
                    Nous croyons en la puissance de la créativité et de l'innovation pour changer le monde.
                    Nous croyons en la collaboration et en l'échange d'idées pour créer des solutions uniques. Nous
                    croyons en la transparence et en l'honnêteté pour établir des relations durables. Nous croyons en la
                    passion et en l'engagement pour réaliser des projets exceptionnels. Nous croyons en la qualité et en
                    l'excellence pour offrir des résultats exceptionnels. Nous croyons en l'atypique pour créer des
                    expériences mémorables.
                    <img src={image3} alt="Visuel de l'équipe" className="presentation-section__img"/>
                </p>
            </div>
            <div className="presentation-section__content--team flex main-side">
                <div>Notre équipe</div>
                <div className="presentation-section__description--team main-side">
                    Designer et devéloppeur mettent leur expertise au service de votre projet, chaque membre de
                    l'équipe est passionné dans son domaine et s'engage à fournir des solutions innovantes et
                    performantes.
                    <img src={image4} alt="Visuel de l'équipe" className="presentation-section__img"/>

                </div>
            </div>
            <div className="presentation-section__content--secondary main-side">
                <div className="presentation-section__sub-title--secondary flex">Produit à Bayonne
                    <img src={flag} alt="Drapeau basque" className="flag"/>
                </div>
            </div>
        </section>
    )
}

export default Presentation