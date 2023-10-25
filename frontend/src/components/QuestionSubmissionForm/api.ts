import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { handleApiErrors } from "../../api/utils";

const API_URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: API_URL,
});

export async function submitQuestion(
  openAIKey: string,
  originalQuestion: string,
  numberOfVariations: number
) {
  if (!openAIKey) {
    toast.error("OpenAI key is required");
    return;
  }

  if (!originalQuestion) {
    toast.error("Original question is required");
    return;
  }

  try {
    const variations = await API.post("/questions", {
      open_ai_key: openAIKey,
      number_of_questions: numberOfVariations,
      original_text: originalQuestion,
    });
    return variations.data.generated_questions;
  } catch (error) {
    handleApiErrors(error as AxiosError);
  }
}
