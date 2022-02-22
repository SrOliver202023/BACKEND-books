![Union Group](https://res.cloudinary.com/dbnq26wqe/image/upload/v1644082143/others/LOGO_GRUPO_4-removebg-preview_k3ptag.png)

Boilerplate utilizado pelos times de backend, durante os projetos desenvolvidos pelo Union Group.

## O que é utilizado?
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [TS Node Dev](https://github.com/wclr/ts-node-dev)
- [Typeorm](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Uuid](https://github.com/uuidjs/uuid)
- [Git Commit Msg Linter](https://github.com/legend80s/commit-msg-linter)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Plop](https://github.com/plopjs/plop)

## Comandos

- `dev`: Roda o servidor de desenvolvimento em `localhost:5000`
- `typeorm`: Executa o cli do typeorm.
- `generate`: Roda o gerador de arquivos.

## Inciando

### Configurando o banco de dados
1. Crie um banco de dados PostgreSQL.
2. Renomeie o arquivo `ormconfig-example.json` para `ormconfig.json`.
3. Adicione as crêdencias de acesso ao banco no arquivo `ormconfig.json`.
4. Rode as migrations com o comando `yarn typeorm migration:run`
#### Se não ocorrer nem um erro a configuração está correta.

### Rodando o servidor de desenvolvimento
1. Renomeie o arquivo `.env-example` para `.env`.
2. Rode o comando `yarn dev`
3. Acesse [http://localhost:5000](http://localhost:5000)

## Gerando arquivos
Você pode utilizar o gerador para gerar a maioria dos arquivos de forma automatica.

![plop demo](https://res.cloudinary.com/dbnq26wqe/image/upload/v1645127370/others/node_zntvds.gif)


