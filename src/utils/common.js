export function secToMin(sec){
    if(sec) {
      return Math.ceil(sec / 60)
    }
}

export function px2rem(px){
  return px / 37.5 + 'rem'
}