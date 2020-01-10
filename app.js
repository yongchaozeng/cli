const inquirer = require('inquirer')  // npm i inquirer -D

inquirer.prompt([
    {
        name: 'projectName',
        message: '请输入项目名称'
    }
]).then(answers => {
    console.log(`你输入的项目名称是：${answers.projectName}`)
})

// const program = require('commander')
// const inquirer = require('inquirer')
// const chalk = require('chalk')

// program
//     .command('module')
//     .alias('m')
//     .description('创建新的模块')
//     .option('-a, --name [moduleName]', '模块名称')
//     .action(option => {
//         console.log('Hello World')
//         //为什么是Hello World 给你个眼神，自己去体会...
//     })
    
// program.parse(process.argv)