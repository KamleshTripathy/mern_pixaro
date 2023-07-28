import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
//import Slider from "react-slick";
import DealCard from "./top_dele_card";

export default function DealCarousel({data}) {
    /* var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 3,
        cssEase: "linear",
        nextArrow:false,
        prevArrow: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 776,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 595,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 475,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
        ]
    }; */
    return (
<div className="deal_cerosel" Style={"margin: auto;display:flex;justfy-content:space-between;width: 95.5%;padding:2rem 0;gap:5px"} >
      {/* <Slider {...settings}> */}
    
      {data && data .map(el=>(<DealCard dimage={el.image} dname={el.name} dprice={el.price} rating={el.rating} reviews={el.reviews}/>))}
   
      {/* </Slider> */}
        </div>
    );
  }