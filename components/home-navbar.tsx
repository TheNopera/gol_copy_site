"use client";
import React, { useState } from "react";
import ServicesNavbarCard from "../app/_components/services-navbar-card";

const HomeNavbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-[856px] h-[48px] bg-gray-100 px-[24px] rounded-full flex items-center relative z-50">
        <ul className="flex flex-row gap-10 items-center">
          <li className="relative hover:border-b-2 hover:border-orange-500">
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
          <li className="relative hover:border-b-2 hover:border-orange-500">
            <a href="/informations">Informações</a>
          </li>
          <li className="relative hover:border-b-2 hover:border-orange-500">
            <a href="/support">Atendimento</a>
          </li>
          <li className="relative hover:border-b-2 hover:border-orange-500">
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
    </div>
  );
};

export default HomeNavbar;
