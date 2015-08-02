/* global window, document, Path2D */
/* eslint quotes: [1, "single"], semi: [2, "never"] */

/* Parameters
 *
 * Required:
 *   size - size of triangles
 *   colors - array of colors that are randomly chosen from
 *
 * Optional:
 *   width - width of canvas returned, defaults to window.innerWidth
 *   height - height of canvas returned, defaults to window.innerHeight
 *   randomColor - function that returns a color, overrides the color option,
 *                 passed the current row and triangle index it's on for better
 *                 control over color placement
 *   randomStart - starts triangle generation at (0, 0), defauls to false
 *
 */

window.tessellate = function (opts) {
  'use strict'

  var triangleHeight = parseInt(opts.size, 10)
  var triangleHeightHalf = triangleHeight / 2

  var canvasWidth = opts.width || parseInt(window.innerWidth, 10)
  var canvasHeight = opts.height || parseInt(window.innerHeight)


  var colors = null, randomColor = null
  if(opts.coloringFunction) {
    randomColor = opts.coloringFunction
  } else {
    colors = opts.colors
    randomColor = function() { return colors[Math.floor(Math.random() * colors.length)] }
  }

  var canvas = document.createElement('canvas')
  canvas.setAttribute('width', canvasWidth)
  canvas.setAttribute('height', canvasHeight)
  var ctx = canvas.getContext('2d')
  ctx.lineWidth = 1

  var x = null, y = null, initialX = null
  if(opts.randomStart) {
    x = -Math.random() * triangleHeightHalf
    y = -Math.random() * triangleHeightHalf
  } else {
    x = 0
    y = 0
  }
  initialX = x

  // track directionality of previous triangle so that next triangle is
  // drawn in opposite direction
  var isPrevPointingUp = true
  // track directionality of first triangle in previous row so that next
  // row has opposite directionality of triangles
  var isPrevRowFirstPointingUp = isPrevPointingUp

  var rowNum = 0, triangleIndex = 0
  while (x < canvasWidth || y < canvasHeight) {
    var chosenColor = randomColor(rowNum, triangleIndex)
    ctx.beginPath()
    ctx.fillStyle = chosenColor
    ctx.strokeStyle = chosenColor

    var path = new Path2D()
    path.moveTo(x, y)

    if (isPrevPointingUp) {
      path.lineTo(x - triangleHeightHalf, y + triangleHeight)
      path.lineTo(x + triangleHeightHalf, y + triangleHeight)
      path.lineTo(x, y)
    } else {
      path.lineTo(x + triangleHeight, y)
      path.lineTo(x + triangleHeightHalf, y + triangleHeight)
      path.lineTo(x, y)
    }
    ctx.fill(path)
    ctx.stroke(path)

    if (!isPrevPointingUp) {
      x += triangleHeight
    }

    // add an extra half triangle so that if last triangle
    // vertex is past edge of screen, its still colored
    if (x > canvasWidth + triangleHeightHalf) {
      if (isPrevRowFirstPointingUp) {
        x = (-triangleHeightHalf) + initialX
      } else {
        x = initialX
      }
      y += triangleHeight
      isPrevPointingUp = !isPrevRowFirstPointingUp
      isPrevRowFirstPointingUp = !isPrevRowFirstPointingUp
      rowNum += 1
      triangleIndex = 0
    } else {
      isPrevPointingUp = !isPrevPointingUp
      triangleIndex += 1
    }
  }

  return canvas
}
