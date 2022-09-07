import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen,  Pojokimg, Internalevent } from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
   return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/KaryaScreen" element={<KaryaScreen />}></Route>
          <Route path="/Internalevent" element={<Internalevent/>}></Route>
          <Route path="/Pojokimg" element={<Pojokimg/>}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
};

const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert('Complete Cache Cleared')
  };
  
  clearCacheData();
  console.log( clearCacheData())

export default App;
