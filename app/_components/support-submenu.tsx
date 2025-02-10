import React from 'react'

const SupportSubmenu = () => {
  return (
    <div className="submenu-voegol w-[1360px] h-[336px] bg-gray-100 rounded-[2vw] mt-8 p-[24px]">
        <div className="voegol-submenu-title pb-[24px]">
            Como podemos ajudar?
        </div>

        <div className='grid grid-cols-[184px_225px_225px_225px_225px] gap-3'>
            
            {/*MARK: COLUNA 1*/}
            <div className="col-span-[184px]">
                <div className="submenu-voegol-card bg-white rounded-[1vw] h-[240px] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/grading.svg" alt="grading-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Documentos para viajar de avião
                    </div>
                </div>
            </div>


            {/*MARK: COLUNA 2*/}
            <div className="col-span-1 grid grid-rows-2 gap-3">
                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/two-plane-roundtrip.svg" alt="two-plane-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Companhias aéreas parceiras
                    </div>
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/child-friendly.svg" alt="child-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Viajens com bebês de colo
                    </div>
                </div>
            </div>

            {/*MARK: COLUNA 3*/}
            <div className="col-span-1 grid grid-rows-2 gap-3">
                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/two-plane-roundtrip.svg" alt="two-plane-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Companhias aéreas parceiras
                    </div>
                </div>

                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/child-friendly.svg" alt="child-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Viajens com bebês de colo
                    </div>
                </div>
            </div>

            {/*MARK: COLUNA 4*/}
            <div className="col-span-1 grid grid-rows-2 gap-3">
                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/two-plane-roundtrip.svg" alt="two-plane-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Companhias aéreas parceiras
                    </div>
                </div>
            </div>

            {/*MARK: COLUNA 5*/}
            <div className="col-span-1 grid grid-rows-2 gap-3">
                <div className="submenu-voegol-card bg-white rounded-[1vw] p-[20px] flex flex-col justify-between cursor-pointer">
                    <div className="submenu-voegol-card-img flex">
                        <img src="/two-plane-roundtrip.svg" alt="two-plane-icon" />
                    </div>
                    
                    <div className="submenu-voegol-card-title flex flex-col">
                        Companhias aéreas parceiras
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default SupportSubmenu