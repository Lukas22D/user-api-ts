API REST CRUD em TypeScript com MongoDB no Docker
Este é um projeto de API RESTful em TypeScript que utiliza o MongoDB em um contêiner Docker para operações CRUD (Create, Read, Update, Delete). O projeto utiliza Node.js, Express e MongoDB.

Configuração
Antes de começar, certifique-se de ter o Node.js e o Docker instalados em seu sistema.

Executando o MongoDB em um Contêiner Docker
Certifique-se de que o Docker esteja em execução. Execute o seguinte comando para iniciar um contêiner MongoDB:

bash
Copy code
docker run -d -p 27017:27017 --name mongodb mongo
Isso iniciará um contêiner MongoDB que será acessível localmente em mongodb://localhost:27017.

Executando o Servido
