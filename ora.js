const ora = require('ora');
const chalk = require('chalk');
 
const spinner = ora('开始加载').start();
 
setTimeout(() => {
    // spinner.color = 'yellow';
    // spinner.text = 'Loading rainbows';
    spinner.succeed()
    console.log(chalk.blue('Hello world!'));

}, 1000);