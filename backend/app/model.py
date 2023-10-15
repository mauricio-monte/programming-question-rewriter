import openai

from app.config import Settings
from app.prompter import get_prompt
from app.schemas import GenerateQuestionsParams


def get_model_response(settings: Settings, params: GenerateQuestionsParams) -> str:
    openai.api_key = settings.open_ai_key
    prompt = get_prompt(params)

    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=settings.model_name,
        messages=messages,
        temperature=0,  # this is the degree of randomness of the model's output
    )
    return response.choices[0].message["content"]  # type: ignore


def get_generated_questions(settings: Settings, params: GenerateQuestionsParams) -> str:
    response = get_model_response(settings, params)
    return response
