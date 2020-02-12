export default (text, startUpperCase = false) => {
  let upper = !startUpperCase

  return text.split(' ').map(word => {
    return word.split('').map(letter => {
      upper = !upper
      return upper
        ? letter.toUpperCase()
        : letter.toLowerCase()
    }).join('')
  }).join(' ')
}
