"use client";
import React, { useState } from "react";
import ServicesNavbarCard from "../app/_components/services-navbar-card";
import InfoSubmenu from "@/app/_components/info-submenu";
import SupportSubmenu from "@/app/_components/support-submenu";
import BusinessSubmenu from "@/app/_components/business-submenu";

const HomeNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-[856px] h-[48px] bg-gray-100 px-[24px] rounded-full flex items-center relative z-50">
        <ul className="flex flex-row gap-10 items-center">
          <li className="relative ">
            <a href="/">
              <img src="/logo-gol.svg" alt="Logo" />
            </a>
          </li>

          <li className="relative hover:border-b-2 hover:border-orange-500">
            <a href="/check-in">Check-in</a>
          </li>

          <li className="relative hover:border-b-2 hover:border-orange-500">
            <a href="/my-travels">Minhas Viagens</a>
          </li>

          <li
            className={`relative hover:border-b-2 hover:border-orange-500 ${
              isServicesOpen ? "border-b-2 border-orange-500" : ""
            }`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="/services">Serviços</a>
          </li>

          <li className={`relative hover:border-b-2 hover:border-orange-500 ${isInfoOpen ? "border-b-2 border-orange-500" : ""}`}
          onMouseEnter={() => setIsInfoOpen(true)}
          onMouseLeave={() => setIsInfoOpen(false)}>
            <a href="/informations">Informações</a>
          </li>

          <li className={`relative hover:border-b-2 hover:border-orange-500 ${isSupportOpen ? "border-b-2 border-orange-500" : ""}`}
          onMouseEnter={() => setIsSupportOpen(true)}
          onMouseLeave={() => setIsSupportOpen(false)}>
            <a href="/support">Atendimento</a>
          </li>

          <li className={`relative hover:border-b-2 hover:border-orange-500 ${isBusinessOpen ? "border-b-2 border-orange-500" : ""}`}
          onMouseEnter={() => setIsBusinessOpen(true)}
          onMouseLeave={() => setIsBusinessOpen(false)}>
            <a href="/business">Negócios</a>
          </li>
        </ul>
      </nav>

      {/* MARK: SERVICES SUBMENU*/}
      <div
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
        className={`absolute top-[70%] left-0 mx-auto max-w-7xl transition-all duration-300 ${
          isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <ServicesNavbarCard />
      </div>

      {/* MARK: INFO SUBMENU*/}
        <div
            onMouseEnter={() => setIsInfoOpen(true)}
            onMouseLeave={() => setIsInfoOpen(false)}
            className={`absolute top-[70%] left-0 mx-auto max-w-7xl transition-all duration-300 ${
            isInfoOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
            <InfoSubmenu/>
        </div>
        
        {/* MARK: SUPPORT SUBMENU*/}
        <div
            onMouseEnter={() => setIsSupportOpen(true)}
            onMouseLeave={() => setIsSupportOpen(false)}
            className={`absolute top-[70%] left-0 mx-auto max-w-7xl transition-all duration-300 ${
            isSupportOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
            <SupportSubmenu/>
        </div>

        {/* MARK: BUSINESS SUBMENU*/}
        <div
            onMouseEnter={() => setIsBusinessOpen(true)}
            onMouseLeave={() => setIsBusinessOpen(false)}
            className={`absolute top-[70%] left-0 mx-auto max-w-7xl transition-all duration-300 ${
            isBusinessOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
            }`}>
            <BusinessSubmenu/>
        </div>
    </div>
  );
};

export default HomeNavbar;
