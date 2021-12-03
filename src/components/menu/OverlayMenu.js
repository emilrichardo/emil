import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from "react-helmet"
;

import { VscChromeClose  } from "react-icons/vsc";

const OverlayMenu = ({ menuOpen, callback }) => {


    const MenuState = {
        show : "h-screen w-screen scale-100 py-4 top-0 ",
        hidden:"h-0 overflow-hidden scale-0 opacity-50 scale-y-105 py-0 top-0 right-0 "

}

    return (
        <div className={`${menuOpen ?MenuState.show : MenuState.hidden } "  px-4 fixed z-50 transition-all  " `}  menuOpen={menuOpen}>

            <Helmet>
                <body className={menuOpen ? " overflow-y-hidden " : " overflow-y-auto "} />
            </Helmet>

            <div className="h-full relative mx-auto flex flex-col   rounded   bg-light bg-opacity-80 text-dark z-50 px-12 py-14">
                <VscChromeClose
                  onClick={callback}
                  role="button"
                  tabIndex="0"
                  onKeyDown={callback}
                 className="absolute right-4 top-4 text-3xl transform  rotate-0 hover:rotate-180 transition-all cursor-pointer hover:scale-125 outline-none"
                />
                <nav className={menuOpen ?  "flex flex-col  opacity-100 delay-100" : " flex flex-col  opacity-0" } >
                    <Link to="/"  onClick={callback}    className= " text-dark text-xl  mt-4 "   onKeyDown={callback}>menu item</Link>
                    <Link to="/"  onClick={callback}    className= " text-dark text-xl  mt-4 "   onKeyDown={callback}>menu item</Link>
                    <Link to="/"  onClick={callback}    className= " text-dark text-xl  mt-4 "   onKeyDown={callback}>menu item</Link>
                </nav>


            </div>
        </div>
     );
}

export default OverlayMenu;