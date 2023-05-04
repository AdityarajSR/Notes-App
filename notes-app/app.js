const fs = require('fs')

// This is to overwrite the whole data inside a givne text file
fs.writeFileSync('notes.txt', 'This file was created by using node.js')

// This is to append some new information to given text File(i.e. the content inside it)
fs.appendFileSync('notes.txt', ' The above file which was created is now being appended using a string')

// chalk library
const chalk = require('chalk')
// import chalk from 'chalk';   //{not working} 
// use npm i chalk@4.1.2 to use chalk module
console.log(chalk.yellowBright.inverse('Adityaraj'));

console.log(process.argv[0]);

const command = process.argv[2];

if(command === 'Adityaraj'){
    console.log('Good Boy');
}else {
    console.log('Pta nhi kaun hai!')
}

///////////////////////////////////////////////////////////////////////////////////
// Parsing the command line arguments

// Below is the command that we give into the command line
// node app.js add --title="Here is the list of grocery items, The things in the title will also be parsed"
const yargs = require('yargs');
const { log } = require('console');
// console.log(yargs.argv)        // This will give the version as 1.0.0

// Customizing the version of the yargs
yargs.version('1.1.0')

// Creating add command
yargs.command({
    command : 'to_add',
    describe : 'Add a new note',
    handler : function(){
        console.log('Adding a new note');
    }
})

// Creating remove command
yargs.command({
    command : 'to_remove',
    describe : 'To remove a note',
    handler : function(){
        console.log('Removing a previously added note!');
    }
})

// Creating listing command
yargs.command({
    command : 'to_list',
    describe : 'To list all the notes present',
    handler : function(){
        console.log('Listing all the notes');
    }
})

// Creating read command
yargs.command({
    command : 'to_read',
    describe : 'reading a note',
    handler : function(){
        console.log('reading a note');
    }
})
console.log(yargs.argv)

