from typing import Annotated

from fastapi import Body, FastAPI

from app import model
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams

app = FastAPI()


@app.post("/questions", response_model=GeneratedQuestionsResponse)
def generate_questions(params: Annotated[GenerateQuestionsParams, Body]):
    generated_questions = model.get_generated_questions(params)
    return generated_questions
