//Question 1

let word1 = document.getElementById('word1')
let btn1Am = document.getElementById('btn1Am')
let btn1Is = document.getElementById('btn1Is')
let btn1Are = document.getElementById('btn1Are')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML

    btn1Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'am'
    word1.style.color = 'red'
    btn1Am.style.backgroundColor = 'darkred'
    btn1Am.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word1.textContent = 'are'
    word1.style.color = 'red'
    btn1Are.style.backgroundColor = 'darkred'
    btn1Are.style.color = 'yellow'
    check1.style.visibility = 'hidden'
    btn1Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn1Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word1.textContent = 'is'
    word1.style.color = 'dodgerblue'
    btn1Is.style.backgroundColor = 'lime'
    btn1Is.style.color = 'black'
    check1.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value
    btn1Is.disabled = 'true'
    btn1Am.disabled = 'true'
    btn1Are.disabled = 'true'
})

//Question 2

let word2 = document.getElementById('word2')
let btn2Am = document.getElementById('btn2Am')
let btn2Is = document.getElementById('btn2Is')
let btn2Are = document.getElementById('btn2Are')
let check2 = document.getElementById('check2')

    btn2Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word2.textContent = 'is'
    word2.style.color = 'red'
    btn1Am.style.backgroundColor = 'darkred'
    btn2Is.style.color = 'yellow'
    check2.style.visibility = 'hidden'
    btn2Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn2Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word2.textContent = 'are'
    word2.style.color = 'red'
    btn2Are.style.backgroundColor = 'darkred'
    btn2Are.style.color = 'yellow'
    check2.style.visibility = 'hidden'
    btn2Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn2Am.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word2.textContent = 'am'
    word2.style.color = 'dodgerblue'
    btn2Am.style.backgroundColor = 'lime'
    btn2Am.style.color = 'black'
    check2.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value
    btn2Is.disabled = 'true'
    btn2Am.disabled = 'true'
    btn2Are.disabled = 'true'
})

//Question 3

let word3 = document.getElementById('word3')
let btn3Am = document.getElementById('btn3Am')
let btn3Is = document.getElementById('btn3Is')
let btn3Are = document.getElementById('btn3Are')
let check3 = document.getElementById('check3')

    btn3Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word3.textContent = 'am'
    word3.style.color = 'red'
    btn3Am.style.backgroundColor = 'darkred'
    btn3Am.style.color = 'yellow'
    check3.style.visibility = 'hidden'
    btn3Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn3Are.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word3.textContent = 'are'
    word3.style.color = 'red'
    btn3Are.style.backgroundColor = 'darkred'
    btn3Are.style.color = 'yellow'
    check3.style.visibility = 'hidden'
    btn3Are.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn3Is.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word3.textContent = 'is'
    word3.style.color = 'dodgerblue'
    btn3Is.style.backgroundColor = 'lime'
    btn3Is.style.color = 'black'
    check3.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value
    btn3Is.disabled = 'true'
    btn3Am.disabled = 'true'
    btn3Are.disabled = 'true'
})

//Question 4

let word4 = document.getElementById('word4')
let btn4Am = document.getElementById('btn4Am')
let btn4Is = document.getElementById('btn4Is')
let btn4Are = document.getElementById('btn4Are')
let check4 = document.getElementById('check4')

    btn4Am.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word4.textContent = 'Am'
    word4.style.color = 'red'
    btn4Am.style.backgroundColor = 'darkred'
    btn4Am.style.color = 'yellow'
    check4.style.visibility = 'hidden'
    btn4Am.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn4Is.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    word4.textContent = 'Is'
    word4.style.color = 'red'
    btn4Is.style.backgroundColor = 'darkred'
    btn4Is.style.color = 'yellow'
    check4.style.visibility = 'hidden'
    btn4Is.disabled = 'true'
    value--
    document.getElementById('score').innerHTML = value
})

btn4Are.addEventListener('click', function() {
    let audio = document.getElementById('correctSound')
    audio.play()
    word4.textContent = 'Are'
    word4.style.color = 'dodgerblue'
    btn4Are.style.backgroundColor = 'lime'
    btn4Are.style.color = 'black'
    check4.style.visibility = 'visible'
    value ++
    document.getElementById('score').innerHTML = value
    btn4Is.disabled = 'true'
    btn4Am.disabled = 'true'
    btn4Are.disabled = 'true'
})

