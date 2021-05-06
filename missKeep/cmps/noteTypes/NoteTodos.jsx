export class NoteTodos extends React.Component {
  state = {
    todos: this.props.note.content.todos,
  };

  toggleChecked = (ev) => {
    ev.preventDefault();
    const todoIdx = ev.currentTarget.id.split('_')[1];
    const updatedTodos = [...this.state.todos];
    updatedTodos[todoIdx].doneAt = updatedTodos[todoIdx].doneAt
      ? null
      : Date.now();
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos } = this.state;
    const { note } = this.props;
    const noteId = note.id;
    return (
      <div className='todos-note'>
        <h3>{note.content.title}</h3>
        {todos.map((todo, idx) => {
          return (
            <div
              className={`todo ${todo.doneAt ? 'done' : ''}`}
              key={idx}
              id={`${noteId}_${idx}`}
              onClick={this.toggleChecked}
            >
              {todo.doneAt ? (
                <i className='far fa-check-circle'></i>
              ) : (
                <i className='far fa-circle'></i>
              )}
              <span>{todo.txt}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
