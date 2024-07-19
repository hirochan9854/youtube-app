import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GenreProvider } from "./context/GenreContext";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

const App = () => {
  return (
    <GenreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </GenreProvider>
  );
};

export default App;
