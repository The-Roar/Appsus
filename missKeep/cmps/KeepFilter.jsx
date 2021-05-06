export class KeepFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      type: 'all',
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    this.setState(
      { filterBy: { ...this.state.filterBy, [field]: value } },
      () => {
        this.props.setFilter(this.state.filterBy);
      }
    );
  };

  render() {
    const { txt, type } = this.state.filterBy;
    return (
      <div className='container'>
        <form className='filter-notes flex'>
          <input
            type='search'
            id='note-txt-filter'
            name='txt'
            value={txt}
            onChange={this.handleChange}
            placeholder='Search for a note...'
          />
          <label htmlFor='note-type-filter'>Type: </label>
          <select
            id='note-type-filter'
            name='type'
            onChange={this.handleChange}
            value={type}
          >
            <option value='all'>All</option>
            <option value='txt'>Text</option>
            <option value='img'>Image</option>
            <option value='video'>Video</option>
            <option value='todos'>To-do list</option>
          </select>
        </form>
      </div>
    );
  }
}
