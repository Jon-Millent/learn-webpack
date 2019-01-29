
import Render from '../util/render'

class News {
  render(){
    return '<h1>欢迎来到新闻页面</h1>'
  }
}

window.onload = ()=>{
  new Render(new News(), '#app').display()
}

