const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
                entry.target.classList.remove('show')
            }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

const elements1 = document.querySelectorAll('.hidden1')

elements1.forEach((element) => myObserver.observe(element))

const elements2 = document.querySelectorAll('.hidden2')

elements2.forEach((element) => myObserver.observe(element))



