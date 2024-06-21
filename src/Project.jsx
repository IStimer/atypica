import React from 'react';
import {useParams} from 'react-router-dom';
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import image2 from './img/full2.jpg';
import image3 from './img/full3.jpg';
import image4 from './img/full4.jpg';
import image5 from './img/full5.jpg';
import image6 from './img/6.jpg';
import img from "./img/full1.jpg";
import arrow from "./assets/svgs/arrow.svg";

const projectData = {
    '1': {title: 'Spotify remake', description: 'Description du projet Spotify remake', image: image2},
    '2': {title: 'Shop for Fox', description: 'Description du projet Shop for Fox', image: image3},
    '3': {title: 'Immobilier neuf', description: 'Description du projet Immobilier neuf', image: image4},
    '4': {title: 'Portfolio perso', description: 'Description du projet Portfolio perso', image: image5},
    '5': {title: 'Play Quizzos', description: 'Description du projet Play Quizzos', image: image6}
};

const Project = () => {
    const {id} = useParams();
    const project = projectData[id];

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <>
            <Wrapper>
                <Header/>
                <div className="project-section">
                    <div className="project-section__title flex">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="project-section__content flex">
                        <div className="project-section__content--left secondary-side flex">
                            <div className="project-section__content--top flex">
                            <h2 className="project-section__sub-title">Aperçu
                                <img className="projet-section__arrow" src={arrow} alt="arrow"/>
                            </h2>
                            <p className="project-section__description">
                            Notre mission est de créer des œuvres poussées, belles et exceptionnelles.
                                    Chaque projet est traité avec le plus grand soin et une attention méticuleuse aux détails.
                                    Notre équipe passionnée et innovante travaille sans relâche pour offrir des solutions uniques et sur mesure.
                                    Nous nous engageons à respecter les délais, à communiquer de manière transparente et à assurer la satisfaction de nos clients à chaque étape.
                                    Atypica, c'est l'atelier où chaque idée devient une réalité.
                                </p>
                            </div>
                            <div className="project-section__content--bottom">
                                <h2 className="project-section__sub-title">Aperçu
                                    <img className="projet-section__arrow" src  ={arrow} alt="arrow"/>
                                </h2>
                                <p className="project-section__description">
                                    Notre mission est de créer des œuvres poussées, belles et exceptionnelles.
                                    Chaque projet est traité avec le plus grand soin et une attention méticuleuse aux détails.
                                    Notre équipe passionnée et innovante travaille sans relâche pour offrir des solutions uniques et sur mesure.
                                    Nous nous engageons à respecter les délais, à communiquer de manière transparente et à assurer la satisfaction de nos clients à chaque étape.
                                    Atypica, c'est l'atelier où chaque idée devient une réalité.
                                </p>
                            </div>
                        </div>
                        <div className="project-section__content--right main-side">
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                            <img className="project-section__img" src={project.image} alt={project.title}/>
                        </div>
                    </div>
                </div>

                <p>{project.description}</p>
                <Footer/>
            </Wrapper>
        </>
    );
};

export default Project;
