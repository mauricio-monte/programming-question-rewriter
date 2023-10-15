import json
from pprint import pprint

import openai

from app.config import MODEL_NAME
from app.prompter import get_prompt
from app.schemas import GenerateQuestionsParams


def get_model_response(params: GenerateQuestionsParams) -> str:
    openai.api_key = params.open_ai_key
    prompt = get_prompt(params)

    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=MODEL_NAME,
        messages=messages,
        temperature=0,  # this is the degree of randomness of the model's output
    )

    pprint(json.dumps(response, indent=4))

    return response.choices[0].message["content"]  # type: ignore


def get_generated_questions(params: GenerateQuestionsParams) -> str:
    response = get_model_response(params)
    return response
