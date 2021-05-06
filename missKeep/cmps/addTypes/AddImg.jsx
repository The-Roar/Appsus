export class AddImg extends React.Component {
  state = {
    imgUrl: '',
  };
  handleChangeImg = ({ target }) => {
    const value = target.value;
    this.setState({ imgUrl: value });
  };

  onAddNoteClick = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.imgUrl);
    // TODO: reset state
  };
  render() {
    const { imgUrl } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <input
            className='add-note-img'
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
          <button className='btn-add-note' onClick={this.onAddNoteClick}>
            Add note
          </button>
        </div>
      </React.Fragment>
    );
  }
}
