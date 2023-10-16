import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: API_URL,
});

export async function submitQuestion(
  openAIKey: string,
  originalQuestion: string,
  numberOfVariations: number
) {
  const variations = await API.post("/questions", {
    open_ai_key: openAIKey,
    number_of_questions: numberOfVariations,
    original_text: originalQuestion,
  });

  return variations.data.generated_questions;
}
