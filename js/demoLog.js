function main() {
    const keyLocalTaskList = 'k_t_l'
    const oll = localStorage.getItem(keyLocalTaskList) ? JSON.parse(localStorage.getItem(keyLocalTaskList)) : [];
    // console.log(oll);
    const eleForm = document.querySelector('.form-class')
    const eleInput = document.querySelector('.js-iput1')
    const eleTaskDepcription = document.querySelector('#texaria-id')
    const elePrionity = document.querySelector('#prionity-select')
    const eleBtnSubmit = document.querySelector('.submit1')
    const eleBtnReset = document.querySelector('.submit2')
    const elebodyTab = document.querySelector('.js-handle')

    function GetValueAdd() {
        const allVaLue = {
            id: new Date().getTime(),
            taskname: eleInput.value,
            taskdepcription: eleTaskDepcription.value,
            taskprionity: elePrionity.value,
            date: new Date(),
            isDone: false,
        }
        oll.push(allVaLue)
        localStorage.setItem(keyLocalTaskList, JSON.stringify(oll))
        console.log(oll);
        AddVaLueofTab()
    }

    const mydone = (id) => {
        const doneIndex = oll.findIndex(ranDone => ranDone.id === id)
        const doneAddIndex = oll[doneIndex]
        
        oll[doneIndex] = {
            ...doneAddIndex,
            isDone: !doneAddIndex.isDone
        }
        localStorage.setItem(keyLocalTaskList, JSON.stringify(oll))
        AddVaLueofTab()
        // console.log(oll[doneIndex]);
        // AddVaLueofTab()
    }

    const mydelete = (id) => {
        const existedIndex = oll.findIndex(taskItem => taskItem.id === id)
        oll.splice(existedIndex, 1)
        localStorage.setItem(keyLocalTaskList, JSON.stringify(oll))
        AddVaLueofTab()
    }

    function AddVaLueofTab(){
        let result = ''
        oll.forEach((task)=>{
            result += `
                <tr class="${task.isDone ? 'done-task' : ''}">
                    <td>${task.taskname}</td>      
                    <td>${task.date}</td>
                    <td>${task.taskdepcription}</td>
                    <td>${task.taskprionity}</td>
                    <button data-del-id="${task.id}">Delete</button>
                    <button data-done-id="${task.id}">Done</button>
                </tr>
            `
        })

        elebodyTab.innerHTML = result; 

        document.querySelectorAll("[data-del-id]").forEach(myId => {
            myId.addEventListener('click', () => {
                const ranId = (myId.getAttribute("data-del-id"))
                mydelete()
            })
        })
        document.querySelectorAll("[data-done-id]").forEach(myId => {
            myId.addEventListener('click', () => {
                const ranId = (myId.getAttribute("data-done-id"))
                mydone(Number(ranId))
            })
        })
    }

    AddVaLueofTab()
    eleBtnSubmit.addEventListener('click', (event) => {
        event.preventDefault()
        GetValueAdd()
    })
}
main()