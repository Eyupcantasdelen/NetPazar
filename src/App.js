import { Footer, Navbar } from "./components";
import {Outlet,Navigate,Route,Routes,useLocations} from "react-router-dom"
function App() {
  return (
    <main>
      <Navbar></Navbar>
      <Footer></Footer>
    </main> 
  
  );
}

export default App;
