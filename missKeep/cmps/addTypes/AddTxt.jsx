export class AddTxt extends React.Component {
  state = {
    txt: '',
  };
  handleChangeTxt = ({ target }) => {
    const value = target.value;
    this.setState({ txt: value });
  };

  onAddNoteClick = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.txt);
    // TODO: reset state
  };
  render() {
    const { txt } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <textarea
            className='add-note-txt'
            name='txt'
            placeholder='Enter your text'
            cols='1'
            rows='3'
            value={txt}
            onChange={this.handleChangeTxt}
            required
          />
        </div>
        <div className='flex space-between'>
          <button className='btn-add-note' onClick={this.onAddNoteClick}>
            Add note
          </button>
        </div>
      </React.Fragment>
    );
  }
}
