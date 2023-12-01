import "./App.css";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";

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
