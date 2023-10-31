import { getOpenAIKey, saveOpenAIKey } from "../../services/storage";

export interface QuestionSubmission {
  openAIKey: string;
  originalQuestion: string;
  numberOfVariations: number;
}

export const formReducer = (
  state: QuestionSubmission,
  action: { type: string; payload: { inputName: string; value: string } }
) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      if (action.payload.inputName === "openAIKey") {
        saveOpenAIKey(action.payload.value);
      }

      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
      };
    default:
      return state;
  }
};

export const INITIAL_STATE = {
  openAIKey: getOpenAIKey() || "",
  originalQuestion: "",
  numberOfVariations: 3,
};
