import React,{Component} from "react";
export default class Input extends Component{
render(){
    return <div   className="p-5 bg-dark">
        <div className="form-group my-4">
        <label htmlFor={this.props.name} style={{color:"white"}} className="mx-4" >{this.props.question}</label>
        <input type={this.props.type} value={this.props.value[this.props.name]}name={this.props.name} id={this.props.name} onChange={(e)=>{this.props.handleOnChange(e)}}/>
        </div>
        <div className="">
        <button className="btn btn-primary" onClick={(e)=>this.props.handleNextFilter(e)} disabled={this.props.currentFilter>0?"":"disabled"}name="previous" >previous</button>
       <button className="btn btn-primary mx-4" onClick={(e)=>this.props.handleNextFilter(e)} disabled={ this.props.currentFilter<4?"":"disabled"} name="next" >next</button>
         
         
         <button className="btn btn-success" disabled={this.props.currentFilter===4?"":"disabled"}  >Search</button>
        </div>
    </div>
}
}