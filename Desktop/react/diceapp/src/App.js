import React, { Component } from 'react'
import { connect } from 'react-redux'
class App extends Component {
render() {
    return (
      <div>
        <img src={require(`./DiceAssets/dice${this.props.number}.png`)} alt="dice" />
        <button onClick={this.props.myButton}>click here</button>
      </div>
    )
  }
}
 
const mapStateToProps = (state) => ({
        number:state.number
      })

const mapDispatchToProps = (dispatch) => {
  return {
  myButton : () => dispatch({ type: "CLICK",payload:Math.floor(Math.random() * 6)+1})
  
}}


export default connect(mapStateToProps, mapDispatchToProps)(App)
