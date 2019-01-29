
import Render from '../util/render'

class Index {
  render(){
    return '<h1>你好世界</h1>'
  }
}


window.onload = ()=>{
  new Render(new Index(), '#app').display()
}
