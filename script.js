const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")




convertBtn.addEventListener("click", function() {
        let valor = inputEl.value
        let valorNum = Number(valor)

    if (valor) {
        

        let feet = valorNum * 3.281
        let meters = valorNum / 3.281
        lengthEl.innerHTML = `${valorNum} meters = ${feet.toFixed(3)} feet | ${valorNum} feet = ${meters.toFixed(3)} meters`

        let liters = valorNum / 0.264
        let gallons = valorNum * 0.264
        volumeEl.innerHTML = `${valorNum} liters = ${gallons.toFixed(3)} gallons | ${valorNum} gallons = ${liters.toFixed(3)} liters`

        let kilos = valorNum / 2.204
        let pounds = valorNum * 2.204
        massEl.innerHTML = `${valorNum} kilos = ${pounds.toFixed(3)} pounds | ${valorNum} pounds = ${kilos.toFixed(3)} kilos`
    } else {
        alert("Por favor, digite um valor para converter!")
}
})
