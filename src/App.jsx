import {
  BrowserRouter as Router, Route, Routes 
} from "react-router-dom";
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
  Ceremony,
} from "./Pages";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import Footer from "./Components/Footer/Footer";
import DpmScreen from "./Pages/DPM/DpmScreen";
import {
  LoginScreen,
  Kegiatan,
  FAQ,
  SignUpUserLevel9,
  SignUp,
  InternalActivities,
  Parwis,
  Kesenatoran,
  StudentChapterAdmin,
  GeoreferenceAdmin,
  LocusAdmin,
  GeosphereAdmin,
  IMGXAdmin
} from "./Store";
import isUserLevel9 from "./Helpers/isUserLevel9";
import { isMobile } from "./Helpers/mobileResponsive";

function App() {
  return (
    <Router>
      {isMobile ? <MobileNavbar /> : <Navbar style={{ overflow: "hidden" }} />}

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
        <Route path="/login" element={<LoginScreen />}></Route>
        {/* Kesenatoran Screens */}
        <Route path="/KabarkeSenatoran" element={<KabarKesenatoran />}></Route>
        {/* Geopoint Screens */}
        <Route path="/Geopoint" element={<Geopoint />}></Route>
        <Route path="/Geopoint/Navigacity" element={<Navigacity />}></Route>
        <Route path="/Geopoint/Ceremony" element={<Ceremony />}></Route>
        <Route path="/DPM" element={<DpmScreen />}></Route>
        {/* Admin Screens */}
        {isUserLevel9() && (
          <>
            <Route path="/admin/kegiatan" element={<Kegiatan />}></Route>
            <Route
              path="/admin/georeference"
              element={<GeoreferenceAdmin />}
            ></Route>
            <Route
              path="/admin/studentchapter"
              element={<StudentChapterAdmin />}
            ></Route>
            <Route path="/admin/parwis" element={<Parwis />}></Route>
            <Route path="/admin/FAQ" element={<FAQ />}></Route>
            <Route path="/admin/signup" element={<SignUp />}></Route>
            <Route path="/admin/kesenatoran" element={<Kesenatoran />}></Route>
            <Route
              path="/admin/signupuserlevel9"
              element={<SignUpUserLevel9 />}
            ></Route>
            <Route
              path="/admin/internal"
              element={<InternalActivities />}
            ></Route>
            <Route
              path="/admin/locus"
              element={<LocusAdmin />}
            ></Route>
            <Route
              path="/admin/geosphere"
              element={<GeosphereAdmin />}
            ></Route>
             <Route
              path="/admin/imgx"
              element={<IMGXAdmin />}
            ></Route>
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
