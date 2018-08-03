import React, { Component } from 'react';
import DirectotyItem from './directory'


class index extends Component {
   constructor(props){
       super(props)
       this.state = {
           showChild:true
       }
   }

  render() {
    let {directoryObj} = this.props
    let {showChild} = this.state
    let remark = directoryObj.child.length > 0 ? showChild? ' - ':' + ':null
    return (
          <div >
                  <div style={{paddingLeft:!remark ? 10:0}} onClick={()=>{this.setState({showChild:!showChild})}}>
                 {remark}{directoryObj.name}
                   </div>
                  {this.state.showChild && <div style={{marginLeft:30}}>
                          {directoryObj.child.map((item,index)=>{
                           return <DirectotyItem directoryObj={item}/>
                       })}
                  </div>}
          </div>
     
    );
  }
}

export default index;
