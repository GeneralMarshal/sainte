import {Routes, Route} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AuthPage from './pages/AuthPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/admindashboard" element={< AdminDashboard />} />
    </Routes>
  );
}

export default App;
