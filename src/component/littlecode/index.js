import React, { Component } from 'react';



class index extends Component {
  render() {
    return (
      <span style={{padding: '3px',fontSize: '0.9em',borderRadius:'3px',border: '1px solid #dddddd'}}>
         <code>{this.props.children}</code>
      </span>
    );
  }
}

export default index;
