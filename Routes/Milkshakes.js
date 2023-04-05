import React, { useState } from "react";
import Milkshakesmenu from "../MIlkshakesmenu";
import './Menu.css'


function Milkshakes ({ items }){
  
  var num = useState('0');
  const handleChange=(e)=>
{
  e.preventDefault();
  num = e.target.value;
}
  var sub = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    sub = event.target.value;
    alert(`You have Order ${num} ${sub}`)
  };
  return (
    <div className="juices">
      <h1 id="heading"> Milkshake Varities </h1><br/>
    <div className="section-center">
      {Milkshakesmenu.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4><br/>
                <h4 className="price">₹{price}</h4>
              </header>
              <br/>
              <p className="item-text">{desc}</p>
              <p/>
              <input type="number" onChange={handleChange}></input>
              
              <button onClick={handleSubmit} value={title} >Buy Now</button>
              </div>
             </article>
        );
      })}
    </div>
    </div>
  );
};

export default Milkshakes;