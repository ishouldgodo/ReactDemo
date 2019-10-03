import React, { Component } from "react"

import PubSub from "pubsub-js"


export default class Numbergo2 extends Component {
    // 发送消息：PubSub.publish(名称, 参数)

    
    state={
        info:""
    }
   
    // 声明周期 组件完成挂载之后
    componentDidMount(){
        // mykeyvalue表示符  msg报错信息  data传递过来的数据
        PubSub.subscribe("mykeyvalue",(msg,data)=>{
            console.log("从另外一个组件从低过来的数据",data);
            this.setState({
                info: data
            })
        })
    }

   
    render() {
        // render使用state中的数据 必须要先解构构
        let {info}=this.state
        return (
            <div>
                ----{info}
            </div>

        )
    }
}