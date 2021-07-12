import React from 'react'
import ReactDOM from 'react-dom'

class HotButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { click: 1}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ click: this.state.click + 1 })
    console.log("work")
  }



  ClassColor (){
    if (this.state.click <= 3){
      return 'three'
    } else if ( this.state.click <= 6){
      return 'six'
    } else if (this.state.click <= 9){
      return 'nine'
    } else if (this.state.click <= 12){
      return 'twelve'
    } else if (this.state.click <= 15) {
      return 'fifteen'
    } else {
      return 'eighteen'
    }
  }

  render (){
    return (
    <button onClick={() => this.handleClick()} className={this.ClassColor()}>click Me</button>
    )
  }
}


export default HotButton
