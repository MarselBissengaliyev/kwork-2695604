"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";
import css from "./Navbar.module.scss";

export const Navbar = ({ domain, currentUser }) => {
  const route = usePathname();
  const t = useTranslations();

  const [menu, setMenu] = useState(true);

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

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  return (
    <header className={css.section}>
      <div className={css.top}>
        <div className={css.top__inner + " container"}>
          <div className={css.logo}>CarLogo</div>
          <div className={css.search}>
            <input placeholder="Search vehicles by make, vin, lot" type="text" />
            <button>
              <i class="ri-search-line"></i>
            </button>
          </div>
          <div className={css.auth}>
            <button className={css.login}>
              <span>Log In</span>
              <i class="ri-login-box-line"></i>
            </button>
            <button className={css.signup}>
              <span>Sing Up</span>
              <i class="ri-user-shared-2-line"></i> 
            </button>
          </div>
        </div>
      </div>
      <div className={css.bot}>
        <div className="container"></div>
      </div>
    </header>
  );
};
