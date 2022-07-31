import React from 'react'
import ReactIcon from '../assets/img/React.png'
import NodeIcon from '../assets/img/NodeJs.png'
import Js from '../assets/img/Js.png'
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/CSS.png'
import Python from '../assets/img/Python.png'
import Mongodb from '../assets/img/mongodb.png'
import '../assets/css/Skill.css'
const Skills = () => {
  return (
    <div className="Skill">
      <div className="">
        <img className="" src={Js} alt="" />
        <div className="">
        <h5 className="text-center">Javascript</h5>
        </div>
      </div>
      <div className="">
        <img className="" src={HTML} alt="" />
        <div className="">
        <h5 className="text-center">HTML</h5>
        </div>
      </div>
      <div className="">
        <img className="" src={CSS} alt="" />
        <div className="">
        <h5 className="text-center">CSS</h5>
        </div>
      </div>
      <div className="">
        <img className="" src={Python} alt="" />
        <div className="">
        <h5 className="text-center">Python</h5>
        </div>
      </div>

      <div className="">
        <img src={ReactIcon} alt="" />
        <div className="">
        <h5 className="text-center">React</h5>
        </div>
      </div>

      <div className="">
        <img className="text-center" src={NodeIcon} alt="" />
        <div className="">
        <h5 className="text-center">NodeJs</h5>
        </div>
      </div>
      <div className="">
        <img className="text-center" src={Mongodb} alt="" />
        <div className="">
        <h5 className="text-center">Mongodb</h5>
        </div>
      </div>
      


    </div>
  )
}

export default Skills