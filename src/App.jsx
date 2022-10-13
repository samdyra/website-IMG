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
  Navigacity,
} from "./Pages";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import DpmScreen from "./Pages/DPM/DpmScreen";
import { LoginScreen, Gallery, Kamerads, Messages, Stories } from "./Store";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Screens */}
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/IMGx" element={<IMGX />}></Route>
        <Route path="/Georeference" element={<Georeference />}></Route>
        <Route path="/Locus" element={<Locus />}></Route>
        <Route path="/Geosphere" element={<Geosphere />}></Route>
        <Route path="/InternalEvent" element={<InternalEvent />}></Route>
        <Route path="/ParadeWisuda" element={<ParadeWisuda />}></Route>
        <Route path="/StudentChapter" element={<StudentChapter />}></Route>
        <Route path="/Pojokimg" element={<Pojokimg />}></Route>
        {/* Kesenatoran Screens */}
        <Route path="/KabarkeSenatoran" element={<KabarKesenatoran />}></Route>
        {/* Geopoint Screens */}
        <Route path="/Geopoint" element={<Geopoint />}></Route>
        <Route path="/Geopoint/Navigacity" element={<Navigacity />}></Route>
        <Route path="/DPM" element={<DpmScreen />}></Route>
        {/* Login Screens */}
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/admin/kelompok" element={<Kamerads />}></Route>
        <Route path="/admin/gallery" element={<Gallery />}></Route>
        <Route path="/admin/kesanpesan" element={<Messages />}></Route>
        <Route path="/admin/story" element={<Stories />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
