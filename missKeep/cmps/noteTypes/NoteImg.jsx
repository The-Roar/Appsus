export function NoteImg({ note }) {
  return (
    <div className='img-note'>
      <h3>{note.content.title}</h3>
      <img src={note.content.img} className='note-img' />
    </div>
  );
}
