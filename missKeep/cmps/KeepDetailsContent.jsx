import { NoteTxt } from './noteTypes/NoteTxt.jsx';
import { NoteImg } from './noteTypes/NoteImg.jsx';
import { NoteVideo } from './noteTypes/NoteVideo.jsx';
import { NoteTodos } from './noteTypes/NoteTodos.jsx';

export function KeepDetailsContent({ note, color }) {
  switch (note.type) {
    case 'txt':
      return <NoteTxt note={note} color={color} />;
    case 'img':
      return <NoteImg note={note} />;
    case 'video':
      return <NoteVideo note={note} />;
    case 'todos':
      return <NoteTodos note={note} color={color} />;
    default:
      return <NoteTxt note={note} />;
  }
}
