import React from 'react';
import login from "./logo.svg"

import "./index"
// 导入组件Clock
import {Web1,Web2} from "./components/CompType"
import Clock from "./components/Clock"
import StaTest from "./components/StaTest"
import Carshop from "./components/CharShop"
import Hookzujian from "./components/Hookzujian"
import Life from "./components/Life"
import Chuli from "./components/Chuli"

import ToDo from "./components/ToDo"
import Add from "./components/Add"
import ListTask from "./components/ListTask"

// import { BrowserRouter as Route, Link } from 'react-router-dom';
import {Link,Route,NavLink,Redirect,Switch} from "react-router-dom"


const jsx=<p>我是p</p>


function App() {

//  this.state={
//    tolists:["11","222","3333"]
//  }




  return (
    <div>
       
        {/* 属性也是表达式 */}
        <img src={login} title="我是图" style={{width:'50px'}}/>

        {/* js也是表达式 */}
        {jsx}



       
      <NavLink to="/chuli" activeClassName="demo">Chuli</NavLink><br/>
      <NavLink to="/clock" activeClassName="demo">Clock</NavLink>
      
      <Switch>
        <Route path="/Chuli" component={Chuli}></Route>
        <Route path="/Clock" component={Clock}></Route>
        <Redirect to="/chuli"></Redirect>
      </Switch>
    



 
      
    </div>
  );
}
export default App;
