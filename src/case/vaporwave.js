export default (text = '', uppercase = false) => {
  return uppercase
    ? text.split('').join(' ').toUpperCase()
    : text.split('').join(' ')
}
