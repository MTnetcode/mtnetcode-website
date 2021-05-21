export default function animation() {
    let socialLinks = document.querySelector('.social-links')
    let contactForm = document.querySelector('.contact-form')
const handleIntersection = (entries) => {
    entries.map(entry => {
        if(entry.isIntersecting) {
            console.log('in view')
            socialLinks.classList.add('social-white')
        } else {
            socialLinks.classList.remove('social-white')
            console.log('out of view')
        }
    })
}
let config = {
    threshold: '0.5'
}

const observer = new IntersectionObserver(handleIntersection, config)
observer.observe(contactForm)

let about = document.querySelector('.flex-container2')
let mauketkaContainer = document.getElementById('mauketka')
let tomiContainer = document.getElementById('tomi')

const handleIntersectionAbout = (entries) => {
    entries.map(entry => {
    if(entry.isIntersecting) {
        tomiContainer.classList.add('bounce-text')
        mauketkaContainer.classList.add('bounce-text')
    }
})
}
let aboutObserver = new IntersectionObserver(handleIntersectionAbout, {threshold: '0.2'})
aboutObserver.observe(about)

let flexContainer = document.querySelector('.flex-container')
const handleIntersectionServices = (entries) => {
    entries.map(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll('.container').forEach(element => {
                element.classList.add('slide-text')
                
        })
        }
        
    })
}

let servicesObserver = new IntersectionObserver(handleIntersectionServices, {threshold: "0.1", rootMargin: "30px"})
servicesObserver.observe(flexContainer)
}