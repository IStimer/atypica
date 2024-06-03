import React, { createContext, useContext, useState, useCallback } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [nextPath, setNextPath] = useState(null);

    const navigate = useCallback((path, navigateFunc) => {
        setNextPath(path);
        setIsTransitioning(true);

        setTimeout(() => {
            navigateFunc(path);
            setIsTransitioning(false);
        }, 1500); // Temps pour l'animation avant de changer de page
    }, []);

    return (
        <NavigationContext.Provider value={{ isTransitioning, nextPath, navigate }}>
            {children}
        </NavigationContext.Provider>
    );
};
