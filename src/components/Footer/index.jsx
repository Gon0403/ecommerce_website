import React from "react";
import "./footer.css";
import images from "../../utils/importImages";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__top">
        <div className="footer__container__top-item">
          <img alt="" src={images["icons/icon-1.svg"]} />
          <div className="footer__container__top-item-info">
            <h4>Best prices & offers</h4>
            <p>Orders $50 or more</p>
          </div>
        </div>
        <div className="footer__container__top-item">
          <img alt="" src={images["icons/icon-2.svg"]} />
          <div className="footer__container__top-item-info">
            <h4>Free delivery</h4>
            <p>24/7 amazing services</p>
          </div>
        </div>
        <div className="footer__container__top-item">
          <img alt="" src={images["icons/icon-3.svg"]} />
          <div className="footer__container__top-item-info">
            <h4>Great daily deal</h4>
            <p>When you sign up</p>
          </div>
        </div>
        <div className="footer__container__top-item">
          <img alt="" src={images["icons/icon-4.svg"]} />
          <div className="footer__container__top-item-info">
            <h4>Wide assortment</h4>
            <p>Mega Discounts</p>
          </div>
        </div>
        <div className="footer__container__top-item">
          <img alt="" src={images["icons/icon-5.svg"]} />
          <div className="footer__container__top-item-info">
            <h4>Easy returns</h4>
            <p>Within 30 days</p>
          </div>
        </div>
      </div>
      <div className="footer__container__middle">
        <div className="footer__middle-col">
          <img
            style={{ width: "220px" }}
            alt=""
            src={images["icons/logo.svg"]}
          />
          <p>Awesome grocery store website template</p>
          <div>
            <img
              style={{ width: "16px", height: "16px" }}
              alt=""
              src={images["icons/icon-location.svg"]}
            />
            <p>
              <strong>Address</strong> 5171 W Campbell Ave undefined Kent, Utah
              53127 United States
            </p>
          </div>
          <div>
            <img alt="" src={images["icons/icon-contact.svg"]} />
            <p>
              <strong>Call Us: </strong>(+91) - 540-025-124553
            </p>
          </div>
          <div>
            <img alt="" src={images["icons/icon-email-2.svg"]} />
            <p>
              <strong>Email: </strong>sale@Nest.com
            </p>
          </div>
          <div>
            <img alt="" src={images["icons/icon-clock.svg"]} />
            <p>
              <strong>Hours: </strong>10:00 - 18:00, Mon - Sat
            </p>
          </div>
        </div>
        <div className="footer__middle-col">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Delivery information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Contact Us</a>
          <a href="#">Support Center</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer__middle-col">
          <h3>Account</h3>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My WishList</a>
          <a href="#">Track My Order</a>
          <a href="#">Help Ticket</a>
          <a href="#">Shipping Details</a>
          <a href="#">Compare Products</a>
        </div>
        <div className="footer__middle-col">
          <h3>Corporate</h3>
          <a href="#">Become a Vendor</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Farm Business</a>
          <a href="#">Farm Careers</a>
          <a href="#">Our Suppliers</a>
          <a href="#">Accessibility</a>
          <a href="#">Promotions</a>
        </div>
        <div className="footer__middle-col">
          <h3>Popular</h3>
          <a href="#">Milk & Flavoured Milk</a>
          <a href="#">Butter & Margarine</a>
          <a href="#">Eggs Substitutes</a>
          <a href="#">Marmalades</a>
          <a href="#">Sour Cream and Dips</a>
          <a href="#">Tea & Kombucha</a>
          <a href="#">Cheese</a>
        </div>
        <div className="footer__middle-col">
          <h3>Install App</h3>
          <p style={{ margin: "16px 0" }}>From App Store or Google Play</p>
          <div>
            <a href="#">
            <img
              style={{ width: "130px", height: "43px" }}
              alt=""
              src={images["icons/app-store.jpg"]}
            />
            </a>
            <a href="#">
            <img
              style={{ width: "130px", height: "43px" }}
              alt=""
              src={images["icons/google-play.jpg"]}
            />
            </a>
          </div>
          <p style={{ margin: "20px 0" }}>Secured Payment Gateways</p>
          <img
            style={{ width: "225px", height: "32px" }}
            alt=""
            src={images["icons/payment-method.png"]}
          />
        </div>
      </div>

      <div className="footer__container__bottom">
        <div>
          <p style={{ marginBottom: "10px" }}>
            © 2024, <span>Nest</span> - HTML Ecommerce Template
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="footer__bottom_mid">
          <div style={{ display: "flex", gap: "5px" }}>
            <img
              style={{ width: "30px", height: "30px" }}
              alt=""
              src={images["icons/phone-call.svg"]}
            />
            <div>
              <h2 style={{ color: "var(--primary-color)", opacity: "1" }}>
                1900 - 6666
              </h2>
              <p>Working 8:00 - 22:00</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "5px" }}>
            <img
              style={{ width: "30px", height: "30px" }}
              alt=""
              src={images["icons/phone-call.svg"]}
            />
            <div>
              <h2 style={{ color: "var(--primary-color)", opacity: "1" }}>
                1900 - 8888
              </h2>
              <p>24/7 Support Center</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"5px", marginBottom:"10px"}}>
            <p>Follow Us</p>
            <a href="#"
              style={{
                backgroundColor: "var(--primary-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={images["icons/icon-facebook-white.svg"]}
              />
            </a>
            <a href="#"
              style={{
                backgroundColor: "var(--primary-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={images["icons/icon-twitter-white.svg"]}
              />
            </a>
            <a href="#"
              style={{
                backgroundColor: "var(--primary-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={images["icons/icon-instagram-white.svg"]}
              />
            </a>
            <a href="#"
              style={{
                backgroundColor: "var(--primary-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={images["icons/icon-pinterest-white.svg"]}
              />
            </a>
            <a href="#"
              style={{
                backgroundColor: "var(--primary-color)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <img
                style={{ width: "20px", height: "20px" }}
                alt=""
                src={images["icons/icon-youtube-white.svg"]}
              />
            </a>
          </div>
          <p>Up to 15% discount on your first subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
