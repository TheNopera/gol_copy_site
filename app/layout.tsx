import React from 'react'
import '../styles/global.css'
import HomeNavbar from '../components/home-navbar'
import OutlinedBtn from '@/components/outlined-btn'
import FilledBtn from '@/components/filled-btn'
export const metadata = {
  title: 'Gol copycat',
  description: 'this is a copycat of the gol website',
}



function RootLayout() {
  return (
      <html>
        <body>
          <div className='main mx-[8%]'>
            <header className='container flex flex-row flex items-center mt-[40px] justify-between'>
                <HomeNavbar/>
                
                <div className="header-voegol-btns flex flex-row justify-end gap-4">
                    <OutlinedBtn text={'Acessar Conta'} destination={'/login'}/>
                    <FilledBtn text={'Criar Conta'} destination={'/register'}/>
                    <i className="fa-regular fa-bell"></i>
                </div>
            </header>
          </div>
        </body>
      </html>
  )
}

export default RootLayout