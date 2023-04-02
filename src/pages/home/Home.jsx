/* Core imports */
import React from 'react'
import Header from '../../components/templateParts/header/Header'
import Background from '../../components/templateParts/backgroundWebsite/BackgroundWebsite'

/* Texts and styles imports */
import ImageHero from '../../assets/images/home/profile-pic.jpeg'

import './style.scss'

export default function Home() {
  return (
    <>
    <Background />
    <div className="home-page">
      <Header />
      <div className="text-zone">
        <div className="profile-pic">
          <img src={ImageHero} alt="David Perez" className="profile-pic-img" />
        </div>
        <h1>
          Hoi! ik ben
          David Perez
        </h1>
        <h2>Full-Stack Developer</h2>
      </div>
    </div>
    </>
  )
}
