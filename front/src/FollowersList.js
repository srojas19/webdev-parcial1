import React, { Component } from 'react';
import Follower from './Follower.js';

class FollowersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.followers.map((f,i)=>{
        return <Follower checkFollower = {this.props.checkFollower.bind()} follower={f} key={f.id} />
    });
}

  render() {
    return (
      <div>
        <h4>Seguidores</h4>
        <div className="row justify-content-center text-center">
          {this.renderList()}
        </div>
      </div>
      
    );
  }
}

export default FollowersList;
