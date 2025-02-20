import React, { useEffect, useState, useRef } from "react";
import "./home.css";
import Header from "../../components/Header";
import SlideImage from "../../components/SlideImage";
import FeaturedCategories from "../../components/FeaturedCategories";
import QuickView from "../../components/QuickView/index.jsx";
import ProductItem from "../../components/productItem/index.jsx";
import DealItem from "../../components/DealItem/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import {
  popularProductsData,
  featuredCateData,
  dealBannerData,
} from "../../Data/Data.js";
import Slider from "react-slick";
import TopProduct from "../../components/TopProduct/index.jsx";
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
  const [dealItemData, setDealItemData] = useState(dealBannerData);
  const [dailyProductList, setDailyProductList] = useState([]);
  const [topProductSellingList, setTopProductSellingList] = useState([]);
  const [topProductTrendingList, setTopProductTrendingList] = useState([]);
  const [topProductNewList, setTopProductNewList] = useState([]);
  const [topProductRateList, setTopProductRateList] = useState([]);
  const [selectedDailyFilter, setSelectedDailyFilter] = useState(
    dailySaleFilter[0]
  );
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

  useEffect(() => {
    const temp = popularProductsData
      .sort((a, b) => b.quantity_sold - a.quantity_sold)
      .slice(0, 3);
    const temp1 = popularProductsData
      .filter((product) => product.tag === "hot")
      .sort((a, b) => b.quantity_sold - a.quantity_sold)
      .slice(0, 3);
    const temp2 = popularProductsData
      .filter((product) => product.tag === "new")
      .sort((a, b) => b.id - a.id)
      .slice(0, 3);
    const temp3 = popularProductsData
      .sort((a, b) => b.rate - a.rate)
      .slice(0, 3);
    setTopProductSellingList(temp);
    setTopProductTrendingList(temp1);
    setTopProductNewList(temp2);
    setTopProductRateList(temp3);
  }, []);

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
              <button
                className={
                  selectedDailyFilter === dailySaleFilter[0] ? "active" : ""
                }
                onClick={() => setSelectedDailyFilter(dailySaleFilter[0])}
              >
                Featured
              </button>
            </div>
            <div>
              <button
                className={
                  selectedDailyFilter === dailySaleFilter[1] ? "active" : ""
                }
                onClick={() => setSelectedDailyFilter(dailySaleFilter[1])}
              >
                Popular
              </button>
            </div>
            <div>
              <button
                className={
                  selectedDailyFilter === dailySaleFilter[2] ? "active" : ""
                }
                onClick={() => setSelectedDailyFilter(dailySaleFilter[2])}
              >
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
      <div className="dealsofDay">
        <div className="dealofDay__heading">
          <h2>Deals Of The Day</h2>
          <a>All deals</a>
        </div>
        <div className="dealofDay__content ">
          {dealBannerData.map((deal) => {
            return <DealItem deal_item_data={deal} />;
          })}
        </div>
      </div>
      <div className="topProduct">
        <div className="topProduct__col">
          <h2>Top Selling</h2>
          <hr />
          <div className="topProduct__col-content">
            <TopProduct topProductList={topProductSellingList} />
          </div>
        </div>
        <div className="topProduct__col">
          <h2>Trending Product</h2>
          <hr />
          <div className="topProduct__col-content">
            <TopProduct topProductList={topProductTrendingList} />
          </div>
        </div>
        <div className="topProduct__col">
          <h2>Recently Product</h2>
          <hr />
          <div className="topProduct__col-content">
            <TopProduct topProductList={topProductNewList} />
          </div>
        </div>
        <div className="topProduct__col">
          <h2>Top Rated</h2>
          <hr />
          <div className="topProduct__col-content">
            <TopProduct topProductList={topProductRateList} />
          </div>
        </div>
      </div>
      <div className="quickViewProduct">
        {isQuickviewOpen && selectedProduct && (
          <QuickView
            onClose={() => setIsQuickviewOpen(false)}
            quickview_data={selectedProduct}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
