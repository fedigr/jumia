import React from "react";
import { Header } from "../headercomp/header";
import { Main } from "../maincomp/main";
export function Home(){
    return(
        <>
        <Header className="header" />
        <Main />
        </>
    )
}