export default class Storify{

  constructor(){
    this.storify = {
      methods: {},
      state: {}
    }
    this.callbacks = {}
  }

  setState(method,newState){
    let storedState = this.storify.state[method]
    this.storify.state[method] = this.mergeState(storedState,newState)
    this.fireChanges(method)
  }

  new(methods){
    methods.prototype.setState = this.setState.bind(this, methods.name)
    methods.prototype.state = this.state.bind(this, methods.name)
    this.storify.methods[methods.name] = methods.prototype
    this.storify.state[methods.name] = {}
    this.callbacks[methods.name] = []
  }

  methods(name){
    return this.storify.methods[name]
  }

  fireChanges(method){
    for(var callback of this.callbacks[method]){
      callback(this.storify.state[method])
    }
  }

  onMethod(method,callback){
    this.callbacks[method].push(callback)
  }

  state(method){
    return this.storify.state[method]
  }

  /*private stuff*/

  mergeState(initialState,newState){
    var mergedState = {}

    for (var attrname in initialState){
      mergedState[attrname] = initialState[attrname]
    }

    for (var attrname in newState){
      mergedState[attrname] = newState[attrname]
    }

    return mergedState
  }

}
