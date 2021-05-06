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
    keepService.addNote(note).then(this.loadNotes);
  };

  render() {
    const { notes } = this.state;
    if (!notes) return <p>Loading...</p>;
    return (
      <section>
        <KeepFilter setFilter={this.setFilter} />
        <KeepAdd addNote={this.addNote} />
        <KeepList notes={notes} />
      </section>
    );
  }
}
