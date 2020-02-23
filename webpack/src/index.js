console.log('hello world')

const str = require('./a')
console.log('str+1', str)

require('./styles/index.css')

export function fetchList(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

export function createTool(query) {
  return request({
    url: '/tool/create',
    method: 'post',
    data: query
  })
}
