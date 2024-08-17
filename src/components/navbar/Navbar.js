import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import EventBus from "../../auth/Event";
import { Component } from "react";
import AuthService from "../../services/auth.service";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showInstructorBoard: false,
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showEmployerBoard: user.roles.includes("ROLE_EMPLOYER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showCandidateBoard: user.roles.includes("ROLE_CANDIDATE"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showCandidateBoard: false,
      showAdminBoard: false,
      showEmployerBoard: false,
      currentUser: undefined,
    });
  }

 render () {
  const { currentUser, showEmployerBoard, showAdminBoard ,showCandidateBoard} = this.state;

    return(
        <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand"to='/'>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/contact'>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>   
          <li className="nav-item"></li>
          <Link className="nav-link" to ='/register'>Register</Link>
        {currentUser && (
              <li className="nav-item">
              <Link className="nav-link" to='/user-home'>User home</Link>
            </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/admin-home'>Admin home</Link>
            </li>
            )}
            {showEmployerBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/employer-home'>Employer home</Link>
            </li>
            )}
            {showCandidateBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/candidate-home'>Candidate home</Link>
            </li>
            )}
                     {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profil"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">              

              
            </div>
          )}
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        <Outlet />
        </>
    )
    };
  }
export default Navbar;

