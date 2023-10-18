import openai
from app.config import GENERATED_QUESTION_DELIMITER, MODEL_NAME, MODEL_TEMPERATURE
from app.prompter import get_prompt
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams


def _get_model_response(params: GenerateQuestionsParams) -> str:
    openai.api_key = params.open_ai_key
    prompt = get_prompt(params)

    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=MODEL_NAME,
        messages=messages,
        temperature=MODEL_TEMPERATURE,
    )

    return response.choices[0].message["content"]  # type: ignore


def _normalize_model_response(response: str) -> GeneratedQuestionsResponse:
    generated_questions = response.split(GENERATED_QUESTION_DELIMITER)

    def change_new_lines(question: str) -> str:
        return question.strip().replace("\n", "<br>")

    generated_questions = list(map(change_new_lines, generated_questions))

    return GeneratedQuestionsResponse(generated_questions=generated_questions)


def get_generated_questions(
    params: GenerateQuestionsParams,
) -> GeneratedQuestionsResponse:
    response = _get_model_response(params)
    print(response)
    response = _normalize_model_response(response)
    return response
