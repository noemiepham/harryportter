import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
const Gryffindor = () => {
  const [gryffindor, setGryffindor] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setGryffindor(data));
  }, []);
  console.log(gryffindor);

  return (
    <div className="houses">
      {gryffindor.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Gryffindor;
