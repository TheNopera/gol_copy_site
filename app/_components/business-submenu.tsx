import React from 'react'

const BusinessSubmenu = () => {
  return (
    <div className='voegol-submenu w-[1360px] h-[336px] bg-gray-100 rounded-[2vw] mt-8 p-[24px]'>
        <div className="voegol-submenu-title pb-[24px]">
            Conheça os benefícios 
        </div>
        
        <div className='grid grid-cols-[301px_301px_301px] gap-3'>
            {/*MARK: COLUNA 1*/}
            <div className="col-span-1">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-[240px] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/empresa.png" alt="company-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Para agências
                    </div>
                </div>
            </div>

            {/*MARK: COLUNA 2*/}
            <div className="col-span-1">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-[240px] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/predio.png" alt="building-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Para empresas
                    </div>
                </div>
            </div>
            
            {/*MARK: COLUNA 3*/}
            <div className="col-span-1">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-[240px] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/avião.svg" alt="plane-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Voebiz
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessSubmenu