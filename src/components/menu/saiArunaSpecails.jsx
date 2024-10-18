import menuItems from "../../data/data";

export default function Specails() {
  return (
    <div className="submenu-con row">
      <h1>SAI ARUNA SPECIAL'S</h1>

      <div className="submenu-items-con">
        <ul className="submenu-items">
          {menuItems
            .filter((item) => item.category === "Bhavan Special Dosa's")
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
