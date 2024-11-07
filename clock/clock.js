let pointer = 0;
let newButton = `
    <div><button class="stop">stop</button></div>
    <div><button class="pause">pause</button></div>
`;
let time = 0;
let milisecond = 0;
let sec = 0;
let min = 0;

function addStartButton() {
    document.querySelector('.parent-div').innerHTML = `<button class="start-button">start</button>`;
    document.querySelector(".start-button").addEventListener('click', startTimer);
}

function startTimer() {
    time = setInterval(() => {
        if (milisecond < 100) {
            milisecond++;
        } else {
            milisecond = 0;
            sec = (sec == 60) ? 0 : sec + 1;
            if (sec == 0) {
                min = (min == 60) ? 0 : min + 1;
            }
        }

        document.querySelector('.milisecond').innerText = milisecond < 10 ? `0${milisecond}` : `${milisecond}`;
        document.querySelector('.sec').innerText = sec < 10 ? `0${sec}` : `${sec}`;
        document.querySelector('.min').innerText = min < 10 ? `0${min}` : `${min}`;
    }, 10);

    document.querySelector('.parent-div').innerHTML = newButton;

    // Add event listener for the stop button after it is added to the DOM
    document.querySelector('.stop').addEventListener('click', () => {
        clearInterval(time);
        document.querySelector('.milisecond').innerText = `00`;
        document.querySelector('.sec').innerText = `00`;
        document.querySelector('.min').innerText = `00`;
        addStartButton();
    });

    document.querySelector('.pause').addEventListener('click', () => {
        clearInterval(time);
        document.querySelector('.pause').outerHTML = `<button class="continue">continue</button>`;
        document.querySelector('.continue').addEventListener('click', startTimer);
    });
}

// Initial setup
addStartButton();
