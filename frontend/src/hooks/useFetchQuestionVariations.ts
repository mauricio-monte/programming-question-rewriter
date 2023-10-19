import { useCallback, useState } from "react";
import { submitQuestion } from "../components/QuestionSubmissionForm/api";
import { QuestionSubmission } from "../components/QuestionSubmissionForm/formReducer";

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

      try {
        const fetchedQuestionVariations = await submitQuestion(
          openAIKey,
          originalQuestion,
          numberOfVariations
        );
        setQuestionsVariations(fetchedQuestionVariations);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
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
