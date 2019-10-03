import React, { Component } from "react"

import Numbergo1 from "./Numbergo1"
import Numbergo2 from "./Numbergo2"



export default class Numbergo extends Component {
    // 发送消息：PubSub.publish(名称, 参数)


    render() {
        return (
            <div>
                <h2>我是分割线</h2>
                1212 我是主
                <Numbergo1></Numbergo1>
                <Numbergo2></Numbergo2>
            </div>

        )
    }
}