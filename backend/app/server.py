from typing import Annotated

from fastapi import Body, FastAPI

from app import model
from app.schemas import GeneratedQuestionsResponse, GenerateQuestionsParams
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/questions", response_model=GeneratedQuestionsResponse)
def generate_questions(params: Annotated[GenerateQuestionsParams, Body]):
    generated_questions = model.get_generated_questions(params)
    return generated_questions
