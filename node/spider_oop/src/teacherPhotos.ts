import Spider  from './Spider'
const cheerio = require('cheerio')
const download = require('download')

class TeacherPhotos extends Spider {
  onCatchHTML(result: string) {
    // console.log('result', result)
    let $ = cheerio.load(result)
    let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), (item: any) => 'http://web.itheima.com/' + encodeURI($(item).attr('src')))
    Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
      console.log('files downloaded!')
    })
  }
}

export default TeacherPhotos