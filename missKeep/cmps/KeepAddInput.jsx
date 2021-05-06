import { AddTxt } from './addTypes/AddTxt.jsx';
import { AddImg } from './addTypes/AddImg.jsx';
import { AddVideo } from './addTypes/AddVideo.jsx';
import { AddTodos } from './addTypes/AddTodos.jsx';

export function KeepAddInput({ type, onSubmit }) {
  switch (type) {
    case 'txt':
      return <AddTxt onSubmit={onSubmit} />;
    case 'img':
      return <AddImg onSubmit={onSubmit} />;
    case 'video':
      return <AddVideo onSubmit={onSubmit} />;
    case 'todos':
      return <AddTodos onSubmit={onSubmit} />;
    default:
      return <AddTxt onSubmit={onSubmit} />;
  }
}
