import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomeScreen,
  Pojokimg,
  Geopoint,
  ParadeWisuda,
  InternalEvent,
  StudentChapter,
  KabarKesenatoran,
  IMGX,
  Locus,
  Geosphere,
  Georeference,
} from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import DpmScreen from "./Pages/DPM/DpmScreen";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/IMGx" element={<IMGX />}></Route>
        <Route path="/Georeference" element={<Georeference />}></Route>
        <Route path="/Locus" element={<Locus />}></Route>
        <Route path="/Geosphere" element={<Geosphere />}></Route>
        <Route path="/InternalEvent" element={<InternalEvent />}></Route>
        <Route path="/ParadeWisuda" element={<ParadeWisuda />}></Route>
        <Route path="/StudentChapter" element={<StudentChapter />}></Route>
        <Route path="/KabarkeSenatoran" element={<KabarKesenatoran />}></Route>
        <Route path="/Geopoint" element={<Geopoint />}></Route>
        <Route path="/Pojokimg" element={<Pojokimg />}></Route>
        <Route path="/DPM" element={<DpmScreen />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
