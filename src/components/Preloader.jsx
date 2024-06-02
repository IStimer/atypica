import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ setIsLoading, setIsContentVisible }) => {
    const [progress, setProgress] = useState(0);
    const progressBar = useRef(null);
    const progressText = useRef(null);
    const preloader = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onUpdate: () => setProgress(tl.progress() * 100),
            onComplete: () => {
                gsap.to(progressBar.current, { height: '100%', duration: 1, ease: 'power2.inOut' });
                gsap.to(progressText.current, { opacity: 0, duration: 0.5 });
                gsap.to(preloader.current, {
                    backgroundColor: '$color-dark-grey',
                    duration: 0.7,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        gsap.to(preloader.current, {
                            width: '97.5vw',
                            height: '100%',
                            left: '1.25vw',
                            top: 0,
                            duration: 0.7,
                            ease: 'power2.inOut',
                            onComplete: () => {
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
                        });
                    }
                });
            }
        });

        tl.to(progressBar.current, { width: '100%', duration: 0, ease: 'power2.inOut' });

        return () => {
            tl.kill();
        };
    }, [setIsLoading, setIsContentVisible]);

    return (
        <div className="preloader" ref={preloader}>
            <div className="progress-bar" ref={progressBar}></div>
            <div className="progress-text" ref={progressText}>{Math.round(progress)}%</div>
        </div>
    );
};

export default Preloader;
