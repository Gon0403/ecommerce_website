import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './quickview.css'
import { Rate } from 'antd';
const QuickView = ({ quickview_data = {}, onClose}) => {
   
    const [quantityItem, setQuantityItem] = useState(1);
    const [showQuickView, setShowQuickView] = useState(false)
    const quickViewPopupRef = useRef(null)
    const productTags = { hot: "#f74b81", sale: "#67bcee", new: "#3bb77e", }

    // getData to show quickView


    
    if (!quickview_data) {
        return (
            <p>No product found!</p>
        )
    }
  
    const handleTurnOffQuickView = () => {
       onClose();
    }


    



    return (
        <div  ref={quickViewPopupRef} className={`quickView__popup`}>
            <div className='quickView__popup__img'>
                <div >
                    <img alt='' src={quickview_data.imgUrl} />
                </div>
                <div>
                    <img alt='' src={quickview_data.imgUrl_back} />
                </div>
            </div>
            <div className='quickView__popup__details'>
                <div className='quickView__popup__details-tag' style={{ backgroundColor: productTags[quickview_data.tag], opacity: 0.6 }}>
                    <h4 style={{ color: "#fff", fontSize: "3rem" }} >{quickview_data.tag}</h4>
                </div>
                <div className='quickView__popup__details-name'>
                    <a style={{ opacity: 0.6 }}>{quickview_data.productName}</a>
                </div>
                <div className='quickView__popup__details-rate'>
                    <Rate startSize disabled allowHalf value={quickview_data.rate} />
                    <p>({quickview_data.rate})</p>
                </div>
                <div className='quickView__popup__details-price'>
                    <h1>${quickview_data.priceSaleOff}</h1>
                    <h3>${quickview_data.price}</h3>
                </div>
                <div className='quickView__popup__details-quantity'>
                    <div>
                        <input onChange={(e) => setQuantityItem(e.target.value)} value={quantityItem} type='number' />
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
            <div className='quickView__turnoff'><button  onClick={handleTurnOffQuickView}>X</button></div>
        </div>
    )
}

export default QuickView