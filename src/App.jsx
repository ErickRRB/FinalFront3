
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import HomeComponent from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {<Navbar/>}
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          {/* <Route path="/contacto" element={<ContactComponent />} /> */}
          {/* <Route path="/dentist/:id" element={<DentistDetailComponent />} /> */}
          {/* <Route path="/favs" element={<FavoritesComponent />} /> */}
        </Routes>
        {<Footer/>}
      </div>
    </Router>
  );
}
export default App;
