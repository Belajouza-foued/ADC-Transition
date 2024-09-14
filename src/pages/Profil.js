import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Profil from "../pages/styles/Profil.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareTwitter, faFacebook, faSquareInstagram} from '@fortawesome/free-brands-svg-icons';


export default class Profile extends Component {
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

    const { currentUser } = this.state;

    return (
      <div className="profile">
        {(this.state.userReady) ?
        <div>
           
        <ul className="role-profil">
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
     
              <section class="vh-180">
  <div className="container no-border py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card">
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle img-profile" />
            </div>
            <header className="jumbotron">
          <h3 className="name-profile me-2">
            <strong>{currentUser.firstname}</strong>
          </h3>
                    <h3 className="last-profile ms-2">
          <strong>{currentUser.lastname}</strong>
          </h3>
          </header>
        
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
       
            <div class="mb-4 pb-2 icon-status">
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating ">
              <FontAwesomeIcon icon={faSquareInstagram} />
              </button>
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating">
              <FontAwesomeIcon icon={faSquareTwitter} />
              </button>
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-floating">
              <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
            
                         
            <div className="status me-3">
        <p>
          <strong>number:</strong>{" "}
          {currentUser.number }
        </p>
        <p className="me-3">
          <strong>levelGermany:</strong>{" "}
          {currentUser.levelGermany}
        </p>
        <p>
          <strong>experience:</strong>{" "}
          {currentUser.experience}
        </p>
        </div>
        <button className=" btn btn-danger nav-item">
                <Link to={"/"} className="nav-link" onClick={this.logOut}>LogOut</Link>
             </button> 
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
      </div>

      
    );
  }
}
