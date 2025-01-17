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
const MenuItem: React.FC<MenuItemProps> = ({ title, isOpen, toggle, children }) => (
  <div className={css.filter}>
    <div aria-expanded={isOpen} role="button" tabIndex={0} onClick={toggle} className={css.filterHeader}>
      <span>{title}</span>
      {toggle && <i className={`ri-arrow-${isOpen ? "up" : "down"}-s-line`}></i>}
    </div>
    {isOpen && <ul className={css.dropdown}>{children}</ul>}
  </div>
);
export const Navbar: React.FC<NavbarProps> = ({ domain, currentUser, makes }) => {
  // console.log(makes);
  const route = usePathname();
  const t = useTranslations();
  const [menuState, dispatch] = useReducer(reducer, initialState);
  const [sidebar, setSidebar] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const parsedMakes: Make[] = makes as Make[];

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
          <div className="tw-flex tw-gap-3">
            <ButtonMain icon="/images/navbar/icons/usicon.png" color="grey" variant="outlinend" classNames="border-1 p-3 text-center" />
            <ButtonMain icon="/images/navbar/icons/profileicon.png" color="grey" variant="outlinend" classNames="border-1 p-3 text-center" />
            <div className="tw-flex tw-justify-center tw-items-center tw-gap-[30px]">
              <Card
                title="Bayer Power"
                amount={23000}
                icon="/images/navbar/icons/walleticon.png" // Ссылка на иконку
              />
              <Card
                title="Watchlist"
                amount={4}
                icon="/images/navbar/icons/walleticon.png" // Ссылка на иконку
              />
            </div>
            <ButtonMain icon="/images/navbar/icons/walletmoneyIcon.png" color="blue" text={"Make Deposite"} classNames={'tw-gap-2'}/>
          </div>
          : <div className={css.auth}>
            <button className={css.login}>
              <span>Log In</span>
              <i className="ri-login-box-line"></i>
            </button>
            <button className={css.signup}>
              <span>Sing Up</span>
              <i className="ri-user-shared-2-line"></i>
            </button>
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

        <MenuItem title="FAQ" />
        <MenuItem title="About us" />
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
