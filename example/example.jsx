import React from 'react'
import storage from './storify'

export default class Example extends React.Component{
  constructor(){
    super()
    this.state = {}
  }
  componentDidMount(){
    storage.onMethod('todo',this.handleChange.bind(this))
    storage.methods('todo').new('new todo?')
  }

  handleChange(state){
    this.setState(state)
  }

  render(){
    return (
      <div>
        {this.state.todo}
      </div>
    )
  }
}
