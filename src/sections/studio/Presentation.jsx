import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from 'split-type';
import img from "../../img/full1.jpg";
import image from '../../img/full6.jpg';
import image2 from '../../img/full9.jpg';
import image3 from '../../img/full7.jpg';
import image4 from '../../img/10.jpg';
import flag from '../../assets/svgs/flag-basque.svg';

const Presentation = () => {
    const titleRefs = useRef([]);
    const textRefs = useRef([]);
    const sectionsRef = useRef([]);

    useLayoutEffect(() => {
        const splitText = (element) => {
            if (element) {
                const chars = element.innerText.split('');
                element.innerHTML = chars.map(char => `<span class="char">${char}</span>`).join('');
            }
        };

        const splitTextLines = (element) => {
            if (element) {
                new SplitType(element, { types: 'lines' });
                gsap.fromTo(
                    element.querySelectorAll('.line'),
                    { opacity: 0, y: 5 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: {
                            each: 0.1,
                            overlap: 0.1
                        },
                        duration: 0.1,
                        ease: 'power2.in'
                    }
                );
            }
        };

        titleRefs.current.forEach(title => title && splitText(title));
        textRefs.current.forEach(text => text && splitTextLines(text));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.5 });
                        observer.unobserve(entry.target);
                        const description = entry.target.querySelector('.presentation-section__description');
                        if (description) {
                            splitTextLines(description);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach(section => {
            if (section) {
                gsap.set(section, { opacity: 0, y: 20 });
                observer.observe(section);
            }
        });

        titleRefs.current.forEach(title => {
            if (title) {
                const chars = title.querySelectorAll('.char');
                if (chars.length > 0) {
                    gsap.fromTo(chars,
                        { opacity: 0, position: 'relative', bottom: -30 },
                        { opacity: 1, bottom: 0, stagger: 0.05, duration: 0.5, ease: "power2.out", delay: 0.2 }
                    );
                }
            }
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section && section instanceof Element) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <section className="presentation-section">
            <div className="presentation-section__title flex">
                <h1 ref={el => titleRefs.current[0] = el} className="main-side">Studio</h1>
                <h2 ref={el => titleRefs.current[1] = el} className="secondary-side">©2024</h2>
            </div>
            <div ref={el => sectionsRef.current.push(el)} className="presentation-section__content flex">
                <h2 className="presentation-section__sub-title main-side">A notre propos</h2>
                <div className="secondary-side">
                    <p ref={el => textRefs.current.push(el)} className="presentation-section__description">
                        Notre mission est de créer des œuvres poussées, belles et exceptionnelles.
                        Chaque projet est traité avec le plus grand soin et une attention méticuleuse aux détails.
                        Notre équipe passionnée et innovante travaille sans relâche pour offrir des solutions uniques et sur mesure.
                        Nous nous engageons à respecter les délais, à communiquer de manière transparente et à assurer la satisfaction de nos clients à chaque étape.
                        Atypica, c'est l'atelier où chaque idée devient une réalité.
                    </p>
                    <img src={image} alt="Visuel de l'équipe" className="presentation-section__img" />
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
            <div ref={el => sectionsRef.current.push(el)} className="presentation-section__content--you flex">
                <div>
                    Notre collab
                </div>
                <div className="main-side">
                    <p ref={el => textRefs.current.push(el)} className="presentation-section__description">
                        Avec Atypica, les personnes sont placées avant les profits. Notre approche consiste à prendre
                        soin
                        de nos employés, de nos clients et de notre communauté. Pour y parvenir, nous nous concentrons
                        sur la fourniture de produits et services de haute qualité tout en étant transparents sur nos
                        pratiques commerciales. Nous accordons également une grande importance aux retours de nos
                        clients et répondons rapidement à leurs préoccupations. Nous reconnaissons l'importance des
                        entreprises pour la croissance économique, mais jamais au détriment de la santé, de la sécurité
                        et de la dignité des individus.
                    </p>
                    <img src={image2} alt="Visuel de l'équipe" className="presentation-section__img" />
                </div>
            </div>
            <div ref={el => sectionsRef.current.push(el)} className="presentation-section__content--manifest flex">
                <h2 className="presentation-section__sub-title--manifest">Manifeste</h2>
                <div>
                    <p ref={el => textRefs.current.push(el)} className="presentation-section__description presentation-section__description--manifest">
                        Nous croyons en la puissance de la créativité et de l'innovation pour changer le monde.
                        Nous croyons en la collaboration et en l'échange d'idées pour créer des solutions uniques. Nous
                        croyons en la transparence et en l'honnêteté pour établir des relations durables. Nous croyons en la
                        passion et en l'engagement pour réaliser des projets exceptionnels. Nous croyons en la qualité et en
                        l'excellence pour offrir des résultats exceptionnels. Nous croyons en l'atypique pour créer des
                        expériences mémorables.
                    </p>
                    <img src={image3} alt="Visuel de l'équipe" className="presentation-section__img"/>
                </div>
            </div>
            <div ref={el => sectionsRef.current.push(el)} className="presentation-section__content--team flex main-side">
                <div>Notre équipe</div>
                <div className="main-side">
                    <p ref={el => textRefs.current.push(el)} className="presentation-section__description presentation-section__description--team">
                        Designer et développeur mettent leur expertise au service de votre projet, chaque membre de
                        l'équipe est passionné dans son domaine et s'engage à fournir des solutions innovantes et
                        performantes.
                    </p>
                    <img src={image4} alt="Visuel de l'équipe" className="presentation-section__img" />
                </div>
            </div>
            <div ref={el => sectionsRef.current.push(el)} className="presentation-section__content--secondary main-side">
                <div className="presentation-section__sub-title--secondary flex">Produit à Bayonne
                    <img src={flag} alt="Drapeau basque" className="flag" />
                </div>
            </div>
        </section>
    )
}

export default Presentation;
