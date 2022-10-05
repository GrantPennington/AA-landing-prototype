import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/test" element={<TestPage />}/>
      </Routes>
    </div>
  );
}

export default App;
