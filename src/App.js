import "./App.css";
import Hufflepuff from "./containers/Hufflepuff/Hufflepuff";
import Ravenclaw from "./containers/Revenclaw/Revenclaw";
import Slytherin from "./containers/Slytherin/Slytherin";
import Gryffindor from "./containers/Gryffindor/Gryffindor";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
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
