import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Ticker from "./components/Ticker";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RequestAccess from "./pages/RequestAccess";
import AlertPage from "./pages/AlertPage";
import RiskProfile from "./pages/RiskProfile";
import RiskMap from "./pages/RiskMap";
import SurveillanceDashboard from "./pages/SurveillanceDashboard";
import Analytics from "./pages/Analytics";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import Inbox from "./pages/Inbox";
import Help from "./pages/Help";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* This is the div that needs to be properly closed */}
      <ScrollToTop />
      <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col overflow-x-hidden">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <div className="flex-grow flex flex-col pt-16">
        <div className="flex-grow">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Ticker />
                    <LandingPage />
                  </>
                }
              />
              <Route
                path="/login"
                element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />}
              />
              <Route path="/request-access" element={<RequestAccess />} />
              <Route path="/risk-map" element={<RiskMap />} />
              <Route path="/risk-profile/:id" element={<RiskProfile />} />
              <Route path="/alerts" element={<AlertPage />} />

              {/* Protected Routes using the imported Navigate component */}
              <Route
                path="/dashboard"
                element={
                  isLoggedIn ? (
                    <SurveillanceDashboard />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/analytics"
                element={
                  isLoggedIn ? <Analytics /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="/profile"
                element={
                  isLoggedIn ? <UserProfile /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="/inbox"
                element={
                  isLoggedIn ? <Inbox /> : <Navigate to="/login" replace />
                }
              />
              <Route path="/help" element={<Help />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>{" "}
      {/* <--- Make sure this closing div tag is here */}
    </Router>
  );
}

export default App;
