import React, { useState, useEffect, useRef } from "react";
import css from "../../Navbar.module.scss";
import Link from "next/link";
import ViberIcon from "../../icons/ViberIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import WhatsappIcon from "../../icons/WhatsappIcon";
import { PiMapPin, PiPhoneCall } from "react-icons/pi";

const BotMenu = ({ parsedMakes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null); // Хранит ключ текущего открытого элемента
  const [isAuctionsOpen, setIsAuctionsOpen] = useState(false); // Управляет выпадающим меню "Auctions"
  const [isContactOpen, setIsContactOpen] = useState(false);
  const menuRef = useRef(null); // Реф для меню
  const auctionMenuRef = useRef(null); // Реф для меню "Auctions"
  const contactRef = useRef(null); // Реф для меню "Auctions"
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
      // Закрываем меню, если клик был вне его области
      if (
        menuRef.current && !menuRef.current.contains(event.target) ||
        auctionMenuRef.current && !auctionMenuRef.current.contains(event.target) ||
        contactRef.current && !contactRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Закрывает основное меню
        setIsAuctionsOpen(false); // Закрывает меню "Auctions"
        setIsContactOpen(false);
      }
    };

    // Добавляем обработчик, если хотя бы одно меню открыто
    if (isMenuOpen || isAuctionsOpen || isContactOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isAuctionsOpen, isContactOpen]);

  // Функция для переключения выпадающего меню "Auctions"
  const toggleAuctionsMenu = () => {
    setIsAuctionsOpen((prev) => !prev);
  };

  const toggleContactMenu = () => {
    setIsContactOpen((prev) => !prev);
  };


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
                    <a href="/listings">
                      <span>View More</span> <i className="ri-arrow-right-fill"></i>
                    </a>
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
                      {estimatedCostItems.map((subItem, index) => (
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
                      {featuredItems.map((subItem, index) => (
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
          <div className={css.item} onClick={toggleAuctionsMenu}>
            <div className={css.item__head}>
              <div className={css.live}>Hot</div>
              <span>Auctions</span>
              <i className="ri-arrow-down-s-line"></i>
            </div>
            {isAuctionsOpen && (
              <div className={css.dropdownMenu} ref={auctionMenuRef}>
                <a href="/listings?auction=ia">IAAI</a>
                <a href="/listings?auction=co">Copart</a>
                <a href="/listings?auction=eu">Europe</a>
                <a href="/listings?status=open">Opened</a>
                <a href="/listings?buynow=true">Buy Now</a>
                <a href="/listings?status=archiv">Archived</a>
              </div>
            )}
          </div>
          <Link href="/faq" className={css.item}>
            <div className={css.item__head}>
              <span>FAQ</span>
            </div>
          </Link>
          <Link href="/about-us" className={css.item}>
            <div className={css.item__head}>
              <span>About Us</span>
            </div>
          </Link>
        </div>
        <div className={css.time}>7 am to 6 pm EST Mon - Fri</div>
        <div className={css.phone} onClick={toggleContactMenu}>
          <div className={css.phone__head}>
            <i className="ri-phone-line"></i>
            <span>+1 (770) 544-70-03</span>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          {isContactOpen && <div className={css.dropdown} ref={contactRef}>
            <div className={css.phone}><PiPhoneCall />+1 (770) 544-70-03</div>
            <div className={css.phone}><PiPhoneCall /> +1 (850) 319-34-67</div>
            <div className={css.address}><div className="icon">
              <PiMapPin /></div> <span>Bid N Drive Inc. <br />
                2305 Fourth st., <br />
                Tucker, GA 30084</span></div>
            <div className={css.email}>sales@auto4export.com</div>
            <div className={css.social}>
              <a href="/"><i className="ri-facebook-line"></i></a>
              <a href="/"><i className="ri-instagram-line"></i></a>
              <a href="/"><i className="ri-youtube-line"></i></a>
            </div>
          </div>}
        </div>
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
