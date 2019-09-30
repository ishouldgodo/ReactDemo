
import React from "react" //一定要导入React

// 函数类型去创建组件
export function Web1(props){
    return <div>
              我是以函数的形式创建的组件
              <p> {props.name}</p> 
        </div>
}

// 以类的形式创建组件  这一种传递参数要使用 this  它是挂载到实例上的
export class Web2 extends  React.Component{
    render(){
        return <div>
                  我是类组件
                  <p> {this.props.name}</p>
                </div>
    }
}

