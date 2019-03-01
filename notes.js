console.log('                     --------------Starting notes.js------------- \n');

let checkEmptyFile = [];

const fs = require('fs');

let fetchNotes = () =>                     
{
     
     try{
          let noteString = fs.readFileSync('data.json');
          return JSON.parse(noteString);
           }
     catch(err)
          {
               console.log('An error ocurred !!!');
          }  
          console.log('typeof notes after checkEmptyfile :',checkEmptyFile);
};

let saveNotes = (notes) =>
{
     fs.writeFileSync('data.json',JSON.stringify(notes));
};


let addnote = (title,body) =>
{   let notes = [];
    let note = {
     title,
     body
    };   
     
    
     checkEmptyFile = fetchNotes();
     

     if(checkEmptyFile !== undefined)
     {notes = fetchNotes();}

     if(checkEmptyFile === undefined){
          console.log('entered the if block ');
          notes.push(note);
          console.log('typeof checkEmptyFile is :' ,typeof checkEmptyFile);
     }
     else if(checkEmptyFile !== undefined)
     {  console.log('entered the elseif block ');
     console.log('typeof checkEmptyFile is :' ,typeof checkEmptyFile);
             let duplicateNotes = notes.filter((note) => {
               console.log(note.title);
               return note.title === title;
          });

          if(duplicateNotes.length == 0)
          {    notes.push(note);
               saveNotes(notes);
          }
          else
          {
               console.log('Note with the same title already exists!!! \n');
          }
     }    

};        //completion of addNote function

let readnote = (title) => 
{
    console.log('reading a note');
};        //completion of readNote function

let deletenote = (title) =>{
    console.log('deleting a note',title);
};

let listnotes = () => {
    console.log('listing all the notes');
};

module.exports = 
{
     addnote,
     readnote,
     deletenote,
     listnotes
};

console.log('                     --------------Closing notes.js------------- \n');

