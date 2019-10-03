import React, { Component } from "react"
export default class Login extends Component {
    
    state={
        username:""
    }

   
    changecon = (event) => { //event是某个被绑定的事件  可以使用它代替ref
      let usercont=event.target.value;//获取用户的值
      this.setState({
          username: usercont
      })
      console.log(this.state.username)
    }

    Myrefs = React.createRef();//创建一个承装ref的容器 Myrefs一致
    subcon=(event)=>{
     event.preventDefault()
        let pwd = this.Myrefs.current
        alert(pwd.value)
    }

    // 用户名是受控组件 :会自动维护state
    // 密码框是 非受控组件  :不会自动维护state

    render() {
        return (
            <div>
                <form>
                    {/* onChange用户状态发生改变  就获取值   就是时时获取值 使用onChange */}
                    用户名：<input type="text" onChange={this.changecon}></input>
                    密码： <input type="password" ref={this.Myrefs}></input>
                    <button onClick={this.subcon}>按钮</button>
                </form>
              
            </div>
        )
    }
}