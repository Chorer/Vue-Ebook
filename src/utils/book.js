// 导出用以渲染的数据

export const fontList = [
  {fontSize: 12},
  {fontSize: 14},
  {fontSize: 16},
  {fontSize: 18},
  {fontSize: 20},
  {fontSize: 22},
  {fontSize: 24}
]

export const fontFamilyList = [
  { font: 'Default' },
  { font: 'Cabin' },
  { font: 'Days One' },
  { font: 'Montserrat' },
  { font: 'Tangerine' }
]

export function themeList(vue){
  return [
    {
      alias: vue.$t('book.themeDefault'),
      name: 'Default',
      style: {
        body: {
          'color': '#4c5059',
          'background': '#cecece',
        }
      }
    },
    {
      alias: vue.$t('book.themeGold'),
      name: 'Gold',
      style: {
        body: {
          'color': '#5c5b56',
          'background': '#c6c2b6',
        },
      }
    },
    {
      alias: vue.$t('book.themeEye'),
      name: 'Eye',
      style: {
        body: {
          'color': '#404c42',
          'background': '#a9c1a9',
        }
      }
    },
    {
      alias: vue.$t('book.themeNight'),
      name: 'Night',
      style: {
        body: {
          'color': '#cecece',
          'background': '#292929',
        }
      }
    }
  ]
}

export function injectCss(href){
  const link = document.createElement('link')
  link.setAttribute('href',href)
  link.setAttribute('type','text/css')
  link.setAttribute('rel','stylesheet')
  link.setAttribute('tag','theme')
  document.querySelector('head').appendChild(link)
}

export function removeAllCss(){
  const themeLinks = document.querySelectorAll('[tag = "theme"]')
  //2.const allLinks = document.querySelectorAll('link')
  //  const themeLinks = Array.prototype.filter.call(allLinks,link => link.getAttribute('tag'))
  themeLinks.forEach(link => {
    document.querySelector('head').removeChild(link)
  })
}