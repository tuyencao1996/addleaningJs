function main(){

   const eleResultCountDown = document.querySelector('.js-result-count-down')
   const newYearTime = new Date(2023,0,1)
   
   setInterval(() => {
    const currenTime = new Date()
    let timeRemaining = Math.floor ((newYearTime.getTime() - currenTime.getTime()) / 1000)
    const dayRemain = Math.floor(timeRemaining /60 / 60 / 24)

    timeRemaining = timeRemaining - dayRemain * 24 *60 *60
    const hourRemain = Math.floor(timeRemaining /60 /60)

    timeRemaining = timeRemaining - hourRemain * 60 * 60
    const minuteRemain = Math.floor(timeRemaining / 60)

    timeRemaining = timeRemaining - minuteRemain * 60
    const secondRemain = timeRemaining

    eleResultCountDown.textContent = `
      Còn ${dayRemain} ngày, ${hourRemain} giờ, ${minuteRemain} phút, ${secondRemain} giây là ăn tết!
    `
   }, 1000)
}
main()