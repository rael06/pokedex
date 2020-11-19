export default function contrastor(background) {
  const { r, g, b } = hexToRgb(standardize_color(background))

  const greyscale = Math.floor(0.2126 * r + 0.7152 * g + 0.0722 * b)

  return greyscale < 150 ? 'white' : 'black'
}

function standardize_color(str) {
  var ctx = document.createElement('canvas').getContext('2d')
  ctx.fillStyle = str
  return ctx.fillStyle
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}
