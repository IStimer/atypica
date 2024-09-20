import React from 'react'
import arrow from "../../assets/svgs/arrow-bottom.svg"
import img from "../../img/full1.jpg";

const ContactUs = () => {
    return (
        <section className="contact-us">
            <div className="contact-us__content flex">
            <div className="main-side">
                <h2 className="contact-us__title">Donnez Vie à Vos Ambitions</h2>
                <p className="contact-us__description">
                    Faites le choix d'une expérience digitale unique qui capte l'attention, inspire, et engage durablement vos utilisateurs.                </p>
            </div>
                <div className="contact-us__secondary">
                    <h2 className="contact-us__title--secondary">Rejoignez-nous</h2>
                    <p className="contactus__description">
                        Nous sommes prêts, et vous ?
                    </p>
                    <img className="contact-us__arrow" src={arrow} alt="arrow"/>
                </div>
            </div>
        </section>
    )
}

export default ContactUs