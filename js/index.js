
function main() {
    let isEditflag = {
      flag: false,
      indexEdit: -1,
    }
    const eleFormRegister = document.querySelector('.js-form-register')
    const eleBtnReset = document.querySelector('.js-btn-reset')
    const eleInputUsername = document.querySelector('#username')
    const eleInputPassword = document.querySelector('#password')
    const eleInputFirstName = document.querySelector('#firstName')
    const eleInputLastName = document.querySelector('#lastName')
    const eleForm = document.querySelector('.tab__form__left')

    // NEW //
    const eleContentTable = document.querySelector('.js-content-table')

    const listData = JSON.parse (localStorage.getItem('listData')) || []
  
    function handleResetForm() {
      eleFormRegister.reset()
    }

    function handlUpdateFormData(formData) {
      eleInputUsername.value = formData?.username
      eleInputPassword.value = formData?.password
      eleInputFirstName.value = formData?.firstName
      eleInputLastName.value = formData?.lastName
      if(formData?.gender === 'male') {
        document.querySelector('[value="female"]').checked = true
      }
      if(formData?.gender === 'female') {
        document.querySelector('[value="female"]').checked = true
      }
      if (formData?.gender === undefined) {
        document.querySelector('[value="female"]').checked = false
        document.querySelector('[value="female"]').checked = false
      }

      eleFormRegister.style.display = 'none;'
      eleFormRegister.style.display = 'block;'
    }
  
    function handleResetError() {
      document.querySelector('.js-err-user-name').textContent = ""
    }

    function renderDataTable() {
      let result = ''
      listData.forEach((data,index) =>{
        let computedGenderClass = ''
        switch(data?.gender){
          case 'male':
            computedGenderClass = 'gender-male'
            break
            case'female':
            computedGenderClass = 'gender-female'
            break
            default:
              computedGenderClass = 'gender-unknown'
            break
        }
        result += `
        <tr class="${computedGenderClass}">
            <td>${data?.username}</td>
            <td>${data?.password}</td>
            <td>${data?.lastName}</td>
            <td>${data?.firstName}</td>
            <td>${data?.gender}</td>
            <td>
              <button data-index="${index}">xóa</button>
              <button data-index-edit ="${index}">sửa</button>
            </td>
        </tr>
        `
      })
      eleContentTable.innerHTML = result

      document.querySelectorAll(`[data-index]`).forEach((eleBtn)=>{
        eleBtn.addEventListener('click',()=>{
          const dataIndex = eleBtn.getAttribute("data-index")
          listData.splice(Number(dataIndex),1)
          localStorage.setItem('listData',JSON.stringify(listData))
          console.log('Click delete', dataIndex);
          renderDataTable()
        })
      })


      document.querySelectorAll(`[data-index-edit]`).forEach((eleBtn)=>{
        eleBtn.addEventListener('click',()=>{
          const dataIndex = eleBtn.getAttribute("data-index-edit")
          isEditflag = {
            flag: true,
            indexEdit: dataIndex
          }
          const currentDataEdit = listData[Number(dataIndex)]
          handlUpdateFormData(currentDataEdit)
          console.log('edit', currentDataEdit);
        })
      })
    }
  
    // NEW //


    eleBtnReset.addEventListener('click', (event) => {
      event.preventDefault()
      handleResetForm()
    })
  
    eleFormRegister.addEventListener('submit', event => {
      event.preventDefault()
  
      const formValue = {
        username: eleInputUsername.value,
        password: eleInputPassword.value,
        firstName:eleInputFirstName.value,
        lastName: eleInputLastName.value,
        gender: document.querySelector('[name="gender"]:checked')?.value
      }
      // console.log(formValue)

      if (!formValue.username) {
        document.querySelector('.js-err-user-name').textContent = "Vui lòng nhập username!!!"
        return
      }

      if (!formValue.password) {
        alert('Vui lòng nhập password!!!')
        return
      }

      if (isEditflag.flag){
       listData[isEditflag.indexEdit] = formValue
       isEditflag = {
        flag: false,
        indexEdit: -1,
      }
      }else {
        listData.push(formValue)
      }
        
      localStorage.setItem('listData',JSON.stringify(listData))
      renderDataTable()
      handleResetError()
      handleResetForm()
    })
    if (listData.length > 0) {
      renderDataTable()
    }
  }

  main()

  // try {
  //   const b = 4
  //   throw new Error("loi toi day thoi cha")
  //   console.log('hello 1 ne')
  // } catch (error) {
  //   console.log(error)
  // }
  // finally {
  //   console.log("finally day")
  // }