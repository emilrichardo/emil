import React from "react"
import Layout from "../components/layouts/Layout";
import Button from "../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillBehanceCircle, AiFillLinkedin} from 'react-icons/ai';
import { SiGithub} from 'react-icons/si';
import Skills from "../components/Skills";



export default function Home() {
  return(
  <Layout>
  <div className="  z-10 relative top-0" >
    <div className="py-5">


        <h1 className="text-2xl font-medium	  md:mb-4">Emil González</h1>
        <h2 className="text-md md:text-xl  mb-4">UX/UI Designer - Frontend developer</h2>

        <div className="max-w-xl    mt-8 mb-12 ">
          <p>Frontend developer con más de 6 años de experiencia, orientado al aspecto visual estableciendo un nexo entre el Design System y el desarrollo frontend, mi principal objetivo es mejorar la manera en que las marcas gestionan su web branding a través de metodologías y tecnologías que faciliten el trabajo al diseñador y al desarrollador.
Actualmente trabajando creando sitios web Headless con tecnologías como:  Html/Css, Javascript, React js, Next js, Gatsby js, Tailwind, Boostrap, Wordpress (Gutemberg blocks, rest api). Tengo experiencia en el campo del diseño UX/UI y aunque mi principal función es el desarrollo frontend, entiendo la importancia de los detalles y por eso apuesto a la sistematización del diseño y la gestión dinámica del mismo.
</p>

          <p> I am currently part of the Frontends team at <a className="underline" rel="noreferrer" href="https://disruptivestudio.com/" target="_blank"> Disruptive Studio</a> where I perform tasks ranging from interface design, wireframes, prototyping, UX/UI, to Frontend development and platform implementation of various programming languages.</p>
        </div>

        <div className=" flex flex-col md:flex-row ">
          <Button className="block mx-2 mb-2" variant="default"  href="https://www.linkedin.com/in/emilgonzalez/" target="_blank"><AiFillLinkedin className="mr-2 -ml-2"/>Linkedin</Button>
          <Button className="block mx-2 mb-2" variant="default" href="https://www.behance.net/emilgonzalez" target="_blank"><AiFillBehanceCircle className="mr-2 -ml-2"/>Behance</Button>
          <Button className="block mx-2 mb-2" variant="default"  href="https://github.com/emilrichardo" target="_blank"><SiGithub className="mr-2 -ml-2"/>Github</Button>
        </div>


    </div>
  </div>


  </Layout>
  )
}
