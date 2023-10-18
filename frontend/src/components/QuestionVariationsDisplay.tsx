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
    <div className="flex flex-col items-center gap-8 w-[600px] pb-20">
      <h2 className="text-center text-2xl">Versões Geradas 🥇</h2>

      <div className="w-full flex justify-evenly gap-3">
        {GENERATED_QUESTIONS_MOCK.map((question, i) => {
          return (
            <button
              onClick={() => setSelectedQuestion(GENERATED_QUESTIONS_MOCK[i])}
              className={`hover:bg-[#3f83cb] bg-[#1C5694] text-white py-2 w-full ${
                question === selectedQuestion &&
                "bg-[#3f83cb] border border-[#9abfe5]"
              } rounded-lg`}
              key={i}
            >
              Variação {i + 1}
            </button>
          );
        })}
      </div>
      <div className="bg-white w-full h-[400px] overflow-y-auto rounded-lg p-3">
        {selectedQuestion}
      </div>
    </div>
  );
}

export default QuestionVariationsDisplay;
