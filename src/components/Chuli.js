import React, { Component } from "react";
import { Link, Route, NavLink, Switch, Redirect} from "react-router-dom"

import Leftnew from "./Leftnew"
import Rightinfo from "./Rightinfo"

// import MyLink from "../page/MyLink"

export default class chuli extends Component {
   


 

    // 定义的组件   toLocaleTimeString转为一个具体的时间
    render() {
        let canshu="a1";
        return (
            <div>
             {/* <Rightinfo></Rightinfo> */}
              <h2>我是处理组件的内容</h2>
                <NavLink to={`/chuli/leftnew${canshu}`}>leftnew</NavLink> &ensp;
                <NavLink to="/chuli/rightinfo">rightinfo</NavLink>
                     {/* <MyLink to="/chuli/rightinfo">rightinfo</MyLink> */}
                     {/* <MyLink></MyLink> */}

                <Redirect to="/chuli/leftnew"></Redirect>
                

                <Switch>
                    <Route path="/chuli/leftnew:mid" component={Leftnew}></Route>
                    <Route path="/chuli/rightinfo" component={Rightinfo}></Route>
                </Switch>

            </div>
        )
    }
}