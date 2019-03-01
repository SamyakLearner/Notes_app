console.log('-----------------------------------Starting app---------------------------------------------');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];            //taking the command from the user and storing it into a variable,
                                    //here _ is not lodash variable

console.log('Command :',command);

if(command === 'addNote')
{
 notes.addnote(argv.title,argv.body);

}

else if(command === 'readnote')
{console.log('Reading a note : \n');
notes.readnote(argv.title);}

else if(command === 'listnotes')
{console.log('Listing all the notes present previously \n ');
notes.listnotes();}

else if(command === 'deletenote')
{console.log('deleting a note \n ');
notes.deletenote(argv.title);}

else
{console.log('Command not recognized !!! \n');}



console.log('-----------------------------------Closing app---------------------------------------------');

