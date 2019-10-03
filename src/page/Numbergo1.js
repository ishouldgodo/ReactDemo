import React, { Component } from "react"

import PubSub from "pubsub-js"


export default class Numbergo1 extends Component {
    // 发送消息：PubSub.publish(名称, 参数)

    state={
        listitem:"我是从一个组件的 跑过来的"
    }
    
    chuandi=()=>{
        // PubSub.publish(id, data)  
        // id 声明一个唯一的id，或者标识符，为pubsub-js提供辨识，千万不可重复
        // data 第二个参数也可以传递一个对象
        let {listitem}=this.state //结果
        PubSub.publish('mykeyvalue',listitem)
    }


    render() {
        return (
            <div>
                <button onClick={this.chuandi}>按钮</button>
            </div>
           
        )
    }
}