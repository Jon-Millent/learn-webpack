class Sgrent {


  constructor(Input) {
    this.Input = Input
    this.Inner = {}
  }

  render(){
    document.addEventListener('DOMContentLoaded', ()=>{
      this.Inner.$el = document.querySelector(this.Input.el)
      this.Inner.$router = this.Input.router.initRouter(this.Inner.$el)
    });
  }

}


export default Sgrent
