import Storify from '../src/storify'
import todo from './todo_actions'

class Storage extends Storify{
  constructor(){
    super()
    this.new(todo)
  }
}
const storage = new Storage()
export default storage
