
// src/api/gemini.js
import { GoogleGenAI } from "@google/genai"
// const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function generateWithGemini(topic, fileContent, numCards) {
  console.log("I am here --------------------------------------")
  // console.log("API_KEY : ", API_KEY)
  // if (!API_KEY) {
  //   console.error("❌ Gemini API key not found");
  //   return [];
  // }

  const ai = new GoogleGenAI({ apiKey: 'AIzaSyCbdf1bQxQG36ymJLRPFTfEOGheCAUVpzE' });

  const safeNotes = fileContent ? fileContent.slice(0, 3000) : '';
  const prompt = `Generate ${numCards} flashcards on "${topic}". ${safeNotes ? `Use this context: ${safeNotes}` : ''
    } Return only a JSON array with objects having "question" and "answer" keys.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log(response.text);
    // const res = await fetch(
    //   `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       contents: [
    //         {
    //           parts: [{ text: prompt }]
    //         }
    //       ]
    //     })
    //   }
    // );

    // const data = await res.json();

    // const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    // if (!textOutput) throw new Error("❌ No response from Gemini");

    // const cleaned = textOutput.replace(/```json|```/g, '').trim();

    return response.text;
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    return [];
  }
}

// Optional: log to verify env is loaded
// console.log("Gemini API Key:", API_KEY);

const textOutput = data?.candidates?.[0]?.content?.parts?.[0]?.text;

if (!textOutput) throw new Error("❌ No response from Gemini");

// If textOutput is a string that looks like JSON, parse it
let parsedCards;
try {
  parsedCards = JSON.parse(textOutput.replace(/```json|```/g, '').trim());
} catch (err) {
  console.error("❌ Failed to parse Gemini response as JSON:", textOutput);
  throw err;
  
}

// return parsedCards;

