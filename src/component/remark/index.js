import React, { Component } from 'react';



class index extends Component {
  render() {
    return (
      <blockquote style={{color: '#545454',
        borderLeft: '4px solid #545454',
        margin:"15px 0",
        padding:"10px 0 10px 5px",
        background:"#f2f2f2"
        }}>
        
         <p>{this.props.children}</p>
        
      </blockquote>
    );
  }
}

export default index;
