import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";
import Aux from "../../components/Common/Aux";

const Home = () => {
  return (
    <Aux>
      <Header />
      <Outlet />
      <Footer />
    </Aux>
  );
};
export default Home;
