import { keepService } from '../services/keep-service.js';
import { KeepList } from '../cmps/KeepList.jsx';
import { KeepFilter } from '../cmps/KeepFilter.jsx';
import { KeepAdd } from '../cmps/KeepAdd.jsx';

export class KeepApp extends React.Component {
  state = {
    notes: null,
    filterBy: null,
  };
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes = () => {
    keepService.query(this.state.filterBy).then((notes) => {
      this.setState({ notes });
    });
  };
  setFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadNotes);
  };

  addNote = (note) => {
    keepService.addNote(note).then((isSuccess) => {
      const { showUserMsg } = this.props;
      if (isSuccess) {
        showUserMsg('success', 'Note added');
        this.loadNotes;
        // TODO: scroll to new note
      } else showUserMsg('error', 'Something went wrong, please try again');
    });
  };

  removeNote = (noteId) => {
    keepService.removeNoteById(noteId).then((isSuccess) => {
      const { showUserMsg } = this.props;
      if (isSuccess) {
        showUserMsg('success', 'Note removed');
        this.loadNotes;
      } else showUserMsg('error', 'Something went wrong, please try again');
    });
  };

  pinToggle = (noteId) => {
    keepService.pinNoteToggleById(noteId).then(this.loadNotes);
  };

  render() {
    const { notes } = this.state;
    if (!notes) return <p>Loading...</p>;
    return (
      <section>
        <KeepFilter setFilter={this.setFilter} />
        <KeepAdd addNote={this.addNote} />
        <KeepList
          removeNote={this.removeNote}
          notes={notes}
          pinToggle={this.pinToggle}
        />
      </section>
    );
  }
}
