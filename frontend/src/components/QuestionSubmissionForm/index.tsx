import { FormEvent, useReducer } from "react";
import useQuestionSubmit from "./useQuestionSubmit";
import { INITIAL_STATE, formReducer } from "./formReducer";
import LoadingAnimation from "./LoadingAnimation";

function QuestionSubmissionForm() {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { fetchQuestionVariations, isLoading } = useQuestionSubmit();

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        inputName: e.currentTarget.name,
        value: e.currentTarget.value,
      },
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <label className="flex gap-3">
        Chave da OpenAI:
        <input
          name="openAIKey"
          value={state.openAIKey}
          onChange={handleChange}
          type="password"
          className="w-60 border border-gray-400 rounded-sm"
        ></input>
      </label>

      <label className="flex gap-3">
        Quantidade de variações a serem geradas:
        <input
          value={state.numberOfVariations}
          name="numberOfVariations"
          onChange={handleChange}
          type="number"
          min={1}
          max={5}
          className="border border-gray-400 rounded-sm text-center"
        ></input>
      </label>

      <label className="flex flex-col">
        Enunciado da questão original:
        <textarea
          value={state.originalQuestion}
          name="originalQuestion"
          onChange={handleChange}
          cols={20}
          rows={10}
          className="border border-gray-400 rounded-sm"
        ></textarea>
      </label>
      <button
        className="self-end bg-[#044389] hover:bg-[#1d5695] p-3 rounded-md text-white"
        type="submit"
        onClick={() => {
          !isLoading && fetchQuestionVariations(state);
        }}
      >
        {isLoading ? <LoadingAnimation></LoadingAnimation> : "Enviar"}
      </button>
    </div>
  );
}

export default QuestionSubmissionForm;
