let activeSlide = 0;

function getActiveSlide() {
    let AS = document.querySelector(".dot.is-selected").getAttribute("aria-label");
    return AS.split(" ")[2] - 0;
}

function msgElement(id) {
    if (id === 0) { return document.createElement("div"); }
    return document.getElementById(`msg${id}`);
}

function updateMessage() {
    console.log("Updating message!");
    setTimeout(() => {
        let newAS = getActiveSlide();
        console.log("Got new active slide!");

        if (activeSlide !== newAS) {
            console.log("Transitioning messages...");
            transitionMessages(msgElement(activeSlide), msgElement(newAS), 1000);
            activeSlide = newAS;
        }
    }, 500);
}

function transitionMessages(msg1, msg2, time) {
    // Make msg1 dissappear slowly (via CSS transition)
    msg1.style.opacity = "0";

    // Set a timeout to fully remove msg1 and create + make opaque msg2 over time
    setTimeout(() => {
        msg1.style.display = "none";
        msg2.style.display = "block";
        setTimeout(() => { msg2.style.opacity = "1"; }, 250);
    }, time);
}


// Page setup
function start() {
    updateMessage();

    window.onclick = updateMessage;
    window.ontouchend = updateMessage;
}

window.onload = start;