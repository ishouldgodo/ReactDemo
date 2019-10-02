import React, { Component } from "react";

export default class ListTask extends Component {
 

    // 定义的组件   toLocaleTimeString转为一个具体的时间
    render() {
        let { tolists } = this.mystate
        return (
            <ul>
                {/* {tolists.map(item=>
              <li>{item}</li>
              )} */}
            </ul>
        )
    }
}

