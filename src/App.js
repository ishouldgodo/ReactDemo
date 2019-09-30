import React from 'react';
import login from "./logo.svg"

// 导入组件Clock
import {Web1,Web2} from "./components/CompType"
import Clock from "./components/Clock"
import StaTest from "./components/StaTest"
import Carshop from "./components/CharShop"




const jsx=<p>我是p</p>

function App() {
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


    </div>
  );
}
export default App;
