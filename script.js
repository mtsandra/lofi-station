// ************************************
//           Constants
// ************************************

const uiLoadingScreen = document.getElementById('loading');
const startButton = document.getElementById('start');
const loadingScreen = document.getElementById('loading');
const loadingText = document.getElementById('loading-text');
const stopButton = document.getElementById('stop');
const chooseButton = document.getElementById('choose');
const useAIButton = document.getElementById('use-ai');
const chordButtons = document.querySelectorAll("#chords");
const aiButtons = document.querySelectorAll('#ai-track');
const soloAnalyzer = new Tone.Waveform;


// ************************************
//           Instruments
// ************************************

const chordSampler = new Tone.Sampler({

    urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
        "A0": "A0.mp3",
        "A1": "A1.mp3",
        "A2": "A2.mp3",
        "A3": "A3.mp3",
        "A4": "A4.mp3",
        "A5": "A5.mp3",
        "A6": "A6.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
    // urls: {
    //     'A0': "./assets/piano-A0.mp3",
    //     'A1': "./assets/piano-A1.mp3",
    //     'A5': "./assets/piano-A5.mp3",
    //     'A6': "./assets/piano-A6.mp3"
    // }
});

const chordSampler_bass = new Tone.Sampler({
    urls: {
        'G1': './assets/bass-G1.mp3',
        'G2': './assets/bass-G2.mp3',
        'G3': './assets/bass-G3.mp3',
        'G4': './assets/bass-G4.mp3',
        'E2': './assets/bass-E2.mp3',
        'A#4':'./assets/bass-As4.mp3'
    },

});

const guitarSampler = new Tone.Sampler({
    urls: {
        'A1': './assets/guitar-A1.mp3',
        'A2': './assets/guitar-A2.mp3',
        'A3': './assets/guitar-A3.mp3',
        'C4': './assets/guitar-C4.mp3'
    }
});

const drumPlayers = new Tone.Players({
    urls: {
        waterdrop: './assets/waterdrop-drum.mp3',
        groovy: './assets/groovy-drum.mp3',
        bonfire: './assets/bonfire-drum.wav',
    }
});

const naturePlayers = new Tone.Players({
    urls: {
        wind: './assets/wind.mp3',
        fireplace: './assets/longerstorm.wav',
        rain: './assets/rain.wav'
    }
});

const talkingPlayers = new Tone.Players({
    urls: {

        record: './assets/begin-again.wav',
        easier: './assets/easier.mp3',
        sunrise: './assets/before-sunrise.mp3',
        vinyl: './assets/vinyl.wav'
    }
});

const aiPlayers = new Tone.Players({
    urls: {
        lofi_200_1: './assets/lofi-200-1.wav',
        lofi_400_1: './assets/lofi-400-1.wav',
        lofi_400_2: './assets/lofi-400-2.wav'

    }

});



// ************************************
//             Effects
// ************************************

const chordsVol = new Tone.Volume(-5);
const chordsReverb = new Tone.Reverb(1.5, 0.01, 0.8);
chordSampler_bass.chain(chordsVol, chordsReverb, Tone.Destination);

const drumsVol = new Tone.Volume(-7);
drumPlayers.chain(drumsVol, Tone.Destination);

const natureVol = new Tone.Volume(-5);
naturePlayers.chain(natureVol, Tone.Destination);

const talkingVol = new Tone.Volume(5);
talkingPlayers.chain(talkingVol, Tone.Destination);

const guitarVol = new Tone.Volume(-5);
const guitarReverb = new Tone.Reverb(1.5, 0.01, 0.2);
guitarSampler.chain(guitarVol, guitarReverb, Tone.Destination);

const aiVol = new Tone.Volume(-1);
const aiReverb = new Tone.Reverb(1.5,0.01, 0.8);
aiPlayers.chain(aiVol, Tone.Destination);

// ************************************
//            Patterns
// ************************************


