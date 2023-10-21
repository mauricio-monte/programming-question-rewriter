install:
	poetry install

start:
	poetry run uvicorn app.server:app --reload

docker-start:
	docker build --rm -t programming-question-rewriter .
	docker run --rm --net=host programming-question-rewriter
