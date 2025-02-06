import React from 'react'

const HomeNavbar = () => {
  return (
        <nav className=' w-[856px] h-[48px] bg-gray-100 px-[24px] rounded-full flex items-center'>
                <ul className='flex flex-row gap-10 items-center'>
                  <li><a href="/"><img src="/logo-gol.svg" alt="" /></a></li>
                  <li><a href="Check-in">Check-in</a></li>
                  <li><a href="MyTravels">Minhas Viagens</a></li>
                  <li><a href="Services">Serviços</a></li>
                  <li><a href="Informations">Informações</a></li>
                  <li><a href="Support"></a>Atendimento</li>
                  <li><a href="Business"></a>Negócios</li>
                </ul>
        </nav>
  )
}

export default HomeNavbar