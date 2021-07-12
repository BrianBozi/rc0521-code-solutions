import React from "react"
import ReactDOM from "react-dom"


class NewsLetterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log("state:", this.state)
  }


  render(){
    return(
    <div>

    <form action="" onSubmit={this.handleSubmit}>
      <label htmlFor="">
      <input type="text" value ={this.state.value} onChange={this.handleChange} />
      </label>
      <button>Submit</button>
    </form>

    </div>
    )

  }
}


ReactDOM.render(
  <NewsLetterForm />,
  document.getElementById('root')
)
