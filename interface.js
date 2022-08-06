// "interface.js"

let Button = new Array(7);
let ButtonLeftArrow, ButtonRightArrow;

let ButtonText = new Array(7);
ButtonText[0] = "START!";
ButtonText[1] = "Options";
ButtonText[2] = "How To Play";
ButtonText[3] = "High Scores";
ButtonText[4] = "About";
ButtonText[5] = "Exit";
ButtonText[6] = "Back";

ButtonActive = new Array(7);
ButtonActive[0] = false;
ButtonActive[1] = false;
ButtonActive[2] = false;
ButtonActive[3] = false;
ButtonActive[4] = false;
ButtonActive[5] = false;
ButtonActive[6] = false;

let bText = new Array(7);

let ButtonSelectedByKeyboard = 0;
let ButtonPressed = -1;

let SelectorLine;
let ArrowLeft = new Array(8);
let ArrowRight = new Array(8);

let ArrowLeftActive = new Array(8);
ArrowLeftActive[0] = false;
ArrowLeftActive[1] = false;
ArrowLeftActive[2] = false;
ArrowLeftActive[3] = false;
ArrowLeftActive[4] = false;
ArrowLeftActive[5] = false;
ArrowLeftActive[6] = false;
ArrowLeftActive[7] = false;

let ArrowRightActive = new Array(8);
ArrowRightActive[0] = false;
ArrowRightActive[1] = false;
ArrowRightActive[2] = false;
ArrowRightActive[3] = false;
ArrowRightActive[4] = false;
ArrowRightActive[5] = false;
ArrowRightActive[6] = false;
ArrowRightActive[7] = false;

let ArrowSetSelectedByKeyboard = 0;
let ArrowPressed = -1;

let WhiteLine = new Array(7);

let CharButton = new Array(65);
let CharButtonText = new Array(65);

//--------------------------------------------------------------------------------------------------------------
function onClickChangeScreen()
{
	if (ScreenFadeStatus === FadeNone)
	{
		PlayEffect(EffectMenuMove);
	
		ScreenFadeStatus = FadeOut;
		ScreenDisplayTimer = 300;
	}
}

//--------------------------------------------------------------------------------------------------------------
function EnableScreenFadeClick()
{
	ScreenFadeBlackBox.interactive = true;
	ScreenFadeBlackBox.buttonMode = true;
}

//--------------------------------------------------------------------------------------------------------------
function DisableScreenFadeClick()
{
	ScreenFadeBlackBox.interactive = false;
	ScreenFadeBlackBox.buttonMode = false;
}

//--------------------------------------------------------------------------------------------------------------
function DeleteAllButtonsOnScreen()
{
var thereWasButton = 0;

	for (var index = 0; index < 7; index++)
	{
		if (ButtonActive[index] === true)
		{
			stage.removeChild(Button[index]);
			stage.removeChild(TextSprites[ bText[index] ]);
			Button[index] = null;
			TextSprites[index] = null;
			ButtonActive[index] = false;
			thereWasButton++;	
		}
	}

	if (thereWasButton > 1)
	{
		stage.removeChild(ButtonLeftArrow);
		stage.removeChild(ButtonRightArrow);
		ButtonLeftArrow = null;
		ButtonRightArrow = null;
	}
}

//--------------------------------------------------------------------------------------------------------------
function AddButtonToScreen(index, screenY)
{
	Button[index] = new PIXI.Sprite(id["Button.png"]);
	Button[index].anchor.set(0.5);
	Button[index].interactive = true;
	Button[index].buttonMode = true;
	Button[index].x = ( OriginalCanvasWidth/2 );
	Button[index].y = screenY;
	stage.addChild(Button[index]);

	if (ButtonSelectedByKeyboard === index)
	{
		ButtonLeftArrow = new PIXI.Sprite(id["ButtonSelectorLeft.png"]);
		ButtonLeftArrow.anchor.set(0.5);
		ButtonLeftArrow.x = ( OriginalCanvasWidth/2 - 150);
		ButtonLeftArrow.y = Button[ButtonSelectedByKeyboard].y;
		stage.addChild(ButtonLeftArrow);

		ButtonRightArrow = new PIXI.Sprite(id["ButtonSelectorRight.png"]);
		ButtonRightArrow.anchor.set(0.5);
		ButtonRightArrow.x = ( OriginalCanvasWidth/2 + 150);
		ButtonRightArrow.y = Button[ButtonSelectedByKeyboard].y;
		stage.addChild(ButtonRightArrow);
	}
	
	Button[index].on( 'pointerdown', onClickButtonAll );

	bText[index] = PlaceTextOntoScreen(25, TextCenter, ButtonText[index], OriginalCanvasWidth/2, screenY , 0, 0, 0, 0, 0, 0, .65, .65, .65, 1, 3);

	ButtonActive[index] = true;
}

