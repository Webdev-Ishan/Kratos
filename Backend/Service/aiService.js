import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" ,
    systemInstruction:`You are an expert in MERN stack and development.
    You have an expirence of 10 years in development. You always write code in the best way possible. You provide understandable commits in your code and you always follow the best prtactices along with all the edge cases to be covered.`
});

export const generateoutput = async (prompt)=> {

const result = await model.generateContent(prompt);
return result.response.text();

}