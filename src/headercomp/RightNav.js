import React from "react";
export function RightNav(){
    return(
        <ul className="right-nav">
         <li className="list-item">
           <span><i class="uil uil-user"></i></span>
           <p>Se Connecter</p>
            <span><i class="uil uil-angle-down"></i></span>
         </li>
         <li className="list-item">
         <span><i class="uil uil-question-circle"></i></span>
           <p>Aide</p>
          </li>
          <li className="list-item">
          <span><i class="uil uil-shopping-cart"></i></span>
           <p>Panier</p>
          </li>
        </ul>
    )
}