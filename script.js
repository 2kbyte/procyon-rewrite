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


// document.getElementById("setting-parent").addEventListener("click", function(event) {
//     if (event.currentTarget.id === 'setting-parent') {
//         console.log("test child")
//     } else if (event.currentTarget.id === 'setting-child') {
//         console.log("test parent")
//         event.stopPropagation();
//         event.preventDefault();
//     }
// })

// document.getElementById("setting-child").addEventListener("click", function() {
//     console.log("test child")
// })


// function settingOverlay(event, visible) {
//     var settings = document.getElementsByClassName("setting-wrapper")[0];
//     var body = document.getElementsByTagName("body")[0];

//     if (event.target != document.getElementById('setting-child')) {
//         if (visible) {
//             settings.style.opacity = 0;
//             settings.style.zIndex = -1;
            
//             body.style.overflow = "visible";
//         } else {
//             settings.style.opacity = 1;
//             settings.style.zIndex = 100;
    
//             body.style.overflow = "hidden";
//         }
//     }
// }