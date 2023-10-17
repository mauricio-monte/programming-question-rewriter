from app.schemas import GenerateQuestionsParams


def get_prompt(params: GenerateQuestionsParams):
    PROMPT = f"""
        Your task is generate alternatives versions of the original programming question delimited by triple backticks.
        To solve your task, do the following: 
        1 - Work out your own solution to the original programming question using Python.
        2 - Then, generate {params.number_of_questions} alternatives programming questions that can be solved by your solution. Don't generate an alternative version until you have your own solution.

        Original programming question:
        ```{params.original_text}```

        For the output format, delimiter char and separate the generated versions by six equal signs in the following format:
        
        Solution:
        <your solution to the original question>
        
        ======
        <generated question 1>
    
        ======
        <generated question 2>
        
        ======
        ...
        
        ======
        <generated question N>
    
    """
    return PROMPT
