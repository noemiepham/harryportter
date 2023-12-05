import "../Card/card.css";
function Card({ item, handleOpenPopUp }) {
  if (item.image === "") {
    return null;
  }
  const handleColor = (item) => {
    if (item === "Gryffindor") {
      return "tag tag-gryffindor";
    }
    if (item === "Hufflepuff") {
      return "tag tag-hufflepuff";
    }
    if (item === "Ravenclaw") {
      return "tag tag-ravenclaw";
    }
    if (item === "Slytherin") {
      return "tag tag-slytherin";
    }
    return "tag";
  };
  return (
    <div className="card" onClick={() => handleOpenPopUp(item)}>
      <div className="card-header">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-body">
        <span className={handleColor(item.house)}>{item.house}</span>
        <h1 className="nameCharacter">{item.name}</h1>
        <span> Actor: {item.actor}</span>
        <span>Patronus: {item.patronus}</span>
        <span>Ancestry: {item.ancestry}</span>
        <span>Ancestry: {item.ancestry}</span>
        <span>Species: {item.species}</span>
      </div>
    </div>
  );
}

export default Card;
