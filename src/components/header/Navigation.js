import React from 'react'
import { Link } from 'gatsby';
import Button from '../Button';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Navigation = ({ menu, scrolled }) => {
    const colorLinks = {
        effect: " mx-5 text-dark font-medium hover:text-primary purple-700  uppercase tracking-widest cursor-pointer no-underline",
        default : " mx-5 text-dark font-medium hover:text-primary purple-700  uppercase tracking-widest cursor-pointer no-underline",
   }
    return (
    <nav className="md:ml-auto hidden md:flex flex-wrap items-center text-sm justify-center">
        <Link to="/"  className={scrolled ? colorLinks.default : colorLinks.effect }    >Menu link</Link>
        <Button   className="mx-5"  variant="primary"   >Menubutton</Button>
    </nav> );
}

export default Navigation;