
import 'bootstrap/dist/css/bootstrap.css'; 
import '../pages/styles/Register.css';
import image1 from './images/first.jpg';
import { Link } from "react-router-dom";
const Register = () => {
return(
<>
<div className="container-fluid bg-body-secondary">
<div className="row"> 
<div className="col-12"> 
<img src={image1} className="image-1" alt=""/>
<h1 className='welcome'>Join us</h1>
  </div>  
  <div className='col-8'>
    <h4 className='first-text'>Job Offers in Germany - Free Registration</h4>
    <p className='second-text'>Join Adc Transition.com for free and benefit from personalized support.</p>
    <h4 className='first-text'>Post a Job and Hire the Best Talent in Tunisia</h4>
    <p className='second-text'>Post your job listing and simplify your talent search with our assistance..</p>
    <h4 className='first-text'>Work with the Best Companies in German</h4>    
    <p className='second-text'>Optimize your CV online to stand out and land the ideal job.Candidates: Find the Job That Fits You</p>
  </div>
  <div className='col-4'>  
  <Link to={'/candidat'} className="btn btn-success btn-size candid form-control">Candidate</Link>
  <div>
  <Link to={'/employer'} className="btn btn-primary btn-size employ form-control">Employer</Link>
  </div>
  <span className='account'>Already have an account?</span>
  <Link to={'/login'} className='account-line'>Log in here</Link>
  </div>
  </div>
  </div>
</>

)

}
export default Register;