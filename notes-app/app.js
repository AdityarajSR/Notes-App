const fs = require('fs')

// This is to overwrite the whole data inside a givne text file
fs.writeFileSync('notes.txt', 'This file was created by using node.js')

// This is to append some new information to given text File(i.e. the content inside it)
fs.appendFileSync('notes.txt', ' The above file which was created is now being appended using a string')

// This is to run the file in utils.js 
// const exported_name = require('./utils.js')
// console.log(exported_name)

// const summing = require('./utils.js')
// const sum_is = summing(5, 6)
// console.log(sum_is)

// Challenge 
// const getNotes = require('./notes')
// const import_notes = getNotes()
// console.log(import_notes)

const validator = require('validator')

console.log(validator.isEmail('adityaraj.rajput2002@gmail.com'))
console.log(validator.isURL('ASDFASDFAS'))
console.log(validator.isURL('https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728848#overview'))

// chalk library
const chalk = require('chalk')
// import chalk from 'chalk';   //{not working} 
// use npm i chalk@4.1.2 to use chalk module
console.log(chalk.yellowBright.inverse('Adityaraj'));