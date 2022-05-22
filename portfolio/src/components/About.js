import React from 'react'
import iconSet from "../images/selection.json";
import IcomoonReact from "icomoon-react";
import Perfil from "../images/Perfil.jpg"
import skills from '../data/skills'

export default function About() {
 return (   
  <div className='about-section' id="about">
    <div className='about'>
      <div className='about__box'>
        <img src={Perfil} alt="foto perfil Bruno Melo" className='about__photo'></img>
        <h2 className="about__title title-effect">Sobre mim</h2>
      </div>
      <p className='about__paragraph' >Olá, Meu nome é Bruno Melo desenvolvedor Front-end, mas continuo meus estudos na Trybe para me tornar um desenvolvedor Web Full Stack.</p>
      <p className='about__paragraph'>A área de Back-end é incrível e estou gostando de desenvolver projetos nesse ambiente.</p>
      <p className='about__paragraph' >Apaixonado por tecnologia, 100% focado em aprimorar e adquirir novos conhecimentos! </p>
    </div>
    <div className='skills' >
      <h2 className='skills__title title-effect'>Conhecimentos</h2> 
      <div className='skills__container'>
      {skills.map(({ name, icon }, index) => 
        <div key={index} className='skills__box' >
         <IcomoonReact iconSet={iconSet}  icon={icon} className="skills__icon"/>
         <span>{name}</span>
         </div>
      )}
     </div>
      </div>
    </div>
  )
}
