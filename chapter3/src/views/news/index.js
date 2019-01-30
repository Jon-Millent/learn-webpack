
import template from './index.html'

class NewsController {
  render(){
    return template
  }
  destroy(){
    console.log('新闻页面销毁')
  }
}

export default NewsController
