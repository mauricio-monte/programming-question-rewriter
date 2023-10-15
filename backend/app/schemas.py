from typing import List

from pydantic import BaseModel, Field


class GenerateQuestionsParams(BaseModel):
    open_ai_key: str = Field(description="OpenAI API key")
    number_of_questions: int = Field(
        description="Number of questions to generate between 1 and 10", gt=0, lt=10
    )
    original_text: str = Field(description="Original text to generate questions from")


class GeneratedQuestionsResponse(BaseModel):
    generated_questions: List[str] = Field(
        description="Generated questions from original text"
    )
