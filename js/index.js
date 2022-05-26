const elForm = document.querySelector('form')
const elUserName = document.querySelector('#userName')
const elUserSurname = document.querySelector('#userSurname')
const elUserItem = document.querySelector('#userItem')
const elUserEmail = document.querySelector('#userEmail')
const btn = document.querySelector('.btn')
const ul = document.querySelector('ul') 
function bookedItem(item) {
    item.preventDefault()
    const bookedItem = document.createElement('li')
    const content = document.createElement('div')
    const userNameEmail = document.createElement('div')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    bookedItem.className = 'list-group-item d-flex align-items-start justify-content-between'
    content.classNameEmail = 'me-auto'
    userNameEmail.className = 'fw-bold' 
    userNameEmail.textContent = elUserItem.value
    content.textContent = elUserName.value.trim() + ' ' + elUserSurname.value.trim() + ' ' +  elUserEmail.value.trim()
    
    ul.append(bookedItem)
    bookedItem.append(content, checkbox)
    content.append(userNameEmail)
}
elForm.addEventListener('submit', bookedItem)