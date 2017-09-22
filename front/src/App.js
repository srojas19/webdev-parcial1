import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import FollowersList from './FollowersList.js';
import Breadcrumbs from './Breadcrumbs.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      breadcrumbs: ['Home'],
      followers: []
    }
  }

  onSearch(user) {
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data,
                                  breadcrumbs: ['Home',user]}));
  }

  onAction(user, i) {
    this.setState({breadcrumbs: this.state.breadcrumbs.splice(0,i+1)});
    if(user==='Home') return this.setState({followers: []});
    if(this.state.breadcrumbs.length === i) return; 
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data}));
  }

  checkFollower(user) {
    this.state.breadcrumbs.push(user)
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data}));
  }

  render() {
    return (
      <div className="App container">
        <Breadcrumbs onAction = {this.onAction.bind(this)} breadcrumbs = {this.state.breadcrumbs} />
        <SearchBox onSearch = {this.onSearch.bind(this)} user = '' />
        <FollowersList checkFollower = {this.checkFollower.bind(this)} followers = {this.state.followers} />
      </div>
    );
  }
}

export default App;
