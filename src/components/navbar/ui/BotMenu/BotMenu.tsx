import React, { useState, useEffect, useRef } from "react";
import css from "../../Navbar.module.scss";
import Link from "next/link";
import ViberIcon from "../../icons/ViberIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";

const BotMenu = ({ parsedMakes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // Хранит ключ текущего открытого элемента
  const menuRef = useRef(null); // Реф для меню
  const estimatedCostItems = [
    { label: "To 2000$", link: "/listings?estimated_cost_max=2000" },
    { label: "To 5000$", link: "/listings?estimated_cost_max=5000" },
    { label: "To 10000$", link: "/listings?estimated_cost_max=10000" },
    { label: "To 15000$", link: "/listings?estimated_cost_max=15000" },
    { label: "To 20000$", link: "/listings?estimated_cost_max=20000" },
    { label: "To 30000$", link: "/listings?estimated_cost_max=30000" },
    { label: "To 50000$", link: "/listings?estimated_cost_max=50000" },
    { label: "To 100000$", link: "/listings?estimated_cost_max=100000" },
    { label: "To 200000$", link: "/listings?estimated_cost_max=200000" },
  ];

  const featuredItems = [
    {
      label: "Finished today",
      link: "/listings?status=today"
    },
    {
      label: "Opened",
      link: "/listings?status=opened"
    },
    {
      label: "Buy now",
      link: "/listings?buy_now=true"
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Функция для переключения видимости item__content
  const toggleItem = (itemKey) => {
    setActiveItem((prev) => (prev === itemKey ? null : itemKey));
  };

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={css.bot}>
      <div className={`${css.bot__inner} tw-container`}>
        <div className={css.filter}>
          <div className={css.filter__head} onClick={toggleMenu}>
            <i className="ri-search-line"></i>
            <span className={css.clickable}>Vehicle Finder</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          {isMenuOpen && (
            <div className={css.bot__menu} ref={menuRef}>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("popularMakes")}
                >
                  <span>Popular Makes</span>
                  <i
                    className={`ri-arrow-${activeItem === "popularMakes" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "popularMakes" && (
                  <div className={css.item__content}>
                    <h3>Popular Makes</h3>
                    <div className={css.list}>
                      {parsedMakes.map((make: any) => (
                        <div key={make.id} className={css.element}>
                          <b>{make.name}</b>
                          <div className={css.dots}></div>
                          <span>127</span>
                        </div>
                      ))}
                    </div>
                    <a href="/listings"><span>View More</span> <i className="ri-arrow-right-fill"></i></a>
                  </div>
                )}
              </div>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("estimatedCost")}
                >
                  <span>Estimated cost</span>
                  <i
                    className={`ri-arrow-${activeItem === "vehicleTypes" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "estimatedCost" && (
                  <div className={`${css.item__content + " " + css.vehicleTypes}`}>
                    <h3>Estimated cost</h3>
                    <div className={css.list}>
                      {estimatedCostItems.length > 0 && estimatedCostItems.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.link}
                          className="tw-text-white tw-bg-blue-700 tw-hover:bg-blue-800 tw-focus:ring-4 tw-focus:ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-dark:bg-blue-600 tw-dark:hover:bg-blue-700 tw-focus:outline-none tw-dark:focus:ring-blue-800"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>

                )}
              </div>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("Featured")}
                >
                  <span>Featured</span>
                  <i
                    className={`ri-arrow-${activeItem === "Featured" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "Featured" && (
                  <div className={css.item__content}>
                    <h3>Featured</h3>
                    <div className={css.list}>
                      {featuredItems.length > 0 && featuredItems.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.link}
                          className="tw-text-white tw-bg-blue-700 tw-hover:bg-blue-800 tw-focus:ring-4 tw-focus:ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-dark:bg-blue-600 tw-dark:hover:bg-blue-700 tw-focus:outline-none tw-dark:focus:ring-blue-800"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={css.menu}>
          <div className={css.item}>
            <div className={css.live}>Live</div>
            <span>Auctions</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <div className={css.item}>
            <span>Support</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <Link href="/faq" className={css.item}>
            <span>FAQ</span>
          </Link>
          <Link href="/about" className={css.item}>
            <span>About us</span>
          </Link>
        </div>
        <div className={css.time}>7 am to 6 pm EST Mon - Fri</div>
        <div className={css.phone}>+1 (770) 544-70-03</div>
        <div className={css.social}>
          <a href="/" className={css.item}>
            <ViberIcon />
          </a>
          <a href="/" className={css.item}>
            <TelegramIcon />
          </a>
          <a href="/" className={css.item}>
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BotMenu;