const chordPatterns = {
    ylangYlang: [
        // melody
        ['0:0:0', 'F4'],
        ['0:1:0', 'F4'],
        ['0:2:0','Eb4'],
        ['2:0:0', 'C4'],
        ['2:1:0', 'C4'],
        ['2:2:0', 'Bb3'],
        ['4:0:0', 'C5'],
        ['4:2:0', 'G5'],
        ['4:3:2', 'C5'],
        ['6:0:0', 'Cb5'],
        ['6:1:0', 'C5'],
        ['6:2:0', 'G5'],
        ['6:3:2', 'F5'],
        // chord progression
        ['0:0:0', 'Gb2'],
        ['0:0:1', 'Bb2'],
        ['0:0:2', 'Db3'],
        ['0:0:3', 'F3'],

        ['0:1:0', 'Gb2'],
        ['0:1:0', 'Bb2'],
        ['0:1:0', 'Db3'],
        ['0:1:0', 'F3'],
        
        ['1:0:0', 'Gb2'],
        ['1:0:1', 'Bb2'],
        ['1:0:2', 'Db3'],
        ['1:0:3', 'F3'],

        ['1:1:0', 'Gb2'],
        ['1:1:0', 'Bb2'],
        ['1:1:0', 'Db3'],
        ['1:1:0', 'F3'],

        ['2:0:0', 'Db3'],
        ['2:0:1', 'F3'],
        ['2:0:2', 'Ab3'],
        ['2:0:3', 'C4'],
        
        ['2:1:0', 'Db3'],
        ['2:1:0', 'F3'],
        ['2:1:0', 'Ab3'],
        ['2:1:0', 'C4'],
        
        ['3:0:0', 'Db3'],
        ['3:0:1', 'F3'],
        ['3:0:2', 'Ab3'],
        ['3:0:3', 'C4'],
        
        ['3:1:0', 'Db3'],
        ['3:1:0', 'F3'],
        ['3:1:0', 'Ab3'],
        ['3:1:0', 'C4'],

        ['4:0:0', 'F3'],
        ['4:0:1', 'A3'],
        ['4:0:2', 'C4'],
        ['4:0:3', 'Eb4'],

        ['4:1:0', 'F3'],
        ['4:1:0', 'A3'],
        ['4:1:0', 'C4'],
        ['4:1:0', 'Eb4'],

        ['5:0:0', 'F3'],
        ['5:0:1', 'Ab3'],
        ['5:0:2', 'C4'],
        ['5:0:3', 'Eb4'],
        
        ['5:1:0', 'F3'],
        ['5:1:0', 'Ab3'],
        ['5:1:0', 'C4'],
        ['5:1:0', 'Eb4'],

        ['6:0:0', 'Bb2'],
        ['6:0:1', 'D3'],
        ['6:0:2', 'F3'],
        ['6:0:3', 'Ab3'],

        ['6:1:0', 'Bb2'],
        ['6:1:0', 'D3'],
        ['6:1:0', 'F3'],
        ['6:1:0', 'Ab3'],

        ['7:0:0', 'C3'],
        ['7:0:1', 'Eb3'],
        ['7:0:2', 'G3'],
        ['7:0:3', 'Bb3'],
        
        ['7:1:0', 'C3'],
        ['7:1:0', 'Eb3'],
        ['7:1:0', 'G3'],
        ['7:1:0', 'Bb3'],
        
    ],
    festin: [

        // melody
        ['0:0:0', 'G5'],
        ['0:1:0', 'F5'],
        ['0:3:0', 'Eb5'],
        ['1:0:0', 'G5'],
        ['1:1:0', 'F5'],
        ['1:3:0', 'Eb5'],
        ['2:0:0', 'G5'],
        ['2:1:0', 'F5'],
        ['2:3:0', 'Eb5'],
        ['3:0:0', 'D5'],
        ['4:0:0', 'Bb5'],
        ['4:1:0', 'F5'],
        ['4:3:0', 'Eb5'],
        ['5:0:0', 'Bb5'],
        ['5:1:0', 'D5'],
        ['5:3:0', 'D5'],
        ['6:0:0', 'Bb5'],
        ['6:1:0', 'F5'],
        ['6:3:0', 'D5'],
        ['7:0:0', 'Eb5'],


        // chord progression
        ['0:0:0', 'Eb3'],
        ['0:0:1', 'G3'],
        ['0:0:2', 'Bb3'],
        ['0:0:3', 'Db4'],
    
        ['1:0:0', 'C3'],
        ['1:0:1', 'Eb3'],
        ['1:0:2', 'G3'],


        ['2:0:0', 'F3'],
        ['2:0:1', 'Ab3'],
        ['2:0:2', 'C4'],

        
        ['3:0:0', 'Bb2'],
        ['3:0:1', 'D3'],
        ['3:0:2', 'F3'],

        ['4:0:0', 'F3'],
        ['4:0:1', 'A3'],
        ['4:0:2', 'C4'],
    
        ['5:0:0', 'Bb2'],
        ['5:0:1', 'D3'],
        ['5:0:2', 'F3'],

        ['6:0:0', 'G3'],
        ['6:0:1', 'Bb3'],
        ['6:0:2', 'D4'],
        ['6:0:3', 'F4'],
        
        ['7:0:0', 'C3'],
        ['7:0:1', 'Eb3'],
        ['7:0:2', 'G3'],



    ],
    seeYouAgain: [
        // melody
        ['0:0:0', 'E#5'],['0:0:2', 'D#5'],['0:1:0', 'C#5'],['0:1:2', 'D#5'],['0:2:0', 'E#5'],
        ['1:0:2', 'C#5'],['1:1:0', 'A#4'],['1:1:2', 'C#5'],['1:2:0', 'A#4'],['1:2:2', 'C#5'],['1:3:0', 'A#4'],['1:3:2', 'C#5'],
        ['2:0:0', 'E#5'],['2:0:2', 'C#5'],
        ['3:0:2', 'C#5'],['3:1:0', 'A#4'],['3:1:2', 'C#5'],['3:2:0', 'A#4'],['3:2:2', 'C#5'],['3:3:0', 'A#4'],['3:3:2', 'C#5'],
        ['4:0:0', 'G#4'],
        ['5:1:0', 'F#5'],['5:1:2', 'F#5'],['5:2:0', 'F#5'],['5:3:0', 'D#5'],
        ['6:0:0', 'E#5'],['6:1:2', 'E#5'],['6:2:2', 'E#5'],['6:3:0', 'D#5'],['6:3:2', 'C5'],
        ['7:0:0', 'C#5'],

        
        // chord progression
        // F#maj7, measure 1 and 5
        ['0:0:0', 'F#2'],
        ['0:0:1', 'A#2'],
        ['0:0:2', 'C#3'],
        ['0:0:3', 'F3'],

        ['0:1:0', 'F#2'],
        ['0:1:0', 'A#2'],
        ['0:1:0', 'C#3'],
        ['0:1:0', 'F3'],

        ['4:0:0', 'F#2'],
        ['4:0:1', 'A#2'],
        ['4:0:2', 'C#3'],
        ['4:0:3', 'F3'],

        ['4:1:0', 'F#2'],
        ['4:1:0', 'A#2'],
        ['4:1:0', 'C#3'],
        ['4:1:0', 'F3'],

        // D#m7, measure 2 and 6
        ['1:0:0', 'D#3'],
        ['1:0:1', 'F#3'],
        ['1:0:2', 'A#3'],
        ['1:0:3', 'C#4'],

        ['1:1:0', 'D#3'],
        ['1:1:0', 'F#3'],
        ['1:1:0', 'A#3'],
        ['1:1:0', 'C#4'],

        ['5:0:0', 'D#3'],
        ['5:0:1', 'F#3'],
        ['5:0:2', 'A#3'],
        ['5:0:3', 'C#4'],

        ['5:1:0', 'D#3'],
        ['5:1:0', 'F#3'],
        ['5:1:0', 'A#3'],
        ['5:1:0', 'C#4'],
        // G#m7, measure 3 and 7
        ['2:0:0', 'G#2'],
        ['2:0:1', 'B2'],
        ['2:0:2', 'D#3'],
        ['2:0:3', 'F#3'],

        ['2:1:0', 'G#2'],
        ['2:1:0', 'B2'],
        ['2:1:0', 'D#3'],
        ['2:1:0', 'F#3'],

        ['6:0:0', 'G#2'],
        ['6:0:1', 'B2'],
        ['6:0:2', 'D#3'],
        ['6:0:3', 'F#3'],

        ['6:1:0', 'G#2'],
        ['6:1:0', 'B2'],
        ['6:1:0', 'D#3'],
        ['6:1:0', 'F#3'],
        // G7, measure 4 and 8
        ['3:0:0', 'G2'],
        ['3:0:1', 'B2'],
        ['3:0:2', 'D3'],
        ['3:0:3', 'F3'],

        ['3:1:0', 'G2'],
        ['3:1:0', 'B2'],
        ['3:1:0', 'D3'],
        ['3:1:0', 'F3'],

        ['7:0:0', 'G2'],
        ['7:0:1', 'B2'],
        ['7:0:2', 'D3'],
        ['7:0:3', 'F3'],

        ['7:1:0', 'G2'],
        ['7:1:0', 'B2'],
        ['7:1:0', 'D3'],
        ['7:1:0', 'F3'],
 
    ]
};