//--------------------------------------------------------------------------------------------------------------
function onClickButtonAll()
{
var button = -1;

	MouseX = Math.floor( MouseCoordinates.x / (widthScale) );
	MouseY = Math.floor( MouseCoordinates.y / (heightScale) );

	for (var index = 0; index < 7; index++)
	{
		if (ButtonActive[index] === true)
		{
			if ( MouseX > Button[index].x - (Button[index].width/2) && MouseX < Button[index].x + (Button[index].width/2) &&  MouseY > Button[index].y - (Button[index].height/2) && MouseY < Button[index].y + (Button[index].height/2) )
			{
				button = index;
				index = 999;
			}
		}
	}

	if (button === -1)  return;
	
	if (Button[button].scale.x < 1 && Button[button].scale.y < 1)  return;

	ButtonSelectedByKeyboard = button;
	
	Button[button].scale.x *= .90;
	Button[button].scale.y *= .90;
	TextSprites[ bText[button] ].scale.x *= .90;
	TextSprites[ bText[button] ].scale.y *= .90;
	
	PlayEffect(EffectMenuClick);
}

//--------------------------------------------------------------------------------------------------------------
function onClickFloppyDisk()
{
	if (FloppyDisk.scale.x < .3 && FloppyDisk.scale.y < .3)  return;
	
	FloppyDisk.scale.x *= .8;
	FloppyDisk.scale.y *= .8;
	
	PlayEffect(EffectMenuClick);
}

