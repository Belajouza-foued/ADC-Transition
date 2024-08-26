import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import '../pages/styles/Auth.css';
import '../pages/styles/Login.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import  {faEnvelope, faLock, faUser, faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import image1 from './images/logo-adc.png';

import AuthService from "../services/auth.service";

import { crudRouter } from '../Crud-router';
import { Link } from "react-router-dom";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);    
    this.state = {     
      email: "",
      showEmailIcon: true, 
      password: "",
      showPasswordIcon: true, 
      loading: false,
      message: ""
    };
  }
  
  onChangeEmail(e) {
    const email = e.target.value;
    this.setState({
      email: email,     
      showEmailIcon: email === ''
    });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({
 password: password,
 showPasswordIcon: password === ''
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.router.navigate("/profil");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="container-fluid card card-container">
        <div className="row">
      <div className="col-md-4 image-col">   
                  <img
            src={image1}
            alt="profile-img"
            className="img-fluid responsive-image"
          />
</div>
<div className="col-md-8 form-col p-0">
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
            className="form-position"
          >
            
            <div className="form-group one">
            <h4 className="title-sign">Sign in</h4>
            <label htmlFor="email" className="label-email">Email :</label>
            <div className="input-icon">
            {this.state.showEmailIcon && (
            <FontAwesomeIcon icon={faEnvelope} className="input-inside" />
          )}
              <Input
                type="text"
                className="form-control email-1"
                name="username"
                value={this.state.email}
                onChange={this.onChangeEmail}                
                validations={[required]}
              />
              </div>
            </div>
            <div className="form-group one">          
            <label htmlFor="password" className="label-password">password :</label>
            <div className="input-icon-password">
            {this.state.showPasswordIcon && (
            <FontAwesomeIcon icon={faLock} className="inside-password" />
          )}
                          <Input
                type="text"
                className="form-control password-1"
                name="username"
                value={this.state.password}
                onChange={this.onChangePassword}                
                validations={[required]}
              />
              </div>
            </div>
            
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            
<CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />    
            <span className="pass">Forgot your password?</span>
            <div className="new">
            <Link to={'/register'} className="new-link">Create new account</Link>
            </div>
            <div className="links">
            <Link to={'/candidat'} className="btn btn-primary btn-size candid form-control"><FontAwesomeIcon icon={faUser} className="icon-user" />New candidate</Link>          
            <Link to={'/employer'} className="btn btn-primary btn-size employ form-control"><FontAwesomeIcon icon={faHouseChimneyWindow}className="icon-house" />New employer</Link> 
            </div>
                      </Form>     
                      </div>                 
          
          </div>
        </div>
      
    );
  }
}

export default crudRouter(Login);