import React, {useState} from 'react'
import '../assets/css/Project.css'
import ProjectList from './ProjectList';
import projectsdata from '../assets/data/projects'


const Projects = () => {
    const [projects, setProjects] = useState(projectsdata)
    const handleDelete = (id) => {
      const newProjects = projects.filter(project => project.id !== id)
      setProjects(newProjects);
    }
  return (
    <div className="Project container">
      <ProjectList projects={projects} title = "PROJECTS" handleDelete={handleDelete}/>
      {/* <ProjectList projects={projects.filter((project) => project.author ==='tunguyen2')} title = "Tu Nguyen Projects" handleDelete={handleDelete}/> */}
    </div>
  )

}

export default Projects