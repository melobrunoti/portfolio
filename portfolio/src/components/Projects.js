import React from 'react'
import iconSet from "../images/selection.json";
import IcomoonReact from "icomoon-react";
import {projects, backEndProjects } from '../data/projects'

export default function Projects() {
  return (
    <div className='projects-section' id="projects">
      <h2 className='project-title'>Projetos</h2> 
      <div className='card-container'>
      {projects.map(({name, image, git, liveRepo}, index) => 
         <div key={index} className='project-card'>
            <div className='project-card__photo'>
               <img src={image} alt='imagem projeto'></img>
            </div>
            <div className='project-card__links-container'>
            <h2 className='project-card__title'>{name}</h2>
            <div className='project-card__links'>
               <a title='Github' href={git} target="_blank" rel="noreferrer">
                  <IcomoonReact iconSet={iconSet} icon='github' className="project-card__links__icon"/>
               </a>
               <a title='Live' href={liveRepo} target="_blank" rel="noreferrer">
                  <IcomoonReact iconSet={iconSet} icon='devices' className="project-card__links__icon"/>
               </a>
            </div>
            </div> 
         </div>
       )}
       
      </div>
      <div className='card-container'>
      {backEndProjects.map(({name, image, git, liveRepo}, index) => 
         <div key={index} className='project-card'>
            <div className='project-card__photo'>
               <img src={image} alt='imagem projeto'></img>
            </div>
            <div className='project-card__links-container'>
            <h2 className='project-card__title'>{name}</h2>
            <div className='project-card__links'>
               <a title='Github' href={git} target="_blank" rel="noreferrer">
                  <IcomoonReact iconSet={iconSet} icon='github' className="project-card__links__icon"/>
               </a>
            </div>
            </div> 
         </div>
       )}
      </div>
    </div>
  )
}
