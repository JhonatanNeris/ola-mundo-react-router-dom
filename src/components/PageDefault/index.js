import React from 'react'

import { Outlet } from 'react-router-dom'

//Components
import Banner from '../Banner'

const PageDefault = ({children}) => {
  return (
    <main>
        <Banner/>

        {/* Rota a ser renderizada */}
        <Outlet/>
        {children}

    </main>
  )
}

export default PageDefault