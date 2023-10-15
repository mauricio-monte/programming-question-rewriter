from typing import Annotated

from fastapi import Body, Depends, FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app import model
from app.config import Settings
from app.deps import get_settings
from app.schemas import GenerateQuestionsParams

app = FastAPI()


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc: RequestValidationError):
    return JSONResponse(
        status_code=400,
        content={"message": str(exc)},
    )


@app.post("/questions")
def generate_questions(
    params: Annotated[GenerateQuestionsParams, Body],
    settings: Annotated[Settings, Depends(get_settings)],
):
    generated_questions = model.get_generated_questions(settings, params)

    return {"message": generated_questions}
