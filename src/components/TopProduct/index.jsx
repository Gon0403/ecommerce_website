import React from "react";
import "./topproduct.css";
import { Rate } from "antd";
const TopProduct = ({ topProductList = [] }) => {
  return (
    <div className="topProduct__container">
      {topProductList.map((product) => {
        return (
          <div className="topProduct__item">
            <div className="topProduct__image">
              <img alt="" src={product.imgUrl} />
            </div>
            <div className="topProduct__details">
              <h4>{product.productName}</h4>
              <div className="topProduct__details-rate">
                <Rate disabled value={product.rate} allowHalf />
                <p>({product.rate})</p>
              </div>
              <div className="topProduct__details-price">
                    <p>{product.priceSaleOff}</p>
                    <p>{product.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopProduct;
