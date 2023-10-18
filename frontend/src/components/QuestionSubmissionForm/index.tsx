import { FormEvent, useReducer } from "react";
import useQuestionSubmit from "./useQuestionSubmit";
import { INITIAL_STATE, formReducer } from "./formReducer";
import LoadingAnimation from "./LoadingAnimation";
import Input from "../Input";

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
      <Input
        label="Chave da OpenAI"
        placeholder="******"
        name="openAIKey"
        value={state.openAIKey}
        onChange={handleChange}
        type="password"
      />

      <Input
        label="Quantidade de variações a serem geradas"
        placeholder="1"
        name="numberOfVariations"
        value={state.numberOfVariations}
        onChange={handleChange}
        type="number"
        min={1}
        max={5}
      />

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
