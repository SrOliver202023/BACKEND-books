module.exports = (plop) => {
  plop.setGenerator('repository', {
    description: 'Criar novo repository',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual será o nome do repository? Ex: categories -',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/repositories/{{pascalCase name}}Repositories/{{pascalCase name}}Repository.ts',
        templateFile: 'templates/repositories/template.hbs',
      },
      {
        type: 'add',
        path: '../src/repositories/{{pascalCase name}}Repositories/I{{pascalCase name}}Repository.ts',
        templateFile: 'templates/repositories/interface.hbs',
      },
    ],
  })
}
