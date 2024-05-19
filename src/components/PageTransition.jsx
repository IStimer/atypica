import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Transition } from 'react-transition-group';

const PageTransition = ({ children, in: inProp }) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (inProp) {
            gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        } else {
            gsap.to(nodeRef.current, { opacity: 1, duration: 0.5 });
        }
    }, [inProp]);

    return (
        <Transition in={inProp} timeout={500} nodeRef={nodeRef}>
            {state => (
                <div ref={nodeRef} className={`page-transition fade-${state}`}>
                    {children}
                </div>
            )}
        </Transition>
    );
};

export default PageTransition;
