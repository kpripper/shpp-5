const buttonMinus = document.querySelector('.button-minus')
const buttonPlus = document.querySelector('.button-plus')
const buttonStart = document.querySelector('.button-start')

buttonMinus.addEventListener('click', minus)
buttonPlus.addEventListener('click', plus)
buttonStart.addEventListener('click', start)

function minus() {
  console.log(document.querySelector('.time').innerHTML)
  document.querySelector('.time').innerHTML =
    +document.querySelector('.time').innerHTML - 1
}

function plus() {
  console.log(document.querySelector('.time').innerHTML)
  document.querySelector('.time').innerHTML =
    +document.querySelector('.time').innerHTML + 1
}

function start() {
  console.log('start')

  let time = document.querySelector('.time').innerHTML
  let duration = moment.duration(time * 1000 * 60, 'milliseconds') 

  let timer = setInterval(function () {
    duration = moment.duration(
      duration.asMilliseconds() - 1000,
      'milliseconds'
    )

    if (duration.asSeconds() <= 0) {
      clearInterval(timer)
    }

    document.querySelector('.time').innerHTML = moment(
      duration.asMilliseconds()
    ).format('mm:ss')
  }, 1000)
}


