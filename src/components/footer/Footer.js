import React from 'react';
import { Link,Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import image12 from "../../pages/images/contact.png";
import image13 from "../../pages/images/contact-1.png";
import image14 from "../../pages/images/contact – 2.png";
import image17 from "../../pages/images/first.jpg";
import image18 from "../../pages/images/images (8).jpeg";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Example import from @fortawesome/free-brands-svg-icons
import { faSquareFacebook, faSquareTwitter,faSquareInstagram, } from '@fortawesome/free-brands-svg-icons';



const Footer =() => {
    return(
        <>
            <footer className="footer bg-custom text-white text-center py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4 links-container">                          
                             <Link to='/entreprise' className="text-white mx-3 entreprise-1">Entreprise</Link>                                                        
                            <Link to='/payment' className="text-white mx-3 payment">Payments</Link>
                            <Link to='/candidat' className="text-white mx-3 candidat-1">Candidat</Link> 
                            <div className='styler'>
                            <p className='style-par'>mater-card</p>
                            <p className='style-par'>visa-card</p>
                            <p className='style-par'>Payoneer</p>


</div>
<div className='image-footer'>
                               <img src={image17} className="image-17" alt="..."/>
                               <img src={image18} className="image-18" alt="..."/>
                                </div>  
                               </div>                                           
                            <div className="col-4 title-f">
                        <h5>Suivez-nous</h5>
                        <Link to="https://www.facebook.com" className="text-white mx-2 social-icon"><FontAwesomeIcon icon={faSquareFacebook} /></Link>
                        <Link to="https://www.twitter.com" className="text-white mx-2 social-icon"><FontAwesomeIcon icon={faSquareTwitter} /></Link>
                        < Link to="https://www.instagram.com" className="text-white mx-2 social-icon"><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                        <div className="mt-3">
                    <p className='touch'>&copy; 2024 Votre Société. Tous droits réservés.</p>
                </div>
                    </div>
                    <div className="col-4">  
                        <div className='name-footer'>
                        <h4 >Advanced development center</h4>  
                        </div>
                        <div className='touch-f'>                                      
                        <h5 className='touch-c'>Contact</h5>
                        <p className='touch'>Email: example@example.com</p>
                        <p className='touch'>Téléphone: +123 456 7890</p>
                         </div> 
                        <div className='info'>
        <img src={image12} className="image-12" alt="..."/>
            <label className='info'>have a question Free 002167895</label>                    
            </div>            
            <div className='info-1'>
            <img src={image13} className="image-13" alt="..."/>
            <label className='info-email'>needhelp@company.com</label>    
            </div>
            <div className='info-2'>
            <img src={image14} className="image-14" alt="..."/>
            <label className='info-map'>place.germany</label>     
            </div>
                        
                    </div>
                
               
            </div>                  
                        </div>                   
                
            </footer>
            <Outlet/>
        </>
    )
    };
export default Footer;


