import React, { Component } from 'react';
import Follower from './Follower.js';

class FollowersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.followers.map((f,i)=>{
        return <Follower follower={f} key={i} />
    });
}

  render() {
    return (
      <div>
        <h4>Seguidores</h4>
        <div className="list-group">
          {this.renderList()}
        </div>
      </div>
      
    );
  }
}

export default FollowersList;
