
// // src/api/gemini.js
// import { GoogleGenAI } from "@google/genai"
// // const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// export async function generateWithGemini(topic, fileContent, numCards) {
//   console.log("I am here --------------------------------------")
//   // console.log("API_KEY : ", API_KEY)
//   // if (!API_KEY) {
//   //   console.error("❌ Gemini API key not found");
//   //   return [];
//   // }

//   const ai = new GoogleGenAI({ apiKey: 'AIzaSyCbdf1bQxQG36ymJLRPFTfEOGheCAUVpzE' });

//   const safeNotes = fileContent ? fileContent.slice(0, 3000) : '';
//   const prompt = `Generate ${numCards} flashcards on "${topic}". ${safeNotes ? `Use this context: ${safeNotes}` : ''
//     } Return only a JSON array with objects having "question" and "answer" keys.`;

//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: prompt,
//     });
//     console.log(response.text);
//     // const res = await fetch(
//     //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
//     //   {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json"
//     //     },
//     //     body: JSON.stringify({
//     //       contents: [
//     //         {
//     //           parts: [{ text: prompt }]
//     //         }
//     //       ]
//     //     })
//     //   }
//     // );

//     // const data = await res.json();

//     // const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     // if (!textOutput) throw new Error("❌ No response from Gemini");

//     // const cleaned = textOutput.replace(/```json|```/g, '').trim();

//     return response.text;
//   } catch (err) {
//     console.error("❌ Gemini API Error:", err);
//     return [];
//   }
// }

// // Optional: log to verify env is loaded
// // console.log("Gemini API Key:", API_KEY);

// const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

// if (!textOutput) throw new Error("❌ No response from Gemini");

// // If textOutput is a string that looks like JSON, parse it
// let parsedCards;
// try {
//   parsedCards = JSON.parse(textOutput.replace(/```json|```/g, '').trim());
// } catch (err) {
//   console.error("❌ Failed to parse Gemini response as JSON:", textOutput);
//   throw err;
  
// }

// // return parsedCards;



import { GoogleGenAI } from "@google/genai";
 const ai = new GoogleGenAI({
    apiKey: "AIzaSyCbdf1bQxQG36ymJLRPFTfEOGheCAUVpzE",
  });

export async function generateWithGemini(topic, fileContent, numCards) {
  console.log("I am here --------------------------------------");

  // const ai = new GoogleGenAI({
  //   apiKey: "AIzaSyCbdf1bQxQG36ymJLRPFTfEOGheCAUVpzE",
  // });

  const safeNotes = fileContent ? fileContent.slice(0, 3000) : "";
  // const prompt = `Generate ${numCards} flashcards on "${topic}". ${
  //   safeNotes ? `Use this context: ${safeNotes}` : ""
  // } Return only a JSON array with objects having "question" and "answer" keys.`;

  // *******************************************************
  const prompt = `Generate ${numCards} flashcards on the topic "${topic}".
Each flashcard should include:
1. A detailed question (at least 1–2 lines).
2. A rich answer (at least 2-3 lines), with explanations, examples, or analogies if helpful.
${safeNotes ? `Use this context to guide the answers:\n${safeNotes}` : ""}
Return only a JSON array of objects like this: [{ "question": "...", "answer": "..." }]`;
// **************************************************************


// *********************************************
// const prompt = `Generate ${numCards} flashcards on the topic "${topic}". ${
//   safeNotes ? `Use this context: ${safeNotes}` : ""
// } 

// Each flashcard should be an object with:
// - "question": a concise question
// - "answer": 5–10 short bullet points in markdown format (use - or * for bullets)

// Return only a JSON array of flashcards.`;
// *************************************************

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const textOutput = response.text;

    if (!textOutput) throw new Error("❌ No response from Gemini");

    let parsedCards;
    try {
      parsedCards = JSON.parse(
        textOutput.replace(/```json|```/g, "").trim()
      );
    } catch (err) {
      console.error("❌ Failed to parse Gemini response as JSON:", textOutput);
      throw err;
    }

    return parsedCards;
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    return [];
  }
}





// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
export async function generateQuizFromTopic(topic,flashcards) {
  console.log("📝 Generating Quiz...");

//   const prompt = `Generate a multiple-choice 20 question quiz for the topic: "${topic}".
// Return the quiz as an array of JSON objects. Each object should include:
// - "question": the quiz question
// - "options": an object with keys A, B, C, and D
// - "correctAnswer": the correct option (A, B, C, or D)`;

// gemini.js

  const prompt = `You are given a list of flashcards based on the topic: "${topic}".

Your task is to generate exactly one multiple-choice question (MCQ) for each flashcard, based on its content.

Return the quiz as an array of JSON objects. Each object should include:
- "question": the quiz question
- "options": an object with keys A, B, C, and D
- "correctAnswer": the correct option (A, B, C, or D)

Flashcards:
${JSON.stringify(flashcards, null, 2)}`;

  // Then send this prompt to Gemini API

  // ... Gemini API call using the prompt






  try {
    const result = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: prompt,
});
const text = result.text;


    const jsonStart = text.indexOf("[");
    const jsonEnd = text.lastIndexOf("]");
    const jsonString = text.slice(jsonStart, jsonEnd + 1);

    return JSON.parse(jsonString);
  } catch (err) {
    console.error("❌ Quiz Generation Error:", err);
    return [];
  }
}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&




















// export async function generateQuizFromTopic(topic) {
//   console.log("📝 Generating Quiz...");

//   const prompt = `Generate a multiple-choice quiz for the topic: "${topic}".
// Return the quiz as an array of JSON objects. Each object should include:
// - "question": the quiz question
// - "options": an object with keys A, B, C, and D
// - "correctAnswer": the correct option (A, B, C, or D)`;

//   try {
//     const result = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: prompt,
//     });

//     // ✅ Fix here
//     const responseText = await result.response.text();  // this is the correct way
//     console.log("🎯 Gemini Raw Response:", responseText);

//     // ✅ Extract the JSON array from the text
//     const jsonStart = responseText.indexOf("[");
//     const jsonEnd = responseText.lastIndexOf("]");
//     const jsonString = responseText.slice(jsonStart, jsonEnd + 1);

//     // ✅ Convert to JS array
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("❌ Quiz Generation Error:", err);
//     return [];
//   }
// }


