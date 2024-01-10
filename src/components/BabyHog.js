import React, { useState } from "react";
//import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, color }) {
  const [babyWeight, setBabyWeight] = useState(200)

  function handleChangeWeight(e) {
    e.target.name === "-" ? setBabyWeight(babyWeight - 10) : setBabyWeight(babyWeight + 10);
  }

  const eyeColorMapper={
    "blue": BlueBaby,
    "sun": SunBaby,
    "glowing": GlowingBaby
  }

  return (
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      <h3>Weight: {babyWeight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {color}</h4>

      <button name="+" onClick={(e) => handleChangeWeight(e)}>Increase Weight</button>
      <button name="-" onClick={(e) => handleChangeWeight(e)}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[color]}
          style={{ height: `${babyWeight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
