import { keeepService } from '../services/keep-service.js';
import { utilService } from '../../main/services/util-service.js';
import { KeepAddInput } from './KeepAddInput.jsx';

export class KeepAdd extends React.Component {
  state = {
    note: {
      id: utilService.makeId(),
      type: 'txt',
      isPinned: false,
      content: null,
      style: { backgroundColor: '#f5f5dc', color: '#000000' },
    },
    title: '',
  };

  handleChangeTitle = ({ target }) => {
    const value = target.value;
    this.setState({ title: value });
  };

  handleChangeColor = ({ target }) => {
    const value = target.value;
    const field = target.name;
    this.setState((prevState) => ({
      note: {
        ...prevState.note,
        style: { ...prevState.note.style, [field]: value },
      },
    }));
  };

  onSubmit = (userInput) => {
    if (userInput || this.state.title) {
      const fullContent = {
        title: this.state.title,
        [this.state.note.type]: userInput,
      };
      this.setState(
        (prevState) => ({
          note: { ...prevState.note, content: fullContent },
        }),
        () => {
          this.props.addNote(this.state.note);
          // TODO: reset state
        }
      );
    } else {
      // TODO: show msg that requires to fill in those fields
    }
  };

  changeType = ({ currentTarget }) => {
    const currType = currentTarget.id;
    this.setState((prevState) => ({
      note: {
        ...prevState.note,
        type: currType,
      },
    }));
  };

  render() {
    const { type, isPinned, content } = this.state.note;
    const { title } = this.state;
    const { backgroundColor, color } = this.state.note.style;
    return (
      <div className='add-note center-margin'>
        <h2>Add a note</h2>
        <input
          className='add-note-title'
          type='text'
          name='title'
          placeholder='Title'
          onChange={this.handleChangeTitle}
          value={title}
          required
          autoComplete='off'
        />
        <KeepAddInput type={type} onSubmit={this.onSubmit} />
        <section className='note-color-picker'>
          <label>
            <i className='fas fa-fill-drip'></i>
            <input
              name='backgroundColor'
              type='color'
              value={backgroundColor}
              onChange={this.handleChangeColor}
            />
          </label>
          <label>
            <i className='fas fa-font'></i>{' '}
            <input
              name='color'
              type='color'
              value={color}
              onChange={this.handleChangeColor}
            />
          </label>
        </section>
        <section className='note-type-btns'>
          <span
            onClick={this.changeType}
            className={type === 'txt' ? 'active' : ''}
            id='txt'
          >
            <i className='fas fa-font fa-2x'></i>
          </span>
          <span
            onClick={this.changeType}
            className={type === 'img' ? 'active' : ''}
            id='img'
          >
            <i className='far fa-image fa-2x'></i>
          </span>
          <span
            onClick={this.changeType}
            className={type === 'video' ? 'active' : ''}
            id='video'
          >
            <i className='fab fa-youtube fa-2x'></i>
          </span>
          <span
            onClick={this.changeType}
            className={type === 'todos' ? 'active' : ''}
            id='todos'
          >
            <i className='fas fa-list fa-2x'></i>
          </span>
        </section>
      </div>
    );
  }
}
