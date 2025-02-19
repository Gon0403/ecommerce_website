import React, { useEffect, useState, useRef } from 'react'
import "./productItem.css"
import { ConfigProvider, Rate } from "antd";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
const ProductItem = ({ itemData = {}, isDailyList, onSelect}) => {
    
    const productTags = { hot: "#f74b81", sale: "#67bcee", new: "#3bb77e", }
    
  
    

    if (!itemData) {
        return (
            <p>No product found!</p>
        )
    }
    return (
        <div className="productItem" onClick={() => { onSelect() }} >
            <div className='popularProduct__item' key={itemData.id}>
                <div className='product__img'>
                    <img className='product__img-front' alt='' src={itemData.imgUrl} />
                    <img className='product__img-back' alt='' src={itemData.imgUrl_back} />
                    <div className='product__img-nav'>
                        <button aria-label='Add to cart' style={{ borderRight: '1px solid var(--primary-color)' }} className='product__img-nav__addCart'><FaRegHeart /></button>
                        <button  aria-label='Quick View' className='product__img-nav__quickView'><LiaEyeSolid /></button>
                    </div>
                </div>
                <div className='product__details'>
                    <a className='product__details__cate'>{itemData.category}</a>
                    <a className='product__details__name'>{itemData.productName}</a>
                    <div className='product__details__rate'>
                        <Rate startSize disabled allowHalf defaultValue={itemData.rate} />
                        <p>({itemData.rate})</p>
                    </div>

                    {isDailyList ?

                        <div className='dailyList__item-bottom'>
                            <div className='dailyList__item-bottom__price'>
                                <p style={{ fontSize: "min(2rem,24px)", color: "var(--primary-color)" }}>${itemData.priceSaleOff}</p>
                                <p style={{ textDecoration: "line-through", fontSize: "min(1.4rem,20px)", color: "#b6b6b6" }}>${itemData.price}</p>
                            </div>
                            <div className='dailyList__item-bottom__quantity'>
                                <div className='dailyList__item-bottom__quantity-bar'>
                                    <div style={{
                                        backgroundColor: "var(--primary-color)",
                                        height: "4px",
                                        width: `${(itemData.quantity_sold / itemData.quantity) * 100}%`,
                                        transition: "width 0.3s ease "
                                    }}>

                                    </div>
                                </div>
                                <div className='dailyList__item-bottom__quanity-detail'>
                                    Sold: <p>{itemData.quantity_sold}</p>/<p>{itemData.quantity}</p>
                                </div>
                            </div>
                            <div className='dailyList__item-bottom__button'>
                                <button >
                                    <IoCartOutline style={{ color: "#fff", fontSize: "1.8rem", width: "3rem" }} className='product__details__bottom-addCart-ic addCart' />
                                    Add to cart
                                </button>
                            </div>
                        </div>


                        // show when isDailyList = false
                        :
                        <div className='product__details__bottom'>
                            <p className='product__details__vendor'>By <a>{itemData.vendor}</a></p>
                            <div className='product__details__bottom-priceCart'>
                                <div className='product__details__bottom-price'>
                                    <p>${itemData.priceSaleOff}</p>
                                    <p style={{ fontSize: '1.4rem', color: '#adadad', textDecoration: 'line-through' }}>${itemData.price}</p>
                                </div>
                                <button className='product__details__bottom-addCart'>
                                    <IoCartOutline className='product__details__bottom-addCart-ic addCart' />
                                    <a className='addCart'>Add</a>
                                </button>
                            </div>
                        </div>
                    }


                </div>
                <div style={{ backgroundColor: productTags[itemData.tag] }} className='popularProduct__tag'>
                    {itemData.tag}
                </div>

            </div>
            {/* <div style={{ display: showQuickView ? "" : "none", }} ref={quickViewPopupRef} className={`quickView__popup }`}>
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
            </div> */}
        </div>
    )
}
export default ProductItem