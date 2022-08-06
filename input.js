// "input.js"

let KeyboardCharacterPressed = null;

let CENTER = 0;
let UP = 1;
let DOWN = 2;
let LEFT = 3;
let RIGHT = 4;
let JoystickDirection = CENTER;

let DPadUPScale = 1;
let DPadDOWNScale = 1;
let DPadLEFTScale = 1;
let DPadRIGHTScale = 1;

let OFF = 0;
let ON = 1;
let JoystickButtonOne = OFF;
let JoystickButtonTwo = OFF;

let MouseX = 0;
let MouseY = 0;

let TouchTwoX = 0;
let TouchTwoY = 0;

let TouchScreen = new Array(2);
for (let index = 0; index < 2; index++)
	TouchScreen[index] = false;

let DelayAllUserInput = 0;

let noSleep = new NoSleep();

//--------------------------------------------------------------------------------------------------------------
function enableNoSleep()
{
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}

//--------------------------------------------------------------------------------------------------------------
function CheckForKeyPress(evt)
{	
    if (DelayAllUserInput === 0)
    {
        if (String.fromCharCode(evt.keyCode) !== " ")  KeyboardCharacterPressed =  String.fromCharCode(evt.which || evt.keyCode);
	
        switch (evt.keyCode)
        {
            case 8:
				KeyboardCharacterPressed = "=";
            break;

            case 13:
				KeyboardCharacterPressed = "/";
            break;

            case 27:
				KeyboardCharacterPressed = "~";
            break;

            default:
            break;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------
function CheckForKeyDown(evt)
{
    if (DelayAllUserInput === 0)
    {
		if (evt.keyCode === 8)  KeyboardCharacterPressed = "=";
		else if (evt.keyCode === 13)  KeyboardCharacterPressed = "/";
		else if (evt.keyCode === 27)  KeyboardCharacterPressed = "~";
		else if (evt.keyCode === 32)  KeyboardCharacterPressed = " ";
		
		if (evt.keyCode === 38)  JoystickDirection = UP;
		else if (evt.keyCode === 39)  JoystickDirection = RIGHT;
		else if (evt.keyCode === 40)  JoystickDirection = DOWN;
		else if (evt.keyCode === 37)  JoystickDirection = LEFT;

		if (evt.keyCode === 90)  JoystickButtonOne = ON;
		else if (evt.keyCode === 88)  JoystickButtonTwo = ON;
    }
}

//--------------------------------------------------------------------------------------------------------------
function CheckForKeyRelease(evt)
{
	if (TouchScreen[0] === false)
	{
		if (evt.keyCode === 38)  JoystickDirection = CENTER;
		else if (evt.keyCode === 39)  JoystickDirection = CENTER;
		else if (evt.keyCode === 40)  JoystickDirection = CENTER;
		else if (evt.keyCode === 37)  JoystickDirection = CENTER;

		if (evt.keyCode === 90)  JoystickButtonOne = OFF;
		else if (evt.keyCode === 88)  JoystickButtonTwo = OFF;
	}
}

//--------------------------------------------------------------------------------------------------------------
function GetInput()
{
	if (DelayAllUserInput > 0)
	{
		if (TouchScreen[0] === false)
		{
			KeyboardCharacterPressed = "";
			JoystickDirection = CENTER;
			JoystickButtonOne = OFF;
			JoystickButtonTwo = OFF;

			DelayAllUserInput--;
		}
		else if (TouchScreen[0] === true)
		{
			KeyboardCharacterPressed = "";
			JoystickButtonOne = OFF;
			JoystickButtonTwo = OFF;

			DelayAllUserInput--;
		}
	}
	else  DelayAllUserInput = 0;

	if (KeyboardCharacterPressed === "~")
	{
		PowerPelletEatTimer = 0;
		PlayMusic("BGM-Title");
		NextScreenToDisplay = TitleScreen;
		ScreenFadeStatus = FadeOut;
		DelayAllUserInput = 20;
	}
	
	MouseX = Math.floor( MouseCoordinates.x / (widthScale) );
	MouseY = Math.floor( MouseCoordinates.y / (heightScale) );
	
	TouchTwoX = Math.floor( SecondTouchCoordinates.x / (widthScale) );
	TouchTwoY = Math.floor( SecondTouchCoordinates.y / (heightScale) );
}
