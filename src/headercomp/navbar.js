import React from "react";
import logo from "../assets/logo.jpg";
import { RightNav } from "./RightNav";
export function Navbar(){
    return(
        <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <img alt="logo" src={logo}/>
          </div>
          <div className="navbar-search">
              <form className="search-input">
                <span><i class="uil uil-search"></i></span>
                <input type="text" placeholder={
                  'chercher un produit, une marque ou une Categorie'
                } name="search"/>
              </form>
              <button className="btn btn-orange">RECHERCHER</button>
          </div>
          <RightNav />
        </nav>
      </div>
    )
}