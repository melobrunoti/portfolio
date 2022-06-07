import React from 'react'
import iconSet from "../images/selection.json";
import IcomoonReact from "icomoon-react";
import Header from './Header';

export default function Home() {
  return (
    <div className='home' id="home">
      <Header/>
      <div className='main'>
       <h1 className='main__title'>Bruno Melo</h1>
        <h2 className='main__title-sub'>Front end developer | Full stack development student at Trybe.</h2>
        <a href="#about" className='btn'>Sobre Mim</a>
      </div>
      <div className='links-container'>
        <a className="links" href="https://github.com/melobrunoti" target="_blank" rel="noreferrer">
          <IcomoonReact iconSet={iconSet} icon='github'/>
        </a>
        <a className="links" href="https://www.linkedin.com/in/melobrunoti/" target="_blank" rel="noreferrer">
          <IcomoonReact iconSet={iconSet} icon='linkedin'/>
        </a>
      </div>
    </div>
  )
}
