import './index.scss';
import rainAudio from './assets/sounds/rain.mp3';
import summerAudio from './assets/sounds/summer.mp3';
import winterAudio from './assets/sounds/winter.mp3';

const rain = new Audio(rainAudio);
const summer = new Audio(summerAudio);
const winter = new Audio(winterAudio);

const intro = document.querySelector('.intro');
const allButtons = document.querySelectorAll('.button');
const volumeControl = document.querySelector('.volume-control');

allButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        removeAllIntroClasses();

        const buttonId = button.getAttribute('id');
        intro.classList.add(buttonId);

        const pausedButton = document.querySelector('.pause');
        const isPausedButton = pausedButton === button;

        if (pausedButton) {
            pausedButton.classList.remove('pause');
            pauseAllAudios();
        }

        if (!isPausedButton) {
            button.classList.add('pause');

            switch (buttonId) {
                case 'rain':
                    rain.play();
                    break;
                case 'summer':
                    summer.play();
                    break;
                case 'winter':
                    winter.play();
                    break;
            }
        }
    });
});

volumeControl.addEventListener('change', function (e) {
    allButtons.forEach(function (button) {
        const buttonId = button.getAttribute('id');
        const volume = e.currentTarget.value / 100;

        switch (buttonId) {
            case 'rain':
                rain.volume = volume;
                break;
            case 'summer':
                summer.volume = volume;
                break;
            case 'winter':
                winter.volume = volume;
                break;
        }
    });
});

function removeAllIntroClasses() {
    intro.classList.remove('summer');
    intro.classList.remove('rain');
    intro.classList.remove('winter');
}

function pauseAllAudios() {
    rain.pause();
    summer.pause();
    winter.pause();
}
