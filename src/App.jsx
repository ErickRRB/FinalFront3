
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import HomeComponent from "./Components/Home/Home";
import ContactComponent from "./Components/Contact/Contact";
import DentistDetailComponent from "./Components/DentistDetail/DentistDetail";
import FavoritesComponent from "./Components/Favs/Favs";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";
function App() {
  const {state} = useContext(ContextGlobal)

  const themeClass = state.theme === "light" ? "light" : "dark";
  return (
    <Router>
      <div className={themeClass}>
        {<Navbar/>}
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/contacto" element={<ContactComponent />} />
          <Route path="/dentist/:id" element={<DentistDetailComponent />} />
          <Route path="/favs" element={<FavoritesComponent />} />
        </Routes>
        {<Footer/>}
      </div>
    </Router>
  );
}
export default App;
