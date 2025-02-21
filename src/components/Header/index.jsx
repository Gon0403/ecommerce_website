import React, { Children, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./header.css";
import logo from "../../assets/images/logo.jpg";
import Login from "../../pages/Login";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
  FaUser,
  FaHeadphones,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CiGrid41, CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart, FaTicketSimple } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";

import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";
import { Link } from "react-router-dom";
import images from "../../utils/importImages";
import category1 from "../../assets/images/category-1.svg";
import category2 from "../../assets/images/category-2.svg";
import category3 from "../../assets/images/category-3.svg";
import category4 from "../../assets/images/category-4.svg";
import category5 from "../../assets/images/category-5.svg";
import category6 from "../../assets/images/category-6.svg";
import category7 from "../../assets/images/category-7.svg";
import category8 from "../../assets/images/category-8.svg";
import category9 from "../../assets/images/category-9.svg";
import category10 from "../../assets/images/category-10.svg";
import megamenuBanner from "../../assets/images/megamenu-banner.png";
const Header = ({ isLogined }) => {
  const headerRef = useRef(null);
  const headerSubRef = useRef(null);
  const headerCategoryBrowserRef = useRef(null);
  const [isCateShow, setIsCateShow] = useState(false);
  const [isFullShowCate, setIsFullShowCate] = useState(false);

  const handleCateShow = () => {
    setIsCateShow((prev) => !prev);
  };
  const handleFullShow = () => {
    return setIsFullShowCate(!isFullShowCate);
  };

  const categoryData = [
    {
      id: 1,
      name: "Milks and Dairies",
      icon: category1,
    },
    {
      id: 2,
      name: "Wine & Drinks",
      icon: category2,
    },
    {
      id: 3,
      name: "Clothing & beauty",
      icon: category3,
    },
    {
      id: 4,
      name: "Fresh Seafood",
      icon: category4,
    },
    {
      id: 5,
      name: "Pet food & Toy",
      icon: category5,
    },
    {
      id: 6,
      name: "Fast Foods",
      icon: category6,
    },
    {
      id: 7,
      name: "Baking material",
      icon: category7,
    },
    {
      id: 8,
      name: "Vegetables",
      icon: category8,
    },
    {
      id: 9,
      name: "Fresh Fruit",
      icon: category9,
    },
    {
      id: 10,
      name: "Bread and Juice",
      icon: category10,
    },
    {
      id: 7,
      name: "Baking material",
      icon: category7,
    },
    {
      id: 8,
      name: "Vegetables",
      icon: category8,
    },
    {
      id: 9,
      name: "Fresh Fruit",
      icon: category9,
    },
    {
      id: 10,
      name: "Bread and Juice",
      icon: category10,
    },
  ];
  const itemsSingleProduct = [
    {
      key: "6",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Product - Right Sidebar
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Product - Left Sidebar
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Product - No Sidebar
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Product - Vendors Info
        </a>
      ),
    },
  ];
  const itemsInvoice = [
    {
      key: "14",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Invoice 1
        </a>
      ),
    },
    {
      key: "15",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Invoice 2
        </a>
      ),
    },
    {
      key: "16",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Invoice 3
        </a>
      ),
    },
    {
      key: "17",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Invoice 4
        </a>
      ),
    },
  ];
  const menuShop = (
    <Menu>
      <Menu.Item key="1">
        <a className="header__shop__dropdown__item" href="#">
          Shop Grid - Right Sidebar
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a className="header__shop__dropdown__item" href="#">
          Shop Grid - Left Sidebar
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a className="header__shop__dropdown__item" href="#">
          Shop List - Left Sidebar
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a className="header__shop__dropdown__item" href="#">
          Shop List - Right Sidebar
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a className="header__shop__dropdown__item" href="#">
          Shop - Wine
        </a>
      </Menu.Item>
      <Menu.SubMenu
        className="header__shop__dropdown__item"
        key="singleProduct"
        title={
          <p className="header__shop__dropdown__item header__shop__dropdown__item-shopSubmenu">
            Single Product
          </p>
        }
      >
        {itemsSingleProduct.map((item) => {
          return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
        })}
      </Menu.SubMenu>
      <Menu.Item key="10">
        <a className="header__shop__dropdown__item" href="#">
          Shop - Filter
        </a>
      </Menu.Item>
      <Menu.Item key="11">
        <a className="header__shop__dropdown__item" href="#">
          Shop - Wishlist
        </a>
      </Menu.Item>
      <Menu.Item key="12">
        <a className="header__shop__dropdown__item" href="#">
          Shop - Cart
        </a>
      </Menu.Item>
      <Menu.Item key="13">
        <a className="header__shop__dropdown__item" href="#">
          Shop - Checkout
        </a>
      </Menu.Item>
      <Menu.SubMenu
        className="header__shop__dropdown__item"
        key="shopInvoice"
        title={
          <p className="header__shop__dropdown__item header__shop__dropdown__item-shopSubmenu">
            Shop - Invoice
          </p>
        }
      >
        {itemsInvoice.map((item) => {
          return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
        })}
      </Menu.SubMenu>
    </Menu>
  );

  const menuVendors = (
    <Menu>
      <Menu.Item key="1">
        <a className="header__shop__dropdown__item" href="#">
          Vendors Grid
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a className="header__shop__dropdown__item" href="#">
          Vendors List
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a className="header__shop__dropdown__item" href="#">
          Vendors Details{" "}
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a className="header__shop__dropdown__item" href="#">
          Vendors Dashboard{" "}
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a className="header__shop__dropdown__item" href="#">
          Vendors Guide
        </a>
      </Menu.Item>
    </Menu>
  );
  const itemsSingleBlog = [
    {
      key: "5",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Left Sidebar
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          Right Sidebar
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a className="header__shop__dropdown__item" href="#">
          No Sidebar
        </a>
      ),
    },
  ];
  const menuBlogs = (
    <Menu>
      <Menu.Item key="1">
        <a className="header__shop__dropdown__item" href="#">
          Blog Category Grid{" "}
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a className="header__shop__dropdown__item" href="#">
          Blog Category List{" "}
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a className="header__shop__dropdown__item" href="#">
          Blog Category Big{" "}
        </a>
      </Menu.Item>

      <Menu.SubMenu
        className="header__shop__dropdown__item"
        key="BlogCategoryWIde"
        title={
          <p className="header__shop__dropdown__item header__shop__dropdown__item-shopSubmenu">
            Blog Category Wide
          </p>
        }
      >
        {itemsSingleBlog.map((item) => {
          return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
        })}
      </Menu.SubMenu>
    </Menu>
  );

  useEffect(() => {
    const handleClickOutSideCate = (e) => {
      if (
        headerCategoryBrowserRef.current &&
        !headerCategoryBrowserRef.current.contains(e.target)
      ) {
        setIsCateShow(false);
      }
    };

    document.addEventListener("click", handleClickOutSideCate);
    return () => document.removeEventListener("click", handleClickOutSideCate);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!headerRef.current || !headerSubRef.current) return;
      else if (window.scrollY > 100) {
        headerRef.current.classList.add("displayNone");
        headerSubRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("displayNone");
        headerSubRef.current.classList.remove("fixed");
      }
    });
  }, []);

  return (
    <div className="header">
      <div ref={headerRef} className="header__container">
        <div className="header__container__logo">
          <img src={logo} />
        </div>
        <div className="header__container__search">
          <input placeholder="Search for item..." />
          <FaSearch />
        </div>
        <div className="header__container__userInfo">
          {/* <FaRegHeart className='icon' /> */}
          {isLogined ? (
            <div style={{ display: "flex", gap: "40px" }}>
              <div className="cart__container">
                <FaShoppingCart className="icon cart" />
                <div className="cart-dropdown">
                  <div className="cart-dropdown-list">
                    <div className="cart-dropdown__item">
                      <div className="cart__item-img">
                        <img src={images["product/thumbnail-3.jpg"]} alt="" />
                      </div>
                      <div className="cart__item-details">
                        <Link>Daisy Casual Bag</Link>
                        <p>1 x $800.00</p>
                      </div>
                      <div className="cart__item-button">
                        <button>X</button>
                      </div>
                    </div>
                    <div className="cart-dropdown__item">
                      <div className="cart__item-img">
                        <img src={images["product/thumbnail-3.jpg"]} alt="" />
                      </div>
                      <div className="cart__item-details">
                        <Link>Daisy Casual Bag</Link>
                        <p>1 x $800.00</p>
                      </div>
                      <div className="cart__item-button">
                        <button>X</button>
                      </div>
                    </div>
                    <div className="cart-dropdown__item">
                      <div className="cart__item-img">
                        <img src={images["product/thumbnail-3.jpg"]} alt="" />
                      </div>
                      <div className="cart__item-details">
                        <Link>Daisy Casual Bag</Link>
                        <p>1 x $800.00</p>
                      </div>
                      <div className="cart__item-button">
                        <button>X</button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="cart-dropdown-bottom">
                    <div className="cart-dropdown-bottom-total">
                      <p>Total</p>
                      <p style={{ color: "var(--primary-color)" }}>$4000.00</p>
                    </div>
                    <div className="cart-dropdown-bottom-btn">
                      <Link>View Cart</Link>
                      <Link>Check Out</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user__container">
                <FaUser className="icon" />
                <div className="userInfo-dropdown">
                  <div className="userInfo-dropdown-item">
                    <FaUser className="userInfo-dropdown-ic" />
                    <Link className="userInfo-dropdown-link">My Account</Link>
                  </div>
                  <div className="userInfo-dropdown-item">
                  
                    <IoLocationSharp className="userInfo-dropdown-ic" />
                    <Link className="userInfo-dropdown-link">
                      Order Tracking
                    </Link>
                  </div>
                  <div className="userInfo-dropdown-item">
                    <FaTicketSimple className="userInfo-dropdown-ic" />
                    <Link className="userInfo-dropdown-link">My Order</Link>
                  </div>
                  <div className="userInfo-dropdown-item">
                    <FaHeart className="userInfo-dropdown-ic" />
                    <Link className="userInfo-dropdown-link">My Wishlist</Link>
                  </div>
                  <div className="userInfo-dropdown-item">
                    <MdOutlineSettings className="userInfo-dropdown-ic" />
                    <Link className="userInfo-dropdown-link">Setting</Link>
                  </div>
                  <div className="userInfo-dropdown-item">
                    <FaSignOutAlt className="userInfo-dropdown-ic" />
                    <Link to="/login" className="userInfo-dropdown-link">Sign Out</Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button>Sign in</button>
          )}
        </div>
      </div>
      <hr />
      <div ref={headerSubRef} className="header__container__sub">
        <div
          ref={headerCategoryBrowserRef}
          className="header__container__sub__category"
        >
          <button onClick={handleCateShow}>
            <CiGrid41 style={{ fontSize: "20px", fontWeight: "bold" }} />
            Browse All Categories
            {isCateShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          <motion.ul
            initial={{ height: "400px", opacity: 1 }}
            animate={{ height: isFullShowCate ? "640px" : "400px" }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            style={{ display: isCateShow ? "flex" : "none" }}
            className="category__dropdown__container"
          >
            {categoryData.map((item, index) => {
              return (
                <motion.li
                  key={item.id}
                  className="category__dropdown__item"
                  initial={{ opacity: 0, y: -10, display: "none" }}
                  animate={{
                    opacity: isFullShowCate || index < 10 ? 1 : 0,
                    y: isFullShowCate || index < 10 ? 0 : -10,
                    display: isFullShowCate || index < 10 ? "flex" : "none",
                  }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <img src={item.icon} />
                  <p>{item.name}</p>
                </motion.li>
              );
            })}
            <button
              onClick={handleFullShow}
              className="category__dropdown__showButton"
            >
              {isFullShowCate ? (
                <CiCircleMinus className="category__dropdown__showButton_IC" />
              ) : (
                <CiCirclePlus className="category__dropdown__showButton_IC" />
              )}
              Show more...
            </button>
          </motion.ul>
        </div>
        <div className="header__container__sub__details">
          <div className="header__details-hover header__home">
            <Link
              style={{ textDecoration: "none" }}
              className="header__shop-text"
            >
              Home
            </Link>
          </div>
          <div className="header__details-hover header__about">
            <Link
              style={{ textDecoration: "none" }}
              className="header__shop-text"
            >
              About
            </Link>
          </div>
          <div className="header__details-hover header__shop">
            <Dropdown overlay={menuShop} trigger={["hover"]}>
              <a>
                <a
                  onClick={(e) => e.preventDefault()}
                  className="header__details-hover header__shop-text"
                >
                  Shop
                </a>{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="header__details-hover header__vendors">
            <Dropdown overlay={menuVendors} trigger={["hover"]}>
              <a>
                <a className="header__details-hover header__shop-text">
                  VenDors
                </a>{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className=" header__megamenu">
            <p className="header__details-hover megamenu__dropdown-open header__shop-text">
              Mega Menu <DownOutlined className="header__megamenu-icon" />
            </p>

            <div className="header__megamenu__dropdown">
              <div className="header__megamenu__dropdown-details">
                <div className="header__megamenu__dropdown-details__left">
                  <ul className="header__megamenu__dropdown-details-title">
                    Fruit & Vegetables
                    <li>
                      <a href="">Meat & Poultry</a>
                    </li>
                    <li>
                      <a href="">Fresh Vegetables</a>
                    </li>
                    <li>
                      <a href="">Herbs & Seasoning</a>
                    </li>
                    <li>
                      <a href="">Cuts & Sprouts</a>
                    </li>
                    <li>
                      <a href="">Exotic Fruits & Veggies</a>
                    </li>
                    <li>
                      <a href="">Packaged & Produce</a>
                    </li>
                  </ul>
                </div>
                <div className="header__megamenu__dropdown-details__middle">
                  <ul className="header__megamenu__dropdown-details-title">
                    Breakfast & Dairy
                    <li>
                      <a href="">Milk & Flavoured milk</a>
                    </li>
                    <li>
                      <a href="">Butter and Magarine</a>
                    </li>
                    <li>
                      <a href="">Eggs Substitutes</a>
                    </li>
                    <li>
                      <a href="">Marmalades</a>
                    </li>
                    <li>
                      <a href="">Sour cream</a>
                    </li>
                    <li>
                      <a href="">Cheese</a>
                    </li>
                  </ul>
                </div>
                <div className="header__megamenu__dropdown-details__right">
                  <ul className="header__megamenu__dropdown-details-title">
                    Meat & Seafoods
                    <li>
                      <a href="">Breakfast Sausage</a>
                    </li>
                    <li>
                      <a href="">Dinner Sausage</a>
                    </li>
                    <li>
                      <a href="">Chicken</a>
                    </li>
                    <li>
                      <a href="">Sliced Deli Meat</a>
                    </li>
                    <li>
                      <a href="">Wild Caught Fillets</a>
                    </li>
                    <li>
                      <a href="">Crab and Sellfish</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header__megamenu__dropdown-banner">
                <img alt="banner" src={megamenuBanner} />
                <p>HOT DEALS</p>
                <p>Don't Miss Trending</p>
                <button className="header__megamenu__dropdown-banner__btn">
                  Shop now
                </button>
                <div>25% off</div>
              </div>
            </div>
          </div>
          <div className="header__details-hover header__blog">
            <Dropdown overlay={menuBlogs} trigger={["hover"]}>
              <a>
                <a className="header__details-hover header__shop-text">Blog</a>{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="header__details-hover header__page">
            <p>Pages</p>
          </div>
          <div className="header__details-hover header__contact">
            <p>Contact</p>
          </div>
        </div>
        <div className="header__container__sub__support">
          <div style={{ width: "30px" }}>
            {" "}
            <FaHeadphones className="header__container__sub__support-icon" />{" "}
          </div>
          <div>
            <p
              style={{
                color: "var(--primary-color)",
                fontSize: "2.4rem",
                fontWeight: "bold",
              }}
            >
              1900 - 888
            </p>
            <p style={{ fontSize: "1.4rem", color: "#7e7e7e" }}>
              24/7 Support Center
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
