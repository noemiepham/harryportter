import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
const Slytherin = () => {
  const [slytherin, setSlytherin] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/Slytherin")
      .then((res) => res.json())
      .then((data) => setSlytherin(data));
  }, []);
  console.log(Slytherin);

  return (
    <div className="houses">
      {slytherin.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Slytherin;
