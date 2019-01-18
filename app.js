const fs = require('fs');
const _=require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'title of the note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
      describe: 'description of the note',
      demand: true,
      alias: 'b'
};

const argv = yargs
    .command('add', 'add a new note', {
      title: titleOptions ,
      body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read','read a note', {
      title: titleOptions
    })
    .command('remove', 'remove a note', {
      title:titleOptions
    })
    .help()
    .argv;



var command = argv._[0];
console.log('command: ', command);
console.log('Yargs', argv);


if (command === 'add') {
  let note = notes.addNote(argv.title,argv.body);
  if (note===undefined){
    console.log("you are typing a duplicate title");
  } else{
    notes.logNote(note);
  }
} else if (command === 'list'){
  let allNotes = notes.getAll();
  console.log(`prining ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {
  let note = notes.read(argv.title);
  if (note){
    notes.logNote(note);
  } else{
    console.log("we didn't find your note");

  }
}
  else if (command === 'remove'){
   let removedNote = notes.removeNote(argv.title);
  console.log(removedNote ? "note was removed" : "note not found");
} else {
  console.log('command not recognized');
}

