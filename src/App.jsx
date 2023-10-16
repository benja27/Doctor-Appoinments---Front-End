import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/splash_screen/splash_screen';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
