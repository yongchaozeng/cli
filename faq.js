var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: '请输入名称',
      type: 'input'
    },
    {
      name: '请选择模板',
      type: 'list',
      choices:[1,2,3]
    },
    {
      name: '请选择模板',
      type: 'checkbox',
      choices:[1,2,3]
    },
    {
      name: 'are your ok?',
      type: 'confrim',
      default: 'y/N',
    },
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });