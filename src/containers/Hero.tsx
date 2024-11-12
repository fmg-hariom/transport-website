"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button, Wrapper } from "@/components";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      id: "3",
      img: "https://www.car24cargo.com/wp-content/uploads/2019/11/car_transportation.jpg",
    },
    {
      id: "4",
      img: "https://commercialvehicle.in/wp-content/uploads/2018/12/IMG_5585-copy.jpg",
    },
    {
      id: "5",
      img: "https://ompackersindia.com/assets/img/car-carrier.jpg",
    },
    {
      id: "6",
      img: "https://www.shreebalajipacker.com/wp-content/uploads/2022/10/Screenshot_104.png",
    },
    {
      id: "1",
      img: "background.jpg",
    },
    {
      id: "2",
      img: "background1.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: !isMobile,
  };

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0 "
    >
      <div className="w-full">
        <Slider {...settings}>
          {data.map((d) => (
            <div id="slideImage" key={d.id}>
              <img
                src={d.img}
                alt={`Slide ${d.id}`}
                className="w-full object-cover h-[700px]" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Hero;
