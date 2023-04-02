/* Core imports */
import React from 'react'
import Header from '../../components/templateParts/header/Header'
import Background from '../../components/templateParts/backgroundWebsite/BackgroundWebsite'

/* Components imports */
import SectionTitle from '../../components/global/SectionTitle'

/* Assets imports */
import DAMDoc from '../../assets/documents/Europass DAM.pdf'
import ASIXDoc from '../../assets/documents/Europass ASIX.pdf'
import SMXDoc from '../../assets/documents/Europass SMX.pdf'
import CVDoc from '../../assets/documents/DavidPerezBarra-CV.pdf'
import LPIDoc from '../../assets/documents/LPICertificate.pdf'
import GooglePlacesDoc from '../../assets/documents/Cert-GooglePlaces.pdf'
import JoomlaDoc from '../../assets/documents/Cert-Joomla.pdf'
import AndroidDoc from '../../assets/documents/Cert-Android.pdf'
import GephiDoc from '../../assets/documents/Cert-Gephi.pdf'
import FacebookDoc from '../../assets/documents/Cert-Facebook.pdf'

/* Texts and styles imports */
import { titleText, techSkills } from '../../utils/aboutTexts'
import './style.scss'

export default function About() {
  return (
    <>
      <Background />
      <div className="container about-page">
        <Header />

        <SectionTitle title={titleText.title} subtitle={titleText.subtitle} />

        <div className="text-zone">
          <div className="download-cv-button">
              <a className="btn btn-light"
                href={CVDoc}
                download="DavidPerezBarra-CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download my resume
              </a>
          </div>
        </div>

        <div className="skills-container">
          <h2 className="skills-title">Tech Skills</h2>
          <div className="skills-icons">
            {techSkills.map((skill, index) => {
              return (
                <>
                  <div className="skill-container">
                    <div className="skill-img-container">
                      <img
                        key={skill}
                        src={`./images/techskills/${skill.toLowerCase()}.svg`}
                        alt={`${skill} logo`}
                      />
                    </div>
                    <h6>{skill.charAt(0).toUpperCase() + skill.slice(1)}</h6>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <div className="education-container">
            <div className="education-title">
              <h4>Education and certificates</h4>
            </div>
            <div className="education-content">
              <div className="school-courses">
                <div className="courses-title">
                  <h4>Education courses</h4>
                </div>
                <div className="courses-content">
                  <ul>
                    <li>"Desarrollo de Aplicaciones Multiplataforma FPGS" or "Multiplatform Application Development (DipHE)" in english is an equivalent of an WO Bachelor title (like 3 years HBO) / <a href={DAMDoc} download="Europass DAM.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>"Administración de Sistemas y Redes FPGS" or "Systems and Network Administration (DipHE)" in english is an equivalent of an WO Bachelor title (like 3 years HBO) / <a href={ASIXDoc} download="Europass ASIX.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>"Sistemas Microinformáticos y Redes FPGM" or "Microcomputer systems and networks (CertHE)" in english is an equivalent of an WO title (like 2 years HBO) / <a href={SMXDoc} download="Europass SMX.pdf" target="_blank" rel="noreferrer">More info</a></li>
                  </ul>
                </div>
                
              </div>
              <div className="certificates">
                <div className="certificates-title">
                  <h4>Certificates</h4>
                </div>
                <div className="certificates-content">
                  <ul>
                    <li>Linux Professional Institue - Linux Essentials / <a href={LPIDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>Social Network Analysis (Gephi) @ Cibernarium, Barcelona / <a href={GephiDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>Facebook Application Creation @ Cibernarium, Barcelona / <a href={FacebookDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>Google Apps Administration @ Cibernarium, Barcelona / <a href={GooglePlacesDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>Joomla Creation and Maintenance @ Cibernarium, Barcelona / <a href={JoomlaDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                    <li>Android Application Creation @ Cibernarium, Barcelona / <a href={AndroidDoc} download="LPICertificate.pdf" target="_blank" rel="noreferrer">More info</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>

        <div className="testimonials-container">
            <div className="testimonials-title">
              <h4>Testimonials</h4>
            </div>
            <div className="testimonials-content">
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7029331160434438144" height="800" width="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
        </div>
        
      </div>
      </>
  )
}
