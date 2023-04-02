import React from 'react'
import './style.scss'

export default function ProjectList({projectList}) {
  return (
    <>
    <div className="projects-container">
      <div className="projects-title">
        <h4>Projects</h4>
      </div>
      <div className="project-item-list-container">
        <div className="row">
          {projectList.map((project) => {
            const ButtonsAvaliables = project.demoLink || project.sourceCode;
              return (
                <div className="col-12 col-lg-6" key={project.id}>
                  <div className="project-item-container">
                    <div className="project-item-card">
                      <div className="project-item-name">
                        <h3>{project.name}</h3>
                      </div>
                      {project.image && 
                      <div className="project-item-image">
                        <img src={project.image} alt={`${project.name} homepage`}  />
                      </div>
                      }
                      
                      <div className="project-item-text">
                        <p>{project.description}</p>
                      </div>
                      {ButtonsAvaliables ?
                        <div className="project-item-buttons">
                          {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-light px-4">Live demo</a>}
                          {project.sourceCode && <a href={project.sourceCode} target="_blank" rel="noreferrer" className="btn btn-light px-4">Source Code</a>}
                        </div>
                        : null
                      }
                    </div>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </div>
    </>
  )
}