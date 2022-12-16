function main() {
    let eleJsInPut = document.querySelector('.js-input')
    let eleJsSelect = document.querySelector('.js-select')
    let eleInPutPeoPle = document.querySelector('.input-dropdown-people')    
    let eleTtjs = document.querySelector('.tt-js-dropdown')

    function handleValue() {
        eleTtjs.addEventListener('click',()=> {
            const addInput = Number(eleJsInPut.value) || 0
            const addSelec = Number(eleJsSelect.value) 
            const addpeople = Number(eleInPutPeoPle.value) || 0
            const addIPSL = (addInput + (addInput * addSelec / 100)) / addpeople
            document.querySelector('.end-js-dropdown').textContent = `số tiền mỗi người phải trả là ${addIPSL}`
        })
    }
    handleValue()
}
main()
































//     function Addexercise() {
//         eleTtjs.addEventListener('click',(event)=> {
//             const totalMoney = Number(eleJsInPut.value) || 0
//             const Select = Number(eleJsSelect.value) || 0 
//             const totalPeople = Number(eleInPutPeoPle.value)
//             const totalAll = (totalMoney + (totalMoney * Select / 100))/totalPeople
//             document.querySelector('.end-js-dropdown').textContent = `gia tien la ${totalAll}`
//         })
//     }
//     Addexercise()
// }
// main()























//    function Addexercise() {
//         eleTtjs.addEventListener('click',(event)=> {
//             const totalMoney = Number(eleJsInPut.value) || 0
//             const serviceMoney = Number(eleJsSelect.value) || 0
//             const totalPeople = Number(eleInPutPeoPle.value)
//             const moneyPayment = (totalMoney + (totalMoney * serviceMoney/100))/totalPeople
//             document.querySelector('.end-js-dropdown').textContent = `số tiền mỗi người phải trả là ${moneyPayment}`
//             console.log(moneyPayment)
//         })
//     }
//     Addexercise()


