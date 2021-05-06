const { Link } = ReactRouterDOM;
import { NoteTxt } from './noteTypes/NoteTxt.jsx';
import { NoteTodos } from './noteTypes/NoteTodos.jsx';
import { NoteImg } from './noteTypes/NoteImg.jsx';

export function KeepPreview({ note }) {
  switch (note.type) {
    case 'txt':
      return (
        <Link className='note' to={`/keep/${note.id}`}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <NoteTxt note={note} />
        </Link>
      );
    case 'img':
      return (
        <Link className='note' to={`/keep/${note.id}`}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <NoteImg note={note} />
        </Link>
      );
    case 'todos':
      return (
        <Link className='note' to={`/keep/${note.id}`}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <NoteTodos note={note} />
        </Link>
      );
    default:
      <Link className='note' to={`/keep/${note.id}`}>
        {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
        <NoteTxt note={note} />
      </Link>;
      break;
  }
}
