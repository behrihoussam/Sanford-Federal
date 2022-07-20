const heroVideo = document.getElementById("hero_video");
const mainVideoDescription = document.getElementById("main_headline--description");
const leftButton = document.getElementById("left_button");
const rightButton = document.getElementById("right_button");


const descriptions = [
    {
        "p": "Driving success at the speed of the modern mission"
    },
    {
        "p": "To provide our staff the freedom to create solutions that break through barriers."
    },
    {
        "p": "To build solutions that go above and beyond expectations"
    }
]

let i = 1;

const changeVideoNext = () => {
    mainVideoDescription.innerHTML = descriptions[i].p;
    mainVideoDescription.style.transform = "translateY(0)";
    i++;
    if (i >= descriptions.length) {
        i = 0;
    }
}
const changeVideoPrevious = () => {
    mainVideoDescription.innerHTML = descriptions[i].p;
    mainVideoDescription.style.transform = "translateY(0)";
    i--;
    if (i < 0) {
        i = 2;
    }
}
rightButton.addEventListener("click", changeVideoNext);
leftButton.addEventListener("click", changeVideoPrevious);