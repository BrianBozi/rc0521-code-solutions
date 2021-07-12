import React from "react";
import ReactDOM from "react-dom"


class Toggler extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggle: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ toggle: !this.state.toggle })
  }


  switch() {
    if(this.state.toggle === true){
      return 'slider on'
    } else {
      return 'slider off'
    }
  }

  slide() {
    if (this.state.toggle === true) {
      return 'slide'
    } else {
      return ''
    }
  }

  render(){
    console.log("state", this.state)

    return (
    <div className={this.switch()} >
      <label htmlFor="" >
        <button onClick={()=> this.handleClick()} type="checkbox" className={this.slide()}></button>
      </label>
    </div>
    )

  }


}



ReactDOM.render(
  <Toggler />,
  document.getElementById('root')
)
