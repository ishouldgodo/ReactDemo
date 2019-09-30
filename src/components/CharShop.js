import React, { Component } from "react";

export default class CharShop  extends Component {
    // state初始化一般写在构造器当中
    constructor(props){
        super(props);
        this.state={
            goods: [
             { id: 1, text: "web111" },
             { id: 2, text: "web222" },
             { id: 3, text: "web333" }
            ]
        }
    }


     render(){
         return(
             <div>
                {/* 条年渲染  类v-for */}
                {this.state.goods.map(item=>
                  <li key={item.id}>{item.text}</li>
                )}
             </div>
         )
     }
}