import React from "react";
import { Navigation } from "./navigation";
import { Carousel } from "./carousel";
import {Aide} from "./Aide";

export function Main(){
    return(
        <div className="container">
           <main className="main">
            <Navigation />
            <Carousel />
            <Aide />
           </main>
       </div>
    )
}