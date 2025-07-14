import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FlashcardGenerator from './components/FlashcardGenerator';
import DarkModeToggle from "./components/DarkModeToggle";

import './App.scss';

function App() {
  return (
    
    <BrowserRouter>
     <DarkModeToggle />
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/flashcard-generator" element={<FlashcardGenerator />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;