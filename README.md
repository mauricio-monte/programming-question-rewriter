# Programming Question Rewriter

O objetivo deste projeto é fornecer variações para o enunciado de uma questão de programação, de forma que essas variações possam substituir a questão em uma lista de questões práticas. A ideia é
modificar os enunciados das questões, mas mantendo a sua semântica para que:

1. Os alunos não achem o enunciado na internet
2. Os casos de teste continuem fazendo sentido e possam ser utilizados
3. Diminuir casos de plágio

Esta aplicação possui dois componentes:

- Backend - Recebe requisições via API Rest e se comunica com a API da OpenAI para usar o ChatGPT e assim obter as variações para o enunciado da questão original
- Frontend - Contém a interface pela qual o usuário interage e envia requisições com os dados necessários para o backend

Um deploy do frontend desta aplicação pode ser acessado em:
https://programming-question-rewriter.vercel.app/

Para instruções de instalação de cada um dos componentes, veja o README nas pastas de cada componente.

1. [Backend](./backend/README.md)
2. [Frontend](./frontend/README.md)