const drumPatterns = {
    waterdrop: [
        ['0:0:0', 'waterdrop']
    ],
    groovy: [
        ['0:0:0', 'groovy']
    ],
    bonfire: [
        ['0:0:0', 'bonfire']
    ]
};

const naturePatterns = {
    wind: [
        ['0:0:0', 'wind']
    ],
    fireplace: [
        ['0:0:0', 'fireplace']
    ],
    rain: [
        ['0:0:0', 'rain']
    ]
};

const talkingPatterns = {
    record: [['4:0:0', 'record'], ['4:0:0', 'vinyl']],
    easier: [['4:0:0', 'easier'], ['4:0:0', 'vinyl']],
    sunrise: [['4:0:0', 'sunrise'], ['4:0:0', 'vinyl']]
};

const aiPatterns = {
    lofi_200_1: [
        ['0:0:0', 'lofi_200_1']
    ],
    lofi_400_1: [
        ['0:0:0', 'lofi_400_1']
    ],
    lofi_400_2: [
        ['0:0:0', 'lofi_400_2']
    ]
}

const patternDefaults = {
    chords: 'ylangYlang',
    drums: 'waterdrop',
    nature: 'wind',
    talking: 'record',
    ai_track: 'lofi_400_1'
};



// ************************************
//            Storage
// ************************************

