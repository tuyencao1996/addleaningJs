function taskPuPil() {
    const keyLocalTaskList = 'admin'
    let isEditflag = {
        flag: false,
    }
    const addTask = localStorage.getItem(keyLocalTaskList) ? JSON.parse(localStorage.getItem(keyLocalTaskList)) : [];
    const eleInputTaskId = document.querySelector('.js-input-id')
    const eleInputTaskName = document.querySelector('.js-input-name')
    const eleInputTaskBirtDay = document.querySelector('.js-input-birtday')
    const eleInputTaskPhone = document.querySelector('.js-input-phone   ')
    const eleHandleTask2 = document.querySelector('.js-handle-task2')
    const eleBtn = document.querySelector('.js-btn')
    const eleForm = document.querySelector('.tab__form__left')
    let eleInputEmail = document.querySelector('.js-email-input')
    // let eleInputPasswordEmail = document.querySelector('.password-email')
    let eleBtnLogin = document.querySelector('.login-btn-js')



    function taskValue() {
            const allValue = {
                id: eleInputTaskId.value,
                name: eleInputTaskName.value,
                birthday: eleInputTaskBirtDay.value,
                phoneNumber: eleInputTaskPhone.value,
                edit: new Date().getTime(),
                feature: new Date('1/1/1970'),
            }
            
            let offValueTaskname = eleInputTaskName.value
            let offValuePhoneNumber = eleInputTaskPhone.value
            let GetYear = new Date().getFullYear() - new Date(allValue.birthday).getFullYear(allValue.feature)

            console.log(GetYear);
            if(!GetYear || GetYear < 18){
                alert('Chua du tuoi')
                return
            }

            if(!allValue.id) {
                document.querySelector('.js__error').textContent = 'vui lòng nhập id'
                return
            }
            if(offValueTaskname.length <= 5){
                document.querySelector('.js-name__error').textContent ='Vui Lòng Thử Lại Tên Quá Ngắn'
                return
            }
            if(offValueTaskname.length >= 15) {
                document.querySelector('.js-name__error').textContent ='Vui Lòng Thử Lại Tên Quá Dài'
                return
            }
            if(offValuePhoneNumber.length <= 9 || offValuePhoneNumber.length > 10){
                alert("Số Điện Thoại"+ ' ' + `${offValuePhoneNumber + '  ' + "Không Đúng"}`)
                return
            }

            addTask.push(allValue)
            localStorage.setItem(keyLocalTaskList, JSON.stringify(addTask))
            handleResult()
        }

    const handleDelete = (edit)=> {
        const delIndex = addTask.findIndex(taskIndex => taskIndex.edit === edit)
        addTask.splice(delIndex, 1)
        localStorage.setItem(keyLocalTaskList,JSON.stringify(addTask))
        handleResult()
        console.log(delIndex);
    }
    const handleEdit = (id)=> {
        const editIndex = addTask.findIndex(taskIndex => taskIndex.edit === id)
        isEditflag = {
            flag: true,
        }
        let currentDataEdit = addTask[Number(editIndex)]
        eleInputTaskId.value = currentDataEdit.id
        eleInputTaskName.value = currentDataEdit.name
        eleInputTaskBirtDay.value = currentDataEdit.birthday,
        eleInputTaskPhone.value = currentDataEdit.phoneNumber
        eleForm.style.display = 'none'
        eleForm.style.display = 'block'

        console.log(currentDataEdit);
    }

    function handleResult() {
            let result =''
            addTask.forEach((task)=> {
                result += `
                <tr>
                    <td class="task__id">${task?.id}</td>
                    <td class="task__id">${task?.name}</td>
                    <td class="task__id">${task?.birthday}</td>
                    <td class="task__id">${task?.phoneNumber}</td>
                    <div class="handle__btn__task2">
                    <button js-btn_handle_edit="${task?.edit}" class="btn__handle_js">Sửa</button>
                    <button js-btn_handle_delete="${task?.edit}" class="btn__handle_js">Xóa</button>
                    </div>
                </tr>
                `
            })
            eleHandleTask2.innerHTML = result;

            document.querySelectorAll("[js-btn_handle_edit]").forEach(eleEdit => {
                eleEdit.addEventListener('click', () => {
                    const myEdit = Number(eleEdit.getAttribute("js-btn_handle_edit"))
                    handleEdit(myEdit)
                })
            }) 
            document.querySelectorAll("[js-btn_handle_delete]").forEach(eleDele => {
                eleDele.addEventListener('click', () => {
                    const mydelete = Number(eleDele.getAttribute("js-btn_handle_delete"))
                    handleDelete()
                    // console.log(mydelete);
                })
            })
        }

                handleResult()
            eleBtn.addEventListener('click', (event)=> {
                event.preventDefault()
                taskValue()
            })

                function checkEmail() { 
                    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
                    if (!filter.test(eleInputEmail.value)) { 
                        setTimeout(() => {
                            alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
                            eleInputEmail.focus; 
                            return false; 
                        }, 1000);
                    }
                    else { 
                        setTimeout(() => {
                            alert('đợi một lát.'); 
                            window.location.href = "http://127.0.0.1:5501/html/exercise1.html"
                            alert('đăng nhập thành công')
                        }, 1000);
                    } 
                    localStorage.setItem(keyLocalTaskList,JSON.stringify(addTask))
            }

            eleBtnLogin.addEventListener('click',(event)=> {
                event.preventDefault()
                checkEmail()
                localStorage.setItem(keyLocalTaskList,JSON.stringify(addTask))
            })
}
taskPuPil()
