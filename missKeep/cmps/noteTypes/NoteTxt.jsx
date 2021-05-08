import { LongTxt } from '../../../main/cmps/util/LongTxt.jsx';

export function NoteTxt({ note, color }) {
  return (
    <div className='txt-note' style={{ color }}>
      <h3>{note.content.title}</h3>
      <LongTxt text={note.content.txt} />
    </div>
  );
}
