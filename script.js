let wrap = document.createElement('div')
let imgBlock = document.createElement('div')
let img = document.createElement('div')
let block = document.createElement('div')
let text = document.createElement('p')
let text2 = document.createElement('p')
let text3 = document.createElement('p')
let text4 = document.createElement('p')
let text5 = document.createElement('p')
let btnText = document.createElement('p')
let dollor = document.createElement('div')
let star = document.createElement('div')
let box = document.createElement('div')
let button = document.createElement('button')
let container = document.querySelector('.container')
let number = document.querySelector('.number')


wrap.classList.add('wrap')
imgBlock.classList.add('img-block')
img.classList.add('img')
block.classList.add('block')
text.classList.add('block-text')
text.innerHTML = 'MEN’S CLOTHING (120)'
text2.classList.add('block-text2')
text2.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
text3.classList.add('block-text3')
text3.innerHTML = '109'
text4.classList.add('block-text4')
text4.innerHTML = '3,9'
text5.classList.add('block-text5')
text5.innerHTML = '120'
btnText.classList.add('button-text')
btnText.innerHTML = 'В избранное'
dollor.classList.add('dollor')
star.classList.add('star')
box.classList.add('box')
button.classList.add('button')

container.append(wrap)
wrap.append(imgBlock, block)
imgBlock.append(img)
block.append(text, text2, dollor, text3, star, text4, box, text5, button)
button.append(btnText)

button.onclick = () => {
    button.classList.toggle('active')
    btnText.classList.toggle('textActive')
    if(button.classList.contains('active')) {
        btnText.innerHTML = 'Добавлено'
        number.innerHTML = '1'
    } else {
        btnText.innerHTML = 'В избранное'
        number.innerHTML = '0'
    }
}