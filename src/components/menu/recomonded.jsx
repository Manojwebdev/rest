import menuItems from "../../data/data";
import '../../App.css';
import { useState } from "react";

export default function Recomonded(){
    const [category] = useState('Recommended');
   

    return (
        <div className="submenu-items-con">
        <ul className="submenu-items">
            {menuItems.filter((item) => item.category === category)
            .map((item) => (
                <li className='item'> <span className='name left'>
                {item.name}
           </span>
           <span className='line'></span>
               <span className='price right'>
                  {item.price} 
               </span>
               
               </li>
            ))
            }
        </ul>
        </div>
    )
}