import json
from pprint import pprint
from typing import List

import openai

from app.config import MODEL_NAME
from app.prompter import get_prompt
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams


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


def normalize_model_response(response: str) -> GeneratedQuestionsResponse:
    generated_questions = response.split("\n")
    return GeneratedQuestionsResponse(generated_questions=generated_questions)


def get_generated_questions(
    params: GenerateQuestionsParams,
) -> GeneratedQuestionsResponse:
    response = get_model_response(params)
    response = normalize_model_response(response)
    return response
