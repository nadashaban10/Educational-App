import Login from './components/Login';
import Register from './components/Register';
import './index.css';
import Portfolio from './pages/Portfolio';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/CoursesPage';
import DashBoard from './pages/DashBoard';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Portfolio />} />
        <Route path="/coursedetails" element={<CourseDetails />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;