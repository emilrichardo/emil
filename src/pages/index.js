import React from "react"
import Button from "../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillBehanceCircle, AiFillLinkedin} from 'react-icons/ai';
import { SiTailwindcss,SiBootstrap,SiCss3,SiSass,SiHtml5,SiJavascript,SiGatsby,SiNextdotjs,SiReact,SiWordpress,SiWoo,SiGit,SiFigma,SiAdobexd,SiAdobeillustrator,SiAdobephotoshop,SiDocker} from 'react-icons/si';
import SkillBar from "../components/SkillBar";




export default function Home() {
  return(
  <>


  <div className="text-center  h-screen   flex  items-center justify-center z-10 relative top-0" >

    <div className="py-5 ">

     <StaticImage
        src="../assets/emil.jpg"
        className=" md:hidden rounded-full h-24 w-24 md:h-44 md:w-44 mb-8 border-2 border-primary"
        alt="image profile"
        width={200}
        height={200}
     />
      <h1 className="text-4xl md:text-8xl  font-medium  mb-4">Emil Gonzalez</h1>
      <h2 className="text-xl md:text-2xl  mb-12">UX/UI Designer - Frontend developer</h2>

      <div className="flex justify-between mb-24">

        <SiCss3/>
        <SiSass/>
        <SiHtml5/>
        <SiJavascript/>
        <SiTailwindcss/>
        <SiBootstrap/>
        <SiGatsby/>
        <SiNextdotjs/>
        <SiReact/>
        <SiWordpress/>
        <SiWoo/>
        <SiGit/>
        <SiFigma/>
        <SiAdobexd/>
        <SiAdobeillustrator/>
        <SiAdobephotoshop/>
        <SiDocker/>
      </div>
      <Button className="block mx-2 mb-2" variant="primary mb-8" to="https://www.behance.net/emilgonzalez"><AiFillBehanceCircle className="mr-2 -ml-2"/>Behance</Button>
      <Button className="block mx-2 mb-2" variant="primary"  to="https://www.linkedin.com/in/emilgonzalez/"><AiFillLinkedin className="mr-2 -ml-2"/>Linkedin</Button>

      <footer className="py-24 flex flex-col">
      <a href="mailto:emilrichardo@gmail.com">emilrichardo@gmail.com</a>
      <a href="tel:+543855963936">+54 3855963936</a>
    </footer>
    </div>


  </div>


  </>)
}
