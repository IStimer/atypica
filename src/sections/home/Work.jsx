import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { useNavigate } from 'react-router-dom';
import image1 from '../../img/full1.jpg';
import image2 from '../../img/full2.jpg';
import image3 from '../../img/full3.jpg';
import image4 from '../../img/full4.jpg';
import image5 from '../../img/full5.jpg';
import image6 from '../../img/full6.jpg';
import image7 from '../../img/full7.jpg';
import image8 from '../../img/full8.jpg';
import image9 from '../../img/full9.jpg';
import image10 from '../../img/full1.jpg';
import image11 from '../../img/full2.jpg';
import image12 from '../../img/full3.jpg';
import image13 from '../../img/full4.jpg';
import image14 from '../../img/full5.jpg';
import image15 from '../../img/full6.jpg';
import image16 from '../../img/full7.jpg';
import image17 from '../../img/full8.jpg';
import image18 from '../../img/full9.jpg';
import image19 from '../../img/full1.jpg';
import arrow from "../../assets/svgs/arrow.svg";

const images = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19
];

const Work = () => {
    const navigate = useNavigate();

    useEffect(() => {
        imagesLoaded(document.querySelector('.work-section__playground'), { background: true });
    }, []);

    const handleImageClick = (image) => {
        navigate('/project');
    };

    const renderImages = () => {
        return images.map((image, index) => (
            <div
                key={index}
                className="image-container"
                onClick={() => handleImageClick(image)}
            >
                <img src={image} alt={`work ${index + 1}`} />
                <div className="image-caption">
                    <span className="image-title">Title {index + 1}</span>
                    <span className="image-year">{2023 + (index % 2)}</span>
                </div>
            </div>
        ));
    };

    return (
        <section className="work-section">
            <div className="work-section__content flex">
                <div className="main-side flex">
                    <h2 className="work-section__title">Playground
                        <img className="work-section__arrow" src={arrow} alt="arrow" />
                    </h2>
                </div>
                <p className="work-section__description">
                    Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des émotions.
                    Nous tentons de nous démarquer, dans une réalité contemporaine saturée de solutions standardisées.
                    Nous vous invitons à nous rejoindre
                    pour créer quelque chose de vraiment unique. </p>
            </div>
            <div className="work-section__playground">
                {renderImages()}
            </div>
        </section>
    );
};

export default Work;
