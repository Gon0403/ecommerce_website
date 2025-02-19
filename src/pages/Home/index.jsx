import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Header from "../../components/Header";
import SlideImage from "../../components/SlideImage";
import FeaturedCategories from "../../components/FeaturedCategories";
import QuickView from "../../components/QuickView/index.jsx";
import ProductItem from "../../components/productItem/index.jsx";
import { popularProductsData, featuredCateData } from "../../Data/Data.js";
import Slider from "react-slick";
const dailySaleFilter = ["sale", "hot", "new"];
const categories = [
  "All",
  "Milks & Dairies",
  "Wine & Drinks",
  "Pet Foods & Toy",
  "Fast Foods",
  "Vegetables",
  "Fresh Fruits",
];
const Home = () => {
  const [selectedCate, setSelectedCate] = useState("All");
  const [featuredCateList, setFeaturedCateList] = useState(featuredCateData);
  const [productList, setProductList] = useState(popularProductsData);
  const [dailyProductList, setDailyProductList] = useState([]);
  const [selectedDailyFilter, setSelectedDailyFilter] = useState(dailySaleFilter[0]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickviewOpen, setIsQuickviewOpen] = useState(false);
 

  var dailySaleSlideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidePerRow: 5,
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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const temp = popularProductsData.filter((_, index) => index < 10);
    const updatedProducts =
      selectedCate === "All"
        ? temp
        : popularProductsData.filter(
            (product, index) => product.category === selectedCate
          );
    setProductList(updatedProducts);
  }, [selectedCate]);

  useEffect(() => {
    console.log("daily filter: ", selectedDailyFilter);
    // // get 10 first product default filter === sale (featured)
    const temp = popularProductsData.filter(
      (product, index) => product.tag === "sale"
    );
    const filteredDailyData =
      selectedDailyFilter === "sale"
        ? temp
        : popularProductsData.filter(
            (product, index) => product.tag === selectedDailyFilter
          );
    setDailyProductList(filteredDailyData);
    //console.log(dailyProductList);
  }, [selectedDailyFilter]);
  

  

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsQuickviewOpen(true);
  };
  console.log("selectedproduct", selectedProduct);
  console.log("is quick view open", isQuickviewOpen);
  
  
  return (
    <div className="home__container">
      <Header />
      <SlideImage />
      <FeaturedCategories featuredCate={featuredCateList} />
      <div className="popular__container">
        <div className="popular__container-heading">
          <h2>Popular Products</h2>
          <ul className="popular__container-heading__cate">
            {categories.map((category, index) => {
              return (
                <li
                  className={selectedCate === category ? "selected" : ""}
                  onClick={() => setSelectedCate(category)}
                  key={index}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="popular__container-content">
          {productList.map((item) => {
            return (
              <ProductItem
                itemData={item}
                isDailyList={false}
                onSelect={() => handleSelectProduct(item)}
              />
            );
          })}
        </div>
      </div>
      <div className="daily-sale__container">
        <div className="daily-sale__heading">
          <h2>Daily Best Sale</h2>
          <div className="daily-sale__heading-right">
            <div>
              <button className={selectedDailyFilter === dailySaleFilter[0] ? "active" : ""} onClick={() => setSelectedDailyFilter(dailySaleFilter[0])}>
                Featured
              </button>
            </div>
            <div>
              <button className={selectedDailyFilter === dailySaleFilter[1] ? "active" : ""} onClick={() => setSelectedDailyFilter(dailySaleFilter[1])}>
                Popular
              </button>
            </div>
            <div>
              <button className={selectedDailyFilter === dailySaleFilter[2] ? "active" : ""} onClick={() => setSelectedDailyFilter(dailySaleFilter[2])}>
                New Added
              </button>
            </div>
          </div>
        </div>
        <div className="daily-sale__content">
          <Slider
            className="daily-sale__content-slider"
            {...dailySaleSlideSettings}
          >
            {dailyProductList.map((item) => {
              return (
                <div className="daily-sale__content__item">
                  <ProductItem
                    itemData={item}
                    isDailyList={true}
                    onSelect={() => handleSelectProduct(item)}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="quickViewProduct" >
        {isQuickviewOpen && selectedProduct && (
         
            <QuickView 
            onClose={()=> setIsQuickviewOpen(false)} 
            quickview_data={selectedProduct} />
         
        )}
      </div>
    </div>
  );
};

export default Home;
