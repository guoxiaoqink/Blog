import React, { Component } from 'react';



class index extends Component {
  render() {
    return (
      <div style={{marginTop: '20px',marginBottom: '6px',borderBottom: '1px solid #f1f1f1'}}>
         <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default index;
