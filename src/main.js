
import App from "./App";
import'./App.css'



import {Routes, Route, useNavigate ,useLocation} from "react-router-dom";
import About from "./components/about/about";
import MoreAbout from "./components/about/aboutMore";
import Header from "./components/header/header";
import SwiggyZomatoButtons from "./components/zomato-swiggy-buttons";
import Recomonded from "./components/menu/recomonded";



export default function Main() {


  
  
  return (
    <>
    
     <Header />
      <Routes>
        
      <Route path="/" element={<MainSub  />} />
        <Route path="/app" element={<App  />} />
        <Route path="/more-about" element={<MoreAbout /> } />
      
      </Routes>
      
      
    </>
  );
}

function MainSub(){
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/app"); 
     
  };
  return(  
  <div className="main">
  <SwiggyZomatoButtons />
  <button className="button" onClick={handleClick}>Browse Our Menu</button>
  <About />
  <section className="row section ">
    <div>
      <label className="posterFont">Menu</label>
      <h2></h2>
    </div>
  <Recomonded/>
  </section>
  
 
    
  </div>
   
  )
}
