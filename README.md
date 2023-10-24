# API REST com TypeScript e MongoDB

Este é um projeto de exemplo que demonstra a criação de uma API RESTful em TypeScript com a utilização do MongoDB para armazenar e gerenciar dados. O projeto inclui operações CRUD (Create, Read, Update, Delete) para uma entidade específica.

## Pré-requisitos

Antes de iniciar, certifique-se de que você possui os seguintes pré-requisitos:

- [Node.js](https://nodejs.org/) instalado
- Acesso a um banco de dados MongoDB
- Um arquivo `.env` configurado com as seguintes variáveis:

PORT=<Porta do servidor>
MONGODB_URL=<URL do servidor MongoDB>
MONGODB_USERNAME=<Nome de usuário do MongoDB>
MONGODB_PASSWORD=<Senha do MongoDB>

bash
Copy code

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/Lukas22D/user-api-typescript
Navegue até o diretório do projeto:

bash
Copy code
cd apirest-dev
Instale as dependências:

bash
Copy code
npm install
Uso
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

bash
Copy code
npm run dev
O servidor estará disponível em http://localhost:<PORT>, onde <PORT> é a porta configurada no arquivo .env.

Tecnologias Utilizadas
TypeScript
Express.js
MongoDB
Scripts
npm run dev: Inicia o servidor de desenvolvimento usando Nodemon.
Estrutura do Projeto
src/: Contém o código-fonte da aplicação TypeScript.
dist/: Contém os arquivos transpilados TypeScript para JavaScript.
package.json: Arquivo de configuração do projeto.
.env: Arquivo de configuração com variáveis de ambiente.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar solicitações de pull (pull requests).

Licença
Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter mais detalhes.

```
