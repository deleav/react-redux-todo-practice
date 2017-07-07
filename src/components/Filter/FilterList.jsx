import React, { Component, PropTypes } from 'react';

export default class FilterList extends Component {
  showAll = () => {
    this.props.onResetEdit();
    this.props.onFilterChange( this.props.SHOW_ALL );
  }
  showCompleted = () => {
    this.props.onResetEdit();
    this.props.onFilterChange( this.props.SHOW_COMPLETED );
  }
  showActive = () => {
    this.props.onResetEdit();
    this.props.onFilterChange( this.props.SHOW_ACTIVE );
  }

  render() {
    const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, filter } = this.props;
    return (
      <div className="row">
        <div className="filterList col-sm-12">
          <div className="col-sm-4 col-sm-offset-4 text-center">
            <button
              className={(filter == SHOW_ALL ? 'clicked' : 'unclicked') + ' btn btn-default btn-sm'}
              onClick={this.showAll}>
              All
            </button>
            <button
              className={(filter == SHOW_COMPLETED ? 'clicked' : 'unclicked') + ' btn btn-default btn-sm'}
              onClick={this.showCompleted}>
              Completed
            </button>
            <button
              className={(filter == SHOW_ACTIVE ? 'clicked' : 'unclicked') + ' btn btn-default btn-sm'}
              onClick={this.showActive}>
              Active
            </button>
          </div>
          <div className="col-sm-1 text-center">
            {
              filter == SHOW_COMPLETED ?
              <button className="btn btn-sm" onClick={ this.props.onClearClick }>
                Clear Completed
              </button> :
              ''
            }
          </div>
        </div>
      </div>
    )
  }
}

FilterList.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
