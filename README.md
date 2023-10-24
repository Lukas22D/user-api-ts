# API REST de usuários com TypeScript e MongoDB

Este projeto é uma API REST de usuários desenvolvida com TypeScript e MongoDB. Ela permite realizar as operações CRUD (Create, Read, Update e Delete) em uma coleção de dados de usuários.

## Pré-requisitos

Node.js >= 16.x
Docker

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

npm install

## Configuração

Para configurar a API, crie um arquivo .env e adicione as seguintes variáveis:

PORT=
MONGODB_URL=mongodb://localhost:27017/mydb
MONGODB_USERNAME=myusername
MONGODB_PASSWORD=mypassword

## Inicialização

Para inicializar a API, execute o seguinte comando:

docker-compose up

## Licença

Esta API é distribuída sob a licença MIT.

## Contribuições

São bem-vindas contribuições para este projeto. Para contribuir, crie um fork do repositório e envie um pull request.

## Arquitetura

A API é composta pelos seguintes componentes:

Servidor: O servidor é responsável por receber as requisições HTTP e responder com as informações solicitadas. Ele é implementado com o framework Express.
Banco de dados: O banco de dados é responsável por armazenar os dados dos usuários. Ele é implementado com o MongoDB.
