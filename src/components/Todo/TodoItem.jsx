import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component {

  save = () => {
    const todoNode = this.refs.todo
    const text = todoNode.value.trim()
    if ( text.length > 0 ) {
      this.props.onSave( this.props.index, text )
      todoNode.value = ''
    } // if
  }

  handleClick = ( e ) => {
    this.save();
  }

  handleKeyPress = ( e ) => {
    if ( e.key == 'Enter' )
      this.save();
  }

  handleDelete = () => {
    let confirm = window.confirm("Confirm to delete");
    if ( confirm )
      this.props.onDelete();
  }

  render() {
    return (
      <div className="row text-center todoItem">
        <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
          { this.props.edit ?
            <span className={ (this.props.completed ? 'completed' : 'todo') + ' text-left' }>
              <span className="row col-xs-12">
                <input ref="todo" type="text" className="form-control" defaultValue={ this.props.text } onKeyPress={ this.handleKeyPress }/>
              </span>
            </span> :
            <span className={ (this.props.completed ? 'completed' : 'todo') + ' text-left' }
              onClick={ this.props.onClick }>
              <span className="row col-xs-12 form-control-static">
                { this.props.text }
              </span>
            </span>
          }
        </div>
        {
          this.props.edit ?
          <div className="col-sm-2 action-button">
            <div className="edit col-sm-6 col-lg-4 btn btn-sm btn-default" onClick={ this.props.onEdit }>Cencel</div>
            <div className="edit col-sm-6 col-lg-4 btn btn-sm btn-primary"  onClick={this.handleClick}>Save</div>
          </div> :
          <div className="col-sm-2 action-button">
            <div className="edit col-sm-6 col-lg-4 btn btn-sm btn-default" onClick={ this.props.onEdit }>Edit</div>
            <div className="edit col-sm-6 col-lg-4 btn btn-sm btn-danger" onClick={ this.handleDelete }>Delete</div>
          </div>
        }
      </div>
    )
  }
}

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
