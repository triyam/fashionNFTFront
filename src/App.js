import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="App">
                <header className="App-header">
                  <h1>Strugend Fashion NFT Marketplace</h1>
                  <Link to="/home">
                    <h3>Landing Page</h3>
                  </Link>
                </header>
              </div>
            </>
          }
        ></Route>
        <Route path="/home" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
