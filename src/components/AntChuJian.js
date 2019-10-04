import React, { Component } from "react";
import { Button } from 'antd';
import { Layout } from 'antd';


export default class AntChuJian extends Component {
  // 发送消息：PubSub.publish(名称, 参数)

  state = {
    info: ""
  };

  // 声明周期 组件完成挂载之后

  render() {
    // render使用state中的数据 必须要先解构构

    return <div>
            <h1>我是antd的组件</h1>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>

        
    </div>;
  }
}
