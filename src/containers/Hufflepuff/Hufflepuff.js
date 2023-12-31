import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
const Hufflepuff = () => {
  const [hufflepuff, setHufflepuff] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/hufflepuff")
      .then((res) => res.json())
      .then((data) => setHufflepuff(data));
  }, []);
  console.log(hufflepuff);

  return (
    <div className="houses">
      {hufflepuff.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Hufflepuff;
