import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Register from './components/Register';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;