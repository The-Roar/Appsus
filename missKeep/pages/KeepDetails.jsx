import { keepService } from '../services/keep-service.js';
import { KeepDetailsContent } from '../cmps/KeepDetailsContent.jsx';
import { KeepEdit } from '../cmps/KeepEdit.jsx';

export class KeepDetails extends React.Component {
  state = {
    note: null,
    isEditable: false,
    unsavedBackgroundChange: null,
  };

  componentDidMount() {
    this.loadNote();
  }

  loadNote() {
    const id = this.props.match.params.noteId;
    keepService.getNoteById(id).then((note) => {
      if (!note) {
        this.closeDetailsModal();
      }
      this.setState({ note });
    });
  }

  closeDetailsModal = () => this.props.history.push('/keep');

  removeNote = () => {
    // TODO: are you sure ? [msg]
    const { note } = this.state;
    keepService.removeNoteById(note.id).then(this.closeDetailsModal);
  };

  editModeOn = () => {
    this.setState({ isEditable: true });
  };

  editModeOff = () => {
    this.setState({ isEditable: false });
  };

  handleUnsavedBackgroundChange = (backgroundColor) => {
    this.setState({ unsavedBackgroundChange: backgroundColor });
  };
  saveChanges = (updatedNote) => {
    keepService.updateNoteById(updatedNote).then(() => {
      this.editModeOff();
      this.loadNote();
    });
  };

  render() {
    const { note, isEditable, unsavedBackgroundChange } = this.state;
    if (!note) return <div className='loader'>Loading</div>;
    return isEditable ? (
      <section
        className='note-details-edit-mode'
        style={{
          backgroundColor: unsavedBackgroundChange
            ? unsavedBackgroundChange
            : note.style,
        }}
      >
        <i className='fas fa-edit edit-btn' onClick={this.editModeOn}></i>
        <h2>Edit note</h2>
        <i className='fas fa-times close' onClick={this.closeDetailsModal}></i>
        <i className='far fa-trash-alt remove' onClick={this.removeNote}></i>
        <KeepEdit
          note={note}
          saveChanges={this.saveChanges}
          onBackgroundChange={this.handleUnsavedBackgroundChange}
        />
      </section>
    ) : (
      <section
        className='note-details'
        style={{ backgroundColor: note.style.backgroundColor }}
      >
        <i className='fas fa-edit edit-btn' onClick={this.editModeOn}></i>
        <i className='fas fa-times close' onClick={this.closeDetailsModal}></i>
        <i className='far fa-trash-alt remove' onClick={this.removeNote}></i>
        <div className='content-by-type'>
          <KeepDetailsContent note={note} color={note.style.color}/>
        </div>
      </section>
    );
  }
}
