import React ,{ useEffect, useRef, useState}from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";

export function Carousel(){
    let itself = useRef();
    let [count, setCount] = useState(0);
    let d =[one,two,three,four];
    function animate(){
        itself.current.style.transform=`translateX(calc(-100% * ${count})`;
    }
     useEffect(()=>{
        window.addEventListener("click",()=>{
            setCount(count = count ++);
        })
     })
     useEffect(()=>{
         animate();
    },[count])
    return(
        <div className="carousel" >
            {d.map((el,index)=>(
            <img src={el} alt="img" key={index} ref={itself}/>
            ))}
        </div>
    )
}