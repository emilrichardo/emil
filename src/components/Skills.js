import React from 'react';
import { SiTailwindcss,SiBootstrap,SiCss3,SiSass,SiHtml5,SiJavascript,SiGatsby,SiNextdotjs,SiReact,SiWordpress,SiWoo,SiGit,SiGithub,SiFigma,SiAdobexd,SiAdobeillustrator,SiAdobephotoshop,SiDocker} from 'react-icons/si';
import SkillBar from "../components/SkillBar";
export default function Skills() {

    const Skills = [
        {
          tag : "CSS 3",
          icon : SiCss3,
          percentage: "90"
        },
        {
          tag : "Html 5",
          icon : SiHtml5,
          percentage: "95"
        },
        {
          tag : "JavaScript",
          icon : SiJavascript,
          percentage: "65"
        },
        {
          tag : "Sass",
          icon : SiSass,
          percentage: "75"
        },
        {
          tag : "Tailwindcss",
          icon : SiTailwindcss,
          percentage: "79"
        },
        {
          tag : "React js",
          icon : SiReact,
          percentage: "55"
        },
        {
          tag : "Gatsby js",
          icon : SiGatsby,
          percentage: "65"
        },
        {
          tag : "Next js",
          icon : SiNextdotjs,
          percentage: "56"
        },
        {
          tag : "Docker",
          icon : SiDocker,
          percentage: "40"
        },
        {
          tag : "Wordpress",
          icon : SiWordpress,
          percentage: "85",
        },
        {
          tag : "Woocommerce",
          icon : SiWoo,
          percentage: "45",
        },
        {
          tag : "Git",
          icon : SiGit,
          percentage: "68",
        },
        {
          tag : "Figma",
          icon : SiFigma,
          percentage: "85",
        },
        {
          tag : "Adobe XD",
          icon : SiAdobexd,
          percentage: "78",
        },
        {
          tag : "Adobe Illustrator",
          icon : SiAdobeillustrator,
          percentage: "90",
        },
        {
          tag : "Adobe Photoshop",
          icon : SiAdobephotoshop,
          percentage: "80",
        }


      ]
    return(
        <div className="max-w-4xl mx-auto mt-24 px-4 border py-20 border-r-0 border-l-0 ">
            <h2 className='text-4xl mb-4'>Skills</h2>
            <div className='grid gap-4 grid-cols-2 md:grid-cols-2 '>
                {Skills.map((Skill, i)=> (
                <SkillBar
                Tag={Skill.tag}
                key={i}
                Icon={Skill.icon}
                Percentage={Skill.percentage}
                />
                )) }
            </div>
      </div>
    )
};
