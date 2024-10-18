import { useState } from "react";
import menuItems from "../../data/data";

 export default function Bevarages(){
    const [category,setCategory] = useState('Beverages');
    const handleClick = (e) =>{
        let present_category = e.target.innerText;
        setCategory(present_category)
       
     }

    return (
        <div className="submenu-con row">
            <h1>Bevarages & Shakes</h1>
            <div className='submenu-list-con'>
                <ul className='submenu-list'>

                    <li  onClick={handleClick}>Beverages</li>
                    <li  onClick={handleClick}>Milk Shakes</li>
                    <li  onClick={handleClick}>Mocktail</li>
                    <li  onClick={handleClick}>Evening Snacks</li>
                    <li  onClick={handleClick}>Fresh Juice</li>
                    
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