import React from 'react'
import iconSet from "../images/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import skills from '../data/skills'

export default function About() {
 return (   
  <div className='about-section'>
    <div className='about' >
      <h2 className="about__title">Sobre mim</h2>
      <p className='about__paragraph' >Olá, Meu nome é Bruno Melo, sou desenvolvedor Front end e estudante de desenvolvimento web full stack na trybe.</p>
      <p className='about__paragraph' >Apaixonado por tecnologia, 100% focado em aprimorar e adquirir novos conhecimentos! </p>
    </div>
    <div className='skills' >
      
      {skills.map(({ name, icon }, index) => 
        <div key={index} className='skill__box' >
         <IcomoonReact iconSet={iconSet} size={50} icon={icon}/>
         <span>{name}</span>
         </div>
      )}
     
      </div>
    </div>
  )
}
