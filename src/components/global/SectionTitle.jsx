import React from 'react'
import './SectionTitle.scss'

export default function SectionTitle({ title, subtitle }) {
  return (
    <>
        <div className="section-title-component">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
    </>
  )
}
