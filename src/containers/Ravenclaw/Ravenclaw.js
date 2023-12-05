import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
const Ravenclaw = () => {
  const [ravenclaw, setRavenclaw] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/Ravenclaw")
      .then((res) => res.json())
      .then((data) => setRavenclaw(data));
  }, []);
  console.log(ravenclaw);

  return (
    <div className="houses">
      {ravenclaw.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Ravenclaw;
