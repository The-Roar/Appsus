import { KeepInput } from './KeepInput.jsx';

export class KeepEdit extends React.Component {
  state = {
    title: this.props.note.content.title,
    backgroundColor: this.props.note.style.backgroundColor,
    color: this.props.note.style.color,
  };
  handleChangeTitle = ({ target }) => {
    const value = target.value;
    this.setState({ title: value }, () => {
      const { handleUnsavedChanges } = this.props;
      handleUnsavedChanges('title', this.state.title);
    });
  };
  onSaveChanges = (updatedData) => {
    const { note } = this.props;
    const { backgroundColor, color, title } = this.state;
    note.content.title = title;
    note.content[note.type] = updatedData;
    note.style = { backgroundColor, color };
    this.props.saveChanges(note);
  };

  handleChangeColor = ({ target }) => {
    const value = target.value;
    const field = target.name;
    this.setState({ [field]: value }, () => {
      const { handleUnsavedChanges } = this.props;
      handleUnsavedChanges([field], value);
    });
  };

  render() {
    const { note, handleUnsavedChanges } = this.props;
    const { title, backgroundColor, color } = this.state;
    return (
      <div className='edit-note center-margin'>
        <input
          className='input-note-title'
          type='text'
          name='title'
          placeholder='Title'
          onChange={this.handleChangeTitle}
          value={title}
          required
          autoComplete='off'
          style={{ color }}
        />
        <KeepInput
          type={note.type}
          note={note}
          onDone={this.onSaveChanges}
          style={{ color }}
          handleUnsavedChanges={handleUnsavedChanges}
        />
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
      </div>
    );
  }
}
