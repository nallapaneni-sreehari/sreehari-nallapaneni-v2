import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VisitorTable from "./components/VisitorsTable";
import Main from "./components/Main";
import VisitorRouteGuard from "./components/VisitorRouteGuard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/r151149/:param" element={<VisitorRouteGuard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
