export function NoteTxt({ note, color }) {
  return (
    <div className='txt-note' style={{color}}>
      <h3>{note.content.title}</h3>
      <span>{note.content.txt}</span>
    </div>
  );
}
