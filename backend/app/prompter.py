from app.schemas import GenerateQuestionsParams


def get_prompt(params: GenerateQuestionsParams):
    PROMPT = f"""
        You should give {params.number_of_questions} random versions of the
        following text delimited by the char $, this is the text: ${params.original_text}$

        Remove the delimiter char $ from the generated text.
        You can change the words and the context of the provided text.

        I want the output to be in the following format:
        generated_text1
        generated_text2
        generated_text3
        ...
        generated_textn

        So you only should give me {params.number_of_questions} lines of generated text.
    """
    return PROMPT
