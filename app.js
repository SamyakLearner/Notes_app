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
 notes.addnote(argv.title,argv.body);  //call to the addNote function present in notes.js file

}

else if(command === 'readNote')
{console.log('Reading a note : \n');
notes.readNote(argv.title);}          //call to the readNote function present in notes.js file

else if(command === 'listNotes')
{console.log('Listing all the notes present previously \n ');
notes.listNotes();}                  //call to the listNotes function present in notes.js file

else if(command === 'deleteNote')
{console.log('deleting a note \n ');
notes.deleteNote(argv.title);}      //call to the deleteNotes function present in notes.js file

else
{console.log('Command not recognized !!! \n');}



console.log('-----------------------------------Closing app---------------------------------------------');

