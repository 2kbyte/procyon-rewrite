// Setting function

const settingOverlay = document.getElementById("setting-parent");
const htmlBody = document.getElementsByTagName("body")[0];

let settingVisible = false;

function settings() {
    if (settingVisible) {
        settingOverlay.style.opacity = 0;
        
        setTimeout(function() {
            settingOverlay.style.zIndex = -1;
        }, 200)

        htmlBody.style.overflow = "visible";
    } else {
        settingOverlay.style.opacity = 1;
        settingOverlay.style.zIndex = 100;

        htmlBody.style.overflow = "hidden";
    }

    settingVisible = !settingVisible;
}


document.getElementById("search-button").addEventListener("click", function(event) {
    settings();
})
 
settingOverlay.addEventListener("click", function(event) {
    if (event.target === event.currentTarget) {
        settings();
    }
})

// Diluvian Tool function

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const buttons = document.getElementsByClassName("count-button");

function minusCount(element) {
    let countText = element.parentElement.getElementsByClassName("count")[0];
    let number = Number.parseInt(countText.textContent, 10);

    if (countText.textContent > 0) {
        countText.textContent = --number;
    }
}

function plusCount(element) {
    let countText = element.parentElement.getElementsByClassName("count")[0];
    let number = Number.parseInt(countText.textContent, 10);

    countText.textContent = ++number;
}

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].id == "minus") {
        buttons[i].addEventListener("click", () => {minusCount(buttons[i])});
    } else {
        buttons[i].addEventListener("click", () => {plusCount(buttons[i])});
    }
}

