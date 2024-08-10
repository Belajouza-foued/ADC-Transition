import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import image15 from "../../pages/images/first.jpg";
import image16 from "../../pages/images/images (8).jpeg";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Example import from @fortawesome/free-brands-svg-icons
import { faSquareFacebook, faSquareTwitter,faSquareInstagram, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope ,faLocationDot,faSquarePhone} from '@fortawesome/free-solid-svg-icons';
const Navbar =() => {
    return(
        <>
        <nav class="navbar-1 mb-0 pb-0">
<div className='first container-fluid bg bg-dark-subtle'>
<div className='row'>
  <div className='col-4'>
    <form className='groupe'>
    <Link to="https://www.facebook.com" className="text-white mx-2"><FontAwesomeIcon icon={faSquareFacebook} className="mx-2social-icon" /></Link>
                        <Link to="https://www.twitter.com" className="text-white mx-2 "><FontAwesomeIcon icon={faSquareTwitter} className="mx-2social-icon" /></Link>
                        < Link to="https://www.linkedin.com" className="text-white mx-2 "><FontAwesomeIcon icon={faLinkedin} className=" mx-2social-icon" /></Link>
                      < Link to="https://www.instagram.com" className="text-white mx-2 "><FontAwesomeIcon icon={faSquareInstagram} className=" mx-2social-icon" /></Link>
                      </form>
  </div>
<div className="col-8">
  <div className="place"> 
    <span className="email-nav"><FontAwesomeIcon icon={faEnvelope} className="icon-nav" />contact@adc.com</span> 
    <span className="position"><FontAwesomeIcon icon={faLocationDot} className="icon-nav"/>Rue 200,Sousse</span>
    <span className="phonebook"><FontAwesomeIcon icon={faSquarePhone} className="icon-nav"/>51 452 230</span>
    </div> 
</div>

 
</div>
</div>
</nav>
       <nav className="navbar navbar-expand-lg bg-custom">        
  <div className="container-fluid">  
  <div>
      <img className="pict" src={image15} alt=""></img>
  </div>      
    <Link className="navbar-brand"to='/'>Home</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">       
        <li className="nav-item">
          <Link className="nav-link" to='/entreprise'>Entreprise</Link>
        </li>         
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/contact'>Contact</Link>
        </li>    
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/candidat'>Candidat</Link>
        </li>     
              </ul>                
            <select className="" >  
            <option value="/solution">Solution</option>
  <option value="/formation">Formation</option>
  <option value="/recruiting">Recruiting</option>
  <option value="/Project">Ourproject</option>
</select>
    </div> 
<div className="col-3"  >
             <div className="germany">
      <img className="flag" src={image16} alt=""></img>     
         <span className="g">G</span>
     <span className="e">E</span>
     <span className="r">R</span>
         </div>
      </div>
     
  </div>
</nav>
        <Outlet />
        </>
    )
    };
export default Navbar;

