"use client";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";
import css from "./Navbar.module.scss";
import { useReducer } from "react";
import ViberIcon from "./icons/ViberIcon";
import TelegramIcon from "./icons/TelegramIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import BotMenu from "./ui/BotMenu/BotMenu";
import ButtonMain from "../button/ButtonMain";
import Card from "./ui/Card/Card";
import { Container } from "../Container";
import CardMobile from "./ui/Card/CardMobile";

interface Make {
  id: number;
  name: string;
}
interface MakeWithCount extends Make {
  count: number;
}
interface MenuItemProps {
  title: string;
  isOpen?: boolean;
  toggle?: () => void;
  children?: ReactNode;
  href?: string;
}
interface NavbarProps {
  domain: string;
  currentUser: any;
  makes: any;
}
interface MenuState {
  menu: boolean;
  subMenu: boolean;
}
const initialState: MenuState = {
  menu: false,
  subMenu: false,
};
const reducer = (state: MenuState, action: { type: string; key: keyof MenuState }) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, [action.key]: !state[action.key] };
    case "CLOSE_ALL":
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
const MenuItem: React.FC<MenuItemProps> = ({ title, isOpen, toggle, children, href }) => (
  <div className={css.filter}>
    {href && <a href={href}>
      <span>{title}</span>
      {toggle && <i className={`ri-arrow-${isOpen ? "up" : "down"}-s-line`}></i>}
    </a>}
    {!href && <div aria-expanded={isOpen} role="button" tabIndex={0} onClick={toggle} className={css.filterHeader}>
      <span>{title}</span>
      {toggle && <i className={`ri-arrow-${isOpen ? "up" : "down"}-s-line`}></i>}
    </div>}
    {isOpen && <ul className={css.dropdown}>{children}</ul>}
  </div>
);
export const Navbar: React.FC<NavbarProps> = ({ domain, currentUser, makes }) => {
  const route = usePathname();
  const t = useTranslations();
  const [menuState, dispatch] = useReducer(reducer, initialState);
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null);
  const parsedMakes: Make[] = makes as Make[];
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  
  // Обновляем состояние при изменении размера окна
  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    {
      label: t("links.home"),
      href: "/home",
    },
    {
      label: t("links.listings"),
      href: "/listings",
    },
    {
      label: t("links.makes"),
      href: "/makes",
    },
    {
      label: t("links.blog"),
      href: "/blog",
    },
  ];
  const toggleSidebar = () => {
    setSidebar(prev => !prev);
  };
  // Закрытие при клике вне элемента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        setSidebar(false); // Закрыть элемент
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className={css.section}>
      <div className={`${css.top} ${currentUser ? '!tw-bg-[#223E70]' : ''}`}>
        <div className={css.top__inner + " tw-container tw-px-4"}>
          <a href="/" className={css.logo}>CarLogo</a>
          <div className={css.search + " " + css.large}>
            <input placeholder="Search vehicles by make, vin, lot" type="text" />
            <button>
              <i className="ri-search-line"></i>
            </button>
          </div>
          <div className={css.search + " " + css.small}>
            <input placeholder="Search" type="text" />
            <button>
              <i className="ri-search-line"></i>
            </button>
          </div>
          <div className={css.burger} onClick={toggleSidebar}>
            <i className="ri-menu-line"></i>
          </div>
          {currentUser ?
            <div className="tw-flex tw-gap-3 ">
              <ButtonMain icon="/images/navbar/icons/usicon.png" color="grey" variant="outlinend" classNames="border-1 p-3 text-center tw-w-[50px] max-desktop:tw-hidden" />
              <ButtonMain onClick={() => setProfile((e) => !e)} icon="/images/navbar/icons/profileicon.png" color="grey" variant="outlinend" classNames={`border-1 p-3 text-center tw-w-[50px] tw-ml-4 ${css.profile}`} />
              {profile ? (
                isMobile ? (
                  // Модальное окно для мобильной версии
                  <div className="tw-fixed tw-inset-0 tw-z-20">
                    <div
                      className={`tw-bg-black tw-opacity-75 tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-rounded-none`}
                      style={{ zIndex: -1 }} // Это создает фоновый блок с прозрачностью
                    ></div>
                    <div
                      className={`tw-z-10 tw-max-w-[300px] tw-w-full tw-bg-white tw-fixed tw-top-0 -tw-right-[300px] tw-h-full tw-rounded-l-[10px] 
            max-desktop:-tw-translate-x-full tw-translate-x-0 tw-transition-transform 
            tw-duration-300 tw-ease-in-out`}
                      style={{ boxShadow: '0 12px 24px 0 rgba(51, 51, 51, 0.2)' }}
                    >
                      <div className="tw-bg-white tw-py-[6px] tw-px-[14px] tw-absolute -tw-left-[50px] tw-top-[20px] tw-w-[34px] tw-h-[34px] tw-rounded-full" onClick={() => setProfile((e) => !e)}>
                        <img src="/images/navbar/icons/path.png" className="" />
                      </div>
                      <div className="tw-bg-[#223E70] tw-h-[130px] tw-w-full tw-p-[20px] tw-text-center tw-items-center tw-m-auto">
                        <div className="tw-flex tw-gap-[40px]">
                          <CardMobile
                            amount={23000}
                            title="Bayer Power"
                            icon="/images/navbar/icons/walleticon.png"
                          />
                          <CardMobile

                            amount={4}
                            title="Watchlist"
                            icon="/images/navbar/icons/staricon.png"
                          />
                        </div>
                        <ButtonMain icon="/images/navbar/icons/walletmoneyIcon.png" color="blue" text={"Make Deposite"} fullWidth={true} classNames={'tw-gap-2 tw-mt-[16px]'} />
                      </div>
                      <ul className="tw-mt-[40px] tw-list-none tw-p-0 tw-text-[#191919] tw-text-[18px] tw-gap-10 tw-flex tw-flex-col tw-p-[20px]">
                        <li>Dashboard</li>
                        <li>Transactions</li>
                        <li>Document and IDs</li>
                        <li>Billing Information</li>
                        <li>Watchlist</li>
                        <li>My Bids</li>
                        <li>Notifications</li>
                        <p className="tw-text-[18px] tw-m-0">Edit profile <img alt="edit" src="/images/navbar/icons/edit.png" /></p>
                        <p className="tw-text-[18px]">Logout <img alt="exit" src="/images/navbar/icons/exit.png" /></p>
                      </ul>

                      {/* <p className="tw-text-[16px]">Здесь другой контент для мобильных устройств.</p> */}
                    </div>
                  </div>

                ) : (
                  // Модальное окно для десктопной версии
                  <div className="tw-z-10 tw-max-w-[240px] tw-bg-white tw-absolute tw-top-[80px] tw-ml-[80px] tw-p-[30px] tw-rounded-[10px] max-desktop:-tw-ml-[150px]" style={{ boxShadow: '0 12px 24px 0 rgba(51, 51, 51, 0.2)' }}>
                    <div>
                      <div className="tw-flex tw-text-[18px] tw-h-[21px] tw-text-[#191919]">
                        <p className="">Hi,</p><p className="tw-font-bold">Huan Rodrigez</p>
                      </div>
                      <p className="tw-text-[16px]">Bidder #45457</p>
                    </div>
                    <ul className="tw-mt-[40px] tw-list-none tw-p-0 tw-text-[#191919] tw-text-[18px]">
                      <li>Dashboard</li>
                      <li>Transactions</li>
                      <li>Document and IDs</li>
                      <li>Billing Information</li>
                      <li>Watchlist</li>
                      <li>My Bids</li>
                      <li>Norifications</li>
                    </ul>
                    <p>Edit profile <img alt="edit" src="/images/navbar/icons/edit.png" /></p>
                    <p>Logout <img alt="exit" src="/images/navbar/icons/exit.png" /></p>
                  </div>
                )
              ) : null}
              <div className="tw-flex tw-justify-center tw-items-center tw-gap-[20px] max-desktop:tw-hidden">
                <Card
                  title="Bayer Power"
                  amount={23000}
                  icon="/images/navbar/icons/walleticon.png"
                />
                <Card
                  title="Watchlist"
                  amount={4}
                  icon="/images/navbar/icons/staricon.png"
                />
              </div>
              <ButtonMain icon="/images/navbar/icons/walletmoneyIcon.png" color="blue" text={"Make Deposite"} classNames={'tw-gap-2 max-desktop:tw-hidden'} />
            </div>
            : <div className={css.auth}>
              <a href="/login" className={css.login}>
                <span>Log In</span>
                <i className="ri-login-box-line"></i>
              </a>
              <a href="/login" className={css.signup}>
                <span>Sing Up</span>
                <i className="ri-user-shared-2-line"></i>
              </a>
            </div>}

        </div>
      </div>
      <BotMenu parsedMakes={parsedMakes} />
      <div ref={elementRef} className={css.sidebar + " " + `${sidebar ? css.open : ""}`}>
        <MenuItem
          title="Vehicle Finder"
          isOpen={menuState.menu}
          toggle={() => dispatch({ type: "TOGGLE", key: "menu" })}
        >
          <li onClick={() => dispatch({ type: "TOGGLE", key: "subMenu" })} className={css.dropdownItem}>
            Live Auctions
            <i className={`ri-arrow-${menuState.subMenu ? "up" : "down"}-s-line`}></i>
          </li>
          {menuState.subMenu && (
            <ul className={css.dropdown}>
              <li className={css.dropdownItem}>By Locations</li>
              <li className={css.dropdownItem}>Live Auctions</li>
              <li className={css.dropdownItem}>Auctions Calendar</li>
            </ul>
          )}
        </MenuItem>

        <MenuItem href="/faq" title="FAQ" />
        <MenuItem href="/about-us" title="About us" />
        <div className={css.auth}>
          <button className={css.login}>
            <span>Log In</span>
            <i className="ri-login-box-line"></i>
          </button>
          <button className={css.signup}>
            <span>Sing Up</span>
            <i className="ri-user-shared-2-line"></i>
          </button>
        </div>
        <div className={css.time}>7 am to 6 pm EST Mon - Fri</div>
        <div className={css.phone}>
          <i className="ri-phone-line"></i>
          <span>+1 (770) 544-70-03</span>
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
        <div className={css.phone}>
          <i className="ri-phone-line"></i>
          <span>+1 (850) 319-34-67</span>
        </div>
        <div className={css.adress}>
          <i className="ri-map-pin-line"></i>
          <span>
            Bid N Drive Inc. <br /> 2305 Fourth st., <br /> Tucker, GA 30084
          </span>
        </div>
        <div className={css.email}>sales@auto4export.com</div>
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
    </header>
  );
};
