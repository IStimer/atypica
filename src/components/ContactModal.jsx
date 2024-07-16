import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Lenis from '@studio-freight/lenis';
import close from '../assets/svgs/cross.svg';

Modal.setAppElement('#root');

export default function ContactModal({ isOpen, onRequestClose }) {
    const [formData, setFormData] = useState({
        service: [],
        budget: '',
        name: '',
        email: '',
        projectDetails: '',
        startDate: '',
        deadline: '',
    });

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup when the component is unmounted
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    useEffect(() => {
        let lenis;
        if (!isOpen) {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: false,
                mouseMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            const raf = (time) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };

            requestAnimationFrame(raf);
        }

        return () => {
            if (lenis) lenis.destroy();
        };
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
                    ? [...prevData[name], value]
                    : prevData[name].filter((service) => service !== value)
            }));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSendEmail = () => {
        const { service, budget, name, email, projectDetails, startDate, deadline } = formData;
        const subject = encodeURIComponent('Demande de contact');
        const body = encodeURIComponent(
            `Service: ${service.join(', ')}\nBudget: ${budget}\nName: ${name}\nEmail: ${email}\n\nProject Details:\n${projectDetails}\n\nStart Date: ${startDate}\nDeadline: ${deadline}`
        );
        window.location.href = `mailto:bonjour@atypica.digital?subject=${subject}&body=${body}`;
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="modal-overlay"
            contentLabel="Contact Modal"
        >
            <div className="modal__content">
                <div className="modal__header">Travaillons ensemble!</div>
                <form className="modal__form" onSubmit={(e) => {
                    e.preventDefault();
                    handleSendEmail();
                }}>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">01</span>Votre besoin ?</label>
                        <div className="flex modal__form__label--multi">
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--checkbox" type="checkbox" name="service" value="Design"
                                       onChange={handleChange} /> Design
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--checkbox" type="checkbox" name="service"
                                       value="Development" onChange={handleChange} /> Development
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--checkbox" type="checkbox" name="service"
                                       value="2D & 3D Art" onChange={handleChange} /> 2D & 3D Art
                            </label>
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">02</span> Budget alloué au projet</label>
                        <div className="flex modal__form__label--multi">
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="budget" value="moins de €2k"
                                       onChange={handleChange} required /> moins de €2k
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="budget" value="€2k-€5k"
                                       onChange={handleChange} required /> €2k-€5k
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="budget" value="€5k-€10k"
                                       onChange={handleChange} required /> €5k-€10k
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="budget" value="€10k-€30k"
                                       onChange={handleChange} required /> €10k-€30k
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="budget" value="€30k+"
                                       onChange={handleChange} required /> €30k+
                            </label>
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">03</span> Votre nom</label>
                        <div className="modal__form__input--container">
                            <input className="modal__form__input" type="text" name="name" value={formData.name}
                                   onChange={handleChange} required placeholder="Entrer votre nom" />
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">04</span> Votre Email</label>
                        <div className="modal__form__input--container">
                            <input className="modal__form__input" type="email" name="email" value={formData.email}
                                   onChange={handleChange} required placeholder="Entrer votre email" />
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">05</span> Des détails sur le projet</label>
                        <div className="modal__form__input--container">
                            <textarea className="modal__form__textarea" name="projectDetails" value={formData.projectDetails}
                                      onChange={handleChange} required
                                      placeholder="Dîtes-nous en plus sur votre projet"></textarea>
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">06</span> Quand on commence ?</label>
                        <div className="modal__form__input--container">
                            <input className="modal__form__input" type="date" name="startDate" value={formData.startDate}
                                   onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="modal__form__group">
                        <label className="modal__form__label"><span className="modal__form__label--number">07</span> Avez-vous une deadline?</label>
                        <div className="flex modal__form__label--multi">
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="deadline" value="Oui"
                                       onChange={handleChange} required /> Oui
                            </label>
                            <label className="modal__form__input--container">
                                <input className="modal__form__input--radio" type="radio" name="deadline"
                                       value="Non" onChange={handleChange} required /> Non
                            </label>
                        </div>
                    </div>
                    <button className="modal__form__button modal__form__button--submit" type="submit">Envoyer une demande </button>
                </form>
                <button className="modal__form__button modal__form__button--cancel" type="button"
                        onClick={onRequestClose}>
                    <img src={close} alt="close" width="20" />
                </button>
            </div>
        </Modal>
    );
}
