import { useCallback, useContext, useState } from "react";
import { submitQuestion } from "./api";
import { QuestionSubmissionForm } from "./formReducer";
import QuestionsVariationsContext from "../../context/QuestionsVariationsContext";

function useQuestionSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const { setQuestionsVariations } = useContext(QuestionsVariationsContext);

  const fetchQuestionVariations = useCallback(
    async ({
      openAIKey,
      originalQuestion,
      numberOfVariations,
    }: QuestionSubmissionForm) => {
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
  };
}

export default useQuestionSubmit;
