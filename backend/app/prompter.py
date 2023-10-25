from app.schemas import GenerateQuestionsParams


def get_prompt(params: GenerateQuestionsParams):
    PROMPT = f"""
        You are a teacher and want to generate different questions with the same solution for your students.

        Your task is to generate {params.number_of_questions} new programming questions with completely different contexts
        in which they have the same solution from the original programming question delimited. Everything should be changed
        except information relevant to the algorithmic solution.

        You should pay attention to:
        1. Keep the input and output titles on the question text
        2. Keep the same input and output examples

        To solve your task, change the following, if it makes sense:
        1. all the characters, names, type of beings, places, et.
        2. The actions, use different verbs, adverbs, etc.
        3. The context, use different places, situations, etc.
        4. The time, use different time periods, etc.
        5. The objects, use different objects, etc.

        Original programming question:
        ```{params.original_text}```

        DO NOT add nothing more to your output, I just want the text from the new generated questions.
        Output generated questions in JSON format. With only a key "generated_questions" and a list
        with the generated questions as values.
    """
    return PROMPT
