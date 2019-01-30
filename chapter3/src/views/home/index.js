
import template from './index.html'

class HomeController {
  render(){
    return template
  }
  destroy(){
    console.log('主页面销毁')
  }
}


export default HomeController
