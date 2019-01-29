




class Render {
  constructor(controller, Id) {
    this.controller = controller
    this.Id = Id
  }

  display(){
    document.querySelector(this.Id).innerHTML = this.controller.render()
  }
}


module.exports = Render
