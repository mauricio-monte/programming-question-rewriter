from typing import Annotated

from fastapi import Depends, FastAPI

from app.config import Settings
from app.deps import get_settings
from app.schemas import GenerateQuestions

app = FastAPI()


@app.post("/questions")
def read_root(
    generate_questions_params: GenerateQuestions,
    settings: Annotated[Settings, Depends(get_settings)],
):
    return {
        "message": settings.open_ai_key,
        "original": generate_questions_params.original_text,
        "number_of_questions": generate_questions_params.number_of_questions,
    }
