export function NoteTxt({ note }) {
  return (
    <div className='txt-note'>
      <h3>{note.content.title}</h3>
      <span>{note.content.txt}</span>
    </div>
  );
}
