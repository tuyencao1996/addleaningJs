const keyLocalTaskList = 'k_t_l'
const taskLists = localStorage.getItem(keyLocalTaskList)
  ? JSON.parse(localStorage.getItem(keyLocalTaskList))
  : [];
const eleInputTaskName = document.querySelector('#task-name')
const eleInputTaskDes = document.querySelector('#task-des')
const eleInputPriority = document.querySelector('#task-priority')
const eleBodyTaskList = document.querySelector('.js-body-tasklist')
const eleBtnSubmit = document.querySelector('.js-submit-form');
const eleBtnReset = document.querySelector('.js-btn-reset');
const eleLeftForm = document.querySelector('.js-left-form');

const handleAddTask = () => {
  const task = {
    id: new Date().getTime(),
    taskName: eleInputTaskName.value,
    taskDescription: eleInputTaskDes.value,
    taskPriority: eleInputPriority.value,
    createAt: new Date(),
    isDone: false,
  }

  taskLists.push(task);
  localStorage.setItem(keyLocalTaskList, JSON.stringify(taskLists))
  handleReRenderTaskList()
  handleResetForm()
}

const handleResetForm = (event) => {
  !!event && event.preventDefault()
  eleLeftForm.reset()
}

const handleMakeDoneTask = (id) => {
  const existedIndex = taskLists.findIndex(taskItem => taskItem.id === id)
  const currentTask = taskLists[existedIndex]
  // console.log(taskLists[currentTask])
  taskLists[existedIndex] = {
    ...currentTask,
    isDone: !currentTask?.isDone,
  }
  localStorage.setItem(keyLocalTaskList, JSON.stringify(taskLists))
  handleReRenderTaskList()
}

const handleDeleteTask = (id) => {
  const existedIndex = taskLists.findIndex(taskItem => taskItem.id === id)
  taskLists.splice(existedIndex, 1)
  localStorage.setItem(keyLocalTaskList, JSON.stringify(taskLists))
  handleReRenderTaskList()
}

const handleReRenderTaskList = () => {
  let html = ''
  taskLists.forEach(task => {
    html += `
      <tr class="${task.isDone ? 'done-task' : ''}">
        <td>${task.taskName}</td>
        <td>${task.createAt}</td>
        <td>${task.taskDescription}</td>
        <td>${task.taskPriority}</td>
        <td>
          <button data-done-id="${task.id}">Done</button>
          <button data-del-id="${task.id}">Del</button>
        </td>
      </tr>
    `
  })

  eleBodyTaskList.innerHTML = html
  // Handle Event del
  document.querySelectorAll("[data-del-id]").forEach(btnDelete => {
    btnDelete.addEventListener('click', () => {
      const id = Number(btnDelete.getAttribute("data-del-id"))
      handleDeleteTask(id)
    })
  })

  // Handle Event Done
  document.querySelectorAll("[data-done-id]").forEach(btnDone => {
    btnDone.addEventListener('click', () => {
      const id = Number(btnDone.getAttribute("data-done-id"))
      handleMakeDoneTask(id)
    })
  })
}

function main() {
  handleReRenderTaskList()
  eleBtnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    handleAddTask()
  })

  eleBtnReset.addEventListener('click', handleResetForm)
}

main()