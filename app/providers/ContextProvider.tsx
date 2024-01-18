"use client";

import React from "react";
import GlobalStyleProvider from "./GlobalStylesProvider";

interface Props {
    children: React.ReactNode
}

function ContextProvider({ children }: Props) {
    return <GlobalStyleProvider> {children} </GlobalStyleProvider>;

}

export default ContextProvider;

//23:18 in the tutorial