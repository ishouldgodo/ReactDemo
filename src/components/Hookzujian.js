
import React, { useState } from "react" //注意这里  React的大小写

export default function HookTest(){
    const [count,setCount]=useState(0); //解构
    return(
        <div>
            <p>点击了{count}</p>
            <button onClick={()=>setCount(count+1)}>点击</button>
        </div>
    )
}