import { FormEvent, useReducer } from "react";
import { INITIAL_STATE, QuestionSubmission, formReducer } from "./formReducer";
import LoadingAnimation from "./LoadingAnimation";
import Input from "../Input";

const MIN_VARIATION_LIMIT = 1;
const MAX_VARIATION_LIMIT = 5;

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
          label="🔑 OpenAI Key"
          placeholder="******"
          name="openAIKey"
          value={state.openAIKey}
          onChange={handleChange}
          type="password"
        />

        <Input
          label="🔢 Quantity of variations"
          placeholder="1"
          name="numberOfVariations"
          value={state.numberOfVariations}
          onKeyDown={(evt) => {
            const exponentialAndFloatNumberCharacters = ["e", ",", ".", "-"];
            if (exponentialAndFloatNumberCharacters.includes(evt.key)) {
              evt.preventDefault();
            }
          }}
          onChange={(e) => {
            let lastNumericTypedValue = e.target.value
              .charAt(e.target.value.length - 1)
              .replace(/[^0-9]/g, "");

            if (Number(lastNumericTypedValue) < MIN_VARIATION_LIMIT) {
              lastNumericTypedValue = MIN_VARIATION_LIMIT.toString();
            }

            if (Number(lastNumericTypedValue) > MAX_VARIATION_LIMIT) {
              lastNumericTypedValue = MAX_VARIATION_LIMIT.toString();
            }

            e.currentTarget.value = lastNumericTypedValue;
            handleChange(e);
          }}
          type="number"
          min={MIN_VARIATION_LIMIT}
          max={MAX_VARIATION_LIMIT}
        />
      </div>

      <label className="flex flex-col gap-2">
        👀 Original Question
        <textarea
          value={state.originalQuestion}
          name="originalQuestion"
          placeholder="Write your question here..."
          onChange={handleChange}
          cols={20}
          rows={10}
          className="rounded-lg p-3"
        ></textarea>
      </label>
      <button
        className="self-end bg-[#044389] hover:bg-[#1d5695] p-3 rounded-md text-white h-12"
        type="submit"
        onClick={() => {
          !isLoading && onSubmit(state);
        }}
      >
        {isLoading ? <LoadingAnimation></LoadingAnimation> : "Send 📤"}
      </button>
    </div>
  );
}

export default QuestionSubmissionForm;
