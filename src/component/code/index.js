import React, { Component } from 'react';



class index extends Component {
  render() {
    return (
      <div style={{background:'#fafafa',border: "1px solid #ddd",borderRadius:"3px",padding:'10px'}}>
       <pre>
           <code>{this.props.children}</code>
       </pre>
      </div>
    );
  }
}

export default index;
