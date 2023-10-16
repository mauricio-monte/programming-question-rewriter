export interface QuestionSubmissionForm {
  openAIKey: string;
  originalQuestion: string;
  numberOfVariations: number;
}

export const formReducer = (
  state: QuestionSubmissionForm,
  action: { type: string; payload: { inputName: string; value: string } }
) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
      };
    case "INCREASE":
      return {
        ...state,
      };
    case "DECREASE":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const INITIAL_STATE = {
  openAIKey: "",
  originalQuestion: "",
  numberOfVariations: 3,
};
