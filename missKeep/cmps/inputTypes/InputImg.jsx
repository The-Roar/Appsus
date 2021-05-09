export class InputImg extends React.Component {
  state = {
    imgUrl: this.props.note ? this.props.note.content.img : '',
  };
  handleChangeImg = ({ target }) => {
    const value = target.value;
    this.setState({ imgUrl: value }, () => {
      const { handleUnsavedChanges } = this.props;
      if (handleUnsavedChanges) handleUnsavedChanges('imgUrl', this.state.imgUrl);
    });
  };

  resetState = () => this.setState({ imgUrl: '' });

  onDoneClick = () => {
    const { onDone } = this.props;
    onDone(this.state.imgUrl);
    this.resetState();
  };
  render() {
    const { imgUrl } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <input
            className='input-note-img'
            type='text'
            name='img'
            placeholder='Image URL'
            onChange={this.handleChangeImg}
            value={imgUrl}
            required
            autoComplete='off'
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
