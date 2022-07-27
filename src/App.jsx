import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, KaryaScreen } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeScreen />}></Route>
        <Route path="/KaryaScreen" element={<KaryaScreen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
