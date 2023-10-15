from app.schemas import GenerateQuestionsParams


def get_prompt(params: GenerateQuestionsParams):
    PROMPT = f"""
        You should give {params.number_of_questions} random versions of the
        following text delimited by $: ${params.original_text}$
    """
    return PROMPT
