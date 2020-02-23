const http = require('http')
const cheerio = require('cheerio')
// const url = 'http://www.itcast.cn/newsvideo/newslist.html'
// 爬取新闻信息 直接调用需要爬取的接口就可以了。不用再去爬取网页内容。
const getJSON = 'http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json'
// 因为getJSON这个接口同时可以实现了get 和post 接口 所以可以使用两种方式去获取数据
// 如果爬取的接口需要token之类的 就需要把这个接口的request的header信息粘贴过来直接放到自己的请求头里就可以了
// let req = http.request(getJSON, {method: 'post'}, res => {})
let req = http.request(getJSON, res => {
  let chunks = []
  res.on('data', chunk => {
    chunks.push(chunk)
  })

  res.on('end', () => {
    let htmlstr = Buffer.concat(chunks).toString('utf-8')
    // 获取到的新闻数组 直接遍历数组获取自己需要使用的数据去操作这些数据就可以了
    console.log('htmlstr', JSON.parse(htmlstr).data)
  })
})

req.end()