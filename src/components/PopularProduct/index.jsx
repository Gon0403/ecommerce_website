import React, { useEffect, useState, useRef } from 'react'
import './popularproduct.css'
import { ConfigProvider, Rate } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
import Slider from "react-slick";

const PopularProduct = ({ popularProducts = [], isDailyList }) => {
  const [quickViewData, setQuickViewData] = useState("");
  const [showQuickView, setShowQuickView] = useState(false);
  const [quantityItem, setQuantityItem] = useState(1);
  const quickViewPopupRef = useRef(null)



  const productTags = { hot: "#f74b81", sale: "#67bcee", new: "#3bb77e", }

  var dailySaleSlideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidePerRow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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



  // getData to show quickView
  const handleQuickView = (product) => {
    setQuickViewData("")
    setQuickViewData(product)
    setShowQuickView(true);
  };


  //update state
  useEffect(() => { }, [quickViewData])

  useEffect(() => {
  }, [quantityItem])
  //handle turn off quickView when click outside box
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (quickViewPopupRef.current && !quickViewPopupRef.current.contains(e.target)) {
        setShowQuickView(false);
      }
    }
    if (showQuickView) {
      document.addEventListener("pointerdown", handleClickOutSide);
    }
    return () => document.removeEventListener("pointerdown", handleClickOutSide)
  }, [showQuickView])

  const handleTurnOffQuickView = () => {
    if (!showQuickView) return;
    else {
      setShowQuickView(false)
    }
  }



  if (!popularProducts || popularProducts.length === 0) {
    return (
      <p>No product found!</p>
    )
  }



  return (
    <div className={popularProducts.length === 1 ? "popularProduct__container-1item" : "popularProduct__container"} >
      {popularProducts.map((product, index) => {

        if (index < 10) {
          return (
            <div className='popularProduct__item' key={index}>
              <div className='product__img'>
                <img className='product__img-front' alt='' src={product.imgUrl} />
                <img className='product__img-back' alt='' src={product.imgUrl_back} />
                <div className='product__img-nav'>
                  <button aria-label='Add to cart' style={{ borderRight: '1px solid var(--primary-color)' }} className='product__img-nav__addCart'><FaRegHeart /></button>
                  <button onClick={() => handleQuickView(product)} aria-label='Quick View' className='product__img-nav__quickView'><LiaEyeSolid /></button>
                </div>
              </div>
              <div className='product__details'>
                <a className='product__details__cate'>{product.category}</a>
                <a className='product__details__name'>{product.productName}</a>
                <div className='product__details__rate'>
                  <Rate startSize disabled allowHalf defaultValue={product.rate} />
                  <p>({product.rate})</p>
                </div>

                {isDailyList ?

                  <div className='dailyList__item-bottom'>
                    <div className='dailyList__item-bottom__price'>
                      <p style={{ fontSize: "min(2rem,24px)", color: "var(--primary-color)" }}>${product.priceSaleOff}</p>
                      <p style={{ textDecoration: "line-through", fontSize: "min(1.4rem,20px)", color: "#b6b6b6" }}>${product.price}</p>
                    </div>
                    <div className='dailyList__item-bottom__quantity'>
                      <div className='dailyList__item-bottom__quantity-bar'>
                        <div style={{
                          backgroundColor: "var(--primary-color)",
                          height: "4px",
                          width: `${(product.quantity_sold / product.quantity) * 100}%`,
                          transition: "width 0.3s ease "
                        }}>

                        </div>
                      </div>
                      <div className='dailyList__item-bottom__quanity-detail'>
                        Sold: <p>{product.quantity_sold}</p>/<p>{product.quantity}</p>
                      </div>
                    </div>
                    <div className='dailyList__item-bottom__button'>
                      <button onClick={() => handleQuickView(product)}>
                        <IoCartOutline style={{ color: "#fff", fontSize: "1.8rem", width: "3rem" }} className='product__details__bottom-addCart-ic addCart' />
                        Add to cart
                      </button>
                    </div>
                  </div>


                  // show when isDailyList = false
                  :
                  <div className='product__details__bottom'>
                    <p className='product__details__vendor'>By <a>{product.vendor}</a></p>
                    <div className='product__details__bottom-priceCart'>
                      <div className='product__details__bottom-price'>
                        <p>${product.priceSaleOff}</p>
                        <p style={{ fontSize: '1.4rem', color: '#adadad', textDecoration: 'line-through' }}>${product.price}</p>
                      </div>
                      <button className='product__details__bottom-addCart'>
                        <IoCartOutline className='product__details__bottom-addCart-ic addCart' />
                        <a className='addCart'>Add</a>
                      </button>
                    </div>
                  </div>
                }


              </div>
              <div style={{ backgroundColor: productTags[product.tag] }} className='popularProduct__tag'>
                {product.tag}
              </div>

            </div>
          )
        }
      })}
      {/* //quickView */}
      <div style={{ display: showQuickView ? "" : "none" }} ref={quickViewPopupRef} className={`quickView__popup }`}>
        <div className='quickView__popup__img'>
          <div >
            <img alt='' src={quickViewData.imgUrl} />
          </div>
          <div>
            <img alt='' src={quickViewData.imgUrl_back} />
          </div>
        </div>
        <div className='quickView__popup__details'>
          <div className='quickView__popup__details-tag' style={{ backgroundColor: productTags[quickViewData.tag], opacity: 0.6 }}>
            <h4 style={{ color: "#fff", fontSize: "3rem" }} >{quickViewData.tag}</h4>
          </div>
          <div className='quickView__popup__details-name'>
            <a style={{ opacity: 0.6 }}>{quickViewData.productName}</a>
          </div>
          <div className='quickView__popup__details-rate'>
            <Rate startSize disabled allowHalf value={quickViewData.rate} />
            <p>({quickViewData.rate})</p>
          </div>
          <div className='quickView__popup__details-price'>
            <h1>${quickViewData.priceSaleOff}</h1>
            <h3>${quickViewData.price}</h3>
          </div>
          <div className='quickView__popup__details-quantity'>
            <div>
              <input onChange={(e) => setQuantityItem(e.target.value)} value={quantityItem} type='number' />
            </div>
            <button>Add to cart</button>
          </div>
        </div>
        <div className='quickView__turnoff'><button onClick={handleTurnOffQuickView}>X</button></div>
      </div>

    </div>
  )
}

export default PopularProduct