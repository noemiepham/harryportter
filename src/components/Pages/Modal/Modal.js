import "./Modal.css";

const Modal = ({ item, show, isCloseModal }) => {
  const modalStyle = show ? "card modal centered" : "showModalHide";
  return show ? (
    <div className="darkBG" onClick={() => isCloseModal(!show)}>
      <div className={modalStyle}>
        <div className="card-header">
          <img src={item?.image} alt={item?.name} />
        </div>
        <div className="card-body">
          <span className="tag tag-gryffindor">{item?.house}</span>
          <h1 className="nameCharacter">{item?.name}</h1>
          <span> Actor: {item?.actor}</span>
          <span>Patronus: {item?.patronus}</span>
          <span>Ancestry: {item?.ancestry}</span>
          <span>Ancestry: {item?.ancestry}</span>
          <span>Species: {item?.species}</span>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
