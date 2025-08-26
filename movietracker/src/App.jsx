import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import main from "./Main.jsx";
import Filme from "./components/main/Filme.jsx";
import Download from "./components/download/Download";
import Cards from "./components/main/Cards.jsx";
import Principal from "./components/main/Principal.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/filme/:id" element={<Filme />} />path="/filme/:id" element={<Filme />} />
        <Route path="/download" element={<Download />} />e path="/download" element={<Download />} />
      </Routes>  </Routes>
    </Router>   </Router>
  );  );
}

export default App;