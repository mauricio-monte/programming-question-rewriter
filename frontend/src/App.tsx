import QuestionSubmissionForm from "./components/QuestionSubmissionForm";
import QuestionVariationsDisplay from "./components/QuestionVariationsDisplay";
import { QuestionsVariationsProvider } from "./context/QuestionsVariationsContext";

function App() {
  return (
    <div className="mx-10">
      <h1 className="text-center text-2xl">Programming Question Rewriter</h1>
      <QuestionsVariationsProvider>
        <QuestionSubmissionForm></QuestionSubmissionForm>
        <QuestionVariationsDisplay></QuestionVariationsDisplay>
      </QuestionsVariationsProvider>
    </div>
  );
}

export default App;
