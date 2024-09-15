import React, { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap"
import { useNavigate } from 'react-router-dom'
import { useNavigation } from '../../utils/NavigationContext'
import image2 from '../../img/full2.jpg'
import image3 from '../../img/full3.jpg'
import image4 from '../../img/full4.jpg'
import image5 from '../../img/full5.jpg'
import arrow from "../../assets/svgs/arrow.svg"

const Work = () => {
    const hoverImageRef = useRef(null)
    const navigate = useNavigate()
    const { navigate: startTransition } = useNavigation()
    const [isHovered, setIsHovered] = useState(false)
    const [isImageClicked, setIsImageClicked] = useState(false)
    const sectionRef = useRef(null)
    const [isTouchOrSmallDevice, setIsTouchOrSmallDevice] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const checkDeviceType = () => {
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
            const isSmallScreen = window.innerWidth < 1200
            setIsTouchOrSmallDevice(isTouchDevice || isSmallScreen)
        }

        checkDeviceType()
        window.addEventListener('resize', checkDeviceType)
        return () => {
            window.removeEventListener('resize', checkDeviceType)
        }
    }, [])

    useEffect(() => {
        const hoverImage = hoverImageRef.current
        if (hoverImage) {
            hoverImage.style.display = 'none'
        }
    }, [isTouchOrSmallDevice])

    useEffect(() => {
        window.addEventListener('scroll', updateImagePosition)
        return () => {
            window.removeEventListener('scroll', updateImagePosition)
        }
    }, [])

    const handleImageClick = (id, imageSrc, e) => {
        if (isAnimating) return
        const hoverImage = hoverImageRef.current
        setIsImageClicked(true)
        setIsAnimating(true)

        if (!isTouchOrSmallDevice) {
            gsap.to(hoverImage, {
                top: '50%',
                left: '50%',
                width: '72vw',
                height: '65vh',
                xPercent: -50,
                yPercent: -50,
                ease: 'power3.inOut',
                duration: 1,
                onComplete: () => {
                    startTransition(`/project/${id}`, navigate)
                }
            })
        } else {
            startTransition(`/project/${id}`, navigate)
        }
    }

    const handleMouseEnter = (imageSrc, e) => {
        if (isTouchOrSmallDevice || isAnimating) return
        const hoverImage = hoverImageRef.current
        hoverImage.src = imageSrc
        hoverImage.style.display = 'block'
        setIsHovered(true)
        updateImagePosition()
    }

    const handleMouseMove = () => {
        if (isHovered && !isTouchOrSmallDevice && !isAnimating) {
            updateImagePosition()
        }
    }

    const updateImagePosition = () => {
        if (isTouchOrSmallDevice) return

        const hoverImage = hoverImageRef.current
        const section = sectionRef.current
        const { bottom: sectionBottom, right: sectionRight } = section.getBoundingClientRect()
        const { width: imageWidth, height: imageHeight } = hoverImage.getBoundingClientRect()
        const { innerHeight: viewportHeight, innerWidth: viewportWidth } = window

        const horizontalMargin = viewportWidth * 0.025
        const verticalMargin = viewportHeight * 0.05

        let left = viewportWidth - imageWidth - horizontalMargin
        let top = viewportHeight - imageHeight - verticalMargin

        if (sectionBottom <= viewportHeight && sectionBottom >= 0) {
            top = Math.min(sectionBottom - imageHeight - verticalMargin, top)
        }

        Object.assign(hoverImage.style, { left: `${left}px`, top: `${top}px` })
    }

    const handleMouseLeave = () => {
        if (isTouchOrSmallDevice || isAnimating) return
        const hoverImage = hoverImageRef.current
        if (!isImageClicked) {
            setIsHovered(false)
            hoverImage.style.display = 'none'
        }
    }

    return (
        <>
            <section className="work" ref={sectionRef} onMouseMove={handleMouseMove}>
                <div className="work__content flex">
                    <div className="main-side flex">
                        <h2 className="work__title">Playground
                            <img className="work__arrow" src={arrow} alt="arrow"/>
                        </h2>
                    </div>
                    <p className="work__description">
                        Nous osons être différents : expérimenter, innover, donner vie aux idées et éveiller des
                        émotions.
                        Nous tentons de nous démarquer, dans une réalité contemporaine saturée de solutions
                        standardisées.
                        Nous vous invitons à nous rejoindre
                        pour créer quelque chose de vraiment unique.
                    </p>
                </div>
                <div className="work__playground">
                    <ul className="work__playground-container">
                        <li className="work__playground-item flex">
                            <a href="#!"
                               className="work__playground-link"
                               onClick={(e) => handleImageClick(1, image2, e)}
                               onMouseEnter={(e) => handleMouseEnter(image2, e)}
                               onMouseLeave={handleMouseLeave}>
                                <div className="work__playground-row flex">
                                    <div className="work__playground-title-wrapper flex">
                                        <div className="work__playground-arrow">→</div>
                                        <span className="work__playground-title">Harmony'Gallery</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="work__playground-item flex">
                            <a href="#!"
                               className="work__playground-link"
                               onClick={(e) => handleImageClick(3, image4, e)}
                               onMouseEnter={(e) => handleMouseEnter(image4, e)}
                               onMouseLeave={handleMouseLeave}>
                                <div className="work__playground-row flex">
                                    <div className="work__playground-title-wrapper flex">
                                        <div className="work__playground-arrow">→</div>
                                        <span className="work__playground-title">Acheterduneuf</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="work__playground-item flex">
                            <a href="#!"
                               className="work__playground-link"
                               onClick={(e) => handleImageClick(2, image3, e)}
                               onMouseEnter={(e) => handleMouseEnter(image3, e)}
                               onMouseLeave={handleMouseLeave}>
                                <div className="work__playground-row flex">
                                    <div className="work__playground-title-wrapper flex">
                                        <div className="work__playground-arrow">→</div>
                                        <span className="work__playground-title">Portail scene</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="work__playground-item flex">
                            <a href="#!"
                               className="work__playground-link"
                               onClick={(e) => handleImageClick(4, image5, e)}
                               onMouseEnter={(e) => handleMouseEnter(image5, e)}
                               onMouseLeave={handleMouseLeave}>
                                <div className="work__playground-row flex">
                                    <div className="work__playground-title-wrapper flex">
                                        <div className="work__playground-arrow">→</div>
                                        <span className="work__playground-title">Portfolio</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="work__playground-item flex">
                            <a href="#!"
                               className="work__playground-link"
                               onClick={(e) => handleImageClick(5, image3, e)}
                               onMouseEnter={(e) => handleMouseEnter(image3, e)}
                               onMouseLeave={handleMouseLeave}>
                                <div className="work__playground-row flex">
                                    <div className="work__playground-title-wrapper flex">
                                        <div className="work__playground-arrow">→</div>
                                        <span className="work__playground-title">quizzos</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <img className="image-hover-preview" ref={hoverImageRef} alt="Preview"/>
            </section>
        </>
    )
}

export default Work
