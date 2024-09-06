import React, { createContext, useContext, useState, useRef, useCallback } from 'react'

const NavigationContext = createContext()

export const useNavigation = () => useContext(NavigationContext)

export const NavigationProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [nextPath, setNextPath] = useState(null)
    const navigateCallback = useRef(null)

    const navigate = useCallback((path, navigateFunc) => {
        if (path !== nextPath) {
            setNextPath(path)
            navigateCallback.current = navigateFunc
            setIsTransitioning(true)
        }
    }, [nextPath])

    const handleTransitionComplete = useCallback(() => {
        if (navigateCallback.current) {
            navigateCallback.current(nextPath)
            setIsTransitioning(false)
            setNextPath(null)
            navigateCallback.current = null
        }
    }, [nextPath])

    return (
        <NavigationContext.Provider value={{ isTransitioning, nextPath, navigate, handleTransitionComplete }}>
            {children}
        </NavigationContext.Provider>
    )
}
