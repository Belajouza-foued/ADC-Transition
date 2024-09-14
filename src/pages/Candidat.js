import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import image2 from "../pages/images/logo-adc.png"
import CheckButton from "react-validation/build/button";
import Candidat from "../pages/styles/Candidat.css"
import { crudRouter } from '../Crud-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const vfirstname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The firstName must be between 3 and 20 characters.
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
const number = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The niveau must be between 3 and 20 characters.
      </div>
    );
  }
};
const birthday = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        The niveau must be between 3 and 20 characters.
      </div>
    );
  }
};
const adresse = value => {
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


const file = value => {
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
const levelEnglish = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const levelFrensh = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const levelGermany = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const drivingLicence = value => {
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
  const gender = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const experience = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The niveau must be between 3 and 20 characters.
        </div>
      );
    }
  };
  const speciality = value => {
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

 class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);    
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);   
    this.onChangeLevelEnglish = this.onChangeLevelEnglish.bind(this);   
    this.onChangeLevelFrensh = this.onChangeLevelFrensh.bind(this);   
    this.onChangeLevelGermany = this.onChangeLevelGermany.bind(this);   
   this.onChangeDrivingLicence = this.onChangeDrivingLicence.bind(this);
   this.onChangeLastname = this.onChangeLastname.bind(this);  
   this.onChangeGender = this.onChangeGender.bind(this);  
   this.onChangeExperience = this.onChangeExperience.bind(this); 
   this.onChangeSpeciality = this.onChangeSpeciality.bind(this);       
     
    this.state = {
      firstname: "",      
      email: "",
      number:"",
      birthday:"",
      adresse:"",
      password: "",
      education: "",
      file:"",
      city:"",
      levelEnglish:"",
      levelGermany:"",
      levelFrensh:"",
      drivingLicence:"",
      lastname:"",
      gender:"",
      experience:"",
      speciality:"",      
           successful: false,
      message: ""
    };
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    });
  }
  onChangeBirthday(e) {
    this.setState({
      birthday: e.target.value
    });
  }
  onChangeAdresse(e) {
    this.setState({
      adresse: e.target.value
    });
  }
  onChangeEducation(e) {
    this.setState({
      education: e.target.value
    });
  }
  onChangeFile(e) {
    this.setState({
      file: e.target.value
    });
  }
  
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  onChangeLevelEnglish(e) {
    this.setState({
      levelEnglish: e.target.value
    });
  }
  onChangeLevelFrensh(e) {
    this.setState({
      levelFrensh: e.target.value
    });
  }
  onChangeLevelGermany(e) {
    this.setState({
      levelGermany: e.target.value
    });
  }
   onChangeDrivingLicence(e) {
    this.setState({
      drivingLicence: e.target.value
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }
  onChangeExperience(e) {
    this.setState({
      experience: e.target.value
    });
  }
  onChangeSpeciality(e) {
    this.setState({
      speciality: e.target.value
    });
  }
    onChangePassword(e) {
    this.setState({
      password: e.target.value
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
        this.state.firstname,
        this.state.email,
        this.state.number,
        this.state.birthday,
        this.state.adresse,
        this.state.education,
        this.state.file,
        this.state.city,
        this.state.levelEnglish,
        this.state.levelFrensh,
        this.state.levelGermany,
        this.state.drivingLicence,
        this.state.lastname,
        this.state.gender,
        this.state.experience,
        this.state.speciality,
        this.state.password
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
      <div className="container candidat pe-5 bg-primary-subtle">
      <div className="row">
        <div className="col-md-4 ps-0 small-candid">
          <img
            src={image2}
            alt="profile-img"
            className="image-candid"
          />
        </div>
    
        <div className="col-md-8 group-form">
          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div className="row">
                <div className="col-md-5 first-col">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <Input
                      type="text"
                      className="form-control for"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={this.onChangeFirstname}
                      validations={[required, vfirstname]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control for"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="number">Number</label>
                    <Input
                      type="number"
                      className="form-control for"
                      name="number"
                      value={this.state.number}
                      onChange={this.onChangeNumber}
                      validations={[required, number]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="birthday">Date of Birth</label>
                    <Input
                      type="date"
                      className="form-control for"
                      name="birthday"
                      value={this.state.birthday}
                      onChange={this.onChangeBirthday}
                      validations={[required, birthday]}
                    />
                  </div>
    <div className="col-8">
                  <div className="form-group">
                    <label htmlFor="adresse" className="label-adresse">adresse</label>
                    <Input
                      type="text"
                      className="form-control adresse"
                      name="adresse"
                      value={this.state.adresse}
                      onChange={this.onChangeAdresse}
                      validations={[required, adresse]}
                    />
                  </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="education">Education Level</label>
                    <select
                     type="text"
                      className="form-control for"
                      name="education"
                      value={this.state.education}
                      onChange={this.onChangeEducation}
                      validations={[required, education]}
                      >
                    <option>bac+0</option>
                    <option>bac+1</option>
                    <option>bac+2</option>
                    <option>bac+3</option>
                    <option>bac+6</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="levelEnglish">Level English</label>
                    <select
                      className="form-control for"
                      name="levelEnglish"
                      value={this.state.levelEnglish}
                      onChange={this.onChangeLevelEnglish}
                      validations={[required, levelEnglish]}
                    >
                      <option value="A1">A1</option>
                      <option value="A2">A2</option>
                      <option value="B1">B1</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="levelGermany">Level Germany</label>
                    <select
                      className="form-control for"
                      name="levelGermany"
                      value={this.state.levelGermany}
                      onChange={this.onChangeLevelGermany}
                      validations={[required, levelGermany]}
                    >
                      <option value="A1">A1</option>
                      <option value="C2">C2</option>
                      <option value="C3">C3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="levelFrensh">Level Frensh</label>
                    <select
                      className="form-control for"
                      name="levelFrensh"
                      value={this.state.levelFrensh}
                      onChange={this.onChangeLevelFrensh}
                      validations={[required, levelFrensh]}
                    >
                      <option value="A1">A1</option>
                      <option value="C2">C2</option>
                      <option value="C3">C3</option>
                    </select>
                  </div>
                      </div>
    
                <div className="col-md-3 second-col">
                  <div className="form-group word">
                    <label htmlFor="lastname" className="word-last">lastname</label>
                    <Input
                      type="text"
                      className="form-control for"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={this.onChangeLastName}
                      validations={[required, lastname]}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control for"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      type="text"
                      className="form-control for"
                      name="gender"
                      value={this.state.gender}
                      onChange={this.onChangeGender}
                      validations={[required, gender]}
                  >
                    <option>male</option>
                    <option>female</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <Input
                      type="text"
                      className="form-control for"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChangeCity}
                      validations={[required, city]}
                    />
                  </div>
    
                 <div className="form-group experience">
                    <label htmlFor="experience">Experience</label>
                    <select
                      className="form-control for"
                      name="experience"
                      value={this.state.experience}
                      onChange={this.onChangeExperience}
                      validations={[required, experience]}
                    >
                      <option value="0-2">0-2</option>
                      <option value="2-4">2-4</option>
                      <option value="4-6">4-6</option>
                      <option value="6+">6+</option>
                    </select>
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="speciality">Speciality</label>
                    <select
                      type="text"
                      className="form-control for"
                      name="speciality"
                      value={this.state.speciality}
                      onChange={this.onChangeSpeciality}
                      validations={[required, speciality]}
                    >
                      <option>infogrfist</option>
                      <option>developer</option>
                      <option>marketing</option>
                      <option>design</option>
                      </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="drivingLicence">drivingLicence</label>
                    <select
                      type="text"
                      className="form-control for"
                      name="drivingLicence"
                      value={this.state.drivingLicence}
                      onChange={this.onChangeDrivingLicence}
                      validations={[required, drivingLicence]}
                    >
                    <option>yes</option>
                    <option>No</option>
                    </select>

                  </div>
    
                  <div className="form-group">
                    <label htmlFor="file">CV file</label>
                    <Input
                      type="file"
                      className="form-control for"
                      name="file"
                      value={this.state.file}
                      onChange={this.onChangeFile}
                      validations={[required, file]}
                    />
                  </div>
                  </div>
    <div className="col-8">
                  <div className="form-group w-100 ">
                  <button className="btn btn-primary btn-block full-width">Sign Up</button>
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
export default crudRouter(Register);