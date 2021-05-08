export class InputVideo extends React.Component {
  state = {
    videoUrl: this.props.note ? this.props.note.content.video : '',
  };
  handleChangeVideo = ({ target }) => {
    const value = target.value;
    this.setState({ videoUrl: value });
  };

  onDoneClick = () => {
    const { onDone } = this.props;
    onDone(this.state.videoUrl);
    // TODO: reset state
  };
  render() {
    const { videoUrl } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <input
            className='input-note-video'
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
          <button className='btn-done-note' onClick={this.onDoneClick}>
            Done
          </button>
        </div>
      </React.Fragment>
    );
  }
}
