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
import { PiArrowRight } from "react-icons/pi";
import ListItem from "../ListItem/ui/ListItem";

interface Make {
  id: number;
  name: string;
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
}

interface MenuState {
  menu: boolean;
  subMenu: boolean;
  supportMenu: boolean;
  supportSubMenu: boolean;
}

const initialState: MenuState = {
  menu: false,
  subMenu: false,
  supportMenu: false,
  supportSubMenu: false,
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

export const Navbar: React.FC<NavbarProps> = ({ domain, currentUser }) => {
  const route = usePathname();
  const t = useTranslations();

  const [menuState, dispatch] = useReducer(reducer, initialState);

  const [sidebar, setSidebar] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const makes: Make[] = [];

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
      <div className={css.top}>
        <div className={css.top__inner + " tw-container"}>
          <div className={css.logo}>CarLogo</div>
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
        </div>
      </div>
      <div className={css.bot}>
        <div className={css.bot__inner + " tw-container"}>
          <div className={css.filter}>
            <i className="ri-search-line"></i>
            <span>Vehicle Finder</span>
            <i className="ri-arrow-down-s-line"></i>
            {/* <div className={css.bot__menu}>
              <div className={css.item}>
                <div className={css.item__header}>
                  <span>Popular Makes</span>
                  <i className="ri-arrow-right-s-line"></i>
                </div>
                <div className={css.item__content}>
                  <h3>Popular Makes</h3>
                  <ListItem label={"Harley-davidson"} value={"Honda"} />
                </div>
              </div>
              <div className={css.item}>
                <div className={css.item__header}>
                  <span>Vehicle Types</span> <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
              <div className={css.item}>
                <div className={css.item__header}>
                  <span>Title</span> <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
              <div className={css.item}>
                <div className={css.item__header}>
                  <span>Featured lots</span> <i className="ri-arrow-right-s-line"></i>
                </div>
              </div>
            </div> */}
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

        <MenuItem
          title="Support"
          isOpen={menuState.supportMenu}
          toggle={() => dispatch({ type: "TOGGLE", key: "supportMenu" })}
        >
          <li onClick={() => dispatch({ type: "TOGGLE", key: "supportSubMenu" })} className={css.dropdownItem}>
            Help Center
            <i className={`ri-arrow-${menuState.supportSubMenu ? "up" : "down"}-s-line`}></i>
          </li>
          {menuState.supportSubMenu && (
            <ul className={css.dropdown}>
              <li className={css.dropdownItem}>FAQ</li>
              <li className={css.dropdownItem}>Contact Support</li>
              <li className={css.dropdownItem}>Chat with Us</li>
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
