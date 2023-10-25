import { useCallback, useState } from "react";
import { submitQuestion } from "../components/QuestionSubmissionForm/api";
import { QuestionSubmission } from "../components/QuestionSubmissionForm/formReducer";
import { toast } from "react-toastify";

function useFetchQuestionVariations() {
  const [isLoading, setIsLoading] = useState(false);
  const [questionsVariations, setQuestionsVariations] = useState(
    [] as string[]
  );

  const fetchQuestionVariations = useCallback(
    async ({
      openAIKey,
      originalQuestion,
      numberOfVariations,
    }: QuestionSubmission) => {
      setIsLoading(true);

      const fetchedQuestionVariations = await submitQuestion(
        openAIKey,
        originalQuestion,
        numberOfVariations
      );
      if (fetchedQuestionVariations === undefined) {
        setIsLoading(false);
        return;
      }

      toast.success("Questions generated successfully");
      setQuestionsVariations(fetchedQuestionVariations);
      setIsLoading(false);
    },
    [setQuestionsVariations]
  );

  return {
    isLoading,
    fetchQuestionVariations,
    questionsVariations,
  };
}

export default useFetchQuestionVariations;
