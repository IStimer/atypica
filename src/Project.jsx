import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import image2 from './img/full2.jpg';
import image3 from './img/full3.jpg';
import image4 from './img/full4.jpg';
import image5 from './img/full5.jpg';
import image6 from './img/6.jpg';
import arrow from "./assets/svgs/arrow.svg";
import { useNavigation } from './utils/NavigationContext';

const projectData = {
    '1': {title: 'Harmony\'Gallery', description: 'Projet à vocation expérimentale et démonstrative afin de donner aux plateformes de streaming musicale, une dimension artistique', image: image2},
    '2': {title: 'Acheterduneuf', description: 'Refonte d\'un site avec des technologies très ancienne, contraint de rester sur cette base pour développer des fonctionnalités et un design complèxe', image: image4},
    '3': {title: 'Portail scene', description: 'Approfondissement de la conception et du développement 3D, modélisation sur logiciel avec intégration web', image: image3},
    '4': {title: 'Portfolio', description: 'Premier projet ayant officiellement vu le jour, entraînement et démonstrations projets personnel', image: image5},
    '5': {title: 'Quizzos', description: 'Projet mobile avec un design poussé et attractif, avec des inspirations rétros', image: image6}
};

const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { navigate: startTransition } = useNavigation();
    const project = projectData[id];

    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    const nextId = (parseInt(id) % Object.keys(projectData).length) + 1;
    const nextProject = projectData[nextId];

    const handleNextProject = () => {
        startTransition(`/project/${nextId}`, navigate);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <>
            <Wrapper>
                <Header />
                <div className="project-section">
                    <div className="project-section__title flex">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="project-section__content flex">
                        <div className="project-section__content--left secondary-side flex">
                            <div className="project-section__content--top flex">
                                <h2 className="project-section__sub-title">Aperçu
                                    <img className="projet-section__arrow" src={arrow} alt="arrow" />
                                </h2>
                                <p className="project-section__description">
                                    {project.description}
                                </p>
                            </div>
                            <div className="project-section__content--bottom flex">
                                <h2 className="project-section__sub-title">Détails
                                    <img className="projet-section__arrow" src={arrow} alt="arrow" />
                                </h2>
                                <div className="project-section__description">
                                    <p>toto</p>
                                    <p>tete</p>
                                    <p>tette</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-section__content--right main-side">
                            <img className="project-section__img" src={project.image} alt={project.title} />
                            <img className="project-section__img" src={project.image} alt={project.title} />
                            <img className="project-section__img" src={project.image} alt={project.title} />
                            <img className="project-section__img" src={project.image} alt={project.title} />
                            <img className="project-section__img" src={project.image} alt={project.title} />
                            <img className="project-section__img" src={project.image} alt={project.title} />
                        </div>
                    </div>
                    <div className="project-section__next-project">
                        <h2 className="project-section__next-project__title">Projet suivant</h2>
                        <h3 className="project-section__next-project--project-name">
                            <a href="#!" onClick={handleNextProject}>{nextProject.title}</a>
                        </h3>
                    </div>
                </div>
                <Footer />
            </Wrapper>
        </>
    );
};

export default Project;
