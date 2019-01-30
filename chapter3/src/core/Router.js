class Router {

  constructor(routerWare, ele) {
    this.routerWare = routerWare
    this.routerSave = []

    this.ele = null

  }


  initRouter(ele){
    this.ele = ele

    let hash = this.parseHash()

    if(hash === '') {
      this.replace('#/')
    }

    this.roundRouter(hash)

    window.onhashchange = ()=>{
      this.roundRouter(this.parseHash())
    }

  }

  roundRouter(hash){
    this.routerWare.forEach(val=>{
      if(val.path === hash) {
        this.todoRouterSave(val.component)
      }
    })
  }

  parseHash(){
    return window.location.hash.replace('#', '')
  }

  go(path){
    window.location.hash = '#' + path
  }

  back(){
    window.history.go(-1)
  }

  replace(path){
    window.location.replace(path)
  }

  renderHtml(html){

    if(!this.ele) {
      throw new Error('Router is not init.')
      return
    }

    this.ele.innerHTML = html
  }

  async todoRouterSave(component){

    let targetComponent = await component()

    let target = new targetComponent.default()

    this.routerSave.push(target)

    if(this.routerSave.length === 1) {
      this.renderHtml(target.render())
    } else {

      let prev = this.routerSave[0]
      let next = this.routerSave[1]

      prev.destroy()
      this.renderHtml('')

      this.renderHtml(next.render())

      this.routerSave.shift()
    }

  }

}



export default Router
