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
      return {
        ...state,
        [action.payload.inputName]: action.payload.value,
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
