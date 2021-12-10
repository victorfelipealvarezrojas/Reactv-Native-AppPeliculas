import React from 'react';
import { useState } from "react";
import { createContext } from "react";

interface ImageColor {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColor;
    prevColors: ImageColor,
    setMainColors: (colors: ImageColor) => void,
    setMainPrevColors: (colors: ImageColor) => void,
}


export const GradientContext = createContext({} as ContextProps); //finalmente es quien almacena los valores y por el accedo desde los hijos

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<ImageColor>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const setMainColors = (colors: ImageColor) => {
        console.log("colors",{colors})
        setColors(colors);
    }

    const setMainPrevColors = (colors: ImageColor) => {
        setPrevColors(colors);
    }


    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setMainPrevColors

        }}>
            {children}
        </GradientContext.Provider>
    )
}