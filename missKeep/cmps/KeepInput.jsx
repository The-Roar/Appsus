import { InputTxt } from './inputTypes/InputTxt.jsx';
import { InputImg } from './inputTypes/InputImg.jsx';
import { InputVideo } from './inputTypes/InputVideo.jsx';
import { InputTodos } from './inputTypes/InputTodos.jsx';

export function KeepInput({ type, note, onDone, style, handleUnsavedChanges }) {
  switch (type) {
    case 'txt':
      return (
        <InputTxt
          onDone={onDone}
          note={note}
          style={style}
          handleUnsavedChanges={handleUnsavedChanges}
        />
      );
    case 'img':
      return (
        <InputImg
          onDone={onDone}
          note={note}
          style={style}
          handleUnsavedChanges={handleUnsavedChanges}
        />
      );
    case 'video':
      return (
        <InputVideo
          onDone={onDone}
          note={note}
          style={style}
          handleUnsavedChanges={handleUnsavedChanges}
        />
      );
    case 'todos':
      return (
        <InputTodos
          onDone={onDone}
          note={note}
          style={style}
          handleUnsavedChanges={handleUnsavedChanges}
        />
      );
    default:
      return (
        <InputTxt
          onDone={onDone}
          note={note}
          style={style}
          handleUnsavedChanges={handleUnsavedChanges}
        />
      );
  }
}
