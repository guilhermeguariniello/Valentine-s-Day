// FUNDO 1


const firstButton = document.querySelector(".fundo1-bt")

firstButton.addEventListener("click", function(){
    const cartinha = document.querySelector(".cartinha")
    const closeButton = document.querySelector(".close-cartinha")
    cartinha.style.display = "block"

    closeButton.addEventListener("click", function(){
        cartinha.style.display = "none"
    })
})


// FUNDO 2


const secondButton = document.querySelector(".fundo2-bt")

secondButton.addEventListener("click", function(){
    const hiddenDays = document.querySelector(".days")
    const hiddenWeaks = document.querySelector(".weaks")
    const hiddenMonths = document.querySelector(".months")
    const hiddenYears = document.querySelector(".years")
    secondButton.style.display = "none"

    setTimeout(() => {
        hiddenYears.classList.add("hidden-efect")
    }, 1000)

    setTimeout(() => {
        hiddenMonths.classList.add("hidden-efect")
        hiddenYears.style.background = "transparent"
    }, 2000)

    setTimeout(() => {
        hiddenWeaks.classList.add("hidden-efect")
        hiddenMonths.style.background = "transparent"
    }, 3000)

    setTimeout(() => {
        hiddenDays.classList.add("hidden-efect")
        hiddenWeaks.style.background = "transparent"
    }, 4000)

    setTimeout(() => {
        hiddenDays.style.background = "transparent"
    }, 5000)
})


// FUNDO 3


const thirdButton = document.querySelector(".fundo3-bt")
const closeFacts = document.querySelector(".close-facts")
const facts = document.querySelector(".facts")

thirdButton.addEventListener("click", function(){
    facts.style.display = "block"
})

closeFacts.addEventListener("click", function(){
    facts.style.display = "none"
})


// FUNDO 4

//Open and close screen
const fourthButton = document.querySelector(".fundo4-bt")
const closeFourthScreen = document.querySelector(".close-codes")
const codeScreen = document.querySelector(".codes")

fourthButton.addEventListener("click", function(){
    codeScreen.style.display = "block"
})

closeFourthScreen.addEventListener("click", function(){
    codeScreen.style.display = "none"
})

//Code system
const secretInput = document.querySelector("#code")
const secretBt = document.querySelector(".secret-bt")
const secretParagraph = document.querySelector(".secret")

function secret(){
    const enteredCode = secretInput.value
    
    if(enteredCode == "|÷√|£]§"){
        const result = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        switch(result) {
            case 1:
                secretParagraph.innerHTML = "1/10. Você é a pessoa que eu mais amo no mundo todo."
                break
            case 2:
                secretParagraph.innerHTML = "2/10. Você me faz o menino mais feliz do mundo todo."
                break
            case 3:
                secretParagraph.innerHTML = "3/10. Sou apaixonado em cada detalhe seu, cada fio de cabelo (TUDO)."
                break
            case 4:
                secretParagraph.innerHTML = "4/10. Todos os dias desde o comeco do nosso relacionamento eu converso com o papai do céu para ele deixar eu casar com você."
                break
            case 5:
                secretParagraph.innerHTML = "5/10. Sempre quando estou com você estou muito feliz, mas as vezes eu fico com muito sono."
                break
            case 6:
                secretParagraph.innerHTML = "6/10. A cada dia que passa eu te amo mais e tenho mais certeza de que quero casar com você."
                break
            case 7:
                secretParagraph.innerHTML = "7/10. Cada segundo sem você parece anos, e cada segundo ao seu lado parece milésimos."
                break
            case 8: 
                secretParagraph.innerHTML = "8/10. Amo quando você fica dando a testinha pra mim dar beijo aleatoriamente, as vezes eu nem entendo, mas eu amo."
                break
            case 9:
                secretParagraph.innerHTML = "9/10. Você me inspira a se tornar uma pessoa melhor, fico observando o quanto você é forçada e incrivel, Isso me encanta muito em você."
                break
            case 10:
                secretParagraph.innerHTML = "10/10. Eu não te amo mais..."
                setTimeout(() => {
                    secretParagraph.innerHTML = "10/10. Brincadeira, queria dizer que eu te amo muito e ainda vou me casar com você. pode anotar isso meu amor!"
                }, 3000)
                break
        }
    } else {
        secretParagraph.innerHTML = "O codigo não está certo!!"
    }
}

secretBt.addEventListener("click", secret)


// FUNDO 5
// Usei apenas html e css.