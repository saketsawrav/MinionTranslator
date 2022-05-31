var inputText = document.querySelector("#txt-input")
var translateButton = document.querySelector("#btn-translate")
var outputText = document.querySelector("#txt-output")
var apiUrl = "https://api.funtranslations.com/translate/minion.json"


function translateUrl(text) {
    return apiUrl + "?text=" + text
}

function clickHandler() {
    console.log("clicked!!")

    var textInput = inputText.value

    fetch(translateUrl(textInput))
    .then(response => response.json())
    .then(json => {
    var translatedText = json.contents.translated
    outputText.innerText = translatedText})
}

translateButton.addEventListener("click", clickHandler)