import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen,  Pojokimg, Activities, Geopoint } from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
   return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/Karya/IMGx" element={<KaryaScreen pageName="IMGX"/>}></Route>
          <Route path="/Karya/Georeference" element={<KaryaScreen pageName="georeference"/>}></Route>
          <Route path="/Karya/Locus" element={<KaryaScreen pageName="locus"/>}></Route>
          <Route path="/Karya/Geosphere" element={<KaryaScreen pageName="geosphere"/>}></Route>
          <Route path="/Activities/InternalEvent" element={<Activities pageName="internalevent"/>}></Route>
          <Route path="/Activities/ParadeWisuda" element={<Activities pageName="paradewisuda"/>}></Route>
          <Route path="/Activities/StudentChapter" element={<Activities pageName="studentchapter"/>}></Route>
          <Route path="/Activities/KabarkeSenatoran" element={<Activities pageName="kabarkesenatoran"/>}></Route>
          <Route path="/Geopoint" element={<Geopoint/>}></Route>
          <Route path="/Pojokimg" element={<Pojokimg />}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
