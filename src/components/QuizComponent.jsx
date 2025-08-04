//  import React, { useState, useEffect } from 'react';
// import { generateQuizFromTopic } from './gemini'; // update path if needed

// function QuizComponent({ topic }) {
//   const [quiz, setQuiz] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     async function loadQuiz() {
//       const result = await generateQuizFromTopic(topic);
//       setQuiz(result);
//     }

//     loadQuiz();
//   }, [topic]);

//   const handleAnswerSelect = (questionIndex, selectedOption) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionIndex]: selectedOption
//     }));
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   return (
//     <div className="quiz-container">
//       {quiz.map((q, index) => (
//         <div key={index} className="question-block">
//           <h3>Q{index + 1}: {q.question}</h3>

//           {Object.entries(q.options).map(([key, value]) => (
//             <div key={key}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`question-${index}`}
//                   value={key}
//                   checked={answers[index] === key}
//                   onChange={() => handleAnswerSelect(index, key)}
//                   disabled={submitted}
//                 />
//                 {key}. {value}
//               </label>
//             </div>
//           ))}

//           {submitted && (
//             <p style={{ color: answers[index] === q.correctAnswer ? "green" : "red" }}>
//               {answers[index] === q.correctAnswer
//                 ? "✅ Correct"
//                 : `❌ Incorrect. Correct answer: ${q.correctAnswer} - ${q.options[q.correctAnswer]}`}
//             </p>
//           )}
//         </div>
//       ))}

//       {!submitted && quiz.length > 0 && (
//         <button onClick={handleSubmit}>Submit Answers</button>
//       )}
//     </div>
//   );
// }

// export default QuizComponent;

