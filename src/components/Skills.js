import React from 'react';
import { SiTailwindcss,SiBootstrap,SiCss3,SiSass,SiHtml5,SiJavascript,SiGatsby,SiNextdotjs,SiReact,SiWordpress,SiWoo,SiGit, SiFigma,SiAdobexd,SiAdobeillustrator,SiAdobephotoshop,SiDocker} from 'react-icons/si';
import SkillBar from "../components/SkillBar";
import MainSkills from './MainSkills';
export default function Skills() {

    const Skills = [
        {
          tag : "CSS 3",
          icon : SiCss3,
          percentage: "85"
        },
        {
          tag : "Html 5",
          icon : SiHtml5,
          percentage: "95"
        },
        {
          tag : "JavaScript",
          icon : SiJavascript,
          percentage: "45"
        },
        {
          tag : "Sass",
          icon : SiSass,
          percentage: "50"
        },
        {
            tag : "Bootstrap 4",
            icon : SiBootstrap,
            percentage: "95"
          },
        {
          tag : "Tailwindcss",
          icon : SiTailwindcss,
          percentage: "70"
        },
        {
          tag : "React js",
          icon : SiReact,
          percentage: "40"
        },
        {
          tag : "Gatsby js",
          icon : SiGatsby,
          percentage: "65"
        },
        {
          tag : "Next js",
          icon : SiNextdotjs,
          percentage: "45"
        },
        {
          tag : "Frontity",
          icon : SiWordpress,
          percentage: "45"
        },
        {
          tag : "Docker",
          icon : SiDocker,
          percentage: "40"
        },
        {
          tag : "Wordpress",
          icon : SiWordpress,
          percentage: "90",
        },
        {
          tag : "Woocommerce",
          icon : SiWoo,
          percentage: "45",
        },
        {
          tag : "Git",
          icon : SiGit,
          percentage: "50",
        },
        {
          tag : "Figma",
          icon : SiFigma,
          percentage: "85",
        },
        {
          tag : "Adobe XD",
          icon : SiAdobexd,
          percentage: "48",
        },
        {
          tag : "Adobe Illustrator",
          icon : SiAdobeillustrator,
          percentage: "65",
        },
        {
          tag : "Adobe Photoshop",
          icon : SiAdobephotoshop,
          percentage: "75",
        }


      ]
    return(
        <div className="max-w-4xl mx-auto mt-8 px-4 py-10  ">
            <h2 className='text-4xl mb-4'>Skills</h2>
            <MainSkills/>
            <div className='mt-16 grid gap-4 grid-cols-2 md:grid-cols-3'>
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
