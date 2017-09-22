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
            <br/>
            <div className="card">
                <strong className="card-header text-center">
                    Referenciado {this.props.reference.timesReferenced} veces
                </strong>
                <div className="row">
                    <div className="col-md-3 justify-content-center">
                    <img src={this.props.user.avatar_url} className='img-fluid rounded-circle card-img-top mx-2 my-2' width='10%' alt=""/>
                    </div>
                    <div className="col-md-9 card-body">
                        <h4 className="card-title">{this.props.user.name}</h4>
                        <div className="card-text">
                            <p>{this.props.user.login}</p>
                            <p>{this.props.user.location}</p>
                            <p>{this.props.user.company}</p>
                            <p>{this.props.user.bio}</p>
                            <a href={this.props.user.html_url} className='btn btn-primary' target='_blank'>Github</a>
                            <a href={this.props.user.blog} className='btn btn-light' target='_blank'>Blog</a>
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
