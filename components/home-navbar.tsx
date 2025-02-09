"use client";
import React from 'react'


const HomeNavbar = () => {
  return (
    <nav className='w-[856px] h-[48px] bg-gray-100 px-[24px] rounded-full flex items-center'>
      <ul className='flex flex-row gap-10 items-center'>
        <li>
          <a href="/"><img src="/logo-gol.svg" alt="" /></a>
        </li>
        {[
          { name: "Check-in", href: "Check-in" },
          { name: "Minhas Viagens", href: "MyTravels" },
          { name: "Serviços", href: "Services" },
          { name: "Informações", href: "Informations" },
          { name: "Atendimento", href: "Support" },
          { name: "Negócios", href: "Business" }
        ].map((item, index) => (
          <div key={index} className="relative group">
            <li className="cursor-pointer">
              <a href={item.href} className="relative">
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </div>
        ))}
      </ul>
    </nav>
  )
}

export default HomeNavbar
