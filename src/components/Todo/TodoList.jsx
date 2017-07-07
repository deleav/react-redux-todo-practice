import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div className="row todoList">
        <div className="col-sm-12">
          {this.props.todos.map((todo, index) =>
            <TodoItem {...todo}
                  key={todo.index}
                  index={todo.index}
                  onClick={ this.props.onTodoClick }
                  onDelete={ this.props.onDeleteClick }
                  onEdit={ this.props.onEditClick }
                  onSave={ this.props.onSaveClick }
            />
          )}
        </div>
      </div>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
