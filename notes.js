console.log('starting notes.js');
// console.log(module);

const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e) {
        return [];
    }
};

let saveNote = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

let addNote = (title,body) => {
   let notes = fetchNotes();
   let note = {
       title,
       body
   };

   try {
       let notesString = fs.readFileSync('notes-data.json');
       notes = JSON.parse(notesString);
   }catch (e) {

   }

   let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length===0){
       notes.push(note);
       saveNote(notes);
       return note;
   }

};

let getAll = () => {
    return fetchNotes();
};

let read = (title) => {
    let notes = fetchNotes();
    let returnedNotes = notes.filter((note) => note.title === title);
    return returnedNotes[0];
};

let removeNote = (title) => {
    // console.log('Removing the note');
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes );

    return filteredNotes.length!==notes.length;

};

let logNote = (note) => {
    debugger;
    console.log("---");
    console.log("your note tile is: ", note.title);
    console.log("your note body is: ", note.body);
};

module.exports = {
    addNote,
    getAll,
    read,
    removeNote,
    logNote
};

