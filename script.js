const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const contLabel = document.getElementById("contLabel")
let cont = 0

increaseBtn.onclick = function (){
    cont++
    contLabel.textContent = cont
}

decreaseBtn.onclick = function (){
    cont--
    contLabel.textContent = cont
}

resetBtn.onclick = function (){
    cont = 0
    contLabel.textContent = cont
}