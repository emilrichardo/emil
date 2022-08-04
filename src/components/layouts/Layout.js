import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
import Favicon from "../../assets/favicon.svg"
import imageSocial from "../../assets/emilpixelado.png"
const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Emil Gonzalez</title>
                <link rel="icon" href={Favicon} type="image/x-icon"></link>
                <meta name="title" content="Emil Gonzalez - UX/UI Designer - Frontend developer"/>
                <meta name="description" content="I have almost 15 years of experience in the field of graphic/web design.   I specialize in UX/UI design, Front-End  and wordpress development."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://metatags.io/"/>
                <meta property="og:title" content="Emil Gonzalez - UX/UI Designer - Frontend developer"/>
                <meta property="og:description" content="I have almost 15 years of experience in the field of graphic/web design.   I specialize in UX/UI design, Front-End  and wordpress development."/>
                <meta property="og:image" content={imageSocial}/>


                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://metatags.io/"/>
                <meta property="twitter:title" content="Emil Gonzalez - UX/UI Designer - Frontend developer"/>
                <meta property="twitter:description" content="I have almost 15 years of experience in the field of graphic/web design.   I specialize in UX/UI design, Front-End  and wordpress development."/>
                <meta property="twitter:image" content={imageSocial}></meta>


            </Helmet>
            <Header  />
            <main className="min-h-max">
                {children}
            </main>

        </>
    );
}

export default Layout;