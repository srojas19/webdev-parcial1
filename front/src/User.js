import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        {this.props.reference.login !== undefined ? 
            <div>
            <h3>Usuario</h3>
            <br/>
            <div className="card">
                <div className="card-header">
                    Referenciado <strong>{this.props.reference.timesReferenced}</strong>  veces
                </div>
                <div className="row">
                    <div className="col-3 justify-content-center">
                    <img src={this.props.user.avatar_url} className='img-fluid rounded-circle card-img-top mx-2 my-2' width='10%' alt=""/>
                    </div>
                    <div className="col-9 card-body">
                        <div className="card-title">{this.props.user.login}</div>
                        <div className="card-text">

                        </div>
                    </div>
                </div>
                
            </div>
            <br/>
            </div>
        : ''    
        }
        </div>
    );
  }
}

export default User;
