import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import FollowersList from './FollowersList.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      historial: [],
      actual: [],
      followers: []
    }
  }

  // componentDidMount(){
  //   fetch('/getFollowers/srojas19')
  //   .then((res) => res.json())
  //   .then((data) => this.setState({followers: data.data}));
  // }

  onSearch(user) {
    fetch('/getFollowers/'+user)
    .then((res) => res.json())
    .then((data) => this.setState({followers: data.data}));
    console.log(user);
    console.log(this.state.followers);
  }

  render() {
    return (
      <div className="App container">
        <SearchBox onSearch={this.onSearch.bind(this)} user='' />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
