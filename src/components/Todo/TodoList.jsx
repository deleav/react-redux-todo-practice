import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div className="row todoList">
        <div className="col-sm-12">
          {this.props.todos.map((todo, index) =>
            <TodoItem {...todo}
                  key={index}
                  index={index}
                  onClick={ () => this.props.onTodoClick( todo.index ) }
                  onDelete={ () => this.props.onDeleteClick( todo.index ) }
                  onEdit={ () => this.props.onEditClick( todo.index ) }
                  onSave={ ( index, text ) => this.props.onSaveClick( index, text ) }
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
