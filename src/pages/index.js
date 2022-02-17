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
  <div className="md:flex  items-center justify-center z-10 relative top-0" >
    <div className="py-5 text-center">
    <div>
        <StaticImage
          src="../assets/emilpixelado.png"
          imgClassName="filter grayscale hover:grayscale-0"
          className="md:hidden  h-24 w-24 md:h-32 md:w-32 mb-8 "
          alt="image profile"
          placeholder="tracedSVG"
          width={75}
          height={75}
      />
      </div>
      <>
        <h1 className="text-4xl md:text-6xl font-medium	  md:mb-4">Emil González</h1>
        <h2 className="text-md md:text-xl px-4  mb-12">UX/UI Designer - Frontend developer</h2>
        <div className="max-w-4xl italic mx-auto  text-lg mb-12 hidden md:block">
          <p>I am Emil Gonzalez, I have almost 15 years of experience in the field of graphic/web design.</p>
          <p>I specialize in UX/UI design, Front-End development and wordpress development.</p>
          <p> I am currently part of the Frontends team at Disruptive Studio where I perform tasks ranging from interface design, wireframes, prototyping, UX/UI, to Frontend development and platform implementation of various programming languages.</p>
        </div>
        <div className="px-4 flex flex-col md:flex-row justify-center">
          <Button className="block mx-2 mb-2" variant="default"  href="https://www.linkedin.com/in/emilgonzalez/" target="_blank"><AiFillLinkedin className="mr-2 -ml-2"/>Linkedin</Button>
          <Button className="block mx-2 mb-2" variant="default" href="https://www.behance.net/emilgonzalez" target="_blank"><AiFillBehanceCircle className="mr-2 -ml-2"/>Behance</Button>
          <Button className="block mx-2 mb-2" variant="default"  href="https://github.com/emilrichardo" target="_blank"><SiGithub className="mr-2 -ml-2"/>Github</Button>
        </div>
      </>

    </div>
  </div>

  <Skills/>

  </Layout>
  )
}
