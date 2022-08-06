// "audio.js"

let MusicVolume = .5;
let SoundVolume = .5;

let MusicHowler = new Array(11);
let index;
for (index = 0; index < 11; index++) { MusicHowler[index] = null; }
let CurrentMusicPlaying = -1;

let EffectsHowler = new Array(14);
for (index = 0; index < 14; index++) { EffectsHowler[index] = null; }
let	Effect1UP = 0;
let EffectEatGhost = 1;
let	EffectEatPellet = 2;
let	EffectGameOver = 3;
let	EffectGhostNewSheet = 4;
let	EffectGhostScream = 5;
let	EffectGhostsScared = 6;
let	EffectMenuClick = 7;
let	EffectMenuMove = 8;
let	EffectMinuteBell = 9;
let	EffectPacDeath = 10;
let	EffectScreech = 11;
let	EffectStart = 12;
let	EffectWomanScream = 13;

//--------------------------------------------------------------------------------------------------------------
function SetVolumeOfAudioEngine()
{
	if (CurrentMusicPlaying !== -1)  MusicHowler[CurrentMusicPlaying].volume(MusicVolume);
	
	var index;
	for (index = 0; index < 14; index++)
	{
		if (EffectsHowler[index] !== null)  EffectsHowler[index].volume(SoundVolume);
	}
}
	
//--------------------------------------------------------------------------------------------------------------
function PlayMusic(music)
{
	if (CurrentMusicPlaying !== -1)  MusicHowler[CurrentMusicPlaying].stop();

	if (music === "BGM-EndingTwo")  CurrentMusicPlaying = 0;
	else if (music === "BGM-HighScore")  CurrentMusicPlaying = 1;
	else if (music === "BGM-NewHighScoreOne")  CurrentMusicPlaying = 2;
	else if (music === "BGM-NewHighScoreTwo")  CurrentMusicPlaying = 3;
	else if (music === "BGM-Stage1")  CurrentMusicPlaying = 4;
	else if (music === "BGM-Stage2")  CurrentMusicPlaying = 5;
	else if (music === "BGM-Stage3")  CurrentMusicPlaying = 6;
	else if (music === "BGM-Stage4")  CurrentMusicPlaying = 7;
	else if (music === "BGM-Stage5")  CurrentMusicPlaying = 8;
	else if (music === "BGM-Test")  CurrentMusicPlaying = 9;
	else if (music === "BGM-Title")  CurrentMusicPlaying = 10;

	if (AndroidFirefox === true && isMobile === true)
	{
		if (music === "BGM-Test")
		{
			MusicHowler[CurrentMusicPlaying] = new Howl({
				src: ['audio/'+music+'.mp3', 'audio/'+music+'.ogg'],
				html5: true,
				volume: MusicVolume
			});
		}
		else
		{
			MusicHowler[CurrentMusicPlaying] = new Howl({
				src: ['audio/'+music+'.mp3', 'audio/'+music+'.ogg'],
				html5: true,
				volume: MusicVolume,
				loop: true
			});
		}
	}
	else
	{
		if (music === "BGM-Test")
		{
			MusicHowler[CurrentMusicPlaying] = new Howl({
				src: ['audio/'+music+'.mp3', 'audio/'+music+'.ogg'],
				volume: MusicVolume
			});
		}
		else
		{
			MusicHowler[CurrentMusicPlaying] = new Howl({
				src: ['audio/'+music+'.mp3', 'audio/'+music+'.ogg'],
				volume: MusicVolume,
				loop: true
			});
		}
	}
		
	MusicHowler[CurrentMusicPlaying].play();	
}

//--------------------------------------------------------------------------------------------------------------
function PlayEffect(effect)
{
	if (effect === Effect1UP)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/1UP.mp3', 'audio/1UP.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectEatGhost)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Eat-Ghost.mp3', 'audio/Eat-Ghost.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectEatPellet)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Eat-Pellet.mp3', 'audio/Eat-Pellet.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectGameOver)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Game-Over.mp3', 'audio/Game-Over.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectGhostNewSheet)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Ghost-New-Sheet.mp3', 'audio/Ghost-New-Sheet.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectGhostScream)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Ghost-Scream.mp3', 'audio/Ghost-Scream.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectGhostsScared)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Ghosts-Scared.mp3', 'audio/Ghosts-Scared.ogg'],
			volume: SoundVolume,
			loop: true
		});
	}
	else if (effect === EffectMenuClick)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Menu-Click.mp3', 'audio/Menu-Click.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectMenuMove)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Menu-Move.mp3', 'audio/Menu-Move.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectMinuteBell)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Minute-Bell.mp3', 'audio/Minute-Bell.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectPacDeath)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Pac-Death.mp3', 'audio/Pac-Death.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectScreech)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Screech.mp3', 'audio/Screech.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectStart)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Start.mp3', 'audio/Start.ogg'],
			volume: SoundVolume
		});
	}
	else if (effect === EffectWomanScream)
	{
		EffectsHowler[effect] = new Howl({
			src: ['audio/Woman-Scream.mp3', 'audio/Woman-Scream.ogg'],
			volume: SoundVolume
		});
	}
	
	EffectsHowler[effect].play();
}
