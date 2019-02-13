console.log("Strating notes.js");

const fs = require("fs");

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  } catch (e) {
    return []; 
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  var duplicateNote = notes.filter(note => {
    return note.title === title;
  });
  console.log("Look i'm here " + duplicateNote.length);

  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
  }
};

var getAll = () => {
  console.log("getting all notes");
};

var getNote = title => {
  console.log(`Getting note ${title}`);
};

var removeNote = title => {
  console.log(`Removing note ${title}`);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
