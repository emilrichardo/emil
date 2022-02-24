import React from 'react';
export default function MainSkills() {
    return(
        <div className='flex  border-4 rounded-sm mb-8  border-dark'>

            <MainBar
            Skill="Design"
            Percentage="36"
            ClassName="bg-primary"
            />
            <MainBar
            Skill="Dev"
            Percentage="34"
            ClassName="bg-dark text-light"
            />
             <MainBar
            Skill="Product"
            Percentage="16"
            ClassName="bg-light"
            />
            <MainBar
            Skill="Branding"
            Percentage="14"
            />

        </div>
    )
};

export function MainBar ({Percentage,Skill,ClassName}){
    return (
        <div className={'relative md:px-4 last:border-r-0 ' + ClassName }  style={Percentage && {width:`${Percentage}%`}}>
            <h5 className=' text-sm truncate'>{Skill}  </h5>
            <small className='  text-lg font-bold   '>{Percentage}%</small>
        </div>
    )
}
