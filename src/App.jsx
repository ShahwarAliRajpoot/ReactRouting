import logo from "./logo.svg";
import "./App.css";
import Lq from "./components/Lq";
import Ms from "./components/Ms";
import Qg from "./components/Qg";
import Pz from "./components/Pz";
import Iu from "./components/Iu";
import Psl from "./components/Psl";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Psl />} />
          <Route path="/lq" element={<Lq />} />
          <Route path="/qg" element={<Qg />} />
          <Route path="/iu" element={<Iu />} />
          <Route path="/ms" element={<Ms />} />
          <Route path="/pz" element={<Pz />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
