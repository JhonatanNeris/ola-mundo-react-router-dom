import React from 'react'

import { Outlet } from 'react-router-dom'

//Components
import Banner from '../Banner'
import Footer from '../Footer'

const PageDefault = () => {
  return (
    <main>
        <Banner/>

        {/* Rota a ser renderizada */}
        <Outlet/>

        <Footer />
    </main>
  )
}

export default PageDefault