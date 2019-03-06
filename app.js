

const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

let command = argv._[0];            //taking the command from the user and storing it into a variable,
                                    //here _ is not lodash variable

console.log('Command :',command);

let appinfo = () =>
{
    console.log('Required Command Format :');
    console.log('node app.js   command_to_be_executed   --title=\' required_title \'   --body=\' required_body \' \n ');
    console.log('Various features of the application ');
    console.log(' 1. addNote      : To add a new note ');
    console.log(' 2. readNote     : To read a specific note ');
    console.log(' 3. deleteNote   : To delete a specific note');
    console.log(' 4. listAllNotes : To get a list of all the notes already present');
}

if(argv._.length>1)
{
    console.log('Command :',argv._[1]);
    console.log('Please give only one command at a time !');
    console.log(`${command} not executed`);
    console.log('Try again !!! \n');
    appinfo();
}



else if(command === 'addNote')
{
    if(argv.title === undefined)
    {console.log('Please provide a valid title!');}
    
    else
    {
        notes.addNote(argv.title,argv.body);
        console.log('note added successfully');
    }

}

else if(command === 'readNote')
{
    if(argv.title === undefined)
    {console.log('Please provide a valid title!');}

    else
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
    if(argv.title === undefined)
    {console.log('Please provide a valid title!');}
    
    else
    {
        console.log('deleting a note : \n ');
        notes.deleteNote(argv.title);
    }
    
}
else
{console.log('Command not recognized !!! \n');}



