import React from "react"
import Button from "../components/Button"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillBehanceCircle, AiFillLinkedin} from 'react-icons/ai';
import { SiGithub} from 'react-icons/si';
import Skills from "../components/Skills";
export default function Home() {
  return(
  <>


  <div className=" md:flex  items-center justify-center z-10 relative top-0" >
    <div className="py-5 text-center">
    <div>
        <StaticImage
          src="../assets/emilstudio.jpg"
          className=" md:hidden border-4 border-light    h-24 w-24 md:h-48 md:w-48 mb-8 "
          alt="image profile"
          width={500}
          height={500}
      />
      </div>
      <>
        <h1 className="text-4xl md:text-8xl   mb-4">Emil Gonzalez</h1>
        <h2 className="text-xl px-4  mb-12">UX/UI Designer - Frontend developer</h2>
        <div className="px-4 flex flex-col md:flex-row justify-center">
          <Button className="block mx-2 mb-2" variant="default"  href="https://www.linkedin.com/in/emilgonzalez/" target="_blank"><AiFillLinkedin className="mr-2 -ml-2"/>Linkedin</Button>
          <Button className="block mx-2 mb-2" variant="default" href="https://www.behance.net/emilgonzalez" target="_blank"><AiFillBehanceCircle className="mr-2 -ml-2"/>Behance</Button>
          <Button className="block mx-2 mb-2" variant="default"  href="https://github.com/emilrichardo" target="_blank"><SiGithub className="mr-2 -ml-2"/>Github</Button>
        </div>
      </>

    </div>
  </div>

  <Skills/>

<footer className="py-14 flex flex-col max-w-4xl mx-auto text-2xl">
<a className=" underline" href="mailto:emilrichardo@gmail.com">emilrichardo@gmail.com</a>
<a href="tel:+543855963936">+54 3855963936</a>


</footer>


  </>)
}
