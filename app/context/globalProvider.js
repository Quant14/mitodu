"use client"

import react from "react"
import React, {createContext, useState, useContext} from react

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

export const GlobalProvider = ({children}) => {
    const [globalState, setGlobalState] = useState ({})

    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme= themes[selectedTheme];

    return (
        <GlobalContext.Provider value={{
                theme, 
            }}>
            <GlobalUpdateContext.Provider value={setGlobalState}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    )
}