module.exports = (plop) => {
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/screen/index.hbs',
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/screen/styles.hbs',
      },
    ],
  })
}
