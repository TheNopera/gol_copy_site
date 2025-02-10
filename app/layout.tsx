import React from 'react'
import '../styles/global.css'
import HomeNavbar from '../components/home-navbar'
import OutlinedBtn from '@/components/outlined-btn'
import FilledBtn from '@/components/filled-btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import InfoSubmenu from './_components/info-submenu'

export const metadata = {
  title: 'Gol copycat',
  description: 'this is a copycat of the gol website',
}



function RootLayout() {
  return (
      <html>
        <body>
          <div className='mx-auto max-w-7xl '>
            <header className='container flex flex-row flex items-center mt-[40px] justify-between'>
                <HomeNavbar/>
                <div className="header-voegol-btns flex flex-row justify-end gap-4 items-center">
                    <OutlinedBtn text={'Acessar Conta'} destination={'/login'}/>
                    <FilledBtn text={'Criar Conta'} destination={'/register'}/>
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </header>
        
          </div>
        </body>
      </html>
  )
}

export default RootLayout