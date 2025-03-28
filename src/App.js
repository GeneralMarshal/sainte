import {Routes, Route} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AuthPage from './pages/AuthPage';
import AdminCitizens from "./pages/AdminCitizens";
import AdminCitizensView from "./pages/AdminCitizensView";
import AdminSettings from "./pages/AdminSettings";
import AdminBlog from "./pages/AdminBlog";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/admincitizens" element={<AdminCitizens />} />
      <Route path="/admincitizensview" element={<AdminCitizensView />} />
      <Route path="/adminsettings" element={<AdminSettings/>}/>
      <Route path="/adminblog" element={<AdminBlog/>} />
    </Routes>
  );
}

export default App;
