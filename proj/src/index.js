const buttonMinus = document.querySelector('.button-minus')
const buttonPlus = document.querySelector('.button-plus')
const buttonStart = document.querySelector('.button-start')

buttonMinus.addEventListener('click', minus)
buttonPlus.addEventListener('click', plus)
buttonStart.addEventListener('click', start)

function minus () {
  console.log(document.querySelector('.time').innerHTML)
  if (document.querySelector('.time').innerHTML > 1) {
    document.querySelector('.time').innerHTML =
      +document.querySelector('.time').innerHTML - 1
  }
}

function plus () {
  console.log(document.querySelector('.time').innerHTML)
  document.querySelector('.time').innerHTML =
    +document.querySelector('.time').innerHTML + 1
}

function start () {
  const time = document.querySelector('.time').innerHTML

  if (time === '00:00') {
    document.querySelector('.time').innerHTML = 'Set correct time'
  } else {
    let duration = moment.duration(time * 1000 * 60, 'milliseconds')

    const timer = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds')

      if (document.querySelector('.time').innerHTML === '00:01') {
        clearInterval(timer)
      }

      document.querySelector('.time').innerHTML = moment(
        duration.asMilliseconds()
      ).format('mm:ss')
    }, 1000)
  }
}
