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
                      {parsedMakes.map((make) => (
                        <div key={make.id} className={css.element}>
                          <b>{make.name}</b>
                          <div className={css.dots}></div>
                          <span>127</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("vehicleTypes")}
                >
                  <span>Vehicle Types</span>
                  <i
                    className={`ri-arrow-${activeItem === "vehicleTypes" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "vehicleTypes" && (
                  <div className={css.item__content}>
                    <h3>Vehicle Types</h3>
                    <div className={css.list}>
                      {/* Добавьте содержимое для Vehicle Types */}
                      <span>Vehicle types content goes here</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("title")}
                >
                  <span>Title</span>
                  <i
                    className={`ri-arrow-${activeItem === "title" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "title" && (
                  <div className={css.item__content}>
                    <h3>Title Content</h3>
                    {/* Добавьте содержимое для Title */}
                  </div>
                )}
              </div>
              <div className={css.item}>
                <div
                  className={css.item__header}
                  onClick={() => toggleItem("featuredLots")}
                >
                  <span>Featured lots</span>
                  <i
                    className={`ri-arrow-${activeItem === "featuredLots" ? "up" : "right"}-s-line`}
                  ></i>
                </div>
                {activeItem === "featuredLots" && (
                  <div className={css.item__content}>
                    <h3>Featured Lots</h3>
                    {/* Добавьте содержимое для Featured Lots */}
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
