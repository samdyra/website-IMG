import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen } from "./Pages";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/KaryaScreen" element={<KaryaScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
