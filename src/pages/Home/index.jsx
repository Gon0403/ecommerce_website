import React, { useEffect, useState, useRef } from 'react'
import './home.css'
import Header from '../../components/Header'
import SlideImage from '../../components/SlideImage'
import FeaturedCategories from '../../components/FeaturedCategories'
import PopularProduct from '../../components/PopularProduct'
import { popularProductsData, featuredCateData } from '../../Data/Data.js'
import Slider from "react-slick";

const Home = () => {

  const [selectedCate, setSelectedCate] = useState("All");
  const [featuredCateList, setFeaturedCateList] = useState(featuredCateData)
  const [productList, setProductList] = useState(popularProductsData);
  const [dailyProductList, setDailyProductList] = useState("");
  const [selectedDailyFilter, setSelectedDailyFiter] = useState("sale");
  const categories =
    ["All", "Milks & Dairies", "Wine & Drinks", "Pet Foods & Toy", "Fast Foods", "Vegetables", "Fresh Fruits"]
  const dailySaleFilter = ["sale", "hot", "new"]

  


  useEffect(() => {
    const temp = popularProductsData.filter((_, index) => index < 10)
    const updatedProducts =
      selectedCate === "All"
        ? temp
        : popularProductsData.filter((product, index) => product.category === selectedCate);



    setProductList(updatedProducts);
  }, [selectedCate]);


  useEffect(() => {
    console.log("daily filter: ", selectedDailyFilter);
    // // get 10 first product default filter === sale (featured)
    const temp = popularProductsData.filter((product, index) => (product.tag === "sale"));
    const filteredDailyData =
      selectedDailyFilter === "sale" ? temp :
        popularProductsData.filter((product, index) => product.tag === selectedDailyFilter);
    setDailyProductList(filteredDailyData);
    console.log(dailyProductList);

  }, [selectedDailyFilter])






  return (

    <div className="home__container">
      <Header />
      <SlideImage />
      <FeaturedCategories featuredCate={featuredCateList} />
      <div className='popular__container'>
        <div className='popular__container-heading'>
          <h2>Popular Products</h2>
          <ul className='popular__container-heading__cate'>
            {categories.map((category, index) => {
              return (
                <li
                  className={selectedCate === category ? "selected" : ""}
                  onClick={() => setSelectedCate(category)}
                  key={index}>{category}</li>
              )
            })}
          </ul>
        </div>
        <div className='popular__container-content'>
          <PopularProduct isDailyList={false} popularProducts={productList} />
        </div>
      </div>
      <div className='daily-sale__container'>
        <div className='daily-sale__heading'>
          <h2>Daily Best Sale</h2>
          <div className='daily-sale__heading-right'>
            <div><button onClick={() => setSelectedDailyFiter(dailySaleFilter[0])}>Featured</button></div>
            <div><button onClick={() => setSelectedDailyFiter(dailySaleFilter[1])}>Popular</button></div>
            <div><button onClick={() => setSelectedDailyFiter(dailySaleFilter[2])}>New Added</button></div>
          </div>
        </div>

        <div className='daily-sale__content'>
            <PopularProduct popularProducts={dailyProductList}  />
        </div>

      </div>
    </div>

  )
}

export default Home