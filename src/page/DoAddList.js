import React, { Component } from "react"

// 引入组件
import A from "./A"
import B from "./B"
import C from "./C"


export default class DoAddList extends Component {

    constructor(props){
          super(props);
          this.state={
              todolist:[
                  { id: 1, text: "web111" },
                  { id: 2, text: "web222" },
                  { id: 3, text: "web333" }
              ]
          }
    }

    addtod=(data)=>{
        let con=this.state.todolist;
        con.unshift({ id: this.state.todolist.length + 1, text: data })

        // 跟新状态
        this.setState({
            todolist: con
        })
    }
     
    render() {
        let { todolist}=this.state; //结构
        return (
            <div>
              <A></A>
                {/* 将右边的{this.addtod 方法传递给子组件 */}
                <B len={todolist.length} addtod={this.addtod}></B>
                {/*将父组件中的数据  传递给子组件(父传子)*/}
                <C todolist={todolist}></C>
            </div>
        )
    }
}

