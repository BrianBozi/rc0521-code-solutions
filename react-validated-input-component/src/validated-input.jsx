import React from "react"
import ReactDOM from "react-dom"

class Validator extends React.Component {
  constructor(props){
    super(props);
    this.state = { password: ''}

    this.handleChange = this.handleChange.bind(this)
    this.checker = this.checker.bind(this)
    this.symbol = this.symbol.bind(this)
  }

  handleChange(event){
    this.setState({password: event.target.value})
  }

  checker(){
    if(this.state.password.length < 8){
      return 'password too short'
    } else {
      return ''
    }
  }

  symbol(){
    if(this.state.password.length < 8){
      return 'fa fa-times icon short'
    } else {
      return 'fa fa-check icon pass'
    }
  }

  render(){
    return(
      <div>
        <form action="">
          <label htmlFor=""> Password </label>
          <br />
            <input onChange={this.handleChange} value={this.state.value}  type="password" />
            <i className={this.symbol()}></i>
          <p>{this.checker()}</p>
        </form>
      </div>
    )
  }
}

export default Validator
