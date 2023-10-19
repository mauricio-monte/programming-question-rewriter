import QuestionSubmissionForm from "./components/QuestionSubmissionForm";
import QuestionVariationsDisplay from "./components/QuestionVariationsDisplay";
import useQuestionSubmit from "./hooks/useQuestionSubmit";

function App() {
  const { questionsVariations, fetchQuestionVariations, isLoading } =
    useQuestionSubmit();

  return (
    <div className="flex flex-col items-center min-w-full min-h-screen gap-16 pt-10">
      <header className="flex flex-col justify-center items-center">
        <img
          className="w-[100px]"
          src="/logo.png"
          alt="Programming Question Rewriter Logo"
        />

        <h1 className="text-center text-2xl">Programming Question Rewriter</h1>
      </header>

      <QuestionSubmissionForm
        onSubmit={fetchQuestionVariations}
        isLoading={isLoading}
      ></QuestionSubmissionForm>
      <QuestionVariationsDisplay
        key={crypto.randomUUID()}
        questionsVariations={questionsVariations}
      ></QuestionVariationsDisplay>
    </div>
  );
}

export default App;
