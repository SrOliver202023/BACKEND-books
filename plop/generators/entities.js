module.exports = (plop) => {
  plop.setGenerator('entity', {
    description: 'Criar nova entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual será o nome da Entity? Ex: category -',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/entities/{{pascalCase name}}Entity.ts',
        templateFile: 'templates/entities/template.hbs',
      },
    ],
  })
}
