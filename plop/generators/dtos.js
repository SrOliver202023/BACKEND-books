module.exports = (plop) => {
  plop.setGenerator('dto', {
    description: 'Criar DTO',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual será o nome do DTO? Ex: category -',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/dtos/I{{pascalCase name}}DTO.ts',
        templateFile: 'templates/dtos/template.hbs',
      },
    ],
  })
}
