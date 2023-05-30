import React from "react";
import { BlackFriday } from "./back-friday";
import {Navbar} from "../headercomp/navbar";
export function Header({children ,className}){
    return(
        <header className={className}>
            <BlackFriday />
            <Navbar />
        </header>
    )
}