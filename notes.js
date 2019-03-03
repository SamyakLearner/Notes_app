console.log('                     --------------Starting notes.js------------- \n');

const fs = require('fs');

let fetchNotes = () =>                     
{
     try{
          let noteString = fs.readFileSync('data.json');
          return JSON.parse(noteString);
           }
     catch(err)
          {
               return [];
          }       
};

let saveNotes = (notes) =>
{
     fs.writeFileSync('data.json',JSON.stringify(notes));
};


let addNote = (title,body) =>
{   let notes = [];
    let note = {
                    title,
                    body
                };   
     
    
     notes = fetchNotes();     
     let duplicateNotes = notes.filter((note) => {     // filter function only provides the node for which                                                    // true is returned

               return note.title === title;            // if the title matches then only true is returned
          });

          if(duplicateNotes.length == 0)
          {    notes.push(note);
               saveNotes(notes);
          }
          else
          {
               console.log('Note with the same title already exists!!! \n');
          }  

};        //completion of addNote function

let readNote = (title) => 
{
    console.log('reading a note');
    let notes = fetchNotes();
    let sameNote = notes.filter((note) => {
                   return note.title === title;
     });
     if(sameNote[0] === undefined)
     {console.log('Note with this title does not exist')}
     else
     {console.log(`Title :  ${sameNote[0].title}`);
     console.log(`Body  :  ${sameNote[0].body}`);
     }
};        //completion of readNote function

let deleteNote = (title) =>{
    console.log('deleting a note',title);
    let notes = fetchNotes();
    let undeletedNotes = notes.filter((note) =>
    {
          return note.title !== title;
    });
    saveNotes(undeletedNotes);
    if(notes.length === undeletedNotes.length)
    {console.log('Note not found!')};
};

let listAllNotes = () => {
    console.log('listing all the notes :');
    let receivedNotes = fetchNotes();
    let index = 0;
    while(index<receivedNotes.length)
    {console.log(`Title : ${receivedNotes[index].title}`);
     console.log(`Body  : ${receivedNotes[index].body}`);     
     index++;     
}
};

module.exports = 
{
     addNote,
     readNote,
     deleteNote,
     listAllNotes
};

console.log('                     --------------Closing notes.js------------- \n');

