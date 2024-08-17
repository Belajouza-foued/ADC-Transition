import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import './styles/Employer.css'
import image2 from "../pages/images/first.jpg"
import image3 from "../pages/images/Employe.png"


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
  const site = value => {
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

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEntreprise = this.onChangeEntreprise.bind(this);
    this.onChangeSite = this.onChangeSite.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.state = {
      username: "",      
      email: "",
      password: "",
      entreprise: "",
      number:"",
      site:"",      
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
  onChangeSite(e) {
    this.setState({
      site: e.target.value
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
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.number,
        this.state.entreprise,
        this.state.site
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
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
      <div className="col-md-12">
        <div className="card card-container">
            <div className="image-2">
          <img
            src={image2}
            alt="profile-img"
            
          /></div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div className="row">
                <div className="col-6">
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
                <div className="col-6">
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
                  <label htmlFor="site">Site</label>
                  <Input
                    type="text"
                    className="form-control cadre"
                    name="niveau"
                    value={this.state.site}
                    onChange={this.onChangeSite}
                    validations={[required, site]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-cadre">Sign Up</button>
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
      
    );
  }
}
