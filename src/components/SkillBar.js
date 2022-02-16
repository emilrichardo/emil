import React from 'react';
const SkillBar = (props) => {
    const {Icon,Tag,Percentage} = props

    return (
    <div className='content-barskills'>
        <h5 className='flex text-sm items-center'> <Icon className='mr-2'/>{Tag}</h5>
        <div className='barskill bg-dark border-4'>
            <div className=' h-1 bg-light' style={Percentage && {width:`${Percentage}%`}} >  </div>
        </div>
        <span className='hidden'>{Percentage} %</span>
    </div>
    );
}

export default SkillBar;