import "../Card/card.css";
function Card({ item }) {
  if (item.image === "") {
    return null;
  }
  return (
    /*     <div key={item.id} className="card">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.house}</p>
      <p>{item.gender}</p>
    </div> */

    <div className="card">
      <div className="card-header">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-body">
        <span className="tag tag-gryffindor">{item.house}</span>
        <h1 className="nameCharacter">{item.name}</h1>
        <span>Actor: {item.actor}</span>
        <span>Species: {item.species}</span>
        <span>Ancestry: {item.ancestry}</span>
      </div>
    </div>
  );
}

export default Card;
