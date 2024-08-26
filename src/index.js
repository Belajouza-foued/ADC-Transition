import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from'./pages/Home';
import Footer from "./components/footer/Footer";
import Login from'./pages/Login';
import Spinner from './components/Spinner';
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
import CandidatHome from "./pages/Candidat.home";
import EmployerHome from "./pages/Employer.home"
import Employer from "./pages/Employer";
function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login';
  const hideFooter = location.pathname === '/login';
  

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet /> 
      {!hideFooter && <Footer />}
         
    </>
  );
}


export default function App(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez un délai de chargement avant d'afficher le contenu
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Ajustez la durée selon vos besoins

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return(
    <>   
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Login/>}/>
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
 <Route path="candidat-home" element={<CandidatHome/>}></Route>
 <Route path="home" element={<Home/>}></Route>
 <Route path="employer" element={<Employer/>}></Route>
 <Route path="employer-home" element={<EmployerHome/>}></Route>

  </Route>
</Routes>
</BrowserRouter>

</>
  );
}
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);