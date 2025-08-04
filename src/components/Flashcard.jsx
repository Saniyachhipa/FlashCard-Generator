// import { useState } from "react";
// import './Flashcard.scss';

// function Flashcard(props) {
//     const [flipped, setFlipped] = useState(false);

//     const handleFlip = () => {
//         console.log("current state:", flipped);
//         setFlipped(!flipped);
//     };

//     const contentClassName =
//         "flashcard__content" + (flipped ? " flashcard__content--flipped" : "");



//     return (
//         <div className='flashcard'>
//             <div className="flashcard__direction">Tap to show answer</div>
//             <div className={contentClassName} onClick={handleFlip}>
//                 <div className='flashcard__front'>
//                     {props.question}
//                 </div>
//                 <div className='flashcard__back'>
//                     {props.answer}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Flashcard;




import { useState } from "react";
import "./Flashcard.scss";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);
  

  return (
    
    <div className="flashcard">
      <div className="flashcard__direction">Tap to show answer</div>
      <div
        className={`flashcard__inner ${flipped ? "is-flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flashcard__front">{question}</div>
        <div className="flashcard__back">{answer}</div>
        


        

      </div>
    </div>
  );
}

export default Flashcard;
