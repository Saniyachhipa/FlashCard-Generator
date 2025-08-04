// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import FlashcardGenerator from './components/FlashcardGenerator';
// import DarkModeToggle from "./components/DarkModeToggle";

// import './App.scss';

// function App() {
//   return (
    
//     <BrowserRouter>
//      <DarkModeToggle />
//       <Routes>
        
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/flashcard-generator" element={<FlashcardGenerator />} />
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FlashcardGenerator from './components/FlashcardGenerator';
import DarkModeToggle from "./components/DarkModeToggle";

// *********************************
import { generateQuizQuestions } from './utils/quizGenerator';
// ******************************************

import './App.scss';

function App() {
  const flashcards = [
    {
      question: "What is HTML?",
      answer: "HTML is the standard markup language for creating web pages."
    },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheets"
    },
    {
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces."
    }
  ];

  // You can later use generateQuizQuestions(flashcards) here

  return (
    <BrowserRouter basename="/FlashCard-Generator">
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flashcard-generator" element={<FlashcardGenerator flashcards={flashcards} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

