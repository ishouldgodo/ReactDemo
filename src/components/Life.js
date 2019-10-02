import React, { Component } from "react";
import ReactDOM from 'react-dom'

export default class Life extends Component {

    state={
       opacity:1
    }

    componentDidMount(){ //声明周期  表示组件已经挂载了
        let { opacity } = this.state  //解构
        this.timeId = setInterval(() => {  // this.timeId是挂载到实例上的  任何地方都可以访问
            opacity -= 0.1;
            if (opacity <= 0) {
                opacity = 1
            }

            this.setState({
                opacity
            })
            console.log(opacity);

        }, 200);
    }
    

    // 收尾工作 如清除定时器  组件将要被卸载  触发的条件  unmountComponentAtNode
    componentWillUnmount(){
        clearInterval(this.timeId)
    }


    death=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById("root"))
    }

     render(){
         let { opacity } = this.state  //结构
        //  因为state已发生改变  render就会执行
        // 所以  当  opacity的值发生改变    render函数就会执行  setTimeout就变成了每个0.2s循环一次
        // render 一上来就会执行   状态改变就会执行
         return(
             <div id="life">
                 <div style={{ opacity }}> React学不会了  怎么办</div>
                 <button onClick={this.death}>不活了</button>
             </div>
           
          
         )
     }
}