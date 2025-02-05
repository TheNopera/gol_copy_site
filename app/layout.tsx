import React from 'react'
import '../styles/global.css'
import HomeNavbar from '../components/home-navbar'
export const metadata = {
  title: 'Gol copycat',
  description: 'this is a copycat of the gol website',
}



function RootLayout() {
  return (
      <html>
        <body>
          <div className='main mx-[280px]'>
            <header>
                <HomeNavbar/>
            </header>
          </div>
        </body>
      </html>
  )
}

export default RootLayout