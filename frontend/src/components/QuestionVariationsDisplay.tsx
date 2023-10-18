import { useContext, useState } from "react";
import QuestionsVariationsContext from "../context/QuestionsVariationsContext";
import { GENERATED_QUESTIONS_MOCK } from "../mock/generatedQuestions";

function QuestionVariationsDisplay() {
  const { questionsVariations } = useContext(QuestionsVariationsContext);

  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsVariations[0]
  );
  console.log({ selectedQuestion });
  const thereIsAnyQuestionVariation = GENERATED_QUESTIONS_MOCK.length > 0;

  if (!thereIsAnyQuestionVariation) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col items-center min-h-fit">
      <h2>Versões Geradas</h2>

      <div className="bg-[#CFC9C7] w-full flex justify-evenly">
        {GENERATED_QUESTIONS_MOCK.map((_, i) => {
          return (
            <button
              onClick={() => setSelectedQuestion(GENERATED_QUESTIONS_MOCK[i])}
              className={`hover:bg-[#bab5b3] w-full ${
                i !== 0 && "border-l border-black"
              }`}
              key={i}
            >
              Variação {i + 1}
            </button>
          );
        })}
      </div>
      <div className="bg-white w-full h-40 overflow-y-auto border border-gray-400 rounded-sm">
        {selectedQuestion}
      </div>
    </div>
  );
}

export default QuestionVariationsDisplay;
