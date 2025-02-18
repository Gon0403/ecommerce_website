import React from 'react'
import './slideImage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/images/slider-1.png'
import slider2 from '../../assets/images/slider-2.png'
const fadeImages = [
    {
        url: slider1,
        caption: "Dont't miss amazing grocery deals",
        subCaption: "Sign up for daily newsletter"
    },
    {
        url: slider2,
        caption: 'Fresh Vegetables Big discount',
        subCaption: "Save up to 50% off on you first order"
    },

];
const SlideImage = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        pauseOnHover:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed: 2000,
        accessibility:true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {fadeImages.map((item, index) => {
                    return (
                        <div className='slider-item'>
                            <img alt={`slider-${index}`} src={item.url} />
                            <h2>{item.caption}</h2>
                            <p>{item.subCaption}</p>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default SlideImage