export class InputTodos extends React.Component {
  state = {
    todos: this.props.note
      ? this.props.note.content.todos
      : [{ txt: '', doneAt: null }],
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
    this.setState({ todos: updatedTodos }, () => {
      const { handleUnsavedChanges } = this.props;
      if (handleUnsavedChanges) handleUnsavedChanges('todos', this.state.todos);
    });
  };

  resetState = () => {
    this.setState({ todos: [{ txt: '', doneAt: null }] });
  };

  onDoneClick = () => {
    const { onDone } = this.props;
    onDone(this.state.todos);
    this.resetState();
  };

  render() {
    const { todos } = this.state;
    const { style } = this.props;
    return (
      <React.Fragment>
        <div className='input-by-type'>
          <ul className='input-note-todos'>
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
                    style={style}
                  />
                </li>
              );
            })}
            {todos.length < 10 ? (
              <li className='add-todo-row'>
                <i className='fas fa-plus' onClick={this.addTodoInput}></i>
              </li>
            ) : null}
          </ul>
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
