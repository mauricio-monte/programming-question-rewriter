import openai
from app.config import MODEL_NAME, MODEL_TEMPERATURE
from fastapi import HTTPException
from openai.error import AuthenticationError


class OpenAIClient:
    def __init__(self, key: str) -> None:
        self.key = key
        openai.api_key = key

    def send_question(self, prompt: str):
        messages = [{"role": "user", "content": prompt}]
        try:
            response = openai.ChatCompletion.create(
                model=MODEL_NAME,
                messages=messages,
                temperature=MODEL_TEMPERATURE,
            )
            return response.choices[0].message["content"]  # type: ignore
        except AuthenticationError:
            raise HTTPException(
                status_code=401,
                detail="Invalid OpenAI key",
            )
        except:
            raise HTTPException(
                status_code=500,
                detail="Something went wrong with the OpenAI API",
            )
