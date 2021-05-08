const { Link } = ReactRouterDOM;
import { NoteTxt } from './noteTypes/NoteTxt.jsx';
import { NoteTodos } from './noteTypes/NoteTodos.jsx';
import { NoteImg } from './noteTypes/NoteImg.jsx';
import { NoteVideo } from './noteTypes/NoteVideo.jsx';

export function KeepPreview({ note, removeNote, pinToggle }) {
  const handleRemove = (ev) => {
    ev.preventDefault();
    removeNote(note.id);
  };
  const handlePinToggle = (ev) => {
    ev.preventDefault();
    pinToggle(note.id);
  };

  switch (note.type) {
    case 'txt':
      return (
        <Link
          className='note'
          to={`/keep/${note.id}`}
          style={{ backgroundColor: note.style.backgroundColor }}
        >
          <i className='fas fa-thumbtack pin' onClick={handlePinToggle}></i>
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteTxt note={note} color={note.style.color} />
        </Link>
      );
    case 'img':
      return (
        <Link
          className='note'
          to={`/keep/${note.id}`}
          style={{ backgroundColor: note.style.backgroundColor }}
        >
          <i className='fas fa-thumbtack pin' onClick={handlePinToggle}></i>
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteImg note={note} />
        </Link>
      );
    case 'todos':
      return (
        <Link
          className='note'
          to={`/keep/${note.id}`}
          style={{ backgroundColor: note.style.backgroundColor }}
        >
          <i className='fas fa-thumbtack pin' onClick={handlePinToggle}></i>
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteTodos note={note} color={note.style.color} />
        </Link>
      );
    case 'video':
      return (
        <Link
          className='note'
          to={`/keep/${note.id}`}
          style={{ backgroundColor: note.style.backgroundColor }}
        >
          <i className='fas fa-thumbtack pin' onClick={handlePinToggle}></i>
          <i className='far fa-trash-alt remove' onClick={handleRemove}></i>
          <NoteVideo note={note} />
        </Link>
      );
    default:
      <Link
        className='note'
        to={`/keep/${note.id}`}
        style={note.style}
        style={{ backgroundColor: note.style.backgroundColor }}
      >
        <i className='fas fa-thumbtack pin' onClick={handlePinToggle}></i>
        <i className='far fa-trash-alt remove'></i>
        <NoteTxt note={note} />
      </Link>;
      break;
  }
}
