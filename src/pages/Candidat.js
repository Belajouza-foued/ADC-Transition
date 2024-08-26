import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import image2 from "../pages/images/logo-adc.png"
import Candidat from "./styles/Candidat.css"

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
const langue = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The niveau must be between 3 and 20 characters.
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
const niveau = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The niveau must be between 3 and 20 characters.
      </div>
    );
  }
};
const goverment = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const birthday = value => {
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
    this.onChangeNiveau = this.onChangeNiveau.bind(this);
    this.onChangeGoverment = this.onChangeGoverment.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeEntreprise = this.onChangeEntreprise.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeSite = this.onChangeSite.bind(this);    
    this.onChangeLangue = this.onChangeLangue.bind(this);  
    this.state = {
      username: "",      
      email: "",
      password: "",
      niveau: "",
      goverment:"",
      birthday:"",
      number:"",
      entreprise:"",
      langue:"",
      site:"",
      successful: false,
      message: ""
    };
  }
  onChangeLangue(e) {
    this.setState({
      langue: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  onChangeEntreprise(e) {
    this.setState({
      entreprise: e.target.value
    });
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
  onChangeNiveau(e) {
    this.setState({
      niveau: e.target.value
    });
  }
  onChangeGoverment(e) {
    this.setState({
      goverment: e.target.value
    });
  }
  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
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
        this.state.niveau,
        this.state.goverment,
        this.state.birthday,
        this.state.site,
        this.state.number,
        this.state.entreprise,
        this.state.langue,
      
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
          <img
            src={image2}
            alt="profile-img"
            className="image-2"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group two">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control bordure"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group two">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control bordure"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>
                <div className="form-group two">
                  <label htmlFor="entreprise">entreprise</label>
                  <Input
                    type="text"
                    className="form-control bordure"
                    name="entreprise"
                    value={this.state.entreprise}
                    onChange={this.onChangeEntreprise}
                    validations={[required, entreprise]}
                  />
                </div>
                <div className="form-group two">
                  <label htmlFor="number">Number</label>
                  <Input
                    type="number"
                    className="form-control bordure"
                    name="number"
                    value={this.state.number}
                    onChange={this.onChangeNumber}
                    validations={[required, number]}
                  />
                </div>
                <div className="form-group two">
                  <label htmlFor="site">Site</label>
                  <Input
                    type="text"
                    className="form-control bordure"
                    name="site"
                    value={this.state.site}
                    onChange={this.onChangeSite}
                    validations={[required, site]}
                  />
                </div>
                <div className="form-group two">
                  <label htmlFor="langue">langue</label>
                  <select
                    type="text"
                    className="form-control bordure"
                    name="langue"
                    value={this.state.langue}
                    onChange={this.onChangeLangue}
                    validations={[required, langue]}
                  >
                    <option className="english">English</option>
                    <option className="germany">Germny</option>
                    <option className="frensh">Frensh</option>
                    </select>
                </div>

                <div className="form-group two">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control bordure"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div className="form-group two">
                  <label htmlFor="niveau">Niveau</label>
                  <select
                    type="text"
                    className="form-control bordure"
                    name="niveau"
                    value={this.state.niveau}
                    onChange={this.onChangeNiveau}
                    validations={[required, niveau]}
                    >                      <option value="">Sélectionnez un niveau</option>
    <option value="sans bac">Sans bac</option>
    <option value="bac">Bac</option>
    <option value="bac+2">Bac+2</option>
    <option value="bac+3">Bac+3</option>
    <option value="bac+4">Bac+4</option>
                      </select>
                </div>
              
                <div className="form-group two">
                  <label htmlFor="goverment">Goverment</label>
                  <Input
                    type="text"
                    className="form-control bordure"
                    name="goverment"
                    value={this.state.goverment}
                    onChange={this.onChangeGoverment}
                    validations={[required, goverment]}
                  />
                </div>                
                <div className="form-group two">
                  <label htmlFor="entreprise">Date of Birth</label>
                  <Input
                    type="date"
                    className="form-control bordure"
                    name="date"
                    value={this.state.birthday}
                    onChange={this.onChangeBirthday}
                    validations={[required, birthday]}
                  />
                </div>


                <div className="form-group">
                  <button className="btn btn-primary btn-block push">Sign Up</button>
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
