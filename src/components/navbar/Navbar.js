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
           showEmployerBoard: false,
      showCandidatBoard:false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showEmployerBoard: user.roles.includes("ROLE_EMPLOYER"),        
        showCandidatBoard: user.roles.includes("ROLE_Candidat"),     
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
     
      showEmployerBoard: false,    
      showCandidatBoard: false,    
      currentUser: undefined,
    });
  }

 render () {
  const { currentUser, showEmployerBoard,showCandidatBoard } = this.state;

    return(
        <>     
            <ul>           
            {showCandidatBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/user-home'>User Home</Link>
            </li>
            )}
            {showEmployerBoard && (
              <li className="nav-item">
              <Link className="nav-link" to='/employer-home'>Employer Home</Link>
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

      
    
  
        <Outlet />
        </>
    )
    };
  }
export default Navbar;

