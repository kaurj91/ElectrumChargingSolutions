import React from 'react'
import Footer from '../Footer'

export const Layout = ({children}) => {
    return (
        <div>
            <div>{children}</div>
            <Footer />
        </div>
    )
}


export default Layout