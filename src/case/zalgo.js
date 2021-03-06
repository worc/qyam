export function sample (array) {
  return array[Math.floor(Math.random() * array.length)]
}

export const ZALGO_UP = [
  '\u030d', /*     ̍     */
  '\u030e', /*     ̎     */
  '\u0304', /*     ̄     */
  '\u0305', /*     ̅     */
  '\u033f', /*     ̿     */
  '\u0311', /*     ̑     */
  '\u0306', /*     ̆     */
  '\u0310', /*     ̐     */
  '\u0352', /*     ͒     */
  '\u0357', /*     ͗     */
  '\u0351', /*     ͑     */
  '\u0307', /*     ̇     */
  '\u0308', /*     ̈     */
  '\u030a', /*     ̊     */
  '\u0342', /*     ͂     */
  '\u0343', /*     ̓     */
  '\u0344', /*     ̈́     */
  '\u034a', /*     ͊     */
  '\u034b', /*     ͋     */
  '\u034c', /*     ͌     */
  '\u0303', /*     ̃     */
  '\u0302', /*     ̂     */
  '\u030c', /*     ̌     */
  '\u0350', /*     ͐     */
  '\u0300', /*     ̀     */
  '\u0301', /*     ́     */
  '\u030b', /*     ̋     */
  '\u030f', /*     ̏     */
  '\u0312', /*     ̒     */
  '\u0313', /*     ̓     */
  '\u0314', /*     ̔     */
  '\u033d', /*     ̽     */
  '\u0309', /*     ̉     */
  '\u0363', /*     ͣ     */
  '\u0364', /*     ͤ     */
  '\u0365', /*     ͥ     */
  '\u0366', /*     ͦ     */
  '\u0367', /*     ͧ     */
  '\u0368', /*     ͨ     */
  '\u0369', /*     ͩ     */
  '\u036a', /*     ͪ     */
  '\u036b', /*     ͫ     */
  '\u036c', /*     ͬ     */
  '\u036d', /*     ͭ     */
  '\u036e', /*     ͮ     */
  '\u036f', /*     ͯ     */
  '\u033e', /*     ̾     */
  '\u035b', /*     ͛     */
  '\u0346', /*     ͆     */
  '\u031a', /*     ̚     */
]

export const ZALGO_MID = [
  '\u0315', /*     ̕     */
  '\u031b', /*     ̛     */
  '\u0340', /*     ̀     */
  '\u0341', /*     ́     */
  '\u0358', /*     ͘     */
  '\u0321', /*     ̡     */
  '\u0322', /*     ̢     */
  '\u0327', /*     ̧     */
  '\u0328', /*     ̨     */
  '\u0334', /*     ̴     */
  '\u0335', /*     ̵     */
  '\u0336', /*     ̶     */
  '\u034f', /*     ͏     */
  '\u035c', /*     ͜     */
  '\u035d', /*     ͝     */
  '\u035e', /*     ͞     */
  '\u035f', /*     ͟     */
  '\u0360', /*     ͠     */
  '\u0362', /*     ͢     */
  '\u0338', /*     ̸     */
  '\u0337', /*     ̷     */
  '\u0361', /*     ͡     */
  '\u0489', /*    ҉_    */
]

export const ZALGO_DOWN = [
  '\u0316', /*     ̖     */
  '\u0317', /*     ̗     */
  '\u0318', /*     ̘     */
  '\u0319', /*     ̙     */
  '\u031c', /*     ̜     */
  '\u031d', /*     ̝     */
  '\u031e', /*     ̞     */
  '\u031f', /*     ̟     */
  '\u0320', /*     ̠     */
  '\u0324', /*     ̤     */
  '\u0325', /*     ̥     */
  '\u0326', /*     ̦     */
  '\u0329', /*     ̩     */
  '\u032a', /*     ̪     */
  '\u032b', /*     ̫     */
  '\u032c', /*     ̬     */
  '\u032d', /*     ̭     */
  '\u032e', /*     ̮     */
  '\u032f', /*     ̯     */
  '\u0330', /*     ̰     */
  '\u0331', /*     ̱     */
  '\u0332', /*     ̲     */
  '\u0333', /*     ̳     */
  '\u0339', /*     ̹     */
  '\u033a', /*     ̺     */
  '\u033b', /*     ̻     */
  '\u033c', /*     ̼     */
  '\u0345', /*     ͅ     */
  '\u0347', /*     ͇     */
  '\u0348', /*     ͈     */
  '\u0349', /*     ͉     */
  '\u034d', /*     ͍     */
  '\u034e', /*     ͎     */
  '\u0353', /*     ͓     */
  '\u0354', /*     ͔     */
  '\u0355', /*     ͕     */
  '\u0356', /*     ͖     */
  '\u0359', /*     ͙     */
  '\u035a', /*     ͚     */
  '\u0323', /*     ̣     */
]

// Math.floor(Math.random() * max)

// if(document.getElementById('zalgo_opt_mini').checked)
// {
//   num_up = rand(8);
//   num_mid = rand(2);
//   num_down = rand(8);
// }

export default (text) => {
  let newString = ''

  for (let i = 0; i < text.length; i++) {
    newString += text[i]

    // generate random numbers for total up, mid, down diacritics
    const up = Math.floor(Math.random() * 8)
    const mid = Math.floor(Math.random() * 2)
    const down = Math.floor(Math.random() * 8)

    for (let i = 0; i < up; i++) {
      newString += sample(ZALGO_UP)
    }

    for (let i = 0; i < mid; i++) {
      newString += sample(ZALGO_MID)
    }

    for (let i = 0; i < down; i++) {
      newString += sample(ZALGO_DOWN)
    }
  }

  return newString
}
