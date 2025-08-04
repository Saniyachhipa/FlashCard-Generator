// 










// import { useNavigate } from 'react-router-dom';

// function LandingPage() {
//   const navigate = useNavigate();

//   const handleStart = () => {
//     navigate('/flashcard-generator');
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
//       {/* Hero Section */}
//       <header className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
//         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
//           AI-Powered Flashcards Made Easy
//         </h1>
//         <p className="text-lg md:text-xl text-white/80 max-w-xl">
//           Create customized flashcards instantly—powered by AI.
//         </p>
//         <button
//           onClick={handleStart}
//           className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
//         >
//           Get Started
//         </button>
//       </header>

//       {/* Feature Section */}
//       <section className="bg-white text-gray-800 py-16 px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold">What You Can Do</h2>
//           <p className="text-gray-600">Your AI productivity trio</p>
//         </div>
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
//           {[
//             {
//               title: 'Flashcard Generator',
//               desc: 'Turn any content into smart, AI-powered flashcards instantly.',
//             },
//             {
//               title: 'Summarizer',
//               desc: 'Summarize long text or topics with a single click.',
//             },
//             {
//               title: 'Quiz Creator',
//               desc: 'Create quizzes to test your understanding automatically.',
//             },
//           ].map((card, i) => (
//             <div
//               key={i}
//               className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//               <p className="text-gray-600">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white text-center py-4">
//         © {new Date().getFullYear()} AI Flashcard App | Built with ❤️ by [Your Name]
//       </footer>
//     </div>
//   );
// }

// export default LandingPage;







import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import Footer from './Footer';

function LandingPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/flashcard-generator');
    };

    return (
        <div className='landing__container'>
            <header className='landing__header'>
                <h1 className='landing__title'>AI-Powered Flashcards Made Easy</h1>
                <p className='landing__subtitle'>
                Create customized flashcards instantly—powered by AI.
                </p>
                <button className='landing__cta' onClick={handleStart}>Get Started</button>
            </header>
        </div>
    );
}

export default LandingPage;
