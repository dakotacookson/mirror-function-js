let keyup = document.querySelector("#message")
let keyup2 = document.querySelector("#a1")
let keyup3 = document.querySelector("#a2")

keyup.addEventListener("keyup", function (event) {
    console.log(event.target.id , event.target.value)
    keyup2.innerHTML = event.target.value
})

keyup.addEventListener("keyup", function (event) {
    keyup3.innerHTML = event.target.value
})