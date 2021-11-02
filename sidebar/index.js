const toggleButton = document.getElementById('toggle-button')
const sideBar = document.getElementById('side-bar')

toggleButton.addEventListener('click', show)

function show() {
    sideBar.classList.toggle('active') // toggle = switch add+remove
}

//remove sidebar if click on content

const content = document.querySelector('.content')

content.addEventListener('click', () => {
    sideBar.classList.remove('active')
})
