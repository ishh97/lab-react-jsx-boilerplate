import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  // constructor (){

  // }
  render(props){
    const imgData = this.props.myData
    return(
      <>
      {
        imgData.map((item, index) =>{
          return(<div key={index}>
            <img src={item.img} alt="" />
          </div>)
         }) 
        }
  
      </>
    )
    

  }

  // code here
}
