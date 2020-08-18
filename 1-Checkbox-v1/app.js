



const PositveMessage = () => <p>you can watch this film!</p>
const NegativeMessage = () => <p>you can't watch this film! you are too young ;(</p>



class  CheckAgeConfiramtion extends React.Component {

  state =  {
    isConfirmed: false,
  }

handleCheckBoxChange = () => {
  this.setState({
    isConfirmed: !this.state.isConfirmed
  })
}

displayMessage = () => {
  if(this.state.isConfirmed) {
    return < PositveMessage />
  } else {
    return < NegativeMessage />
  }
}

render() {
  console.log(this.state.isConfirmed)
  return(
    <React.Fragment>
    <h1>Buy ticket on the best thriller in this year !</h1>
    <input type="checkbox" id="age" onChange = {this.handleCheckBoxChange} checked = {this.state.isConfirmed}/>
    <label htmlFor="age">I am 16 years old</label>
    {this.displayMessage()}
   
    </React.Fragment>
  )
  
}
}


ReactDOM.render(<CheckAgeConfiramtion />, document.getElementById('root'))