import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          // other routes here
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
