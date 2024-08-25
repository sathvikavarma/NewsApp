import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export class App extends Component {
  static propTypes = {}
  name="Sathvika"
  render() {
    return (
      <><Navbar /><News /></>
    )
  }
}

export default App