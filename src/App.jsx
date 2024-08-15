import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/navBar/NavBar";
import Home from "./components/pages/Home";

export function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<Cart />} />  */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
