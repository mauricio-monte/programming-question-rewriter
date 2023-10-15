from typing import Annotated

from fastapi import Depends, FastAPI

from app import model
from app.config import Settings
from app.deps import get_settings
from app.schemas import GenerateQuestionsParams

app = FastAPI()


@app.post("/questions")
def read_root(
    params: GenerateQuestionsParams,
    settings: Annotated[Settings, Depends(get_settings)],
):
    generated_questions = model.get_generated_questions(settings, params)

    return {"message": generated_questions}
