import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen, Activities, Pojokimg } from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/KaryaScreen" element={<KaryaScreen />}></Route>
        <Route path="/Activities" element={<Activities/>}></Route>
        <Route path="/Pojokimg" element={<Pojokimg/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
