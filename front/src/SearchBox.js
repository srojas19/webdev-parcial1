import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {

  constructor(props){
    super(props);
  }

  onKeyPress(evt) {
    if(evt.keyCode ==='Enter') {
      this.props.onSearch(evt.target.value);
    }
  }

  render() {
    return (
      <div>
        <h4>Búsqueda</h4>
        <div className="input-group">
          <input type="text" id='nombre'
          ref = {(input) => this.input = input} 
          defaultvalue = {this.props.user}
          onKeyPress = {this.onKeyPress.bind(this)} className="form-control form-control-sm" placeholder="Usuario Github" aria-label="Nombre"/>
        </div>
        <br/>
      </div>
      
    );
  }
}

SearchBox.PropTypes = {
  onSearch: PropTypes.func.isrequired,
  user: PropTypes.string.isrequired
}

export default SearchBox;
