import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb.js';

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  }
  
  renderBreadcrumbs() {
    return this.props.breadcrumbs.map((b,i)=>{
      return <Breadcrumb onAction={this.props.onAction.bind()} user={b} index={i} key={i} />
    });
  }
  
  render() {
    return (
      <div>
        <br/>
        <nav className="breadcrumb">
          {this.renderBreadcrumbs()}
        </nav>
      </div>      
    );
  }
  
}

export default Breadcrumbs;
