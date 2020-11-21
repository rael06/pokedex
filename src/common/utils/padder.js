export default function padder(char, nb, value) {
  let pad = ''
  for (let i = 0; i < nb; i++) {
    pad += char
  }
  return pad.substring(0, nb - `${value}`.length) + value
}
