import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters, setVisibilityFilter } from '../actions/VisibilityFilterActions';
import { addTodo, toggleTodo, deleteTodo, saveTodo, clearCompleted } from '../actions/TodoActions';
import FilterList from '../components/Filter/FilterList';
import AddTodo from '../components/Todo/AddTodo';
import TodoList from '../components/Todo/TodoList';

class App extends Component {
  render() {
    const { dispatch, visibilityFilter, visibleTodos } = this.props
    return (
      <div className="app container-fluid">
        <FilterList
          filter={visibilityFilter}
          {...VisibilityFilters}
          onFilterChange={filter => dispatch( setVisibilityFilter( filter ) )}
          onClearClick={() => dispatch(clearCompleted())}
        />
        <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(toggleTodo(index))}
          onDeleteClick={ index => dispatch(deleteTodo(index))}
          onSaveClick={ (index, text) => dispatch(saveTodo(index, text))}
        />
      </div>
    )
  }
}

function getVisibilityTodos( todos, filter ) {
  let visibleTodos = [];
  switch( filter ) {
    case VisibilityFilters.SHOW_ALL:
      todos.map(( todo, index ) => {
        visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
    case VisibilityFilters.SHOW_COMPLETED:
      todos.map(( todo, index ) => {
        if ( todo.completed )
          visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
    case VisibilityFilters.SHOW_ACTIVE:
      todos.map(( todo, index ) => {
        if ( !todo.completed )
          visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
  }
}

function mapStateToProps( state ) {
  return {
    visibleTodos: getVisibilityTodos( state.todoAppReducer.todos, state.todoAppReducer.visibilityFilter ),
    visibilityFilter: state.todoAppReducer.visibilityFilter
  };
}

export default connect( mapStateToProps )(App);
