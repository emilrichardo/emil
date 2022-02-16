import React from 'react';
import { Link } from "gatsby"
const sizes ={
    default:'text-lg py-2 px-8',
    sm:'text-md py-1 px-4',
}

const variants ={
    default:'text-dark bg-light hover:bg-dark hover:text-light border-4 border-dark',
    primary:'text-light bg-gradient-to-r from-primary-dark via-primary to-primary-light ',
}
const Button = ({to, href, children, className , size, variant, target}) => {

    if (href) {
        return(
            <a
            href={href}
            target={target}
            className={`
            ${className}
            ${sizes[size] || sizes.default}
            ${variants[variant] || variants.default}
            inline-flex  items-center  focus:outline-none   uppercase font-medium cursor-pointer
            `}>
                {children}
            </a>
        )
    } else{
        return(
            <Link
            to={to}
            target={target}
            className={`
            ${className}
            ${sizes[size] || sizes.default}
            ${variants[variant] || variants.default}
            inline-flex  items-center  focus:outline-none   uppercase font-medium cursor-pointer
            `}>
                {children}
            </Link>
        )
    }




}

export default Button;