import './index.scss';
import rainAudio from './assets/sounds/rain.mp3';
import summerAudio from './assets/sounds/summer.mp3';
import winterAudio from './assets/sounds/winter.mp3';

interface SoundsGroup {
    rainSound: HTMLAudioElement;
    summerSound: HTMLAudioElement;
    winterSound: HTMLAudioElement;
}

const rainSound = new Audio(rainAudio);
const summerSound = new Audio(summerAudio);
const winterSound = new Audio(winterAudio);

const soundsGroup: SoundsGroup = {
    rainSound,
    summerSound,
    winterSound,
};

const intro: HTMLDivElement = document.querySelector('.intro')!;
const allButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.button');
const volumeControl: HTMLInputElement =
    document.querySelector('.volume-control')!;

allButtons.forEach(function (button) {
    button.addEventListener('click', function (e: MouseEvent) {
        e.preventDefault();

        removeAllIntroClasses();

        const buttonId: string = button.getAttribute('id')!;
        intro.classList.add(buttonId);

        const pausedButton: HTMLButtonElement =
            document.querySelector('.pause')!;
        const isPausedButton: boolean = pausedButton === button;

        if (pausedButton) {
            pausedButton.classList.remove('pause');
            pauseAllAudios();
        }

        if (!isPausedButton) {
            button.classList.add('pause');

            switch (buttonId) {
                case 'rain':
                    soundsGroup.rainSound.play();
                    break;
                case 'summer':
                    soundsGroup.summerSound.play();
                    break;
                case 'winter':
                    soundsGroup.winterSound.play();
                    break;
            }
        }
    });
});

volumeControl.addEventListener('change', function (e: Event) {
    allButtons.forEach(function (button) {
        const currentTarget = e.currentTarget as HTMLInputElement;
        const buttonId: string = button.getAttribute('id')!;
        const volume: number = parseFloat(currentTarget.value) / 100;

        switch (buttonId) {
            case 'rain':
                soundsGroup.rainSound.volume = volume;
                break;
            case 'summer':
                soundsGroup.summerSound.volume = volume;
                break;
            case 'winter':
                soundsGroup.winterSound.volume = volume;
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
    soundsGroup.rainSound.pause();
    soundsGroup.summerSound.pause();
    soundsGroup.winterSound.pause();
}
