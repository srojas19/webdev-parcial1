import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import FollowersList from './FollowersList.js';
import Breadcrumbs from './Breadcrumbs.js';
import User from './User.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      breadcrumbs: ['Home'],
      reference: [],
      actual: [],
      followers: []
    }
  }

  setActual(user){
    fetch('/getUser/'+user)
    .then((res) => res.json())
    .then((data) => this.setState({actual: data.data}));
    this.reference(user);
  }

  reference(user){
    fetch('/reference/'+user, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    .then((res) => res.json())
    .then((data) => this.setState({reference: data}))
  }

  onSearch(user) {
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data,
                                  breadcrumbs: ['Home',user]}));
    this.setActual(user);
  }

  onAction(user, i) {
    this.setState({breadcrumbs: this.state.breadcrumbs.splice(0,i+1)});
    if(user==='Home') return this.setState({followers: []});
    if(this.state.breadcrumbs.length === i) return; 
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data}));
    this.setActual(user);
  }

  checkFollower(user) {
    this.state.breadcrumbs.push(user)
    fetch('/getFollowers/' + user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data}));
    this.setActual(user);
  }

  render() {
    return (
      <div className="App container">
        <Breadcrumbs onAction = {this.onAction.bind(this)} breadcrumbs = {this.state.breadcrumbs} />
        <SearchBox onSearch = {this.onSearch.bind(this)} user = '' />
        <User user = {this.state.actual} reference = {this.state.reference} />
        <FollowersList checkFollower = {this.checkFollower.bind(this)} followers = {this.state.followers} />
      </div>
    );
  }
}

export default App;
