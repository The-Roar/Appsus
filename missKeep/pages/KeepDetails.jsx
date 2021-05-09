import { keepService } from '../services/keep-service.js';
import { KeepDetailsContent } from '../cmps/KeepDetailsContent.jsx';
import { KeepEdit } from '../cmps/KeepEdit.jsx';

export class KeepDetails extends React.Component {
  state = {
    note: null,
    isEditable: false,
    unsavedChanges: null,
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

  closeDetailsModal = () => {
    const { unsavedChanges } = this.state;
    const { showUserMsg } = this.props;
    if (unsavedChanges)
      showUserMsg('unsavedChanges', 'Your changes were discarded');
    else this.props.history.push('/keep');
  };

  removeNote = () => {
    const { note } = this.state;
    keepService.removeNoteById(note.id).then((isSuccess) => {
      const { showUserMsg } = this.props;
      if (isSuccess) {
        showUserMsg('success', 'Note removed');
        this.loadNotes;
      } else showUserMsg('error', 'Something went wrong, please try again');
      this.closeDetailsModal;
    });
  };

  editModeOn = () => {
    this.setState({ isEditable: true });
  };

  editModeOff = () => {
    this.setState({ isEditable: false });
  };

  handleUnsavedChanges = (field, value) => {
    this.setState((prevState) => ({
      unsavedChanges: { ...prevState.unsavedChanges, [field]: value },
    }));
  };

  saveChanges = (updatedNote) => {
    keepService.updateNoteById(updatedNote).then((isSuccess) => {
      const { showUserMsg } = this.props;
      if (isSuccess) {
        showUserMsg('success', 'Note updated');
        this.editModeOff();
        this.loadNote();
      } else showUserMsg('error', 'Something went wrong, please try again');
    });
  };

  getCurrBackgroundColor = () => {
    const { unsavedChanges, note } = this.state;
    if (unsavedChanges) {
      if ('backgroundColor' in unsavedChanges)
        return unsavedChanges.backgroundColor;
      else return note.style;
    } else return note.style;
  };

  render() {
    const { note, isEditable, unsavedChanges } = this.state;
    if (!note) return <div className='loader'>Loading</div>;
    return isEditable ? (
      <section
        className='note-details-edit-mode'
        style={{ backgroundColor: this.getCurrBackgroundColor() }}
      >
        <i className='fas fa-edit edit-btn' onClick={this.editModeOn}></i>
        <h2>Edit note</h2>
        <i className='fas fa-times close' onClick={this.closeDetailsModal}></i>
        <i className='far fa-trash-alt remove' onClick={this.removeNote}></i>
        <KeepEdit
          note={note}
          saveChanges={this.saveChanges}
          handleUnsavedChanges={this.handleUnsavedChanges}
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
          <KeepDetailsContent note={note} color={note.style.color} />
        </div>
      </section>
    );
  }
}
