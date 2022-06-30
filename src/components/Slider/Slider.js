import React, { useEffect, useState, } from "react";



export default function Slider() {

    const [slide, setSlide] = useState(2);
    const imagenes = [
        {
            id: 0,
            src: "./imgs/orange.jpg"
        },
        {
            id: 1,
            src: "./imgs/pedales.png"
        },
        {
            id: 2,
            src: "./imgs/fender.jpg"
        }
    ]



    useEffect(() => {
        setTimeout(() => {

            if (slide <= 0) {
                setSlide(2)
            } else
                setSlide(slide - 1)
        }, 5000)
    }, [slide])



    return (
        <div className="sliderContainer">
            <img src={imagenes[slide].src} alt="" className="imagen" />
        </div >
    )
}