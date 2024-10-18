import menuItems from "../../data/data";
import { useState } from "react";

export default function Desert(){
    const [category,setCategory] = useState('Ice Creams');
    const handleClick = (e) =>{
        let present_category = e.target.innerText;
        setCategory(present_category)
       
     }
    return(
        <div className="submenu-con row">
            <h1>Desert</h1>
         <div  className='submenu-list-con'>
            <ul className='submenu-list'>
                <li onClick={handleClick}>Ice Creams</li>
                <li onClick={handleClick}>Sweets</li>
            </ul>
        </div>
           
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
        
        </div>
    )
}