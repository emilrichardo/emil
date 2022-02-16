import React from "react"
import Button from "../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillBehanceCircle, AiFillLinkedin} from 'react-icons/ai';
import { SiTailwindcss,SiBootstrap,SiCss3,SiSass,SiHtml5,SiJavascript,SiGatsby,SiNextdotjs,SiReact,SiWordpress,SiWoo,SiGit,SiGithub,SiFigma,SiAdobexd,SiAdobeillustrator,SiAdobephotoshop,SiDocker} from 'react-icons/si';
import SkillBar from "../components/SkillBar";




export default function Home() {
  return(
  <>


  <div className="text-center  h-screen   md:flex  items-center justify-center z-10 relative top-0" >
    <div className="py-5 ">
    <div>
        <StaticImage
          src="../assets/emilstudio.jpg"
          className=" md:hidden border-4 border-light rounded-full h-24 w-24 md:h-48 md:w-48 mb-8 "
          alt="image profile"
          width={500}
          height={500}
      />
      </div>

      <h1 className="text-4xl md:text-8xl  font-medium  mb-4">Emil Gonzalez</h1>
      <h2 className="text-xl px-4  mb-12">UX/UI Designer - Frontend developer</h2>
      <div className="px-4 flex flex-col md:flex-row">
        <Button className="block mx-2 mb-2" variant="default"  to="https://www.linkedin.com/in/emilgonzalez/"><AiFillLinkedin className="mr-2 -ml-2"/>Linkedin</Button>
        <Button className="block mx-2 mb-2" variant="default" to="https://www.behance.net/emilgonzalez"><AiFillBehanceCircle className="mr-2 -ml-2"/>Behance</Button>
        <Button className="block mx-2 mb-2" variant="default"  to="https://github.com/emilrichardo"><SiGithub className="mr-2 -ml-2"/>Github</Button>
      </div>

      <footer className="py-14 flex flex-col">
      <a className=" underline" href="mailto:emilrichardo@gmail.com">emilrichardo@gmail.com</a>
      <a href="tel:+543855963936">+54 3855963936</a>

      <div className="flex flex-wrap  justify-evenly mt-24 px-4  ">
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
    </footer>
    </div>


  </div>


  </>)
}