//--------------------------------------------------------------------------------------------------------------
function ProcessButtons()
{
	ButtonPressed = -1;

	var numberOfButtons = 0;
	var indexToCheck;
	for (indexToCheck = 0; indexToCheck < 7; indexToCheck++)
	{
		if (ButtonActive[indexToCheck] === true)  numberOfButtons++;
	}	
	
	if (numberOfButtons === 0)  return;
	
	var minimumButton;
	for (var index = 6; index > -1; index--)
	{
		if (ButtonActive[index] === true)  minimumButton = index;
	}

	var maximumButton;
	for (var indexTwo = 0; indexTwo < 7; indexTwo++)
	{
		if (ButtonActive[indexTwo] === true)  maximumButton = indexTwo;
	}

	if (DelayAllUserInput === 0)
	{
		if (JoystickDirection === UP && numberOfButtons > 1)
		{
			if (ButtonSelectedByKeyboard > minimumButton)
			{
				ButtonSelectedByKeyboard--;
			}
			else  ButtonSelectedByKeyboard = maximumButton;
			
			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
		else if (JoystickDirection === DOWN && numberOfButtons > 1)
		{
			if (ButtonSelectedByKeyboard < maximumButton)
			{
				ButtonSelectedByKeyboard++;
			}
			else  ButtonSelectedByKeyboard = minimumButton;

			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}

		if (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON)
		{
			Button[ButtonSelectedByKeyboard].scale.x *= .90;
			Button[ButtonSelectedByKeyboard].scale.y *= .90;
			TextSprites[ bText[ButtonSelectedByKeyboard] ].scale.x *= .90;
			TextSprites[ bText[ButtonSelectedByKeyboard] ].scale.y *= .90;
			
			PlayEffect(EffectMenuClick);
			DelayAllUserInput = 20;
		}
	}
	
	for (var indexThree = 0; indexThree < 7; indexThree++)
	{
		if (ButtonActive[indexThree] === true)
		{			
			if (Button[indexThree].scale.x < .98)  Button[indexThree].scale.x+=.01;
			else if (Button[indexThree].scale.x < 1)
			{
				ButtonPressed = indexThree;
				Button[indexThree].scale.x = 1;
			}
			
			if (Button[indexThree].scale.y < 1)  Button[indexThree].scale.y+=.01;
			else  Button[indexThree].scale.y = 1;

			if (TextSprites[ bText[indexThree] ].scale.x < 1)  TextSprites[ bText[indexThree] ].scale.x+=.01;
			else  TextSprites[ bText[indexThree] ].scale.x = 1;
			
			if (TextSprites[ bText[indexThree] ].scale.y < 1)  TextSprites[ bText[indexThree] ].scale.y+=.01;
			else  TextSprites[ bText[indexThree] ].scale.y = 1;

			if (numberOfButtons > 1)
			{
				ButtonLeftArrow.y = (Button[ButtonSelectedByKeyboard].y);
				ButtonRightArrow.y = (Button[ButtonSelectedByKeyboard].y);
			}
			else if (numberOfButtons === 1 && ScreenToDisplay !== BetaTestScreen)
			{
				ButtonLeftArrow.y = -999999;
				ButtonRightArrow.y = -999999;
			}
		}
	}
	
	if (FloppyDisk !== null)
	{
		if (FloppyDisk.scale.x < .28)  FloppyDisk.scale.x+=.01;
		else if (FloppyDisk.scale.x < .29)
		{
			FloppyDisk.scale.x = .3;
		
			if (isMobile === false)  window.open('https://github.com/SLNTHERO/PacDudeHero4110PercentTurbo','_self');
			else  window.open('https://github.com/SLNTHERO/PacDudeHero4110PercentTurbo','_self');
		}
		else  FloppyDisk.scale.x = .3;

		if (FloppyDisk.scale.y < .3)  FloppyDisk.scale.y+=.01;
		else  FloppyDisk.scale.y = .3;
	}
}

//--------------------------------------------------------------------------------------------------------------
function DeleteAllArrowSetsOnScreen()
{
var thereWasAnArrowSet = 0;

	for (var index = 0; index < 8; index++)
	{
		if (ArrowLeftActive[index] === true)
		{
			stage.removeChild(ArrowLeft[index]);
			ArrowLeft[index] = null;
			ArrowLeftActive[index] = false;
			stage.removeChild(ArrowRight[index]);
			ArrowRight[index] = null;
			ArrowRightActive[index] = false;
			thereWasAnArrowSet++;	
		}
	}

	stage.removeChild(SelectorLine);
}
	
//--------------------------------------------------------------------------------------------------------------
function AddArrowSetToScreen(index, screenY)
{
	if (index === 0)
	{
		SelectorLine = new PIXI.Sprite(id["Selector-Line.png"]);
		SelectorLine.anchor.set(0.5);
		SelectorLine.x = ( OriginalCanvasWidth/2 );
		SelectorLine.y = screenY;
		SelectorLine.alpha = .5;
		stage.addChild(SelectorLine);
		
		if (DontChangeArrowSetSelected === false)  ArrowSetSelectedByKeyboard = 0;
	}
		
	ArrowLeft[index] = new PIXI.Sprite(id["ButtonSelectorRight.png"]);
	ArrowLeft[index].anchor.set(0.5);
	ArrowLeft[index].interactive = true;
	ArrowLeft[index].buttonMode = true;
	ArrowLeft[index].x = ( 25 );
	ArrowLeft[index].y = screenY;
	stage.addChild(ArrowLeft[index]);
	ArrowLeftActive[index] = true;
	
	ArrowRight[index] = new PIXI.Sprite(id["ButtonSelectorLeft.png"]);
	ArrowRight[index].anchor.set(0.5);
	ArrowRight[index].interactive = true;
	ArrowRight[index].buttonMode = true;
	ArrowRight[index].x = ( OriginalCanvasWidth-25 );
	ArrowRight[index].y = screenY;
	stage.addChild(ArrowRight[index]);
	ArrowRightActive[index] = true;
	
	ArrowLeft[index].on( 'pointerdown', onClickArrowLeftAll );
	ArrowRight[index].on( 'pointerdown', onClickArrowRightAll );
}

//--------------------------------------------------------------------------------------------------------------
function onClickArrowLeftAll()
{
var arrow = -1;

	MouseX = Math.floor( MouseCoordinates.x / (widthScale) );
	MouseY = Math.floor( MouseCoordinates.y / (heightScale) );

	for (var index = 0; index < 8; index++)
	{
		if (ArrowLeftActive[index] === true)
		{
			if ( MouseX > ArrowLeft[index].x - (ArrowLeft[index].width/2) && MouseX < ArrowLeft[index].x + (ArrowLeft[index].width/2) &&  MouseY > ArrowLeft[index].y - (ArrowLeft[index].height/2) && MouseY < ArrowLeft[index].y + (ArrowLeft[index].height/2) )
			{
				arrow = index;
				index = 999;
			}
		}
	}

	if (arrow === -1)  return;

	if (ArrowLeft[arrow].scale.x < 1 && ArrowLeft[arrow].scale.y < 1)  return;

	ArrowSetSelectedByKeyboard = arrow;
	
	ArrowLeft[arrow].scale.x *= .90;
	ArrowLeft[arrow].scale.y *= .90;
	
	PlayEffect(EffectMenuClick);
}

//--------------------------------------------------------------------------------------------------------------
function onClickArrowRightAll()
{
var arrow = -1;

	for (var index = 0; index < 8; index++)
	{
		if (ArrowRightActive[index] === true)
		{
			if ( MouseX > ArrowRight[index].x - (ArrowRight[index].width/2) && MouseX < ArrowRight[index].x + (ArrowRight[index].width/2) &&  MouseY > ArrowRight[index].y - (ArrowRight[index].height/2) && MouseY < ArrowRight[index].y + (ArrowRight[index].height/2) )
			{
				arrow = index;
				index = 999;
			}
		}
	}

	if (arrow === -1)  return;

	if (ArrowRight[arrow].scale.x < 1 && ArrowRight[arrow].scale.y < 1)  return;

	ArrowSetSelectedByKeyboard = arrow;
	
	ArrowRight[arrow].scale.x *= .90;
	ArrowRight[arrow].scale.y *= .90;
	
	PlayEffect(EffectMenuClick);
}

//--------------------------------------------------------------------------------------------------------------
function ProcessArrowSets()
{
	ArrowPressed = -1;

	var numberOfArrowSets = 0;
	var indexToCheck;
	for (indexToCheck = 0; indexToCheck < 8; indexToCheck++)
        if (ArrowLeft[indexToCheck] != null) numberOfArrowSets++;
	
	if (numberOfArrowSets === 0)  return;
	
	var maximumArrowSets;
	for (index = 0; index < 8; index++)
        if (ArrowLeft[index] != null) maximumArrowSets = index;
	
	if (DelayAllUserInput === 0)
	{
		if (JoystickDirection === UP && numberOfArrowSets > 1)
		{
			if (ArrowSetSelectedByKeyboard > 0)
			{
				ArrowSetSelectedByKeyboard--;
			}
			else  ArrowSetSelectedByKeyboard = maximumArrowSets;
			
			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
		else if (JoystickDirection === DOWN && numberOfArrowSets > 1)
		{
			if (ArrowSetSelectedByKeyboard < maximumArrowSets)
			{
				ArrowSetSelectedByKeyboard++;
			}
			else  ArrowSetSelectedByKeyboard = 0;

			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
		else if (JoystickDirection === LEFT && ArrowLeft[ArrowSetSelectedByKeyboard].scale.x === 1)
		{
			ArrowLeft[ArrowSetSelectedByKeyboard].scale.x *= .90;
			ArrowLeft[ArrowSetSelectedByKeyboard].scale.y *= .90;
			
			PlayEffect(EffectMenuClick);
			DelayAllUserInput = 10;
		}
		else if (JoystickDirection === RIGHT && ArrowRight[ArrowSetSelectedByKeyboard].scale.x === 1)
		{
			ArrowRight[ArrowSetSelectedByKeyboard].scale.x *= .90;
			ArrowRight[ArrowSetSelectedByKeyboard].scale.y *= .90;

			PlayEffect(EffectMenuClick);
			DelayAllUserInput = 10;
		}
	}
	
	var index;
	for (index = 0; index < 8; index++)
	{
        if (!(ArrowLeft[index] == null))
        {
			if (ArrowLeft[index].scale.x < .98) ArrowLeft[index].scale.x += .01;
			else if (ArrowLeft[index].scale.x < 1)
			{
				ArrowPressed = (index - .5);
				ArrowLeft[index].scale.x = 1;
			}

			if (ArrowLeft[index].scale.y < 1) ArrowLeft[index].scale.y += .01;
			else ArrowLeft[index].scale.y = 1;

			if (numberOfArrowSets > 1) {
				SelectorLine.y = (ArrowLeft[ArrowSetSelectedByKeyboard].y);
			}
		}

		if (ArrowRight[index] == null)
		{
		}
		else
		{
			if (ArrowRight[index].scale.x < .98) ArrowRight[index].scale.x += .01;
			else if (ArrowRight[index].scale.x < 1)
			{
				ArrowPressed = (index);
				ArrowRight[index].scale.x = 1;
			}

			if (ArrowRight[index].scale.y < 1) ArrowRight[index].scale.y += .01;
			else ArrowRight[index].scale.y = 1;

			if (numberOfArrowSets > 1)
			{
				SelectorLine.y = (ArrowRight[ArrowSetSelectedByKeyboard].y);
			}
		}
	}
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenDPadUP()
{
	OnScreenDPad[0].scale.x = .8;
	OnScreenDPad[0].scale.y = .8;
	
	JoystickDirection = UP;
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenDPadDOWN()
{
	OnScreenDPad[1].scale.x = .8;
	OnScreenDPad[1].scale.y = .8;
	
	JoystickDirection = DOWN;
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenDPadLEFT()
{
	OnScreenDPad[2].scale.x = .8;
	OnScreenDPad[2].scale.y = .8;
	
	JoystickDirection = LEFT;
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenDPadRIGHT()
{
	OnScreenDPad[3].scale.x = .8;
	OnScreenDPad[3].scale.y = .8;
	
	JoystickDirection = RIGHT;
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenGamePadButtonOne()
{
	GamePadButton[0].scale.x = .8;
	GamePadButton[0].scale.y = .8;
	
	JoystickButtonOne = ON;
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnScreenGamePadButtonTwo()
{
	GamePadButton[1].scale.x = .8;
	GamePadButton[1].scale.y = .8;
	
	JoystickButtonTwo = ON;
}

//--------------------------------------------------------------------------------------------------------------
function onClickAudioOff()
{
	AudioVolumeIcon[1].scale.x = .8;
	AudioVolumeIcon[1].scale.y = .8;
	
	MusicVolume = 0;
	SoundVolume = 0;
	SaveHighScoresAndOptions();
	
	SetVolumeOfAudioEngine();
	
	PlayEffect(EffectMenuMove);
}

//--------------------------------------------------------------------------------------------------------------
function onClickAudioOn()
{
	AudioVolumeIcon[0].scale.x = .8;
	AudioVolumeIcon[0].scale.y = .8;
	
	MusicVolume = 1;
	SoundVolume = 1;
	SaveHighScoresAndOptions();
	
	SetVolumeOfAudioEngine();
	
	PlayEffect(EffectMenuMove);
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnPause()
{
	PauseIcon[0].scale.x = .8;
	PauseIcon[0].scale.y = .8;

	PAUSEgame = true;

    MusicHowler[CurrentMusicPlaying].pause();
	
	PlayEffect(EffectMenuMove);
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnUnPause()
{
	PauseIcon[1].scale.x = .8;
	PauseIcon[1].scale.y = .8;

	PAUSEgame = false;

    MusicHowler[CurrentMusicPlaying].play();
	
	PlayEffect(EffectMenuMove);
}

//--------------------------------------------------------------------------------------------------------------
function onClickOnLevelSkip()
{
	CurrentNumberOfPelletsEaten = NumberOfPelletsOnLevel[Level];
	DelayAllUserInput = 20;
	
	if (Level < 6)  Level++;

	LevelStatus = LevelCleared;
	
	ScreenFadeStatus = FadeOut;
	
	PlayEffect(EffectMenuMove);
}

//--------------------------------------------------------------------------------------------------------------
function AddCharButtonToScreen(index, character, screenX, screenY)
{
	CharButton[index] = new PIXI.Sprite(id["NameInputButton.png"]);
	CharButton[index].anchor.set(0.5);
	CharButton[index].interactive = true;
	CharButton[index].buttonMode = true;
	CharButton[index].x = screenX;
	CharButton[index].y = screenY;
	stage.addChild(CharButton[index]);
	
	CharButton[index].on( 'pointerdown', onClickCharAll );

	if (character !== "Back")  CharButtonText[index] = PlaceTextOntoScreen( 25, TextCenter, character, screenX, screenY , 0, 0, 0, 0, 0, 0, .65, .65, .65, 1, 1 );
	else  CharButtonText[index] = PlaceTextOntoScreen( 12, TextCenter, character, screenX, screenY , 0, 0, 0, 0, 0, 0, .65, .65, .65, 1, 1 );
}


//--------------------------------------------------------------------------------------------------------------
function DeleteAllCharButtonsOnScreen()
{
	var index;
	for (index = 0; index < 65; index++)
	{
		stage.removeChild(CharButton[index]);
		stage.removeChild(TextSprites[ CharButtonText[index] ]);
	}
}

//--------------------------------------------------------------------------------------------------------------
function onClickCharAll()
{
var character = -1;

	MouseX = Math.floor( MouseCoordinates.x / (widthScale) );
	MouseY = Math.floor( MouseCoordinates.y / (heightScale) );

	for (var index = 0; index < 65; index++)
	{
		if ( MouseX > CharButton[index].x - (CharButton[index].width/2) && MouseX < CharButton[index].x + (CharButton[index].width/2) &&  MouseY > CharButton[index].y - (CharButton[index].height/2) && MouseY < CharButton[index].y + (CharButton[index].height/2) )
		{
			character = index;
			index = 999;
		}
	}

	for (var charIndex = 65; charIndex < 91; charIndex++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndex) )
		{
			character = (charIndex-65);
		}
	}

	for (var charIndexTwo = 97; charIndexTwo < 123; charIndexTwo++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndexTwo) )
		{
			character = (charIndexTwo-71);
		}
	}

	for (var charIndexThree = 48; charIndexThree < 58; charIndexThree++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndexThree) )
		{
			character = (charIndexThree+4);
		}
	}

	if (KeyboardCharacterPressed === " ")  character = 62;
	else if (KeyboardCharacterPressed === "+")  character = 63;
	else if (KeyboardCharacterPressed === "=")  character = 64;
		
	if (character === -1)  return;

	CharButton[character].scale.x = .8;
	CharButton[character].scale.y = .8;

	TextSprites[ CharButtonText[character] ].scale.x = .8;
	TextSprites[ CharButtonText[character] ].scale.y = .8;

	if (character > -1 && character < 26)
	{
		KeyboardCharacterPressed = String.fromCharCode(character+65);
	}
	else if (character > 25 && character < 52)
	{
		KeyboardCharacterPressed = String.fromCharCode(character+71);
	}
	else if (character > 51 && character < 62)
	{
		KeyboardCharacterPressed = String.fromCharCode(character-4);
	}
	else if (character === 62)  KeyboardCharacterPressed = " ";
	else if (character === 63)  KeyboardCharacterPressed = "+";
	else if (character === 64)  KeyboardCharacterPressed = "=";

	PlayEffect(EffectMenuMove);
}
