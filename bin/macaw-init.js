#!/usr/bin/env node
const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const inquirer = require('inquirer')
const download = require('../lib/download')

program.usage('<project-name>').parse(process.argv)

// 根据输入，获取项目名称
let projectName = program.args[0]

if (!projectName) {  // project-name 必填
  // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
  program.help()
  return
}

const list = glob.sync('*')  // 遍历当前目录
let rootName = path.basename(process.cwd())
// console.log(66,projectName)
if (list.length) {  // 如果当前目录不为空
  if (list.filter(name => {
    //   console.log(88,path.resolve(process.cwd(), path.join('.', name)))
    const fileName = path.resolve(process.cwd(), path.join('.', name))
    var isDir = fs.lstatSync(fileName).isDirectory();
    return (name === projectName) && isDir
  }).length !== 0) {
    console.log(`项目${projectName}已经存在`)
    return
  }
  next = Promise.resolve(projectName)
} else if (rootName === projectName) {
  next = inquirer.prompt([
    { 
      name: 'buildInCurrent',
      message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
      type: 'confirm',
      default: true
    }
  ]).then(answer => {
    return Promise.resolve(answer.buildInCurrent ? '.' : projectName)
  })

} else {
  next = Promise.resolve(projectName)
}
// console.log(88,list)



next && go()

function go() {
  next.then((projectRoot) => {
    if (projectRoot !== '.') {
      fs.mkdirSync(projectRoot)
    }
    return download(rootName)
      .then(target => console.log(target))
      .catch(err => console.log(err))
  })
  // 预留，处理子命令  
  // console.log(888,path.resolve(process.cwd(), path.join('.', rootName)))

}
