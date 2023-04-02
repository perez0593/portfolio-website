/* Core imports */
import React from 'react'
import Header from '../../components/templateParts/header/Header'
import Background from '../../components/templateParts/backgroundWebsite/BackgroundWebsite'

/* Components imports */
import SectionTitle from '../../components/global/SectionTitle'
import ProjectList from '../../components/projectList/ProjectList'

/* Texts and styles imports */
import { titleText, projects } from '../../utils/hardwareTexts'
import './style.scss'

export default function HardwareProjects() {
  return (
    <>
      <Background />
      <div className="container hardware-projects">
        <Header />

        <SectionTitle title={titleText.title} subtitle={titleText.subtitle} />

        <ProjectList projectList={projects} />
       
      </div>
    </>
  )
}
