// Display alert when the script is running
function makeTextBigger() {
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

function applyFancyStyle() {
    let textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

function removeFancyStyle() {
    let textArea = document.getElementById("textArea");
    if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function convertToMoo() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    text = sentences
        .map(sentence => sentence.trim() + "-Moo")
        .join(". ");
    textArea.value = text;
}
