import React, { Component } from "react"
import PropTypes from 'prop-types' //参数限制
export default class C extends Component {
//    constructor(props){
//        super(props);
//        let { todolist}=this.props; 
//    }

    // 验证 参数必要性
    static propTypes = {
        todolist: PropTypes.array.isRequired
    }


    render() {
        let { todolist } = this.props; //它等价于上面的哪一个内容
        console.log("值传递过来",todolist)
        return (
         <ul>
               {todolist.map((item,index)=>{
                 return  <li key={index}>{item.text}</li>
               })}
         </ul>
        )
    }
}