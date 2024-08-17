import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
import Footer from "./components/footer/Footer";
import Login from'./pages/Login';
import Payment from'./pages/Payment';
import Avis from'./pages/Avis';
import Navbar from './components/navbar/Navbar';
import Candidat from './pages/Candidat';
import Entreprise from "./pages/Entreprise";
import Formation from "./pages/Formation";
import Projet from "./pages/Projet";
import Solution from "./pages/Solution";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import UserHome from "./pages/User.home";
import Employer from "./pages/Employer";


export default function App(){
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}>
    <Route index element={<Home/>}/>
 <Route path="candidat" element={<Candidat/>}/> 
 <Route path="entreprise" element={<Entreprise/>}></Route>
 <Route path="login" element={<Login/>}></Route>
 <Route path="payment" element={<Payment/>}></Route>
 <Route path="avis" element={<Avis/>}></Route>
 <Route path="projet" element={<Projet/>}></Route>
 <Route path="formation" element={<Formation/>}></Route>
 <Route path="solution" element={<Solution/>}></Route>
 <Route path="register" element={<Register/>}></Route>
 <Route path="profil" element={<Profil/>}></Route>
 <Route path="user-home" element={<UserHome/>}></Route>
 <Route path="home" element={<Home/>}></Route>
 <Route path="employer" element={<Employer/>}></Route>

  </Route>
</Routes>
<Footer/>
</BrowserRouter>


</>
  );
}
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);