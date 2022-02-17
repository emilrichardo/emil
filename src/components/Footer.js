import React from 'react';
import { SiGithub} from 'react-icons/si';
export default function  Footer (){
    return (
        <footer className="p-4">
            <small className="flex items-center flex-col md:flex-row "><span>Developed with Gatsby Js + Tailwind CSS</span>
            <a href="https://github.com/emilrichardo/emil" className="underline" target="_blank"  rel="noreferrer"> <SiGithub className="ml-2 inline-block"/> View code </a>
            </small>
        </footer>
     );
}
