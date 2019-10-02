import React, { Component } from "react"

import PropTypes from 'prop-types' //参数限制

export default class B extends Component {
    // static PropTypes={
    //     len:PropTypes.number.isRequired,
    //     addtod:PropTypes.function.isRequired

    // }
    
    // 验证 参数必要性
    static propTypes = {
        len: PropTypes.number.isRequired,
        addtod: PropTypes.func.isRequired
    }

    add=()=>{
        console.log(this.refs.conn.value) 
        let uservalu = this.refs.conn.value; //获取值

        let {addtod}=this.props;//父组件想子组件传递了一个方法

        addtod(uservalu)  //调用这个方法

        this.refs.conn.value=""; //清空
    }

    render() {
        let { len}=this.props
        return (
            <div>
                <input type="text" ref="conn" /><button onClick={this.add} >123#{len}</button>
            </div>
        )
    }
}