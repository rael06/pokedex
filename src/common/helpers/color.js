export function contrastor(background) {
  const { r, g, b } = hexToRgb(standardize_color(background))

  const greyscale = Math.floor(0.2126 * r + 0.7152 * g + 0.0722 * b)

  return greyscale < 150 ? 'white' : 'black'
}

export default function darker(color) {
  const darkFactor = 0.5
  const { r, g, b } = parse(color)
  return `rgb(${r * darkFactor}, ${g * darkFactor}, ${b * darkFactor})`
}

function parse(color) {
  return color.match(/^rgb\(\d{0,3}, *\d{0,3}, *\d{0,3}\)/)
    ? color
    : color.startsWith('#')
    ? hexToRgb(color)
    : hexToRgb(standardize_color(color))
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
