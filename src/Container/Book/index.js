
import React, { Component } from 'react';

import Direactoty from './directory'
import Content from './bookContent'

class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            directoryList:[
                {
                    name:'第一阶段',
                    path:'',
                    level:1,
                    child:[
                       {
                           name:'简介',
                           path:'',
                           level:2,
                           child:[
                           ]
                       },
                       {
                           name:'运行一个项目',
                           path:'',
                           level:2,
                           child:[
                               {
                                   name:'暴露webpack的配置',
                                   path:'',
                                   level:3,
                                   child:[]
                               },
                           ]
                       },
                    ]
                },
                {
                   name:'第二阶段',
                   path:'',
                   level:1,
                   child:[
                       
                   ]
                }
            ]
        }
     }


  render() {
    let {directoryList}  = this.state
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
       <div style={{padding:20}}>
           {directoryList.map((item,index)=>{
               return <Direactoty directoryObj={item}></Direactoty>
           })}
       </div>
       <div  style={{marginLeft:30,borderLeft:"1px solid #ccc"}}>
          <Content></Content>
       </div>
     
      </div>
    );
  }
}

export default index;
