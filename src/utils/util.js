export function formatDate () {
  const date = new Date()
  // let y = date.getFullYear();
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  let h = date.getHours()
  h = h < 10 ? '0' + h : h
  let minute = date.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  return m + '-' + d + ' ' + h + ':' + minute
}

export function deepClone (target) {
  let result
  if (typeof target === 'object') {
    if (target.isArray()) {
      for (const i in target) {
        result.push(deepClone(target[i]))
      }
    } else if (target.constructor === RegExp) {
      result = target
    } else if (target === null) {
      result = target
    } else {
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return target
}
