import React from 'react';
import { Link } from "gatsby"
const sizes ={
    default:'text-lg py-2 px-8',
    sm:'text-md py-1 px-4',
}

const variants ={
    default:'text-light bg-primary hover:bg-primary-light',
    primary:'text-light bg-gradient-to-r from-primary-dark via-primary to-primary-light  hover:from-primary',
}
const Button = ({to,children, className , size, variant, target}) => {
    return (
    <Link
    to={to}
    target={target}
    className={`
    ${className}
    ${sizes[size] || sizes.default}
    ${variants[variant] || variants.default}
    inline-flex  items-center border-0 focus:outline-none rounded uppercase font-medium cursor-pointer
    `}>
        {children}
    </Link> );
}

export default Button;