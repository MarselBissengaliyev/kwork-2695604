"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";

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
    <>
      {/* Header */}
      <div className="bg-primary text-white">
        <div
          className="container d-flex justify-content-between align-items-center py-2 px-6"
          style={{ maxWidth: "1200px" }}
        >
          {/* Logo */}
          <Link href="/" className="d-flex align-items-center">
            <Logo>{domain}</Logo>
          </Link>

          {/* Search Input */}
          <div className="container d-flex justify-content-center align-items-center py-2">
            <div className="position-relative d-flex align-items-center w-75 rounded-3 p-2">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search vehicles by m"
                className="form-control border-0 rounded-pill text-muted"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              />

              {/* Search Button with Icon */}
              <button
                className="position-absolute end-0 btn btn-link p-0"
                style={{
                  border: "1px solid #DBDBDB",
                  borderRadius: "50%",
                  marginRight: "20px",
                  width: "34px",
                  height: "34px",
                }}
              >
                <i
                  className="ri-search-line text-muted"
                  style={{ fontSize: "20px", textDecoration: "none" }}
                ></i>
              </button>
            </div>
          </div>

          {/* Login & Sign In Buttons */}
          <div className="d-flex align-items-center border border-white bg-primary text-white rounded">
            <a
              href="/login"
              className="d-flex align-items-center px-4 py-2 text-decoration-none text-white border flex-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              Log In
              <i className="ri-login-circle-line ms-2"></i>
            </a>
            <a
              href="/sign-in"
              className="d-flex align-items-center px-4 py-2 text-decoration-none text-white border flex-nowrap"
              style={{ whiteSpace: "nowrap" }}
            >
              Sign In
              <i className="ri-user-add-line ms-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div className="bg-dark text-white">
        <div
          className="container d-flex justify-content-between align-items-center py-4 px-6"
          style={{ maxWidth: "1200px" }}
        >
          {/* Vehicle Finder */}
          <div className="d-flex align-items-center">
            {/* Search Icon */}
            <i className="ri-search-line text-white text-lg mr-2"></i>
            <select className="form-select bg-transparent border-0 text-white text-lg">
              <option>{t("vehicle_finder")}</option>
              {/* Other options can go here */}
            </select>
          </div>

          {/* Divider */}
          <div className="border-left border-light h-6 mx-4"></div>

          {/* Links */}
          <div className="d-flex space-x-6">
            <Link href="/auctions" className="text-white hover:text-gray-400">
              Auctions
            </Link>
            <div className="dropdown">
              <button className="btn btn-link text-white hover:text-gray-400">
                Support
              </button>
              {/* Dropdown */}
              <div className="dropdown-menu">
                <Link href="/support/faq" className="dropdown-item">
                  FAQ
                </Link>
              </div>
            </div>
            <Link href="/about-us" className="text-white hover:text-gray-400">
              About Us
            </Link>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center space-x-4">
            <span className="text-white">{t("working_hours")}</span>

            <div className="border-left border-light h-6 mx-4"></div>

            {/* Phone Number */}
            <div className="dropdown">
              <span className="text-white">+1 (770) 544-70-03</span>
              {/* Dropdown */}
              <div className="dropdown-menu">
                <div className="d-flex align-items-center space-x-2">
                  <span>+1 (770) 544-70-03</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="d-flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="ri-telegram-line text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="ri-facebook-line text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
