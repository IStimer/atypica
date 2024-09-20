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
import SketchComponent from "./components/Sketch.jsx"

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

const titleToSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const findIdBySlug = (slug) => {
    return Object.entries(projectData).find(([id, project]) =>
        titleToSlug(project.title) === slug
    )?.[0];
}

const getNextSlug = (currentId) => {
    const nextId = (parseInt(currentId) % Object.keys(projectData).length) + 1;
    return titleToSlug(projectData[nextId.toString()].title);
}

const Project = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { navigate: startTransition } = useNavigation()
    const [currentProject, setCurrentProject] = useState(null)
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        const id = findIdBySlug(slug)
        if (id && projectData[id]) {
            setCurrentProject(projectData[id])
            setCurrentId(id)
            window.scrollTo(0, 0)
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    if (!currentProject) {
        return null
    }

    const nextSlug = getNextSlug(currentId)

    const handleNextProject = (e) => {
        e.preventDefault();
        startTransition(`/projet/${nextSlug}`, navigate);
    }

    return (
        <Wrapper key={slug}>
            <Header/>
            <div className="project-section">
                <div className="project-section__title flex">
                    <h1>{currentProject.title}</h1>
                </div>
                <div className="project-section__content flex">
                    <div className="project-section__content--left secondary-side flex">
                        <div className="project-section__content--top flex">
                            <h2 className="project-section__sub-title">Aperçu
                                <img className="project-section__arrow" src={arrow} alt="arrow"/>
                            </h2>
                            <p className="project-section__description">
                                {currentProject.description}
                            </p>
                        </div>
                        <div className="project-section__content--bottom flex">
                            <h2 className="project-section__sub-title">Détails
                                <img className="project-section__arrow" src={arrow} alt="arrow"/>
                            </h2>
                            <div className="project-section__description">
                                <p>{currentProject.spec}</p>
                                <p>{currentProject.time}</p>
                                <p>{currentProject.type}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-section__content--right main-side">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={`${slug}-${index}`} className="project-section--wrapper">
                                <SketchComponent textureImage={currentProject.image}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="project-section__next-project">
                    <h2 className="project-section__next-project__title">Projet suivant</h2>
                    <h3 className="project-section__next-project--project-name">
                        <a onClick={handleNextProject}>
                            {projectData[(parseInt(currentId) % Object.keys(projectData).length) + 1].title}
                        </a>
                    </h3>
                </div>
            </div>
            <Footer/>
        </Wrapper>
    )
}

export default Project