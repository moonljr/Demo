import Spider from './Spider'
import NewsList from './NewsList'
import TeacherPhotos from './teacherPhotos'
// new Spider({ url: 'http://www.itcast.cn/newsvideo/newslist.html' })

new NewsList({
  url: 'http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json',
  // method: 'post',
  // headers: {
  //   Accept: '*/*',
  //   'Accept-Encoding': 'gzip, deflate',
  //   'Accept-Language': 'zh-CN,zh;q=0.9',
  //   'Cache-Control': 'no-cache',
  //   Connection: 'keep-alive',
  //   Cookie:
  //     'PHPSESSID=mhi5ccvrn2vjosmmp9hb6g7hi0; UM_distinctid=1706b0b014b7c1-0ba790938a9ead-39637b0f-1ea000-1706b0b014cc7f; href=http%3A%2F%2Fwww.itcast.cn%2Fnewsvideo%2Fnewslist.html; accessId=b2f10070-624e-11e8-917f-9fb8db4dc43c; bad_idb2f10070-624e-11e8-917f-9fb8db4dc43c=71735211-5527-11ea-a618-d16455940aaf; nice_idb2f10070-624e-11e8-917f-9fb8db4dc43c=71735212-5527-11ea-a618-d16455940aaf; Hm_lvt_0cb375a2e834821b74efffa6c71ee607=1582343849; openChatb2f10070-624e-11e8-917f-9fb8db4dc43c=true; parent_qimo_sid_b2f10070-624e-11e8-917f-9fb8db4dc43c=75dec280-5527-11ea-8da3-d52b36dd14c2; CNZZDATA4617777=cnzz_eid%3D1620013771-1582341521-%26ntime%3D1582462819; qimo_seosource_b2f10070-624e-11e8-917f-9fb8db4dc43c=%E7%AB%99%E5%86%85; qimo_seokeywords_b2f10070-624e-11e8-917f-9fb8db4dc43c=; pageViewNum=4; Hm_lpvt_0cb375a2e834821b74efffa6c71ee607=1582463872',
  //   Host: 'www.itcast.cn',
  //   Pragma: 'no-cache',
  //   Referer: 'http://www.itcast.cn/newsvideo/newslist.html',
  //   'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
  //   'X-Requested-With': 'XMLHttpRequest'
  // }
})

// new TeacherPhotos({ url: 'http://web.itheima.com/teacher.html' })
