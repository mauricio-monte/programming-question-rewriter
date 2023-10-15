from typing import Annotated

from fastapi import Body, FastAPI

from app import model
from app.schemas import GenerateQuestionsParams

app = FastAPI()


@app.post("/questions")
def generate_questions(params: Annotated[GenerateQuestionsParams, Body]):
    generated_questions = model.get_generated_questions(params)

    return {"message": generated_questions}
