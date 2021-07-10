import React from 'react'
import ReactDOM from 'react-dom'

class HotButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { click: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ click: this.state.click + 1 })
    console.log("work")
  }



  function Class (){
    if (this.state.click == 0 || this.state.click <= 2) {
      return (
        <button className={'three'}>Click ME!</button>
      )}
    else if (this.state.click >= 3 && this.state.click <= 5) {
      return(
        <button className={'six'} > Click ME!</button>
      )
    }
  }

  render (){

  const Button = <button onClick={() => this.handleClick()} className={color}>click Me </button>;


  //   if(this.state.click == 0 ||  this.state.click <= 2){
  //     return (
  //       <button onClick={() => this.handleClick()} className={'three'}>Click ME!</button>
  //     )
  //   } else if (this.state.click >= 3 && this.state.click <= 5) {
  //     return(
  //       <button onClick={() => this.handleClick()} className={'six'} > Click ME!</button>
  //     )
  //   } else if (this.state.click >= 6 && this.state.click <= 8){
  //     return (
  //       <button onClick={() => this.handleClick()} className={'nine'} > Click ME!</button>
  //   )}
  //     else if (this.state.click >= 9 && this.state.click <= 11) {
  //       return (
  //       <button onClick={() => this.handleClick()} className={'twelve'} > Click ME!</button>
  //   )}
  //     else if (this.state.click >= 12 && this.state.click <=14) {
  //       return (
  //       <button onClick={() => this.handleClick()} className={'fifteen'} > Click ME!</button>
  //   )}
  //   else if (this.state.click >= 15){
  //     return (
  //       <button onClick={() => this.handleClick()} className={'eighteen'} > Click ME! </button>
  //     )
  // }
}
}


export default HotButton
