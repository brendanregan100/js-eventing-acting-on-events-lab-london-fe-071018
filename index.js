const dodger = document.getElementById('dodger')

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left + 1}px`
  }

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  dodger.style.left = `${left - 1}px`
  } 

function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  dodger.style.bottom = `${bottom - 1}px`
  }
  
function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace('px', '')
  var bottom = parseInt(bottomNumbers, 10)
  dodger.style.bottom = `${bottom + 1}px`
  }

document.addEventListener('keydown', function(e){
  if (+e.which === 37) {
    moveDodgerLeft()
  }
  if (+e.which === 38) {
    moveDodgerUp()
  }
  if (+e.which === 39) {
    moveDodgerRight()
  }
  if (+e.which === 40) {
    moveDodgerDown()
  }
})
