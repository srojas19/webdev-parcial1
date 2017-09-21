import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex w-100 justify-content-between list-group-item list-group-item-action flex-column align-items-start">
        <h5 className="mb-1">{this.props.follower.login}</h5>
        <p className="mb-1">
        </p>
      </div>
    );
  }
}

export default Follower;
