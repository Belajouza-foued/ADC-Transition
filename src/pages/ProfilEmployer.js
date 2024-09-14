import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import employerAuthService from "../services/employer.auth.service";

export default class ProfilEmploye extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      employ: { username: "" }
      
    };
  }

  componentDidMount() {
    const employ = employerAuthService.getEmploy();

    if (!employ) this.setState({ redirect: "/home" });
    this.setState({ employ: employ, userReady: true })
  }
 
  logOut() {
    employerAuthService.logout();
    this.setState({      
     
      showEmployerBoard: false,    
      showCandidatBoard: false,    
      employ: undefined,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { employ } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{employ.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {employ.accessToken.substring(0, 20)} ...{" "}
          {employ.accessToken.substr(employ.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {employ.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {employ.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {employ.roles &&
            employ.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>: null}
      <li className="nav-item">
                <a href="/" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
      </div>
    );
  }
}
