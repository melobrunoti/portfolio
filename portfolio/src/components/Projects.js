import React from 'react'
import iconSet from "../images/selection.json";
import IcomoonReact from "icomoon-react";
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className='projects-section' id="projects">
      <h2 className='project-title'>Projetos</h2> 
      <div className='card-container'>
      {projects.map(({name, image}, index) => 
         <div key={index} className='project-card'>
            <div className='project-card__photo'>
               <img src={image} alt="imagem projeto cookit" ></img>
            </div>
            <div className='project-card__links-container'>
            <h2 className='project-card__title'>{name}</h2>
            <div className='project-card__links'>
               <button title='Github' href="https://github.com/melobrunoti">
                  <IcomoonReact iconSet={iconSet} icon='github' className="project-card__links__icon"/>
               </button>
               <button title='Live'>
                  <IcomoonReact iconSet={iconSet} icon='devices' className="project-card__links__icon"/>
               </button>
            </div>
            </div> 
         </div>
       )}
      </div>
    </div>
  )
}
