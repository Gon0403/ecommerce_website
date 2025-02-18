import React from 'react'
import './FeaturedCategories.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import featuredBanner1 from "../../assets/images/featured-banner1.png"
import featuredBanner2 from "../../assets/images/featured-banner2.png"
import featuredBanner3 from "../../assets/images/featured-banner3.png"
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";


const backgroundColor = [
  "#f4f6fa",
  "#fffceb",
  "#ECFFEC",
  "#feefea",
  "#fff3eb",
  "#fff3ff",
  "#f2fce4",
]
const FeaturedCategories = ({featuredCate}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='featured-container'>
      <h2 className='featured-container-cate-title'>Featured Categories</h2>
      <Slider className='featured-container-cate-content' {...settings}>
        {
          featuredCate.map((item, index) => {
            const bgColor = backgroundColor[index % backgroundColor.length]
            

            return (
              <div className='cate__item' key={item.id} >
                <div className='cate__item-info' style={{ backgroundColor: bgColor}}>
                  <img alt={`category-${item.id}`} src={item.imgUrl} />
                  <h4>{item.title}</h4>
                  <p>{`${item.quantity} items`}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <div className='featured-container-ads'>
        <div className='featured-ads-item'>
          <img alt='featured-banner' src={featuredBanner1} className='featured-ads-item-img' />
          <h2 className='featured-ads-item-title'>Everyday Fresh & Clean with Our Products</h2>
          <button className='featured-ads-item-btn'><a>Shop now</a> <p><FaLongArrowAltRight /></p></button>
        </div>
        <div className='featured-ads-item'>
          <img alt='featured-banner' src={featuredBanner2} className='featured-ads-item-img' />
          <h2 className='featured-ads-item-title'>Make your Breakfast
          Healthy and Easy</h2>
          <button className='featured-ads-item-btn'><a>Shop now</a> <p><FaLongArrowAltRight /></p></button>
        </div>
        <div className='featured-ads-item'>
          <img alt='featured-banner' src={featuredBanner3} className='featured-ads-item-img' />
          <h2 className='featured-ads-item-title'>The best Organic
          Products Online</h2>
          <button className='featured-ads-item-btn'><a>Shop now</a>  <p><FaLongArrowAltRight /></p></button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCategories