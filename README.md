## **Etapas**
> Fique atento as configurações do docker compose! as configurações do ormconfig.json devem ser iguais as credenciais do docker-compose! usuário, senha, nome do container e banco que você configurar!

* Criar o arquivo **.env** como o **.env-example**
* Criar o arquivo **ormconfig.json** como o **ormconfig.json**
* instalar todas as dependências

  npm:

      npm install

  yarn:

      yarn

## **Config pessoais**
> Substituir a variavel de ambiente "BANCO_DE_TESTES" no script de teste pelo nome do banco de testes que você criar quando for fazer os testes de integração.

    "scripts": {
      "test": "DB=BANCO_DE_TESTES  jest --runInBand --detectOpenHandles"
    },

## **Rodando o Projeto**

> ### **Com o Docker**
    docker-compose up

> ### **Sem o Docker**
    yarn dev


## **Docker commands**

**Run containers**:

    docker-compose up

**Show containers**

    docker ps

**Show containers formmated**

    docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Ports}}"


## **Configurações Opcionais**
**Se caso houver erro no eslint/prettier de espaço entre as chaves { }**
deve adicionar as seguintes linhas no settings.json do vscode

      "javascript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,
      "typescript.format.insertSpaceAfterOpeningAndBeforeClosingEmptyBraces": false,


