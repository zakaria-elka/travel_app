import React, { Component } from "react";
export default class BudgetBox extends Component{
     
    render(){
        return<React.Fragment>
        <input type="number" placeholder="your budget here"/>
        <button className="btn btn-success" >Send</button>
        </React.Fragment>
    }
}