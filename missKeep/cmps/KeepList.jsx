import { KeepPreview } from './KeepPreview.jsx';

export function KeepList({ notes }) {
  return (
    <section className='note-list center-margin'>
      <section className='pinned'>
        {notes
          .filter((note) => note.isPinned)
          .map((note) => (
            <KeepPreview note={note} key={note.id} />
          ))}
      </section>
      <section className='unpinned'>
        {notes
          .filter((note) => !note.isPinned)
          .map((note) => (
            <KeepPreview note={note} key={note.id} />
          ))}
      </section>
    </section>
  );
}