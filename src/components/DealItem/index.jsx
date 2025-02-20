import React, { useEffect, useState } from "react";
import "./dealitem.css";
import { Rate } from "antd";
import { IoCartOutline } from "react-icons/io5";

const DealItem = ({ deal_item_data = {} }) => {
  const [timeLeft, setTimeLeft] = useState(
    deal_item_data.duration * 24 * 60 * 60
  );

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

  return (
    <div className="dealItem__container">
      <div className="dealItem__item">
        <div className="dealItem__item-imgBg">
          <img src={deal_item_data.imgUrl} alt="" />
          <div className="dealItem__item-details">
            <div className="dealItem__item-details-top">
              <div className="details-top-duration">
                {d} <p>Days</p>
              </div>
              <div className="details-top-duration">
                {h} <p>Hours</p>
              </div>
              <div className="details-top-duration">
                {m} <p>Mins</p>
              </div>
              <div className="details-top-duration">
                {s} <p>Sec</p>
              </div>
            </div>
            <div className="dealItem__item-details-bottom">
              <h3>{deal_item_data.bannerTitle}</h3>
              <div className="dealItem__item-details-bottom-rate">
                <Rate disabled allowHalf value={deal_item_data.rate} />
                <p>({deal_item_data.rate})</p>
              </div>
              <p className="dealItem__item-details-bottom-vendor">By <a>{deal_item_data.vendor}</a></p>
              <div className="dealItem__item-details-bottom-price">
                <div>
                    <p>${deal_item_data.priceSaleOff}</p>
                    <p>${deal_item_data.price}</p>
                </div>
                <button><a><IoCartOutline/> Add</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealItem;
