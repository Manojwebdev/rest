import { useState } from "react";
import menuItems from "../../data/data";

export default function SouthIndian() {
  const [category, setCategory] = useState("South Indian");

  const handleClick = (e) => {
    let present_category = e.target.innerText;
    setCategory(present_category);
  };

  return (
    <div className="submenu-con row">
      <div>
        <p className="poster-font">Menu</p>
        <h1>Non-Veg</h1>
      </div>

      <div className="submenu-list-con">
        <ul className="submenu-list">
          <li onClick={handleClick}>South Indian</li>
          <li onClick={handleClick}>Dosa</li>
          <li onClick={handleClick}>Uttapam</li>
        </ul>
      </div>

      <div className="submenu-items-con">
        <ul className="submenu-items">
          {menuItems
            .filter((item) => item.category === category)
            .map((item) => (
              <li className="item">
                {" "}
                <span className="name left">{item.name}</span>
                <span className="line"></span>
                <span className="price right">{item.price}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
