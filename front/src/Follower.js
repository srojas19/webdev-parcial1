import React, { Component } from 'react';

class Follower extends Component {
  constructor(props) {
    super(props);
  }

  onClick(evt) {
    this.props.checkFollower(this.props.follower.login);
  }

  render() {
    return (
      // <a className="d-flex w-100 justify-content-between list-group-item list-group-item-action flex-column align-items-start"
      <div className='col-lg-2 col-md-3 col-sm-4 mb-4 mx-2 card list-group-item-action'
        onClick = {this.onClick.bind(this)}>
        <img src={this.props.follower.avatar_url} className='img-fluid rounded-circle card-img-top mt-2' width='30%' alt=""/>
        <div className="card-body">
          <p className="card-title"><strong>{this.props.follower.login}</strong></p>
          <a className='btn btn-primary' href={this.props.follower.html_url} target='_blank'>Github</a>
        </div>
      </div>
    );
  }
}

export default Follower;
