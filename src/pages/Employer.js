import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import EmployerAuthService from "../services/employer.auth.service";
import './styles/Employer.css'
import image2 from "../pages/images/logo-adc.png"
import image3 from "../pages/images/profil.webp"

import { EmployerCrudRouter } from '../Crud-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const entreprise = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const number = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const city = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const education = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const lastname = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

 class EmployerRegister extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEntreprise = this.onChangeEntreprise.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    
    this.state = {
      username: "",      
      email: "",
      password: "",
      entreprise: "",
      number:"",
      city:"",   
      lastname:"",
      education:"",   
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  onChangeEntreprise(e) {
    this.setState({
      entreprise: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  onChangeEducation(e) {
    this.setState({
      education: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      EmployerAuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.number,
        this.state.entreprise,
        this.state.city,
        this.state.education,
        this.state.lastname,
      ).then(
        response => {
          this.props.router.navigate("/");
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
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
            <div className="container employer bg-primary-subtle">
          <div className="row">
          <div className="col-md-4 ps-0 img-employ">
          <img
            src={image2}
            alt="profile-img"
            className="image-employer"
          />
        </div>
<div className="col-8">
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
         <div className="row">
          <div className="col-6">
          <div className="profil-img">
          <img
            src={image3}
            alt="profile-img"
            className="image-profil"
          />
        </div>
        </div>
        
<div className="left me-5">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control cadre"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                </div>
               
                <div className="right">
                <div className="form-group">
                  <label htmlFor="entreprise">Entreprise</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="entreprise"
                    value={this.state.entreprise}
                    onChange={this.onChangeEntreprise}
                    validations={[required, entreprise]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="number"
                    value={this.state.number}
                    onChange={this.onChangeNumber}
                    validations={[required, number]}
                  />
                </div>
               
                <div className="form-group">
                  <label htmlFor="city">city</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                    validations={[required, city]}
                  />
                </div>
                </div>

                <div className="last">
                <div className="form-group">
                  <label htmlFor="education">Education</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="education"
                    value={this.state.education}
                    onChange={this.onChangeEducation}
                    validations={[required, education]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">last name</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    validations={[required, lastname]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-cadre">Sign Up</button>
                </div>
                </div>
               
              
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
          </Form>
          </div>
        </div>
      </div>
        );
  }
}
export default EmployerCrudRouter(EmployerRegister);