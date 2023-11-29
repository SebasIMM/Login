const continaer = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBTn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    continaer.classList.add('active')
})

loginBTn.addEventListener('click', () => {
    continaer.classList.remove('active')
})

