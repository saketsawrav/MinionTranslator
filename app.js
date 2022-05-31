var inputText = document.querySelector("#txt-input")
var translateButton = document.querySelector("#btn-translate")
var outputText = document.querySelector("#txt-output")
var apiUrl = "https://api.funtranslations.com/translate/minion.json"


function translateUrl(text) {
    return apiUrl + "?text=" + text
}

function errorHandler(error) {
    console.log ("error occured: " + error)
    alert("The server must be down for now,try again later")
}

function clickHandler() {
    console.log("clicked!!")

    var textInput = inputText.value

    fetch(translateUrl(textInput))
    .then(response => response.json())
    .then(json => {
    var translatedText = json.contents.translated
    outputText.innerText = translatedText})
    .catch(errorHandler)
}

translateButton.addEventListener("click", clickHandler)