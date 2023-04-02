/* Core imports */
import React from 'react'
import Header from '../../components/templateParts/header/Header'
import Background from '../../components/templateParts/backgroundWebsite/BackgroundWebsite'

/* Components imports */
import SectionTitle from '../../components/global/SectionTitle'

/* Texts and styles imports */
import { titleText } from '../../utils/contactTexts'
import EmailLogo from '../../assets/images/contact/email.svg'
import InstaLogo from '../../assets/images/contact/instagram.svg'
import LinkLogo from '../../assets/images/contact/linkedin.svg'
import WhatsLogo from '../../assets/images/contact/whatsapp.svg'

import './style.scss'

export default function Contact() {
  return (
    <>
      <Background />
      <div className="container contact-page">
        <Header />

        <SectionTitle title={titleText.title} subtitle={titleText.subtitle} />

        <div className="contact-ways">
          <div className="contact-list">
            <div className="contact-item">
              <a className="contact-link" href="mailto:perez0593@gmail.com" target="_blank" rel="noreferrer">
                <div className="contact-item-icon">
                  <img src={EmailLogo} alt="Email me" className="contact-icon-img" />
                </div>
                <div className="contact-item-text">Email</div>
              </a>
            </div>
            <div className="contact-item">
              <a className="contact-link" href="https://www.linkedin.com/in/david-perez-barra/" target="_blank" rel="noreferrer">
                <div className="contact-item-icon">
                  <img src={LinkLogo} alt="Linked In" className="contact-icon-img" />
                </div>
                <div className="contact-item-text">Linked In</div>
              </a>
            </div>
            <div className="contact-item">
              <a className="contact-link" href="https://wa.me/34651651392" target="_blank" rel="noreferrer">
                <div className="contact-item-icon">
                  <img src={WhatsLogo} alt="WhatsApp" className="contact-icon-img" />
                </div>
                <div className="contact-item-text">WhatsApp</div>
              </a>
            </div>
            <div className="contact-item">
              <a className="contact-link" href="https://www.instagram.com/perez0593/" target="_blank" rel="noreferrer">
                <div className="contact-item-icon">
                  <img src={InstaLogo} alt="Instagram" className="contact-icon-img" />
                </div>
                <div className="contact-item-text">Instagram</div>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}
