import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

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
        window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal"
            overlayClassName="modal-overlay"
            contentLabel="Contact Modal"
        >
            <div className="modal__header">Travaillons ensemble!</div>
            <form className="modal__form" onSubmit={(e) => {
                e.preventDefault();
                handleSendEmail();
            }}>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">01</span> Que on
                        peut faire pour vous ?</label>
                    <div className="flex modal__form__label--multi">
                        <input className="modal__form__input--checkbox" type="checkbox" name="service" value="Design"
                               onChange={handleChange}/> Design
                        <input className="modal__form__input--checkbox" type="checkbox" name="service"
                               value="Development" onChange={handleChange}/> Development
                        <input className="modal__form__input--checkbox" type="checkbox" name="service"
                               value="2D & 3D Art" onChange={handleChange}/> 2D & 3D Art
                    </div>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">02</span> Budget
                        alloué au projet</label>
                    <div className="flex modal__form__label--multi">
                        <input className="modal__form__input--radio" type="radio" name="budget" value="moins de 10k"
                               onChange={handleChange} required/> moins de 10k
                        <input className="modal__form__input--radio" type="radio" name="budget" value="€10k-€20k"
                               onChange={handleChange} required/> €10k-€20k
                        <input className="modal__form__input--radio" type="radio" name="budget" value="€20k-€50k"
                               onChange={handleChange} required/> €20k-€50k
                        <input className="modal__form__input--radio" type="radio" name="budget" value="€50k-€100k"
                               onChange={handleChange} required/> €50k-€100k
                        <input className="modal__form__input--radio" type="radio" name="budget" value="€100k+"
                               onChange={handleChange} required/> €100k+
                    </div>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">03</span> Votre
                        nom</label>
                    <input className="modal__form__input" type="text" name="name" value={formData.name}
                           onChange={handleChange} required placeholder="Entrer votre name"/>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">04</span> Votre
                        Email</label>
                    <input className="modal__form__input" type="email" name="email" value={formData.email}
                           onChange={handleChange} required placeholder="Entrer votre email"/>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">05</span> Des
                        détails sur le projet</label>
                    <textarea className="modal__form__textarea" name="projectDetails" value={formData.projectDetails}
                              onChange={handleChange} required
                              placeholder="Dîtes-nous en plus sur votre projet"></textarea>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span className="modal__form__label--number">06</span> Quand
                        on commence ?</label>
                    <input className="modal__form__input" type="date" name="startDate" value={formData.startDate}
                           onChange={handleChange} required/>
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label"><span
                        className="modal__form__label--number">07</span> Avez-vous une deadline?</label>
                    <div className="flex modal__form__label--multi">
                        <input className="modal__form__input--radio" type="radio" name="deadline" value="Oui"
                               onChange={handleChange} required/> Oui
                        <input className="modal__form__input--radio" type="radio" name="deadline"
                               value="Non, je ne suis pas dans l'urgence" onChange={handleChange} required/> Non, je ne
                        suis pas dans l'urgence
                    </div>
                </div>
                <button className="modal__form__button modal__form__button--submit" type="submit">Envoyer une demande </button>
            </form>
            <button className="modal__form__button modal__form__button--cancel" type="button"
                    onClick={onRequestClose}>x
            </button>
        </Modal>
    );
}
