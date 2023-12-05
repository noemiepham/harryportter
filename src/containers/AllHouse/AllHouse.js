import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "../../containers/houses.css";
import Modal from "../../components/Pages/Modal/Modal";
const AllHouse = () => {
  const [allhouse, setAllhouse] = useState([]);
  const [showState, setShowState] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setAllhouse(data));
  }, []);
  console.log(allhouse);

  const handleOpenPopUp = (itemSelection) => {
    setShowState(!showState);
    setItem(itemSelection);
  };

  return (
    <div>
      <div className="houses">
        {allhouse.map((item) => (
          <Card
            item={item}
            key={item.id}
            handleOpenPopUp={() => handleOpenPopUp(item)}
          />
        ))}
      </div>
      <Modal item={item} show={showState} isCloseModal={setShowState} />
    </div>
  );
};

export default AllHouse;
