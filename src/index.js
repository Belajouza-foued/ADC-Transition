import ReactDOM from "react-dom/client";
import { Link, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
import Footer from "./components/footer/Footer";
import Contact from'./pages/Contact';
import Payment from'./pages/Payment';
import Avis from'./pages/Avis';
import Navbar from './components/navbar/Navbar';
import Candidat from './pages/Candidat';
import Entreprise from "./pages/Entreprise";
import Formation from "./pages/Formation";
import Projet from "./pages/Projet";
import Solution from "./pages/Solution";


export default function App(){
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}>
    <Route index element={<Home/>}/>
 <Route path="candidat" element={<Candidat/>}/> 
 <Route path="entreprise" element={<Entreprise/>}></Route>
 <Route path="contact" element={<Contact/>}></Route>
 <Route path="payment" element={<Payment/>}></Route>
 <Route path="avis" element={<Avis/>}></Route>
 <Route path="projet" element={<Projet/>}></Route>
 <Route path="formation" element={<Formation/>}></Route>
 <Route path="solution" element={<Solution/>}></Route>
  </Route>
</Routes>
<Footer/>
</BrowserRouter>


</>
  );
}
const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);