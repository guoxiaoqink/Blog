import React, { Component } from 'react';
import Code from '../../component/code'
import LittleCode from '../../component/littlecode'
import Title from '../../component/title'
import Remark from '../../component/remark'

class index extends Component {
  
  render() {
    
    return (
      <div className="App">

      <Title>React.js de context</Title>
         <Code>
{`function pad(val, len) {
val = String(val);
len = len || 2;
while (val.length < len) val = "0" + val;
return val;
}`}
         </Code>
         <LittleCode>java</LittleCode>
         <Remark>回答疑问</Remark>
      </div>
    );
  }
}

export default index;
