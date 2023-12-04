import "./pages.css";
import harryportertext from "../../assets/harryporttext.png";

const Header = () => {
  return (
    <div className="container-header">
      <div className="harryportertext">
        <img src={harryportertext} alt="Harry Potter " />
      </div>
    </div>
  );
};

export default Header;
