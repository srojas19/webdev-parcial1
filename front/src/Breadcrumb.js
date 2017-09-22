import React, { Component } from 'react';

class Breadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  onClick(evt){
    this.props.onAction(this.props.user, this.props.index);
  }
  
  render() {
    return (
      <a href="#" className="breadcrumb-item"
          onClick={this.onClick.bind(this)}>
        {this.props.user}
      </a>
    );
  }
}

export default Breadcrumb;
