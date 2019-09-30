import React, { Component } from "react";

export default class StaTest extends Component {
  state = {
    nun: 1
  };

  componentDidMount() {
    //  this.setStat是批量执行的  它发现做三次是多与的，所以只执行一次
    // this.setState({
    //   nun: this.state.nun + 1
    // });

    // 
    //  this.setState(obj,callback)
    //  this.setState(fn,callback)

    this.setState(prevState=>({
        nun: prevState.nun + 1
    }))

      this.setState(prevState => ({
          nun: prevState.nun + 1
      }))


      this.setState(prevState => ({
          nun: prevState.nun + 1
      }))

  

  }

  render() {
    return (
      <div>
        {/* 获取state中的值 */}
        {this.state.nun}
      </div>
    );
  }
}
