console.log("Strating notes.js");

var addNote = (title, body)  => {
  console.log(`Daniel ${title} is the boss ${body}`); 
}

var getAll = () => {
  console.log("getting all notes"); 
}

var getNote = (title) => {
  console.log(`Getting note ${title}`)
}

var removeNote = (title) => {
  console.log(`Removing note ${title}`);
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}

