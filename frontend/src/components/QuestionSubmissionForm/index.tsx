import { FormEvent, useReducer } from "react";
import { INITIAL_STATE, QuestionSubmission, formReducer } from "./formReducer";
import LoadingAnimation from "./LoadingAnimation";
import Input from "../Input";

interface QuestionSubmissionFormProps {
  onSubmit: (formData: QuestionSubmission) => void;
  isLoading: boolean;
}

function QuestionSubmissionForm({
  onSubmit,
  isLoading,
}: QuestionSubmissionFormProps) {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

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
    <div className="flex flex-col gap-8 w-[600px]">
      <div className="flex gap-5">
        <Input
          label="🔑 Chave da OpenAI"
          placeholder="******"
          name="openAIKey"
          value={state.openAIKey}
          onChange={handleChange}
          type="password"
        />

        <Input
          label="🔢 Quantidade de variações"
          placeholder="1"
          name="numberOfVariations"
          value={state.numberOfVariations}
          onChange={handleChange}
          type="number"
          min={1}
          max={5}
        />
      </div>

      <label className="flex flex-col gap-2">
        👀 Enunciado da questão original
        <textarea
          value={state.originalQuestion}
          name="originalQuestion"
          placeholder="Preencha aqui todo o enunciado da questão original"
          onChange={handleChange}
          cols={20}
          rows={10}
          className="rounded-lg p-3"
        ></textarea>
      </label>
      <button
        className="self-end bg-[#044389] hover:bg-[#1d5695] p-3 rounded-md text-white"
        type="submit"
        onClick={() => {
          !isLoading && onSubmit(state);
        }}
      >
        {isLoading ? <LoadingAnimation></LoadingAnimation> : "Enviar 📤"}
      </button>
    </div>
  );
}

export default QuestionSubmissionForm;
