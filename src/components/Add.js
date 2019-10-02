import React, { Component } from "react";


export default class Add extends Component {
   add=()=>{
       console.log("123")
   }

    // 定义的组件   toLocaleTimeString转为一个具体的时间
    render() {
        return (
            <div>
               <input type="text"></input>
               <button onClick={this.add}>app #3</button>
            </div>
        )
    }
}