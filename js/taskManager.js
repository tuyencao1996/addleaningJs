

function main() {
    const tasklist = [];
    const eleInputTaskName = document.querySelector('.js-iput1')
    const eleInputTaskDes = document.querySelector('#texaria-id')
    const eleInputPriority = document.querySelector('#prionity-select')
    const eleBodyTaskList = document.querySelector('.js-handle')
    const eleBtnSubmit = document.querySelector('.submit1');
    const eleBtnReset = document.querySelector('.submid2')
    const eleLeftForm = document.querySelector('.form-class');


    function handleAddTask() {
        const task = {
            id: new Date().getTime(),
            taskName: eleInputTaskName.value,
            taskDescription: eleInputTaskDes.value,
            taskPrionity: eleInputPriority.value,
            createAt: new Date(),
            isDone: false,
        }

        tasklist.push(task);
        handleReRenderTaskList()
        handleResetForm()
    }

    const handleResetForm = (event) => {
        !!event && event.preventDefault()
        eleLeftForm.reset()
    }

    // const handleMakeDoneTask = (id) => {
    //     const existedIndex = tasklist.findIndex(taskItem => taskItem.id === id)
    //     const currentTask = tasklist[existedIndex]
    //     tasklist[existedIndex] = {
    //       ...currentTask,
    //       isDone: !currentTask.isDone,
    //     }
    //     handleReRenderTaskList()
      } 

    const handleDeleteTask = (id) => {
        const existedIndex = tasklist.findIndex(taskItem => taskItem.id === id)
        tasklist.splice(existedIndex, 1)
        handleReRenderTaskList()
      }

    function handleReRenderTaskList(){
        let html= ''
        tasklist.forEach((task) => {
            html += `
            <tr class="${task.isDone ? 'done-task' : ''}">
        <td>${task.taskName}</td>
        <td>${task.createAt}</td>
        <td>${task.taskDescription}</td>
        <td>${task.taskPrionity}</td>
        <td>
          <button data-done-id="${task.id}">Done</button>
          <button data-del-id="${task.id}">Del</button>
        </td>
      </tr>
            `
        });

        eleBodyTaskList.innerHTML = html;
         // Handle Event del
     document.querySelectorAll("[data-del-id]").forEach(btnDelete => {
      btnDelete.addEventListener('click', () => {
      const id = (btnDelete.getAttribute("data-del-id"))
      handleDeleteTask()
    })
  })
        // text handle event done//
    //         document.querySelectorAll("[data-done-id]").forEach(BtnDone => {
    //             BtnDone.addEventListener('click', () => {
    //                 const id = Number(BtnDone.getAttribute("data-done-id"))
    //                 handleMakeDoneTask(id)
    //             })
    //         })
    // }
    

    handleReRenderTaskList()
    eleBtnSubmit.addEventListener('click', (event) => {
        event.preventDefault()
        handleAddTask()
        
    })
    // eleBtnReset.addEventListener('click', handleResetForm)

} 
main()

