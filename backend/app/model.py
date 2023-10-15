import openai

from app.config import MODEL_NAME, MODEL_TEMPERATURE
from app.prompter import get_prompt
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams


def get_model_response(params: GenerateQuestionsParams) -> str:
    openai.api_key = params.open_ai_key
    prompt = get_prompt(params)

    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=MODEL_NAME,
        messages=messages,
        temperature=MODEL_TEMPERATURE,
    )

    return response.choices[0].message["content"]  # type: ignore


def normalize_model_response(response: str) -> GeneratedQuestionsResponse:
    generated_questions = response.split("\n")
    return GeneratedQuestionsResponse(generated_questions=generated_questions)


def get_generated_questions(
    params: GenerateQuestionsParams,
) -> GeneratedQuestionsResponse:
    response = get_model_response(params)
    response = normalize_model_response(response)
    return response
