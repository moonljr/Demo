import Spider from './Spider'
class NewsList extends Spider {
  onCatchHTML(result: string) {
    console.log('newlistresult', JSON.parse(result))
  }
}

export default NewsList