const loadSoundPreferences = () => {
    // get user preferences if they interacted with the form
    const chordsSelected = JSON.parse(localStorage.getItem('chords'));
    const drumsSelected = JSON.parse(localStorage.getItem('drums'));
    const natureSoundsSelected = JSON.parse(localStorage.getItem('nature'));
    const talkingSelected = JSON.parse(localStorage.getItem('talking'));
    const aiSelected = JSON.parse(localStorage.getItem('ai'));
    const aiTrackSelected = JSON.parse(localStorage.getItem('ai_track'));
    const choiceChordSelected = JSON.parse(localStorage.getItem('enableChord'));
    const choiceAISelected = JSON.parse(localStorage.getItem('enableAI'));
  
    // use default form settings if not
    const chords = chordsSelected ? chordsSelected : patternDefaults.chords;
    const guitar = chords;
    const drums = drumsSelected ? drumsSelected : patternDefaults.drums;
    const nature = natureSoundsSelected ? natureSoundsSelected : patternDefaults.nature;
    const talking = talkingSelected ? talkingSelected : patternDefaults.talking;
    const ai = aiSelected ? aiSelected : 'false';
    const ai_track = aiTrackSelected ? aiTrackSelected: patternDefaults.ai_track;
    const enableChord = choiceChordSelected ? choiceChordSelected: false;
    const enableAI = choiceAISelected ? choiceAISelected: false;

    const musicPrefsObject = { chords, guitar, drums, nature, talking, ai, ai_track, enableAI, enableChord }

    return musicPrefsObject; 
}

// ************************************
//          Music Controls
// ************************************



const playingState = () => {
    disableForm();
    startButton.disabled = true;
    chooseButton.disabled = true;
    useAIButton.disabled = true;
};

// set up tone transport for selected loops
const loadLoops = (selectedPatterns) => {
    const { chords, drums, nature, talking, ai_track, enableAI, enableChord } = selectedPatterns;
    if (enableChord) {
   
        let chordPart = new Tone.Part((time, note) => {
            chordSampler_bass.triggerAttackRelease(note, 2.0, time);
        }, chordPatterns[chords]).start();
        chordPart.loop = true;
        chordPart.loopStart = 0;
        chordPart.loopEnd = '16';
    }




    let drumPart = new Tone.Part((time, drum) => {
        drumPlayers.player(drum).start(time);
    }, drumPatterns[drums]).start();
    drumPart.loop = true;
    drumPart.loopStart = 0;
    drumPart.loopEnd = '16';

    let naturePart = new Tone.Part((time, effect) => {
        naturePlayers.player(effect).start(time);
    }, naturePatterns[nature]).start();
    naturePart.loop = true;
    naturePart.loopStart = 0;
    naturePart.loopEnd = '24';

    let talkingPart = new Tone.Part((time, effect) => {
        talkingPlayers.player(effect).start(time);
    }, talkingPatterns[talking]).start();
    talkingPart.loop = false;
    
    if (enableAI) {
        let aiTrackPart = new Tone.Part((time, effect) => {
            aiPlayers.player(effect).start(time);
        }, aiPatterns[ai_track]).start();
        aiTrackPart.loop = true;
        aiTrackPart.loopStart = 0;
        aiTrackPart.loopEnd = '60';
    }

    
}

