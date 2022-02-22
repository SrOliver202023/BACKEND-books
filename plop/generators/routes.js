module.exports = (plop) => {
  plop.setGenerator('routes', {
    description: 'Criar rota',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual será o nome da rota? Ex: categories -',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/routes/{{camelCase name}}.routes.ts',
        templateFile: 'templates/routes/template.hbs',
      },
    ],
  })
}
