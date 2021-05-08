export class InputTxt extends React.Component {
  state = {
    txt: this.props.note ? this.props.note.content.txt : '',
  };
  handleChangeTxt = ({ target }) => {
    const value = target.value;
    this.setState({ txt: value });
  };

  onDoneClick = () => {
    const { onDone } = this.props;
    onDone(this.state.txt);
    // TODO: reset state
  };
  render() {
    const { txt } = this.state;
    const {style} = this.props;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <textarea
            className='input-note-txt'
            name='txt'
            placeholder='Enter your text'
            cols='1'
            rows='3'
            value={txt}
            onChange={this.handleChangeTxt}
            required
            autoComplete='off'
            style={style}
          />
        </div>
        <div className='flex space-between'>
          <button className='btn-done-note' onClick={this.onDoneClick}>
            Done
          </button>
        </div>
      </React.Fragment>
    );
  }
}
