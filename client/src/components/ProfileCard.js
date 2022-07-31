import React from 'react'

import Cover from "../assets/img/cover.jpg";
import Profile from "../assets/img/profileImg.jpg";
import resume from "../assets/docs/TuResume.pdf"
import "../assets/css/ProfileCard.css"
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        {/* <span>Tu Nguyen (Will)</span> */}
        <span>Full Stack Development</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>100</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>10</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>28</span>
                <span>Repositories</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
      <div className="ProfileMe">
      <h6 className="text-end">My name is Tu Nguyen (Will), a web developer focused on full stack development.
      I am a hardworking and analytical individual who possesses strong problem-solving skills and a drive to learn new things. I have advanced knowledge in programming and web development. I am constantly looking to improve myself while growing in the computer science and technology fields.</h6>
          <div className="row text-center">
              <div className="col-md">
              <div className="text-center">
                    <a className="text-decoration-none text-danger" href={resume}> 
                    <h5>VIEW MY RESUME</h5>
                    </a>
                </div>
                  <div className="d-flex">
                      <h5>POSITION: </h5> 
                      <span>&nbsp;Freelance</span>
                  </div>
                  <div className="d-flex">
                      <h5>SKILL: </h5> 
                      <span>&nbsp;HTML5, CSS, JS, Python, React</span>
                  </div>
                  <div className="d-flex">
                      <h5>EXPERIENCE:</h5> 
                      <span>&nbsp;2+ Year</span>
                  </div>
                  <div className="d-flex">
                    <h5>LANGUAGES:</h5> 
                    <span> &nbsp;English & Vietnamese</span>
                </div>
                
              </div>
              
          </div>
          <div className="row g-4">
                    <div className="col-md">
                    <h2 className="text-center mb-4">Contact Info</h2>
                    <ul className="list-group list-group-flush lead">
                        <li className="list-group-item">
                        <span className="fw-bold"><i className="bi bi-person-lines-fill"></i> Address</span> 105 Maycroft Ct. Tyrone GA 30290
                        </li>
                        <li className="list-group-item">
                        <span className="fw-bold"><i className="bi bi-telephone-fill"></i> Phone:</span> (770) 402-6330
                        </li>
                        <li className="list-group-item">
                        <span className="fw-bold"><i className="bi bi-envelope-fill"></i> Email:</span> tuinfor@ymail.com
                        </li>
                    </ul>
                    </div>

                    
          </div>
      </div>
    </div>
  )
}

export default ProfileCard