console.log('                     --------------Starting notes.js------------- \n');

const fs = require('fs');

let displayNotes = (receivedArray) =>
{
     let index = 0;
     while(index<receivedArray.length)
     {
          console.log(`Title :  ${receivedArray[index].title}`);
          console.log(`Body  :  ${receivedArray[index].body} \n`);
          index++;
     }
}

let fetchNotes = () =>                     
{
     try{
          let noteString = fs.readFileSync('notes.json');
          return JSON.parse(noteString);
           }
     catch(err)
          {
               return [];
          }       
};

let saveNotes = (notes) =>
{
     fs.writeFileSync('notes.json',JSON.stringify(notes));
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
               console.log('Saved the note provided');
          }
          else
          {
               console.log('Note with the same title already exists!!! \n');
          }  

};        //completion of addNote function

let readNote = (title) => 
{
    let notes = fetchNotes();
    let sameNote = notes.filter((note) => {                 // the note here is a new variable not the one 
                                                            // that is declared in the addNote function 
                                                            // (since it comes out of scope)
                   return note.title === title;
     });
     if(sameNote[0] === undefined)
     {console.log('Note with this title does not exist')}
     else
     {
          displayNotes(sameNote);
     // console.log(`Title :  ${sameNote[0].title}`);
     // console.log(`Body  :  ${sameNote[0].body}`);
     }
};        //completion of readNote function

let deleteNote = (title) =>
{
    let notes = fetchNotes();
    let undeletedNotes = notes.filter((note) =>
    {
          return note.title !== title;
    });
    let deletedNote = notes.filter((note) =>
    {
     return note.title === title;
    });
    saveNotes(undeletedNotes);
    
    if(notes.length === undeletedNotes.length)
    {console.log('Note not found!')}
    else
    {
     console.log('Deleted note : \n');
     displayNotes(deletedNote);
    }
};

let listAllNotes = () => {
    console.log('listing all the notes : \n');
    let receivedNotes = fetchNotes();
    displayNotes(receivedNotes);
//     let index = 0;
//     while(index<receivedNotes.length)
//     {console.log(`Title : ${receivedNotes[index].title}`);
//      console.log(`Body  : ${receivedNotes[index].body}`);     
//      index++;     
//     }
};

module.exports = 
{
     addNote,
     readNote,
     deleteNote,
     listAllNotes
};

console.log('                     --------------Closing notes.js------------- \n');

