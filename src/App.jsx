import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
<Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="/fullmenu"  element={<Menu/>} />
  <Route path="/gallery"  element={<Gallery/>} />
</Routes>
     {/* <Home/> */}
    </>
  );
}

export default App;
