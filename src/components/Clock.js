import React,{Component} from "react";


export default class Clock extends Component{
    // state 固定的名字 状态 
    state = {
        data: new Date()
    }
    
    // componentDidMount声明周期函数   表示组件渲染完成后
    componentDidMount(){
        this.timer =setInterval(() => {
            this.setState({//  this.setState固定 更改state中的data值
                 data:new Date()
           })  
        }, 1000);
    }

    // 为了防止内存泄漏  清除定时器
    componentWillUnmount(){
        clearInterval(this.timer);
    }


    
    // 定义的组件   toLocaleTimeString转为一个具体的时间
    render(){
        return(
            <div>
                {this.state.data.toLocaleTimeString()}
            </div>
        )
    }
}