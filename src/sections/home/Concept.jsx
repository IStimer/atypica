import React from 'react'
import img from "../../img/full1.jpg"
import arrow from "../../assets/svgs/arrow.svg"


const Concept = () => {
    return (
        <section className="studio-section flex">
            <div className="studio-section__content main-side flex">
                <h2 className="studio-section__title">Digital studio
                    <img className="studio-section__arrow" src={arrow} alt="arrow"/>
                </h2>
                <p className="studio-section__description">
                    À l'image d'une mer tantôt calme, tantôt agitée, nous naviguons avec aisance entre innovation
                    audacieuse et élégance apaisante. Chez Atypica, chaque projet est une traversée unique où chaque
                    vague de créativité est maîtrisée pour créer une expérience qui vous ressemble.
                </p>
            </div>
            <div>©2024</div>
        </section>
    )
}

export default Concept