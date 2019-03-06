console.log('-----------------------------------Starting app---------------------------------------------');


const yargs = require('yargs');
const notes = require('./notes.js');
const titleoptions = {      describe :'title of the note',
                            demand : true,
                            alias : 't'
                     };
const bodyoptions = {      describe :'body of the note',
                            demand : true,
                            alias : 'b'
                     };
 
const argv = yargs
.command('addNote','Add a new note',{
    title : titleoptions,
    body : bodyoptions
})
.command('readNote','Add a new note',{
    title : titleoptions
})
.command('deleteNote','Add a new note',{
    title : titleoptions
})
.help()
.argv;

let command = argv._[0];            //taking the command from the user and storing it into a variable,
                                    //here _ is not lodash variable

console.log('Command :',command);

let checktitle = (title) =>
{
    if((title === undefined)||(title === ''))
    {
        console.log('Please provide a valid title!');
        return false;
    }
    else
    {return true;}
}
let checkbody = (body) =>
{
    if((body === undefined)||(body === ''))
    {
        console.log('Please provide a valid body to the note!');
        return false;
    }
    else
    {return true;}
}

if(argv._.length>1)
{
    console.log(yargs.argv);
    console.log('Please give only one command at a time !');    
    console.log(`${command} not executed`);
    console.log('Try again !!!');}



else if(command === 'addNote')
{
    if(checktitle(argv.title) && checkbody(argv.body))
    {
        notes.addNote(argv.title,argv.body);
    }

}

else if(command === 'readNote')
{
    if(checktitle(argv.title))
    {
        console.log('Reading the required note : \n');
        notes.readNote(argv.title);
    }
}

else if(command === 'listAllNotes')
{
    console.log('Listing all the notes present previously \n ');
    notes.listAllNotes();
}

else if(command === 'deleteNote')
{
    if(checktitle(argv.title))
    {
        notes.deleteNote(argv.title);
    }
    
}

else
{console.log('Command not recognized !!! \n');}



console.log('-----------------------------------Closing app---------------------------------------------');