// ************************************
//              UI
// ************************************

// Form input and local storage setters
const enableChord = () => {
    localStorage.setItem('enableChord', true);
    localStorage.setItem('enableAI', false);
}

const enableAI = () => {
    localStorage.setItem('enableAI', true);
    localStorage.setItem('enableChord', false);
}

const setChords = (input) => {
    localStorage.setItem('chords', JSON.stringify(input));
    localStorage.setItem('guitar', JSON.stringify(input));
};

const setDrums = (input) => {
    localStorage.setItem('drums', JSON.stringify(input));
}

const setNatureSounds = (input) => {
    localStorage.setItem('nature', JSON.stringify(input));
    const backgroundImage = document.getElementById('background');

    switch (input) {
        case "wind":
            backgroundImage.style.backgroundImage = 'url(./assets/wind-1.gif)'; break
        case "fireplace":
            backgroundImage.style.backgroundImage = 'url(./assets/fireplace-at.gif)'; break
        case "rain":
            backgroundImage.style.backgroundImage = 'url(./assets/sailor-rain.gif)'; break 
            
    }
        
}

const setTalking = (input) => {
    localStorage.setItem('talking', JSON.stringify(input));
}

const setAITrack = (input) => {
    localStorage.setItem('ai_track', JSON.stringify(input));
}
//Form control while playing
const disableForm = () => {
    const formElements = document.getElementsByClassName('form-input');
    const formLabels = document.getElementsByClassName('form-heading');
    for (let i = 0; i < formElements.length; i++) {
        formElements[i].disabled = true;
    }
    for (let i = 0; i < formLabels.length; i++) {
        formLabels[i].classList.remove('enabled');
        formLabels[i].classList.add('disabled');
    }
}

// Loading screen animation 
const controlLoadingAnimation = (control) => {
    if (control === 'start') {
        loadingScreen.classList.remove('invisible');
        loadingScreen.classList.add('visible');
    }
    if (control === 'stop') {
        loadingScreen.classList.remove('visible');
        loadingScreen.classList.add('invisible');
    }
};



// Event Listeners
chooseButton.addEventListener('click', () => {
    for (i = 0; i < chordButtons.length; i++) {
        chordButtons[i].classList.remove('invisible');
        chordButtons[i].classList.add('visible');
    }
    for (i = 0; i < aiButtons.length; i++) {
        aiButtons[i].classList.remove('visible');
        aiButtons[i].classList.add('invisible');
    }
    
    
})

useAIButton.addEventListener('click', () => {
    for (i = 0; i < aiButtons.length; i++) {
        aiButtons[i].classList.remove('invisible');
        aiButtons[i].classList.add('visible');
    }
    for (i = 0; i < chordButtons.length; i++) {
        chordButtons[i].classList.remove('visible');
        chordButtons[i].classList.add('invisible');
    }
})

startButton.addEventListener('click', async () => {
    controlLoadingAnimation('start');
    const selections = await loadSoundPreferences();
    const { enableAI, enableChord } = selections;
    if (!enableAI && !enableChord) {
        selections.enableChord = true;
    }


    loadLoops(selections);

    await Tone.loaded().then(() => {
        Tone.start();
    });
    Tone.Transport.bpm.value = 80;
    Tone.Transport.start();
    Tone.context.lookAhead = 0.5;
    controlLoadingAnimation('stop');
    playingState();
});

stopButton.addEventListener('click', () => {
    Tone.Transport.stop();
    localStorage.clear();
    location.reload();

});


// ************************************
//              Visuals
// ************************************


function setup() {

    const canvas = createCanvas(displayWidth, 40);
    canvas.parent('canvas');

    chordSampler_bass.connect(soloAnalyzer);
    

}

function windowResized() {
    resizeCanvas(displayWidth, 40);
}

function draw() {

    background('#c2b5a8');

    const soloData = soloAnalyzer.getValue();
    const soloDataLength = soloData.length;

    strokeWeight(1);
    stroke(255);
    noFill();
    beginShape();
    for (var i = 0; i < soloDataLength; i++) {
        var x = map(i, 0, soloDataLength, 0, width);
        var y = map(soloData[i], -1, 1, -height / 2, height / 2);
        vertex(x, y + height / 2);
    }
    endShape();
}
