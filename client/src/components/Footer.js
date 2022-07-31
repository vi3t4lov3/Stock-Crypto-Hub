import React from 'react'
import '../assets/css/Footer.css'

const Footer = ({gitRepos}) => {
  return (
    <div className=" box-shadow text-dark text-center">
        <div className="row my-3 text-center py-2">

            <div className="col-md">
                <div className="card">
                    <div className="card-header"><h5>Social Connect</h5></div>
                        <div className="card-body text-secondary my-footer-box footer-scoll">
                            <ul className="text-start">
                                 {/* <ul className="list-unstyled text-start">  */}
                                <li>
                                    <i className="bi bi-github"></i>
                                    <a href="https://github.com/vi3t4lov3">Github</a></li>
                                <li>
                                    <i className="bi bi-linkedin" alt="linkedin"></i>
                                    <a href="http://www.linkedin.com/in/tuknguyen">Linkedin</a></li>
                                <li>
                                    <i className="bi bi-twitter"></i>
                                    <a href="https://twitter.com/tuinfor/">Twiter</a></li>
                                <li>
                                    <i className="bi bi-facebook"></i>
                                    <a href="https://www.facebook.com/profile.php?id=100065658212067" >Facebook</a></li>
                            </ul>  
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card">
                    <div className="card-header"><h5>Learning Links</h5></div>
                        <div className="card-body text-secondary my-footer-box footer-scoll ">
                            <ul className=" text-start">
                                <li>
                                    <a href="https://www.w3schools.com">W3Schools</a></li>
                                <li>
                                    <a href="https://palettes.shecodes.io">CSS Color Palettes</a></li>
                                <li>
                                    <a href="https://www.freecodecamp.org/learn/responsive-web-design/">Free Code Camp</a></li>
                                <li>
                                    <a href="https://stackoverflow.com"> Stack Over Flow</a>
                                    </li>
                            </ul>   
                        </div>
                    </div>
                </div>

                <div className="col-md">
                    <div className="card">
                        <div className="card-header"><h5>Github Repositories <span id="total-repos"></span></h5></div>
                        <div id="my-repos" className="card-body text-secondary my-footer-box footer-scoll">
                           
                                <div className="card-body text-secondary my-footer-box">
                                <ul className=" text-start">
                                {gitRepos.map((repo) => (
                                    <li key={repo.id}>
                                        <a href={repo.html_url}>{repo.name}</a></li>
                                        ))}
                                </ul>   
                            </div>
                            
                          
                        </div>
                        </div>
        </div>
        <div>
            <p className="lead">Copyright &copy; 2022 By TuNguyen</p>
        </div>
        
        </div>
</div>
  )
}

export default Footer