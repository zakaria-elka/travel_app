import React, { Component } from "react";
import Input from "./Input";
export default class FilterBox extends Component{
    state={budget:"",

           destination:"",

           withHotel:"",

           withTransport:"",

           numberOfPeople:"",

           currentFilter:0
        }
         questions=["budget","destination","withHotel","withTransport","numberOfPeople"]
         questionsText=["Whats your budget?","Where are you headed?","Will you need where to spend the nights","will you need transport","How many people are you?"]

         handleNextFilter=(e)=>{
             
            
            let newCurrent=this.state.currentFilter;
             if(e.target.name==="next" && this.state.currentFilter<4){
                 newCurrent++;
                 
                 this.setState({currentFilter:newCurrent})
            }
            
             if(e.target.name==="previous" && this.state.currentFilter>0){
                newCurrent--;
                this.setState({currentFilter:newCurrent})
               }
             
              
              
         }
         handleOnChange=(e)=>{
             const tempstate={...this.state}
             
             tempstate[e.target.name]=e.target.value;
             this.setState(tempstate)
             console.log(tempstate)
         }
     
    render(){
        return<React.Fragment>
           
       <Input type={(this.questions[this.state.currentFilter]==="budget"||this.questions[this.state.currentFilter]==="numberOfPeople")?"number":"text"} placeholder={""} value={this.state} name={this.questions[this.state.currentFilter]} currentFilter={this.state.currentFilter} label={""} question={this.questionsText[this.state.currentFilter]} handleNextFilter={this.handleNextFilter} handleOnChange={this.handleOnChange} />
         
        </React.Fragment>
    }
}