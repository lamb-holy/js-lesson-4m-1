// Завдання 1. Відкриття модального вікна
// - При натисканні на «Детальніше» відкривати модальне вікно товару.
// - При натисканні на хрестик закривати його.
// - Реалізувати закриття при натисканні поза межами вікна.

const btnOpen = document.querySelector(".open")
const btnClose = document.querySelector(".close")
const modal = document.querySelector(".modal")

btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)

function openModal() {
    modal.classList.add("show")
}

function closeModal() {
    modal.classList.remove("show")
}



// Завдання 2. Перемикання теми
// - Зробити перемикання між світлою та темною темами.
// - При натисканні на кнопку тема повинна змінюватися.
// - Повторне натискання повертає початкову тему.

const change = document.querySelector(".change")

change.addEventListener("click", function() {
    if(document.body.style.backgroundColor ==! "black") {
        document.body.style.backgroundColor = "black"
    } else {
        document.body.style.backgroundColor = "white"
    }
})



// Завдання 3. Робота з кількістю
// - Реалізувати кнопки + та − біля кожного товару в кошику.
// - Кількість товару не може бути меншою за 1.

const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const amount = document.querySelector(".amount")

var value = 0;

minus.addEventListener("click", function() {
    value--
    amount.textContent = value
})

plus.addEventListener("click", function() {
    value++
    amount.textContent = value
})



// Завдання 4. Додавання товарів у кошик
// - При натисканні на «Додати» товар повинен потрапляти в кошик.

const addToCart = document.querySelector(".add-to-cart")
const cart = document.querySelector(".cart")

addToCart.addEventListener("click", function() {
    cart.innerHTML += `<div class="product">товар</div>`
})