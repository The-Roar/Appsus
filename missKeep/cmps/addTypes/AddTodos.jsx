export class AddTodos extends React.Component {
  state = {
    todos: [{ txt: '', doneAt: null }],
  };
  addTodoInput = () => {
    const updatedTodos = [...this.state.todos];
    updatedTodos.push({ txt: '', doneAt: null });
    this.setState({ todos: updatedTodos });
  };

  handleChangeTodo = ({ target }) => {
    const todoIdx = target.name.split('_')[1];
    const value = target.value;
    const updatedTodos = [...this.state.todos];
    updatedTodos[todoIdx].txt = value;
    this.setState({ todos: updatedTodos });
  };

  onAddNoteClick = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.todos);
    // TODO: reset state
  };

  render() {
    const { todos } = this.state;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <ul className='add-note-todos'>
            {todos.map((todo, idx) => {
              return (
                <li key={idx}>
                  <input
                    type='text'
                    name={`todo_${idx}`}
                    placeholder={`Todo#${idx + 1}`}
                    onChange={this.handleChangeTodo}
                    value={todo.txt}
                    required
                    autoComplete='off'
                  />
                </li>
              );
            })}
            {todos.length < 10 ? (
              <li className="add-todo-row">
                <i className='fas fa-plus' onClick={this.addTodoInput}></i>
              </li>
            ) : null}
          </ul>
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
