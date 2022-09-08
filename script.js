// MANIPULAREA BUTOANELOR CADRELOR

const menuButton = document.querySelector('.navbar-icon')
const buttonCards = document.querySelectorAll('.cartonas-buton')


const menuManipulation = function() {
    const navbar = document.querySelector(
        'navbar')
}
menuButton.addEventListener('click', function() {
    const navbar = document.querySelector('.navbar')

    if (navbar.style.display === 'none' || navbar.style.display === "") {
        navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    }


})

const attachAuthor = function() {
    const attachAuthor = document.querySelector('.autor')
    const today = new Date()
    const anulCurent = today.getFullYear()

    attachAuthor.innerHTML = 'Creat de Lar Rau </b>' + anulCurent
}


const showDescription = function(event) {
    const cardParent = event.target.parentElement
    const description = cardParent.querySelector('.cartonas-descriere')


    if (description.style.display === 'none' || description.style.display === "") {
        description.style.display = 'block'
    } else {
        description.style.display = 'none'
    }
}



window.addEventListener('load', attachAuthor)
menuButton.addEventListener('click', menuManipulation)
buttonCards.forEach(function(buton, index, sirulComplet) {
    buton.addEventListener('click', showDescription)
})


// ADD COOKIES
const cookieContainer = document.querySelector('.cookie-container')
const cookieButton = document.querySelector('.cookie-btn')

cookieButton.addEventListener('click', () => {
    cookieContainer.classList.remove('active')
})

setTimeout(() => {
    cookieContainer.classList.add('active')
}, 1000)