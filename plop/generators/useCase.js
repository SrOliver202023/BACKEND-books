module.exports = (plop) => {
  plop.setGenerator('useCase', {
    description: 'Criar novo useCase',
    prompts: [
      {
        type: 'input',
        name: 'useCase',
        message: 'Qual será o nome do useCase? Ex: categories -',
      },
      {
        type: 'input',
        name: 'resource',
        message:
          'Qual será o recurso do useCase? Ex: create, list, find, update -',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/useCases/{{pascalCase useCase}}/{{camelCase resource}}/{{pascalCase resource}}{{pascalCase useCase}}Controller.ts',
        templateFile: 'templates/useCases/controller.hbs',
      },
      {
        type: 'add',
        path: '../src/useCases/{{pascalCase useCase}}/{{camelCase resource}}/{{pascalCase resource}}{{pascalCase useCase}}UseCase.ts',
        templateFile: 'templates/useCases/useCase.hbs',
      },
    ],
  })
}
