from pydantic.main import BaseModel


class GenerateQuestions(BaseModel):
    number_of_questions: int
    original_text: str
