import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContainer from "./components/layout/container/MainContainer";
import NavBar from "./components/layout/navBar/NavBar";
import Home from "./components/pages/Home";

export function App() {
  return (
    <>
      <Router>
        <NavBar />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cart" element={<Cart />} />  */}
          </Routes>
        </MainContainer>
      </Router>
    </>
  );
}

export default App;
