import React from 'react'

const ServicesNavbarCard = () => {
  return (
    <div className="container w-full h-[336px] bg-gray-100 rounded-[2vw] mt-8 p-[24px]">

        <div className="submenu-voegol-title pb-[24px]">
            Serviços GOL para você
        </div>
        
        <div className="grid grid-cols-6 gap-3">
            {/*MARK: COLUNA 1*/}
            <div className="col-span-1">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-[248px] p-[20px] flex flex-col justify-between ">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/bagagem.svg" alt="bagagem-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title">
                        Bagagem
                    </div>
  
                </div>
            </div>

            {/*MARK: COLUNA 2*/}
            <div className="col-span-1">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/event-seat.svg" alt="bagagem-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Assento GOL + Conforto
                    </div>
                </div>
            </div>
            
            {/*MARK: COLUNA 3*/}
            <div className="col-span-1 grid grid-rows-2 gap-3 ">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/more-info.svg" alt="bagagem-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Complemente sua viagem
                    </div>
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full  p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/credit-card.svg" alt="credit-card-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Cartão de crédito GOL online
                    </div>    
                </div>
            </div>
            
            {/*MARK: COLUNA 4*/}
            <div className="col-span-1 grid grid-rows-2 gap-3">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/escalator-warning.svg" alt="escalator-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Acompanhamento Voe Junto
                    </div>  
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/airline-seat-recline-normal.svg" alt="airline-seat-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Assento Extra
                    </div>   
                </div>
            </div>
            
            {/*MARK: COLUNA 5*/}
            <div className="col-span-1 grid grid-rows-2 gap-3 ">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/badge.png" alt="badge-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Serviço de bordo
                    </div>  
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/pets.svg" alt="pet-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Viajando com animais de estimação
                    </div>  
                </div>
            </div>

            {/*MARK: COLUNA 6*/}
            <div className="col-span-1 grid grid-rows-2 gap-3 ">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/smart-display.svg" alt="smart-display-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        GOL Online
                    </div>  
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] h-full p-[20px] flex  flex-col justify-between">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/plus.svg" alt="plus-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Mais Opções
                    </div>  
                </div>
            </div>


        </div>
    </div>
  )
}

export default ServicesNavbarCard