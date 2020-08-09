import localStorage from 'web-storage-cache'
import { locale } from 'core-js'
const storage = new localStorage()

// 基础方法
export function setLocalStorage(key,value){
  return storage.set(key,value)
}
export function getLocalStorage(key){
  return storage.get(key)
}
export function removeLocalStorage(key){
  return storage.delete(key)
}
export function clearLocalStorage(){
  return storage.clear()
}

// 业务方法
export function setBookObject(fileName,key,value){
  let book = getLocalStorage(`${fileName}-info`)
  if(!book){
    book = {}
  }
  book[key] = value
  setLocalStorage(`${fileName}-info`,book)
}
export function getBookObject(fileName,key){
  let book = getLocalStorage(`${fileName}-info`)
  if(book){
    return book[key]
  } else {
    return null
  }
}
// 字号
export function saveFontSize(fileName,fontSize){
  return setBookObject(fileName,'fontSize',fontSize)
}
export function getFontSize(fileName){
  return getBookObject(fileName,'fontSize')
}
// 字体
export function saveFontFamily(fileName,fontFamily){
  return setBookObject(fileName,'fontFamily',fontFamily)
}
export function getFontFamily(fileName){
  return getBookObject(fileName,'fontFamily')
}
// 主题
export function saveTheme(fileName,theme){
  return setBookObject(fileName,'theme',theme)
}
export function getTheme(fileName){
  return getBookObject(fileName,'theme')
}
// 国际化
export function saveLocale(locale){
  return setLocalStorage('locale',locale)
}
export function getLocale(){
  return getLocalStorage(locale)
}