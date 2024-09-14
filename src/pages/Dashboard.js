

import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../pages/styles/Dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import {} from '@fortawesome/free-brands-svg-icons';
import { faChartPie,faUser,faClipboard,faUserTie,faBuildingColumns,faLocationDot,faCheck,faUserGraduate,faTableColumns,faGlobe,faMagnifyingGlass,faIdBadge } from '@fortawesome/free-solid-svg-icons';

import image10 from './images/logo-adc.png'
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
export default class Dash extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: "" }
          
        };
      }
    
      componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
    
        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, userReady: true })
      }
     
      logOut() {
        AuthService.logout();
        this.setState({      
         
          showEmployerBoard: false,    
          showCandidatBoard: false,    
          currentUser: undefined,
        });
      }
      render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
          }
      
      return(
         <>
<div className="wrapper">
    <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
      	<div className="sidebar-wrapper">
            <div className="logo">
               <Link to={'/home'} className="home-logo">
                    Home
                    </Link>
            </div>

            <ul className="nav">
                <li>
                    <Link to={"dashboard.html"} className="link-sidebar">
                    <FontAwesomeIcon icon={faChartPie} className="icon-sidebar me-3" />
                        Dashboard
                        </Link>
                </li>
                <li>
                <Link to={"user.html"} className="link-sidebar">
                <FontAwesomeIcon icon={faUser} className="icon-sidebar me-3"  />
                        User
                    </Link>
                </li>
                <li className="active">
                    <Link to={"note.html"} className="link-sidebar">
                    <FontAwesomeIcon icon={faClipboard} className="icon-sidebar me-3" />
                        Table List
                    </Link>
                </li>
                <li>
                    <Link to={'/profil'} className="link-sidebar">
                    <FontAwesomeIcon icon={faUserTie} className="icon-sidebar me-3"  />
            Candidates
                        </Link>
                </li>
                <li>
                    <Link to={'/employer'} className="link-sidebar">
                 <FontAwesomeIcon icon={faBuildingColumns}className="icon-sidebar me-3"  /> 
                    Employer       
                 </Link>
                </li>
              <li>
                    <Link to={'maps'} className="link-sidebar">
                    <FontAwesomeIcon icon={faLocationDot} className="icon-sidebar me-3" />
                       Maps
                        </Link>
                </li>
                <li>
                    <Link to={'notification'} className="link-sidebar">
                    <FontAwesomeIcon icon={faCheck} className="icon-sidebar me-3" />
            Notification
                    </Link>
                </li>
                <img src={image10} alt='dash' className="rounded-dash"></img>

				<li className="active-pro">
                    <Link to={'notification'} className="link-sidebar">
                    <FontAwesomeIcon icon={faUserGraduate}className="icon-sidebar me-3"  />
                        Up grade
                        </Link>
                </li>
            </ul>
    	</div>
    </div>

    <div className="main-panel">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid dashboard">
    <Link className="navbar-brand1"to='/globe'><FontAwesomeIcon icon={faGlobe} className='me-1' />Globe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link1 active" aria-current="page" to='/table'>
          <FontAwesomeIcon icon={faTableColumns} className='me-1' />Table List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link2" to='/profil'><FontAwesomeIcon icon={faIdBadge} className='me-1'/>Profil</Link>
        </li>        
       </ul>
       </div>
      <form className="d-flex" role="search">
             <input className="form-control me-2 search-form" type="search" placeholder="Search" aria-label="Search"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon-form'/>
         </form>
    </div>
 
</nav>

        <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Table of Candidats</h4>
                          </div>
                            <div className="content table-responsive table-full-width">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <th>ID</th>
                                    	<th>First Name</th>
                                    	<th>Last Name</th>
                                    	<th>Experience</th>
                                    	<th>Level Germany</th>
                                        <th>Number</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td>motaz</td>
                                        	<td>cherif</td>
                                        	<td>2-4</td>
                                            <td>C1</td>
                                        	<td>51665655</td>
                                        </tr>
                                        <tr>
                                        	<td>2</td>
                                        	<td>halabi</td>
                                        	<td>wissem</td>
                                        	<td>0-2</td>
                                            <td>A1</td>
                                        	<td>45789541</td>
                                            
                                        </tr>
                                        <tr>
                                        	<td>3</td>
                                        	<td>elyes</td>
                                        	<td>elyes</td>
                                        	<td>4-6</td>
                                            <td>B1</td>
                                        	<td>55682145</td>
                                        </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Hamdi</td>
                                        <td>nabli</td>
                                        <td>2-4</td>
                                        <td>B1</td>
                                        <td>20558745</td>
                                    </tr>
                                 </tbody>
                                </table>

                            </div>
                        </div>
                    </div>


                    <div className="col-md-12">
                        <div className="card card-plain">
                            <div class="header">
                                <h4 className="title">Table of employers</h4>
                           </div>
                           <div className="content table-responsive table-full-width">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <th>ID</th>
                                    	<th>First Name</th>
                                    	<th>Last Name</th>
                                    	<th>Experience</th>
                                    	<th>Level Germany</th>
                                        <th>Number</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td>motaz</td>
                                        	<td>cherif</td>
                                        	<td>2-4</td>
                                            <td>C1</td>
                                        	<td>51665655</td>
                                        </tr>
                                        <tr>
                                        	<td>2</td>
                                        	<td>halabi</td>
                                        	<td>wissem</td>
                                        	<td>0-2</td>
                                            <td>A1</td>
                                        	<td>45789541</td>
                                            
                                        </tr>
                                        <tr>
                                        	<td>3</td>
                                        	<td>elyes</td>
                                        	<td>elyes</td>
                                        	<td>4-6</td>
                                            <td>B1</td>
                                        	<td>55682145</td>
                                        </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Hamdi</td>
                                        <td>nabli</td>
                                        <td>2-4</td>
                                        <td>B1</td>
                                        <td>20558745</td>
                                    </tr>
                                 </tbody>
                                </table>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul className="footer-position">
                        <li>
                            <Link to="/home" className="blue-link">
                                Home
                            </Link>
                        </li>
                        <li>
                             <Link to="/company" className="blue-link">
                                Company
                            </Link>
                        </li>
                        <li>
                        <Link to="/portfolio" className="blue-link">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                        <Link to="/blog" className="blue-link">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <span className="pull-right" >
                    &copy; <script>document.write(new Date().getFullYear())</script> <a href="http://www.creative-tim.com">Adc-transition</a>, made with love for a better web
                </span>
                </nav>
                
            </div>
        </footer>


    </div>
</div>


         </>

      )
}
}

  

    
    

      

