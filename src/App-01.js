import React from 'react';
import login from "./logo.svg"

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
import {Link,Route} from "react-router-dom"


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

        {/* 使用组件 */}
        <Web1 name="传值1"></Web1>
        <Web2 name="传值2"></Web2>

        {/* 动态组件 */}
        <Clock></Clock>

        {/*  */}
      <StaTest></StaTest>

      {/*  */}
      <Carshop></Carshop>
      

      {/* Hook的使用 */}
      <Hookzujian></Hookzujian>

      {/* <Life></Life> */}

      <Chuli></Chuli>


      {/* todeolise */}
      <ToDo></ToDo>
      <Add></Add>
      
      <Link to="/chuli">Chuli</Link>
      <Link to="/clock">Clock</Link>
     

      <Route path="/Chuli" componenet={Chuli}></Route>
      <Route path="/Clock" componenet={Clock}></Route>
      



 
      
    </div>
  );
}
export default App;
