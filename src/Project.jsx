import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import image2 from './img/full2.jpg'
import image3 from './img/full3.jpg'
import image4 from './img/full4.jpg'
import image5 from './img/full5.jpg'
import image6 from './img/6.jpg'
import arrow from "./assets/svgs/arrow.svg"
import {useNavigation} from './utils/NavigationContext'
import SketchComponent from "./components/Sketch.jsx";

const projectData = {
    '1': {
        title: 'Harmony\'Gallery',
        description: 'Ce projet est une exploration artistique ambitieuse visant à intégrer une dimension créative et visuelle dans les plateformes de streaming musical. Conçu comme un projet expérimental et démonstratif, Harmony\'Gallery utilise des technologies avancées pour créer une expérience immersive et interactive qui transcende les limites traditionnelles des plateformes musicales. Ce projet personnel a été développé avec passion, offrant un espace où l\'art rencontre la technologie.',
        spec: 'Three.js, GSAP',
        time: '2 mois',
        type: 'Projet personnel pour le plaisir',
        image: image2
    },
    '2': {
        title: 'Acheterduneuf',
        description: 'Ce projet consistait en la refonte complète d\'un site web ancien, utilisant des technologies obsolètes mais essentielles pour maintenir la base du site existante. Malgré ces contraintes, le défi a été relevé de moderniser l\'interface et d\'introduire de nouvelles fonctionnalités complexes. Il est maintenant en ligne et commercialisé, démontrant notre capacité à innover même avec des limitations techniques.',
        spec: 'Vanilla JS, PHP, Elasticsearch',
        time: '6 mois',
        type: 'Projet professionnel commercialisé',
        image: image4
    },
    '3': {
        title: 'Portail scene',
        description: 'Ce projet est une avancée dans la conception et le développement 3D, combinant modélisation sur Blender et intégration web avec des frameworks modernes tels que Three.js et React Three Fiber. Portail Scene a été réalisé dans le cadre d\'un projet d\'apprentissage intensif, bouclé en une semaine, où chaque détail a été soigneusement pensé pour créer un portail immersif qui repousse les limites du développement 3D sur le web.',
        spec: 'Three.js, Blender, React three fiber',
        time: '1 semaine',
        type: 'Projet d\'apprentissage',
        image: image3
    },
    '4': {
        title: 'Portfolio',
        description: 'Le Portfolio est notre premier projet à avoir vu officiellement le jour. Bien que devenu obsolète avec le temps, il reste un précieux souvenir de notre parcours. Ce projet servait à l\'origine d\'entraînement et de démonstration de projets personnels, utilisant des technologies comme SCSS et GSAP pour animer et structurer l\'expérience utilisateur. Ce vestige du passé, développé sur un mois, reflète les premières étapes de notre aventure dans le développement web.',
        spec: 'SCSS, GSAP',
        time: '1 mois',
        type: 'Premier projet',
        image: image5
    },
    '5': {
        title: 'Quizzos',
        description: 'Quizzos est un projet mobile unique en son genre, avec un design sophistiqué et attrayant inspiré des esthétiques rétro. Développé avec Vanilla JS, Cordova, et SCSS, ce projet a donné vie à une application mobile captivante, conçue pour offrir une expérience utilisateur fluide et engageante. Quizzos a marqué notre première incursion dans le développement mobile, avec une réalisation qui s\'est étalée sur deux mois.',
        spec: 'Vanilla JS, Cordova, SCSS',
        time: '2 mois',
        type: 'Première mobile app',
        image: image6
    }
}

const Project = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {navigate: startTransition} = useNavigation()
    const project = projectData[id]

    if (!project) {
        return <div>Projet non trouvé</div>
    }

    const nextId = (parseInt(id) % Object.keys(projectData).length) + 1
    const nextProject = projectData[nextId]

    const handleNextProject = () => {
        startTransition(`/project/${nextId}`, navigate)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

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
                                    <img className="project-section__arrow" src={arrow} alt="arrow"/>
                                </h2>
                                <p className="project-section__description">
                                    {project.description}
                                </p>
                            </div>
                            <div className="project-section__content--bottom flex">
                                <h2 className="project-section__sub-title">Détails
                                    <img className="project-section__arrow" src={arrow} alt="arrow"/>
                                </h2>
                                <div className="project-section__description">
                                    <p>{project.spec}</p>
                                    <p>{project.time}</p>
                                    <p>tette</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-section__content--right main-side">
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-1`} textureImage={project.image}/>
                            </div>
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-2`} textureImage={project.image}/>
                            </div>
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-3`} textureImage={project.image}/>
                            </div>
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-4`} textureImage={project.image}/>
                            </div>
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-5`} textureImage={project.image}/>
                            </div>
                            <div className="project-section--wrapper">
                                <SketchComponent key={`${id}-6`} textureImage={project.image}/>
                            </div>
                        </div>
                    </div>
                    <div className="project-section__next-project">
                        <h2 className="project-section__next-project__title">Projet suivant</h2>
                        <h3 className="project-section__next-project--project-name">
                            <a href="#!" onClick={handleNextProject}>{nextProject.title}</a>
                        </h3>
                    </div>
                </div>
                <Footer/>
            </Wrapper>
        </>
    )
}

export default Project
