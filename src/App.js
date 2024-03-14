import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Cardcontainer from './component/Cardcontainer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <center>
    <div className = 'container'>
      <Header/>
      <Home/>
      <ToastContainer position="top-center"/>
    </div> 
    </center>
  );
}

export default App;
