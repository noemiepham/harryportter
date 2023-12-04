import "./App.css";
import Layout from "./components/Home/Layout";
import Hufflepuff from "./containers/Hufflepuff/Hufflepuff";
import Ravenclaw from "./containers/Revenclaw/Revenclaw";
import Slytherin from "./containers/Slytherin/Slytherin";
import Gryffindor from "./containers/Gryffindor/Gryffindor";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AllHouse from "./containers/AllHouse/AllHouse";
function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  console.log(houses);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<AllHouse />} />
            <Route path="Gryffindor" element={<Gryffindor />} />
            <Route path="Ravenclaw" element={<Ravenclaw />} />
            <Route path="Slytherin" element={<Slytherin />} />
            <Route path="Hufflepuff" element={<Hufflepuff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
