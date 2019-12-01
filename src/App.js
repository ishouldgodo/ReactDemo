import React from "react";
import login from "./logo.svg";

import "./index";
// 导入组件Clock
import { Web1, Web2 } from "./components/CompType";
import Clock from "./components/Clock";
import StaTest from "./components/StaTest";
import Carshop from "./components/CharShop";
import Hookzujian from "./components/Hookzujian";
import Life from "./components/Life";
import Chuli from "./components/Chuli";

import ToDo from "./components/ToDo";
import Add from "./components/Add";
import ListTask from "./components/ListTask";

import Numbergo from "./page/Numbergo";

import { Route, NavLink, Redirect, Switch } from "react-router-dom";

import DoAddList from "./page/DoAddList";

import Login from "./components/Login";
import MyInput from "./components/MyInput";
import AntChuJian from "./components/AntChuJian";
import Go1 from "./page/Go1";
// import Go1 from "./page/Go1"

// import MyLink from "./page/MyLink"

const jsx = <p>我是p</p>;

function App() {
  return (
    <div>
      {/* 属性也是表达式 */}
      <img src={login} title="我是图" style={{ width: "50px" }} />

      {/* js也是表达式 */}
      {jsx}

      {/* 封装一个路由组件 */}
      {/* <MyLink ha="哈哈哈哈哈121212121212"></MyLink> */}

      {/* <NavLink to="/chuli" activeClassName="demo">Chuli</NavLink><br/> */}
      <NavLink to="/clock" activeClassName="demo">
        Clock
      </NavLink>
      <br />
      <NavLink to="/gotodo" activeClassName="demo">
        gotodo
      </NavLink>
      <NavLink to="go1">去go1</NavLink>

      <Switch>
        <Route path="/Chuli" component={Chuli}></Route>
        <Route path="/Clock" component={Clock}></Route>
        <Go1></Go1>
      </Switch>

      <Login></Login>
      <MyInput></MyInput>

      {/*  */}
      <Numbergo></Numbergo>

      <AntChuJian></AntChuJian>

      <Web1></Web1>
      <Web2></Web2>
    </div>
  );
}
export default App;
