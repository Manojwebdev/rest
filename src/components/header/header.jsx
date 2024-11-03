import { useNavigate,useLocation } from "react-router";
import "./header.scss";
import { CiMenuBurger } from "react-icons/ci";

import restaurentLogo from "../../images/Flavours-of-Andhra_Logo-1-1.png";
import OrderNOwButton from "../order-nowButton";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const paths = {
    menuPath: "/app",
    aboutPath: "/more-about",
    homePath: "/",
  };

  const handleClick = (path) => {

    navigate(path);
  };
  const handleMenu = () => {
    const menu = document.getElementById("menu");
    if (menu.style.display !== "flex") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  };
  return (
    <header id="header" className="header">
    
      <section id="header-section1" className="header-section1">
        <div className="row header-container  flex flex-between ">
            <div className="header-logo-con">
              <img src={restaurentLogo} alt="" />
            </div>
              <ul className="header-nav-list flex">
             {['HOME','MENU','ABOUT','CONTACT'].map((item,index) =>(
              <li className="list"
               onClick={() => handleClick(paths[item.toLowerCase()+'Path'])}
              key={index}> {item} </li>
             )  )}
              </ul>
            <div className="header-buttons-ul flex">
              <li><OrderNOwButton /></li>
              <li className="header-buttons-ul-list burger"  onClick={handleMenu}>
                <CiMenuBurger className="icon"/>
              </li>
            </div>
        </div>
        

        <ul id="menu" className="flex flex-between" style={{ display: "none" }}>
         { ['HOME','MENU','ABOUT','CONTACT'].map((item,index) =>(
          <li 
           onClick={() => handleClick(paths[item.toLowerCase()+'Path'])}
          key={index}> <span
           className={location.pathname === paths[item.toLocaleLowerCase()+"Path"]  ? 'highlight-nav' : ''}

          >{item}</span> </li>
         ) )
          }
        </ul>
       
      </section>
      <section id="header-section2" className="header-section2"></section>
    </header>
  );
}
