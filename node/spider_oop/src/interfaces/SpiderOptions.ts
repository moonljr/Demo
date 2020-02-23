export default interface SpiderOptions {
  url: string, // 爬虫的URL
  method?: string, // 请求的方式 get post ...
  headers?: object // post的header
}