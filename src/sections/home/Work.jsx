import React from 'react';
import mainLogo from "../../assets/svgs/main-logo-atypica-white.svg";


const Work = () => {
    return (
        <section className="work-section">
            <div className="work-section__playground">
                <img className="work-section__logo" src={mainLogo} alt="Logo atypica"/>
                <div className="work-section__title">Work</div>
            </div>
        </section>
    );
}

export default Work;