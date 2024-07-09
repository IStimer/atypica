import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ setIsLoading, setIsContentVisible, onTransitionComplete, initialLoad }) => {
    const progressBar = useRef(null);
    const preloader = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (progressBar.current && preloader.current) {
                    gsap.to(progressBar.current, { height: '100%', duration: 1, ease: 'power2.inOut' });
                    gsap.to(preloader.current, {
                        backgroundColor: '$color-dark-grey',
                        duration: 0.7,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            if (preloader.current) {
                                gsap.to(preloader.current, {
                                    width: '97.5vw',
                                    height: '100%',
                                    left: '50%',
                                    y: '50%',
                                    top: 0,
                                    duration: 0.7,
                                    ease: 'power2.inOut',
                                    onComplete: () => {
                                        if (preloader.current) {
                                            onTransitionComplete();
                                            }
                                        if (!initialLoad) {
                                            setIsContentVisible(true);
                                            gsap.to(preloader.current, {
                                                y: '-100%',
                                                duration: 0.5,
                                                ease: 'power2.inOut',
                                                onComplete: () => {
                                                    setIsLoading(false);
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });

        if (progressBar.current) {
            tl.to(progressBar.current, { width: '100%', duration: 0.3, ease: 'power2.inOut' });
        }

        return () => {
            tl.kill();
        };
    }, [setIsLoading, setIsContentVisible, onTransitionComplete, initialLoad]);

    return (
        <div className="preloader" ref={preloader}>
            <div className="progress-bar" ref={progressBar}></div>
        </div>
    );
};

export default PageTransition;
