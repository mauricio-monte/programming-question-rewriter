from pydantic import Field
from pydantic.main import BaseModel


class GenerateQuestionsParams(BaseModel):
    open_ai_key: str
    number_of_questions: int = Field(..., gt=0, lt=10)
    original_text: str
