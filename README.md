<p align="center">



  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>



</p>




# Crud Rest Api Nestjs, Docker, Orm Prisma com testes e2e

## Desenvolvido em Nest.Js o projeto possui:
- Prisma como Orm
- Banco de dados Prisma para teste 
- Teste end-to-end
- Autenticação
- Token


### Requisitos para teste da aplicação:
- Node.js
- Nest.js
- Docker
- Prisma
- Clone do projeto

### Inicialização:
1. Abra o projeto em um editor de programação
2. Instale os modulos utilizados com 'npm install'
3. Configure o arquivo .env
4. Utilize dos comandos para teste ou inicialização

### Banco de dados:
- User
1. Email
2. Hash
3. FirstName
4. LastName

- Bookmark
1. Title
2. Description
3. Link

### Rotas:
```
_ User _
[GET] '/users/me - SHOW
[POST] '/signup' - Criar Usuário
[POST] '/signin' - Logar Usuário
[PATCH] '/users' - UPDATE



_ Bookmarks _ 
[GET] '/bookmarks' - INDEX
[GET] '/bookmarks/:id' - SHOW
[POST] '/bookmarks' - STORE
[PATCH] '/bookmarks/:id' - UPDATE
[DELETE] '/bookmarks/:id' - DELETE
```

### Comandos

- Modo Normal
1. npm run docker:init
Inicia o docker
2. npm run prisma:dev:deploy
Roda as migrations do prisma
3. npm run db:dev:rm
Remove o banco de dados do Docker
4. npm run db:dev:up
Cria o banco de dados do Docker
5. npm run db:dev:restart
Roda os três comandos acima, Prisma migrations e Docker remove e up
6. npm run prisma
Iniciar o prisma studio em modo normal

- Modo Teste
1. npm run prisma:dev:deploy
Roda as migrations do prisma no modo de teste
2. npm run db:test:rm
Remove o banco de dados do Docker no modo de teste
3. npm run db:test:up
Cria o banco de dados do Docker no modo de teste
4. npm run db:test:restart
Roda os três comandos acima em modo de teste, Prisma migrations e Docker remove e up
5. npm run prisma-test
Iniciar o prisma studio em modo de teste

- Teste e2e
1. npm run test:e2e
