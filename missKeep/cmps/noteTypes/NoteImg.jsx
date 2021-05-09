export function NoteImg({ note, color }) {
  return (
    <div className='img-note' style={{ color }}>
      <h3>{note.content.title}</h3>
      <img src={note.content.img} />
    </div>
  );
}
