let languages = document.querySelectorAll('.language a')

for(let language of languages) {
    language.onclick = function() {
        for(let language of languages) {
            this.classList.add('langborder')
            language.classList.remove('langborder')

            if(language.innerHTML == 'RU') {
                this.classList.add('langborder')
            }
        }
    }
}

let slider1 = document.querySelector('#slider1')
let slider2 = document.querySelector('#slider2')
let change1 = document.querySelector('#change1')
let change2 = document.querySelector('#change2')

slider1.onclick = function() {
    slider1.classList.add('activeslider')
    slider2.classList.remove('activeslider')
    change1.classList.remove('d-none')
    change2.classList.add('d-none')
}

slider2.onclick = function() {
    slider1.classList.remove('activeslider')
    slider2.classList.add('activeslider')
    change1.classList.add('d-none')
    change2.classList.remove('d-none')
}

let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let text1 = document.querySelector('#text1')
let text2 = document.querySelector('#text2')

button1.onclick = function() {
    button1.classList.add('actborder')
    button2.classList.remove('actborder')
    text1.classList.add('colorborder')
    text2.classList.remove('colorborder')
}

button2.onclick = function() {
    button1.classList.remove('actborder')
    button2.classList.add('actborder')
    text1.classList.remove('colorborder')
    text2.classList.add('colorborder')
}

