import notes from "../notes"
const Note = () => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <div className="note-card" key={note.id}>
          <h1 className="note-title">{note.jokeType}</h1>
          <p className="note-text">{note.jokeText}</p>
          
        </div>
      ))}
     
    </div>
  );
};
export default Note;
