import React, { Component } from "react"
export default class MyInput extends Component {
    
    // 第一种
    getvalue11= () => {
        let hah = this.refs.zhi.value
        console.log("第1种", hah)
    }
  
    // 第2种 ref的使用
   getvalue=()=>{
       console.log(this.input1.value)
   }
     
    Valuerefs = React.createRef();//创建一个承装ref的容器  这个容器是专门的  只能保存一个ref  Myrefs一致  
    getvalue22=()=>{
        let pwd = this.Valuerefs.current
        console.log("第三种", pwd.value)
    }

    render() {
        return (
            <div>


                {/* 第一种 */}
                <input type="text" ref="zhi"></input>
                <button onClick={this.getvalue11}>按钮</button>    

                {/* 第二种  this.input1的实例是input*/}
                <input type="text" ref={(input)=>{this.input1=input}}></input>
                <button onBlur={this.getvalue}>按钮</button>
                 

                 {/* 第三种 */}
                <input type="text" ref={this.Valuerefs}></input>
                <button onClick={this.getvalue22}>按钮</button>


            </div>
        )
    }
}