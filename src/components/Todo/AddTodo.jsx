import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div className="addTodo col-sm-12 text-center">
        <div className="col-sm-5 col-sm-offset-4">
          <div className="col-sm-10">
            <input className="form-control" type='text' ref='todo' onKeyPress={e => this.handleKeyPress( e )} />
          </div>
          <div className="col-sm-1 addbtn">
            <button className="btn btn-sm btn-primary" onClick={(e) => this.handleClick(e)}>
              ADD
            </button>
          </div>
        </div>
      </div>
    )
  }

  add = () => {
    const todoNode = this.refs.todo
    const text = todoNode.value.trim()
    if ( text.length > 0 ) {
      this.props.onAddClick( text )
      todoNode.value = ''
    } // if
  }

  handleClick( e ) {
    this.add();
  }

  handleKeyPress( e ) {
    if ( e.key == 'Enter' )
      this.add();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
