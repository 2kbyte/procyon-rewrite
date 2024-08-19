const settingOverlay = document.getElementById("setting-parent");
const htmlBody = document.getElementsByTagName("body")[0];

let settingVisible = false;

function settings() {
    if (settingVisible) {
        settingOverlay.style.opacity = 0;
        settingOverlay.style.zIndex = -1;

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