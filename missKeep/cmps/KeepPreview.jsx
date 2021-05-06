const { Link } = ReactRouterDOM;
import { NoteTxt } from './noteTypes/NoteTxt.jsx';
import { NoteTodos } from './noteTypes/NoteTodos.jsx';
import { NoteImg } from './noteTypes/NoteImg.jsx';
import { NoteVideo } from './noteTypes/NoteVideo.jsx';

export function KeepPreview({ note, removeNote }) {
  const handleRemove = () => removeNote(note.id);

  switch (note.type) {
    case 'txt':
      return (
        <Link className='note' to={`/keep/${note.id}`} style={note.style}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteTxt note={note} />
        </Link>
      );
    case 'img':
      return (
        <Link className='note' to={`/keep/${note.id}`} style={note.style}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteImg note={note} />
        </Link>
      );
    case 'todos':
      return (
        <Link className='note' to={`/keep/${note.id}`} style={note.style}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteTodos note={note} />
        </Link>
      );
    case 'video':
      return (
        <Link className='note' to={`/keep/${note.id}`} style={note.style}>
          {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteVideo note={note} />
        </Link>
      );
    default:
      <Link className='note' to={`/keep/${note.id}`} style={note.style}>
        {note.isPinned ? <i className='fas fa-thumbtack pin'></i> : ''}
        <i className='far fa-trash-alt remove'></i>
        <NoteTxt note={note} />
      </Link>;
      break;
  }
}
