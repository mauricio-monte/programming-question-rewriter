# Programming Question Rewriter - Backend

## Requisitos:

- Poetry v1.6+
- Make
  - Windows - [esta resposta do StackOverFlow pode ajudar](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows)
  - Se não quiser instalar o make, basta rodar os mesmos comandos que estão no arquivo `Makefile` manualmente
    - `poetry install` para instalar as dependências
    - `poetry run uvicorn app.server:app --reload` para executar o servidor

## Executar a aplicação

Dentro da pasta do projeto:

- Instalar as dependências

  ```bash
  make install
  ```

- Executar o servidor da aplicação web

  ```bash
  make start
  ```

## Documentação da API

A documentação da API está disponível em [http://localhost:8000/docs](http://localhost:8000/docs) ou [http://localhost:8000/redoc](http://localhost:8000/redoc)
