import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
export default function Header() {
    return(
        <nav className="flex justify-between py-4 px-4">
            <Link
            to='/'
            >
                <StaticImage
                src="../assets/favicon.svg"
                className=" h-12 w-12"
                alt="logo emil"
                />
            </Link>

            <span className="flex md:items-center flex-col md:flex-row   text-right">
            <a className="underline md:mr-4" href="mailto:emilrichardo@gmail.com">emilrichardo@gmail.com</a>
            <a href="tel:+543855963936">+54 3855963936</a>
            </span>
        </nav>
    )
};
