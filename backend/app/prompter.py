from app.schemas import GenerateQuestionsParams


def get_prompt(params: GenerateQuestionsParams):
    PROMPT = f"""
        You are a teacher and want to generate different questions with the same solution for your students.

        Your task is generate alternatives versions of the original programming question delimited by triple backticks.
        To solve your task, do the following:
        - Generate {params.number_of_questions} new programming questions with completely different contexts
        in which they have the same solution from the original programming question delimited.

        Original programming question:
        ```{params.original_text}```

        You only should return the generated question texts, nothing more, so remove the delimiter chars.
        For the output format, separate the generated versions by six equal signs in the following format:

        <generated question 1>
        ======
        <generated question 2>
        ======
        ...
        ======
        <generated question N>

    """
    return PROMPT
