import React from "react";
import "./dealpopup.css";
import { useState, useEffect } from "react";
import { Rate } from "antd";
const DealPopup = ({ product = {}, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(product.duration * 24 * 60 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const d = Math.floor(seconds / (24 * 60 * 60));
    const h = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const m = Math.floor((seconds % (60 * 60)) / 60);
    const s = seconds % 60;
    return { d, h, m, s };
  };

  const { d, h, m, s } = formatTime(timeLeft);

  if (!product) {
    return <p>No product found!</p>;
  }

  const handleTurnOff = () => {
    onClose();
  };

  return (
    <div className="dealpopup__container">
      <div className="dealpopup__details">
        <h4
          style={{ color: "#ffc107", fontWeight: "bold", fontSize: "1.4rem" }}
        >
          Deal of the Day
        </h4>
        <a
        href="#"
          style={{
            fontSize: "4rem",
            textDecoration: "none",
            fontWeight: "bold",
            width: "100%",
            color:"#253d4e"
          }}
        >
          {product.productName}
        </a>
        <div className="dealpopup__details-price">
          <h2 href="#">${product.priceSaleOff}</h2>
          <div className="dealpopup__details-priceNoSale">
            <p>{100-Math.floor((product.priceSaleOff / product.price) * 100)}% Off</p>
            <h4>${product.price}</h4>
          </div>
        </div>
        <p style={{fontSize:"1.6rem", color:"#7e7e7e"}}>Hurry Up! Offer End In:</p>
          <div className="dealpopup__details-duration">
            <div className="dealpopup__details-duration-count">
              <p style={{color:"var(--primary-color)"}}>{d}</p>
              <p style={{fontSize:"1.4rem", color:"#7e7e7e"}}>Days</p>
            </div>
            <div className="dealpopup__details-duration-count">
              <p style={{color:"var(--primary-color)"}}>{h}</p>
              <p style={{fontSize:"1.4rem", color:"#7e7e7e"}}>Hours</p>
            </div>
            <div className="dealpopup__details-duration-count">
              <p style={{color:"var(--primary-color)"}}>{m}</p>
              <p style={{fontSize:"1.4rem", color:"#7e7e7e"}}>Mins</p>
            </div>
            <div className="dealpopup__details-duration-count">
              <p style={{color:"var(--primary-color)"}}>{s}</p>
              <p style={{fontSize:"1.4rem", color:"#7e7e7e"}}>Sec</p>
            </div>
          </div>
          <div className="dealpopup__details-rate">
            <Rate value={product.rate} allowHalf disabled />
            <p>({product.rate})</p>
          </div>
          <div className="dealpopup__details-btn">
            <button>Shop now</button>
          </div>
      </div>
      <div className="dealpopup__img">
        <img alt="" src={product.imgUrl} />
      </div>
      <div className="dealpopup__turnoff">
        <button onClick={handleTurnOff}>X</button>
      </div>
    </div>
  );
};

export default DealPopup;
