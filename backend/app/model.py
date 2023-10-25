from app.config import GENERATED_QUESTION_DELIMITER
from app.openai_client import OpenAIClient
from app.prompter import get_prompt
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams


def _get_model_response(params: GenerateQuestionsParams) -> str:
    prompt = get_prompt(params)

    client = OpenAIClient(params.open_ai_key)
    return client.send_question(prompt)


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
