import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
const AllHouse = () => {
  const [allhouse, setAllhouse] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setAllhouse(data));
  }, []);
  console.log(allhouse);

  return (
    <div className="houses">
      {allhouse.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AllHouse;
