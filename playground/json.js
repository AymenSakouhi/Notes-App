// var obj = {
//     name : 'Aymen'
// }
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Aymen", "age": "24"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originNote = {
    title: 'some title',
    body : 'some body'
};
let originalNoteString = JSON.stringify(originNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
