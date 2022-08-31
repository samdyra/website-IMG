import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen } from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/KaryaScreen" element={<KaryaScreen />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
