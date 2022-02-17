import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
import Favicon from "../../assets/favicon.svg"
const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Emil Gonzalez</title>
                <link rel="icon" href={Favicon} type="image/x-icon"></link>
            </Helmet>
            <Header  />
            <main className="min-h-max">
                {children}
            </main>
            <Footer/>
        </>
    );
}

export default Layout;