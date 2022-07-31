import React from 'react'

const ProjectList = ({projects, title, handleDelete}) => {
  // const projects = props.projects;
  // console.log(props, projects)
  return (
    <div className="Project-List ">
      <h1>{title}</h1>
        {projects.map((project) => (
        <div className="card bg-light text-dark p-1 py-2 my-2" key={project.id}>
          
          <div className="card-img">
              <h3 className="card-title">{project.title}<button className="btn btn-link" onClick={() => handleDelete(project.id)}>x</button></h3>
              <img src={project.img} width="100%" className="card-img" alt="..."></img>
              <h6 className="card-text">{project.description}</h6> 
              <p className="card-text small-text text-end">Code by {project.author}</p>
              <div className="text-end">
                <a className="btn btn-primary py-1 p-1 m-1" href={project.source}>View Code</a> 
                <a className="btn btn-primary py-1 p-1" href={project.demo}>Demo</a>
              </div>
          </div>
        </div> 
      ))}
    </div>


  )
}

export default ProjectList