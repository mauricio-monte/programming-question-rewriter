import { useEffect, useRef, useState } from "react";
import { useClipboard } from "../hooks/useClipboard";

interface QuestionVariationsDisplayProps {
  questionsVariations: string[];
}

function QuestionVariationsDisplay({
  questionsVariations,
}: QuestionVariationsDisplayProps) {
  const clipboard = useClipboard();

  const [selectedQuestion, setSelectedQuestion] = useState(
    questionsVariations[0]
  );

  const questionVariationTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    questionVariationTextRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const thereIsAnyQuestionVariation = questionsVariations.length > 0;

  if (!thereIsAnyQuestionVariation) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-8 w-[600px] pb-20">
      <h2 className="text-center text-2xl">Generated Questions 🥇</h2>

      <div className="w-full flex justify-evenly gap-3">
        {questionsVariations.map((question, i) => {
          return (
            <button
              onClick={() => setSelectedQuestion(questionsVariations[i])}
              className={`hover:bg-[#3f83cb] bg-[#1C5694] text-white py-2 w-full ${
                question === selectedQuestion &&
                "bg-[#3f83cb] border border-[#9abfe5]"
              } rounded-lg`}
              key={crypto.randomUUID()}
            >
              Option {i + 1}
            </button>
          );
        })}
      </div>
      <div
        ref={questionVariationTextRef}
        className="bg-white w-full h-[400px] overflow-y-auto rounded-lg p-3"
        dangerouslySetInnerHTML={{
          __html: selectedQuestion,
        }}
      />
      <button
        className="self-end bg-[#044389] hover:bg-[#1d5695] p-3 rounded-md text-white h-12"
        onClick={() => clipboard.copyQuestion(selectedQuestion)}
      >
        📝 Copy
      </button>
    </div>
  );
}

export default QuestionVariationsDisplay;
