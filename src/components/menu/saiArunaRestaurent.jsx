import menuItems from "../../data/data";
import { useState } from "react";

export default function Cuisine(){
    const [category,setCategory] = useState('Parotta');
    const handleClick = (e) =>{
        let present_category = e.target.innerText;
        setCategory(present_category)
       
     }
    return (
        <div className="submenu-con row">
            <h1>Sai Aruna Restaurent</h1>
            <div  className='submenu-list-con'>
                <ul  className='submenu-list'>
                    <li onClick={handleClick}>Parotta</li>
                    <li onClick={handleClick}>Rice Variety</li>
                    <li onClick={handleClick}>Combos</li>
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