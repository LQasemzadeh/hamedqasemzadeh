import NavbarComponent from "./components/ui/Navbar.Component";
import FooterComponent from "./components/ui/Footer.Component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";


function App() {
  return (
    <div>
      { /* Navbar */ }
      <NavbarComponent />

      { /* Wrapper */ }
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

      </div>

      { /* Footer */ }
      <FooterComponent />

    </div>
  );
}

export default App;
