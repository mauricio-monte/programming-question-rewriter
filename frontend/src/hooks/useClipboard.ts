import { toast } from "react-toastify";

function normalizeQuestion(question: string) {
  return question.replace(/<br>/g, "\n");
}

export function useClipboard() {
  const copyQuestion = (question: string) => {
    toast.success("Question copied to clipboard");

    const normalizedQuestion = normalizeQuestion(question);
    navigator.clipboard.writeText(normalizedQuestion);
  };

  return { copyQuestion };
}
