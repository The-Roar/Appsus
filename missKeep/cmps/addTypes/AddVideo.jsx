export class AddVideo extends React.Component {
  state = {
    videoUrl: '',
  };
  handleChangeVideo = ({ target }) => {
    const value = target.value;
    this.setState({ videoUrl: value });
  };

  onAddNoteClick = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.videoUrl);
    // TODO: reset state
  };
  render() {
    const { videoUrl } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <input
            className='add-note-video'
            type='text'
            name='video'
            placeholder='Youtube Video URL'
            value={videoUrl}
            onChange={this.handleChangeVideo}
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
