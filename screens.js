// "screens.js"

let DEBUGGame = false;

let BetaTestScreen = 0;
let CobraEngineScreen = 1;
let AndroidFirefoxScreen = 2;
let SixteenBitSoftScreen = 3;
let TitleScreen = 4;
let OptionsScreen = 5;
let HowToPlayScreen = 6;
let HighScoresScreen = 7;
let AboutScreen = 8;
let PlayingGameScreen = 9;
let IntroScreen = 10;
let EndingScreen = 11;
let NewHighScoreNameInputScreen = 12;
let ScreenToDisplay = BetaTestScreen;
let NextScreenToDisplay = CobraEngineScreen;

let FadeIn = -1;
let FadeNone = 0;
let FadeOut = 1;
let ScreenFadeStatus = FadeIn;
let ScreenFadeAlpha = 1;
let ScreenChanged = true;

let ScreenDisplayTimer = 0;

let StaffTextTextIndex = new Array(200);
let StaffBlue = new Array(200);
let StaffTextY = new Array(200);
let StaffTextIsOff = new Array(200);
let StaffMaxIndex = -1;

let OptionsTexts = new Array(7);
let DontChangeArrowSetSelected = false;

let SecretCodeOne = 0;
let SecretCodeTwo = 0;
let SecretCodeThree = 0;
let SecretCodeFour = 0;
let SecretCodeText = new Array(4);
let SecretCodeTotal = 0;

let EndingSceneAnimationFrame = 0;

let OrientationText;

//--------------------------------------------------------------------------------------------------------------
function LoadGamePad()
{
	if (isMobile === true)
	{
		GamePadBG = new PIXI.Sprite(id["Screen-Fade-Black-Box.png"]);
		GamePadBG.x = ( 0 );
		GamePadBG.y = ( 480 );
		stage.addChild(GamePadBG);

		OnScreenDPad[0] = new PIXI.Sprite(id["GamePadUP.png"]);
		OnScreenDPad[0].anchor.set(0.5);
		OnScreenDPad[0].x = ( 200 );
		OnScreenDPad[0].y = ( 800-200);
		OnScreenDPad[0].scale.x = DPadUPScale;
		OnScreenDPad[0].scale.y = DPadUPScale;
		OnScreenDPad[0].interactive = true;
		OnScreenDPad[0].buttonMode = true;
		stage.addChild(OnScreenDPad[0]);
		OnScreenDPad[0].on( 'pointerdown', onClickOnScreenDPadUP );
		OnScreenDPad[0].on( 'pointerenter', onClickOnScreenDPadUP );
		OnScreenDPad[0].on( 'pointerup', function() { OnScreenDPad[0].scale.x = 1; OnScreenDPad[0].scale.y = 1; JoystickDirection = CENTER; } );
		OnScreenDPad[0].on( 'pointerout', function() { OnScreenDPad[0].scale.x = 1; OnScreenDPad[0].scale.y = 1; JoystickDirection = CENTER; } );
		
		OnScreenDPad[1] = new PIXI.Sprite(id["GamePadDOWN.png"]);
		OnScreenDPad[1].anchor.set(0.5);
		OnScreenDPad[1].x = ( 200 );
		OnScreenDPad[1].y = ( 800+(128*2)-200 );
		OnScreenDPad[1].scale.x = DPadDOWNScale;
		OnScreenDPad[1].scale.y = DPadDOWNScale;
		OnScreenDPad[1].interactive = true;
		OnScreenDPad[1].buttonMode = true;
		stage.addChild(OnScreenDPad[1]);
		OnScreenDPad[1].on( 'pointerdown', onClickOnScreenDPadDOWN );
		OnScreenDPad[1].on( 'pointerenter', onClickOnScreenDPadDOWN );
		OnScreenDPad[1].on( 'pointerup', function() { OnScreenDPad[1].scale.x = 1; OnScreenDPad[1].scale.y = 1; JoystickDirection = CENTER; } );
		OnScreenDPad[1].on( 'pointerout', function() { OnScreenDPad[1].scale.x = 1; OnScreenDPad[1].scale.y = 1; JoystickDirection = CENTER; } );
		
		OnScreenDPad[2] = new PIXI.Sprite(id["GamePadLEFT.png"]);
		OnScreenDPad[2].anchor.set(0.5);
		OnScreenDPad[2].x = ( 200-128 );
		OnScreenDPad[2].y = ( 800+128 )-200;
		OnScreenDPad[2].scale.x = DPadLEFTScale;
		OnScreenDPad[2].scale.y = DPadLEFTScale;
		OnScreenDPad[2].interactive = true;
		OnScreenDPad[2].buttonMode = true;
		stage.addChild(OnScreenDPad[2]);
		OnScreenDPad[2].on( 'pointerdown', onClickOnScreenDPadLEFT );
		OnScreenDPad[2].on( 'pointerenter', onClickOnScreenDPadLEFT );
		OnScreenDPad[2].on( 'pointerup', function() { OnScreenDPad[2].scale.x = 1; OnScreenDPad[2].scale.y = 1; JoystickDirection = CENTER; } );
		OnScreenDPad[2].on( 'pointerout', function() { OnScreenDPad[2].scale.x = 1; OnScreenDPad[2].scale.y = 1; JoystickDirection = CENTER; } );
		
		OnScreenDPad[3] = new PIXI.Sprite(id["GamePadRIGHT.png"]);
		OnScreenDPad[3].anchor.set(0.5);
		OnScreenDPad[3].x = ( 200+128 );
		OnScreenDPad[3].y = ( 800+128 )-200;
		OnScreenDPad[3].scale.x = DPadRIGHTScale;
		OnScreenDPad[3].scale.y = DPadRIGHTScale;
		OnScreenDPad[3].interactive = true;
		OnScreenDPad[3].buttonMode = true;
		stage.addChild(OnScreenDPad[3]);
		OnScreenDPad[3].on( 'pointerdown', onClickOnScreenDPadRIGHT );
		OnScreenDPad[3].on( 'pointerenter', onClickOnScreenDPadRIGHT );
		OnScreenDPad[3].on( 'pointerup', function() { OnScreenDPad[3].scale.x = 1; OnScreenDPad[3].scale.y = 1; JoystickDirection = CENTER; } );
		OnScreenDPad[3].on( 'pointerout', function() { OnScreenDPad[3].scale.x = 1; OnScreenDPad[3].scale.y = 1; JoystickDirection = CENTER; } );
		
		GamePadButton[0] = new PIXI.Sprite(id["GamePadButton.png"]);
		GamePadButton[0].anchor.set(0.5);
		GamePadButton[0].x = ( OriginalCanvasWidth-130 );
		GamePadButton[0].y = ( 1138-120-190 )-200;
		GamePadButton[0].interactive = true;
		GamePadButton[0].buttonMode = true;
		stage.addChild(GamePadButton[0]);
		GamePadButton[0].on( 'pointerdown', onClickOnScreenGamePadButtonOne );
		GamePadButton[0].on( 'pointerup', function() { GamePadButton[0].scale.x = 1; GamePadButton[0].scale.y = 1; JoystickButtonOne = OFF; } );
		GamePadButton[0].on( 'pointerout', function() { GamePadButton[0].scale.x = 1; GamePadButton[0].scale.y = 1; JoystickButtonOne = OFF; } );

		GamePadButton[1] = new PIXI.Sprite(id["GamePadButton.png"]);
		GamePadButton[1].anchor.set(0.5);
		GamePadButton[1].x = ( OriginalCanvasWidth-130 );
		GamePadButton[1].y = ( 1138-120 )-200;
		GamePadButton[1].interactive = true;
		GamePadButton[1].buttonMode = true;
		stage.addChild(GamePadButton[1]);
		GamePadButton[1].on( 'pointerdown', onClickOnScreenGamePadButtonTwo );
		GamePadButton[1].on( 'pointerup', function() { GamePadButton[1].scale.x = 1; GamePadButton[1].scale.y = 1; JoystickButtonTwo = OFF; } );
		GamePadButton[1].on( 'pointerout', function() { GamePadButton[1].scale.x = 1; GamePadButton[1].scale.y = 1; JoystickButtonTwo = OFF; } );
	}
}

//--------------------------------------------------------------------------------------------------------------
function LoadScreenFade()
{
	ScreenFadeBlackBox = new PIXI.Sprite(id["Screen-Fade-Black-Box.png"]);
	ScreenFadeBlackBox.anchor.set(0.5);
	ScreenFadeBlackBox.x = ( OriginalCanvasWidth/2 );
	ScreenFadeBlackBox.y = ( OriginalCanvasHeight/2 );
	stage.addChild(ScreenFadeBlackBox);

	ScreenFadeBlackBox.on( 'pointerdown', onClickChangeScreen );
}

//--------------------------------------------------------------------------------------------------------------
function ProcessScreenFade()
{
	if (ScreenFadeStatus === FadeIn)
	{
		if (ScreenFadeAlpha > 0)  ScreenFadeAlpha-=.33;
		else
		{
			ScreenFadeAlpha = 0;
			ScreenFadeStatus = FadeNone;
		
			if (isMobile === true)  LoadGamePad();
			
			SetupStars();
		}
	}
	else if (ScreenFadeStatus === FadeOut)
	{
		if (ScreenFadeAlpha < 1)  ScreenFadeAlpha+=.33;
		else
		{
			ScreenFadeAlpha = 1;
			ScreenChanged = true;
			
			if (isMobile === true)
			{
				stage.removeChild(OnScreenDPad[0]);
				stage.removeChild(OnScreenDPad[1]);
				stage.removeChild(OnScreenDPad[2]);
				stage.removeChild(OnScreenDPad[3]);
				
				stage.removeChild(GamePadButton[0]);
				stage.removeChild(GamePadButton[1]);
			}
			
			DestroyStars();
		}
	}

	if (ScreenFadeBlackBox !== null)  ScreenFadeBlackBox.alpha = ScreenFadeAlpha;
}

//--------------------------------------------------------------------------------------------------------------
function ProcessNextScreen()
{
	stage.removeChild(ScreenFadeBlackBox);
	
	ScreenToDisplay = NextScreenToDisplay;

	ScreenFadeStatus = FadeIn;
}

//--------------------------------------------------------------------------------------------------------------
function play()
{	
	var index;
	var CurrentTime = new Date().getTime();
	if (CurrentTime > NextSecond)
	{
		FPS = FrameCount;
		FrameCount = 0;
		NextSecond = CurrentTime+1000;
		
		if (ScreenToDisplay === PlayingGameScreen && PAUSEgame === false && GameOver === 0)
		{
			if (SecondsLeft > 0)  SecondsLeft--;
			else
			{
				PlayEffect(EffectMinuteBell);
				
				if (MinutesLeft > 0)
				{
					MinutesLeft--;
					SecondsLeft = 59;
				}
				else
				{
					PlayEffect(EffectGameOver);
					
					GameOver = 250;
				}
			}
		}
	}

	ProcessStars();
	
	GetInput();

	DisplayScreen();
	
	ProcessButtons();
	ProcessArrowSets();
	
	if (DEBUGGame === true)  FPSText = ""+FPS+"["+MouseX+","+MouseY+"]";
	if (FPSmessage !== null)  TextSprites[FPSmessage].text = FPSText;
	
	if (isMobile === true && ScreenFadeStatus === FadeNone)
	{
		if (OnScreenDPad[0] !== null)  DPadUPScale = OnScreenDPad[0].scale.x;
		if (OnScreenDPad[1] !== null)  DPadDOWNScale = OnScreenDPad[1].scale.x;
		if (OnScreenDPad[2] !== null)  DPadLEFTScale = OnScreenDPad[2].scale.x;
		if (OnScreenDPad[3] !== null)  DPadRIGHTScale = OnScreenDPad[3].scale.x;

		for (index = 0; index < 4; index++)
		{
			if (OnScreenDPad[index].scale.x < 1)
			{
				OnScreenDPad[index].scale.x = 1;
				OnScreenDPad[index].scale.y = 1;
				
				JoystickDirection = CENTER;
			}
		}

		if (TouchScreen[0] === true)
		{
			for (index = 0; index < 4; index++)
			{
				if ( MouseX > (OnScreenDPad[index].x - 64) && MouseX < (OnScreenDPad[index].x + 64) && MouseY > (OnScreenDPad[index].y - 64) && MouseY < (OnScreenDPad[index].y + 64) )
				{
					OnScreenDPad[index].scale.x = .8;
					OnScreenDPad[index].scale.y = .8;
					
					JoystickDirection = (1+index);
				}
			}

			for (index = 0; index < 4; index++)
			{
				if ( TouchTwoX > (OnScreenDPad[index].x - 64) && TouchTwoX < (OnScreenDPad[index].x + 64) && TouchTwoY > (OnScreenDPad[index].y - 64) && TouchTwoY < (OnScreenDPad[index].y + 64) )
				{
					OnScreenDPad[index].scale.x = .8;
					OnScreenDPad[index].scale.y = .8;
					
					JoystickDirection = (1+index);
				}
			}
		}
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayScreen()
{
	if (ScreenToDisplay === BetaTestScreen)  DisplayBetaTestScreen();
	else if (ScreenToDisplay === CobraEngineScreen)  DisplayCobraEngineScreen();
	else if (ScreenToDisplay === AndroidFirefoxScreen)  DisplayAndroidFirefoxScreen();
	else if (ScreenToDisplay === SixteenBitSoftScreen)  DisplaySixteenBitSoftScreen();
	else if (ScreenToDisplay === TitleScreen)  DisplayTitleScreen();
	else if (ScreenToDisplay === OptionsScreen)  DisplayOptionsScreen();
	else if (ScreenToDisplay === HowToPlayScreen)  DisplayHowToPlayScreen();
	else if (ScreenToDisplay === HighScoresScreen)  DisplayHighScoresScreen();
	else if (ScreenToDisplay === AboutScreen)  DisplayAboutScreen();
	else if (ScreenToDisplay === PlayingGameScreen)  DisplayPlayingGameScreen();
	else if (ScreenToDisplay === IntroScreen)  DisplayIntroScreen();
	else if (ScreenToDisplay === EndingScreen)  DisplayEndingScreen();
	else if (ScreenToDisplay === NewHighScoreNameInputScreen)  DisplayNewHighScoreNameInputScreen();
	
	ProcessScreenFade();
}

//--------------------------------------------------------------------------------------------------------------
function DisplayBetaTestScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		renderer.backgroundColor = PIXI.utils.rgb2hex([.85, .85, .85]);

		PlaceTextOntoScreen(35, TextCenter, "''PacDude Hero IV 110% Turbo™''",320, 30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(25, TextCenter, "(Version 4.5.6.x 110% Final)",320, 60, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(30, TextCenter, "©2020 By Team ''www.16BitSoft.com''",320, 90, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);

		WhiteLine[0] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[0].anchor.set(0.5);
		WhiteLine[0].x = ( OriginalCanvasWidth/2 );
		WhiteLine[0].y = ( 115 );
		WhiteLine[0].tint = PIXI.utils.rgb2hex([1, 1, 1]);
		stage.addChild(WhiteLine[0]);

		PlaceTextOntoScreen(25, TextCenter, "Game *Should* Run On The Following:",320, 135, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(25, TextCenter, "- Win Edge/Firefox/Chrome/Opera Desktops/Notebooks -",320, 135+30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(25, TextCenter, "- Linux Firefox/Chrome Desktops/Notebooks -",320, 135+30+30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(25, TextCenter, "- Android Firefox/Chrome SmartPhones/Tablets -",320, 135+30+30+30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);

		WhiteLine[1] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[1].anchor.set(0.5);
		WhiteLine[1].x = ( OriginalCanvasWidth/2 );
		WhiteLine[1].y = ( 245 );
		WhiteLine[1].tint = PIXI.utils.rgb2hex([1, 1, 1]);
		stage.addChild(WhiteLine[1]);
		
		PlaceTextOntoScreen(25, TextCenter, "DEBUG INFORMATION:",320, 265, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);

		OrientationText = PlaceTextOntoScreen(25, TextCenter, "N.A.", 320, 265+30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);

		PlaceTextOntoScreen(25, TextCenter, "Mobile="+isMobile+"/Chrome="+AndroidChrome+"/Firefox="+AndroidFirefox, 320, 265+30+30, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		
		WhiteLine[2] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[2].anchor.set(0.5);
		WhiteLine[2].x = ( OriginalCanvasWidth/2 );
		WhiteLine[2].y = ( 345 );
		WhiteLine[2].tint = PIXI.utils.rgb2hex([1, 1, 1]);
		stage.addChild(WhiteLine[2]);
		
		PlaceTextOntoScreen(25, TextCenter, "Post Bugs Or Suggestions To:",320, 355+5, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
		PlaceTextOntoScreen(38, TextCenter, "This www.Itch.io Page!",320, 355+40, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);

		WhiteLine[3] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[3].anchor.set(0.5);
		WhiteLine[3].x = ( OriginalCanvasWidth/2 );
		WhiteLine[3].y = ( 425 );
		WhiteLine[3].tint = PIXI.utils.rgb2hex([1, 1, 1]);
		stage.addChild(WhiteLine[3]);
		
		AddButtonToScreen( 5, 455 );
		ButtonSelectedByKeyboard = 5;
		
		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 0, 0, 0, 0, 0, 0, .8, .8, .8, 1, 3);
	
		NextScreenToDisplay = SixteenBitSoftScreen;
		
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
		
		ScreenDisplayTimer = 0;
	}

	if (AndroidOrientation === AndroidLandscape)  TextSprites[OrientationText].text = "Landscape "+TouchInput+" ["+TouchTwoX+","+TouchTwoY+"]";
	else if (AndroidOrientation === AndroidPortrait)  TextSprites[OrientationText].text = "Portrait "+TouchInput+" ["+TouchTwoX+","+TouchTwoY+"]";

	if (ButtonPressed === 5)
	{
		ScreenFadeStatus = FadeOut;
	}

	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		SetVolumeOfAudioEngine();
		PlayMusic("BGM-Test");

		renderer.backgroundColor = PIXI.utils.rgb2hex([0, 0, 0]);

		var index;
		for (index = 0; index < 4; index++)
		{
			stage.removeChild(WhiteLine[index]);
		}

		DeleteAllButtonsOnScreen();
		RemoveAllTextsOnScreen();

		if (isMobile === true)  NextScreenToDisplay = AndroidFirefoxScreen;
		else  NextScreenToDisplay = CobraEngineScreen;
		
		ProcessNextScreen();
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayCobraEngineScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		ScreenDisplayTimer = 0;
		
		CobraLogo = new PIXI.Sprite(id["CobraLogo.png"]);
		CobraLogo.anchor.set(0.5);
		CobraLogo.x = ( OriginalCanvasWidth/2 );
		CobraLogo.y = ( 480/2 );
		stage.addChild(CobraLogo);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		NextScreenToDisplay = SixteenBitSoftScreen;
		
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
	}
	
	if (ScreenDisplayTimer < 475)  ScreenDisplayTimer++;
	else
	{
		ScreenFadeStatus = FadeOut;
	}

	if ( (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
	}

	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		renderer.backgroundColor = PIXI.utils.rgb2hex([0, 0, 0]);

		stage.removeChild(CobraLogo);
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayAndroidFirefoxScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		ScreenDisplayTimer = 0;
		
		SixteenBitSoftLogo = new PIXI.Sprite(id["Firefox-Logo.png"]);
		SixteenBitSoftLogo.anchor.set(0.5);
		SixteenBitSoftLogo.x = ( OriginalCanvasWidth/2 );
		SixteenBitSoftLogo.y = ( 480/2 );
		SixteenBitSoftLogo.scale.x = 1;
		SixteenBitSoftLogo.scale.y = 1;
		stage.addChild(SixteenBitSoftLogo);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		NextScreenToDisplay = CobraEngineScreen;
		
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
	}
	
	if (ScreenDisplayTimer < 300)  ScreenDisplayTimer++;
	else
	{
		ScreenFadeStatus = FadeOut;
	}

	if ( (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
	}

	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(SixteenBitSoftLogo);
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplaySixteenBitSoftScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		ScreenDisplayTimer = 0;
		
		SixteenBitSoftLogo = new PIXI.Sprite(id["16BitSoft-Logo-Large.png"]);
		SixteenBitSoftLogo.anchor.set(0.5);
		SixteenBitSoftLogo.x = ( OriginalCanvasWidth/2 );
		SixteenBitSoftLogo.y = ( 480/2 );
		stage.addChild(SixteenBitSoftLogo);

		PlaceTextOntoScreen(15, TextRight, "TM", 25, 330, 0, 1, 0, 0, .75, 0, 0, 0, 0, 1, 3);
		PlaceTextOntoScreen(25, TextCenter, "''Bringing Back Old Memories From The 16Bit Era!''", 320, 350, 0, 1, 0, 0, .75, 0, 0, 0, 0, 1, 3);

		PlaceTextOntoScreen(35, TextCenter, "www.16BitSoft.com", 320, 480-20, 0, 1, 0, 0, .75, 0, 0, 0, 0, 1, 3);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		NextScreenToDisplay = TitleScreen;
		
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
		
		PlayMusic("BGM-Title");
	}

	if (ScreenDisplayTimer < 300)  ScreenDisplayTimer++;
	else
	{
		ScreenFadeStatus = FadeOut;
	}

	if ( (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		if (MouseX < 50 && MouseY < 50)  DEBUGGame = true;
				
		stage.removeChild(SixteenBitSoftLogo);
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayTitleScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		SaveHighScoresAndOptions();
		
		DontChangeArrowSetSelected = false;
		
		titleBG = new PIXI.Sprite(id["Arcade-Room-01.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		PDH4Logo = new PIXI.Sprite(id["PDH4-Logo2.png"]);
		PDH4Logo.anchor.set(0.5);
		PDH4Logo.x = ( OriginalCanvasWidth/2 );
		PDH4Logo.y = ( 5 + (PDH4Logo.height / 2) );
		stage.addChild(PDH4Logo);

		PixiJSLogo = new PIXI.Sprite(id["PixiJS-Logo.png"]);
		PixiJSLogo.anchor.set(0.5);
		PixiJSLogo.scale.x = .5;
		PixiJSLogo.scale.y = .5;
		PixiJSLogo.x = ( 500+85 );
		PixiJSLogo.y = ( 447 );
		stage.addChild(PixiJSLogo);

		Audio5jsLogo = new PIXI.Sprite(id["HowlerLogo.png"]);
		Audio5jsLogo.anchor.set(0.5);
		Audio5jsLogo.scale.x = .5;
		Audio5jsLogo.scale.y = .5;
		Audio5jsLogo.x = ( 500+85-10 );
		Audio5jsLogo.y = ( 447-30+5 );
		stage.addChild(Audio5jsLogo);
		
		AudioVolumeIcon[0] = new PIXI.Sprite(id["SpeakerON.png"]);
		AudioVolumeIcon[0].anchor.set(0.5);
		AudioVolumeIcon[0].scale.x = 1;
		AudioVolumeIcon[0].scale.y = 1;
		AudioVolumeIcon[0].x = ( 30 );
		AudioVolumeIcon[0].y = ( 30 );
		AudioVolumeIcon[0].interactive = true;
		AudioVolumeIcon[0].buttonMode = true;
		stage.addChild(AudioVolumeIcon[0]);
		AudioVolumeIcon[0].on( 'pointerdown', onClickAudioOff );

		AudioVolumeIcon[1] = new PIXI.Sprite(id["SpeakerOFF.png"]);
		AudioVolumeIcon[1].anchor.set(0.5);
		AudioVolumeIcon[1].scale.x = 1;
		AudioVolumeIcon[1].scale.y = 1;
		AudioVolumeIcon[1].x = ( 30 );
		AudioVolumeIcon[1].y = ( 30 );
		AudioVolumeIcon[1].interactive = true;
		AudioVolumeIcon[1].buttonMode = true;
		stage.addChild(AudioVolumeIcon[1]);
		AudioVolumeIcon[1].on( 'pointerdown', onClickAudioOn );

		if (MusicVolume === 0 && SoundVolume === 0)
		{
			AudioVolumeIcon[0].y = ( 30 );
			AudioVolumeIcon[1].y = ( 30-9999 );
		}
		else
		{
			AudioVolumeIcon[0].y = ( 30-9999 );
			AudioVolumeIcon[1].y = ( 30 );
		}
/*		
		FloppyDisk = new PIXI.Sprite(id["FloppyDisk.png"]);
		FloppyDisk.anchor.set(0.5);
		FloppyDisk.interactive = true;
		FloppyDisk.buttonMode = true;
		FloppyDisk.scale.x = .35;
		FloppyDisk.scale.y = .35;
		FloppyDisk.x = ( 55 );
		FloppyDisk.y = ( 420 );
		stage.addChild(FloppyDisk);

		FloppyDisk.on( 'pointerdown', onClickFloppyDisk );
*/
		ButtonSelectedByKeyboard = 0;
		
		var offset = 43;
		AddButtonToScreen(  0, ( 210 + (0) )  );
		AddButtonToScreen(  1, ( 210 + (offset) )  );
		AddButtonToScreen(  2, ( 210 + (2*offset) )  );
		AddButtonToScreen(  3, ( 210 + (3*offset) )  );
		AddButtonToScreen(  4, ( 210 + (4*offset) )  );
		AddButtonToScreen(  5, ( 210 + (5*offset) )  );

		PlaceTextOntoScreen(25, TextCenter, "''"+HighScoresName[GameMode][0]+"'' Scored "+HighScoresScore[GameMode][0], 320, 170, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 7);

		PlaceTextOntoScreen(25, TextCenter, "©2020 By Team ''www.16BitSoft.com''", 320, 480-20, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 7);
		PlaceTextOntoScreen(13, TextRight, "Version 4.5.6 Final", 2, 480-10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 7);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}

	if (AudioVolumeIcon[0].scale.x < .98)
	{
		AudioVolumeIcon[0].scale.x+=.01;
		AudioVolumeIcon[0].scale.y+=.01;
	}	
	else
	{	
		AudioVolumeIcon[0].scale.x = 1;
		AudioVolumeIcon[0].scale.y = 1;

		if (MusicVolume > 0 || SoundVolume > 0)
		{
			AudioVolumeIcon[0].y = ( 30 );
			AudioVolumeIcon[1].y = ( -9999 );
		}
		else
		{
			AudioVolumeIcon[0].y = ( -9999 );
			AudioVolumeIcon[1].y = ( 30 );
		}
	}
	
	if (AudioVolumeIcon[1].scale.x < .98)
	{
		AudioVolumeIcon[1].scale.x+=.01;
		AudioVolumeIcon[1].scale.y+=.01;
	}	
	else
	{
		AudioVolumeIcon[1].scale.x = 1;
		AudioVolumeIcon[1].scale.y = 1;

		if (MusicVolume > 0 || SoundVolume > 0)
		{
			AudioVolumeIcon[0].y = ( 30 );
			AudioVolumeIcon[1].y = ( -9999 );
		}
		else
		{
			AudioVolumeIcon[0].y = ( -9999 );
			AudioVolumeIcon[1].y = ( 30 );
		}
	}

	if (ButtonPressed === 0)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = IntroScreen;
	}
	else if (ButtonPressed === 1)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = OptionsScreen;
	}
	else if (ButtonPressed === 2)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = HowToPlayScreen;
	}
	else if (ButtonPressed === 3)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = HighScoresScreen;
	}
	else if (ButtonPressed === 4)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = AboutScreen;
	}
/*	else if (ButtonPressed === 5)
	{
		ScreenFadeStatus = FadeOut;
		noSleep.disable();
		window.open('http://16bitsoft.com','_self');
	}
*/		
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(titleBG);
		stage.removeChild(PDH4Logo);
		stage.removeChild(PixiJSLogo);
		stage.removeChild(Audio5jsLogo);
		stage.removeChild(FloppyDisk);

		stage.removeChild(AudioVolumeIcon[0]);
		stage.removeChild(AudioVolumeIcon[1]);
		
		DeleteAllButtonsOnScreen();

		RemoveAllTextsOnScreen();

		ProcessNextScreen();
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayOptionsScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		titleBG = new PIXI.Sprite(id["Arcade-Room-02.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		WhiteLine[0] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[0].anchor.set(0.5);
		WhiteLine[0].x = ( OriginalCanvasWidth/2 );
		WhiteLine[0].y = ( 43 );
		WhiteLine[0].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[0]);
		WhiteLine[1] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[1].anchor.set(0.5);
		WhiteLine[1].x = ( OriginalCanvasWidth/2 );
		WhiteLine[1].y = ( 430 );
		WhiteLine[1].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[1]);
		
		PlaceTextOntoScreen(35, TextCenter, "Options Screen", 320, 17, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 3);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		NextScreenToDisplay = TitleScreen;
		
		AddArrowSetToScreen(0, 71);
		PlaceTextOntoScreen(25, TextLeft, "Music Volume:", 60, 71, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		OptionsTexts[0] = PlaceTextOntoScreen(25, TextRight, "50%", 60, 71, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		var mVolumeText;
		if (MusicVolume === 0)  mVolumeText = "0%";
		else if (MusicVolume === .25)  mVolumeText = "25%";
		else if (MusicVolume === .5)  mVolumeText = "50%";
		else if (MusicVolume === .75)  mVolumeText = "75%";
		else if (MusicVolume === 1)  mVolumeText = "100%";
		TextSprites[ OptionsTexts[0] ].text = mVolumeText;

		AddArrowSetToScreen(1, 71+41);
		PlaceTextOntoScreen(25, TextLeft, "Sound Volume:", 60, 71+41, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		OptionsTexts[1] = PlaceTextOntoScreen(25, TextRight, "50%", 60, 71+41, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		var sVolumeText;
		if (SoundVolume === 0)  sVolumeText = "0%";
		else if (SoundVolume === .25)  sVolumeText = "25%";
		else if (SoundVolume === .5)  sVolumeText = "50%";
		else if (SoundVolume === .75)  sVolumeText = "75%";
		else if (SoundVolume === 1)  sVolumeText = "100%";
		TextSprites[ OptionsTexts[1] ].text = sVolumeText;
		
		WhiteLine[2] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[2].anchor.set(0.5);
		WhiteLine[2].x = ( OriginalCanvasWidth/2 );
		WhiteLine[2].y = ( 137 );
		stage.addChild(WhiteLine[2]);

		AddArrowSetToScreen(2, 71+41+50);
		PlaceTextOntoScreen(25, TextLeft, "Game Mode:", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		if (GameMode === VerySlowMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Very Slow Mode", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === SlowMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Slow Mode", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === NormalMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Normal Mode", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === FastMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Fast Mode", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === VeryFastMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Turbo! Mode", 60, 71+41+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		AddArrowSetToScreen(3, 71+41+50+45);
		PlaceTextOntoScreen(25, TextLeft, "Control Scheme:", 60, 71+41+50+45, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		if (ControlScheme === 0)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Don't Cue Next Move", 60, 71+41+50+45, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (ControlScheme === 1)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextRight, "Cue Next Move", 60, 71+41+50+45, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
	
		WhiteLine[3] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[3].anchor.set(0.5);
		WhiteLine[3].x = ( OriginalCanvasWidth/2 );
		WhiteLine[3].y = ( 230 );
		stage.addChild(WhiteLine[3]);

		AddArrowSetToScreen(4, 256);
		PlaceTextOntoScreen(25, TextLeft, "Secret Code #1:", 60, 256, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		SecretCodeText[0] = PlaceTextOntoScreen(25, TextRight, SecretCodeOne, 60, 256, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		AddArrowSetToScreen(5, 256+50);
		PlaceTextOntoScreen(25, TextLeft, "Secret Code #2:", 60, 256+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		SecretCodeText[1] = PlaceTextOntoScreen(25, TextRight, SecretCodeTwo, 60, 256+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		AddArrowSetToScreen(6, 256+50+50);
		PlaceTextOntoScreen(25, TextLeft, "Secret Code #3:", 60, 256+50+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		SecretCodeText[2] = PlaceTextOntoScreen(25, TextRight, SecretCodeThree, 60, 256+50+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		AddArrowSetToScreen(7, 256+50+50+50);
		PlaceTextOntoScreen(25, TextLeft, "Secret Code #4:", 60, 256+50+50+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		SecretCodeText[3] = PlaceTextOntoScreen(25, TextRight, SecretCodeFour, 60, 256+50+50+50, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
			
		ButtonSelectedByKeyboard = 6;
		AddButtonToScreen( 6, 455 );
		
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}

	if (ArrowPressed === -.5)
	{
		if (MusicVolume > 0)  MusicVolume-=.25;
		else  MusicVolume = 1;

		SetVolumeOfAudioEngine();
		
		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 0)
	{
		if (MusicVolume < 1)  MusicVolume+=.25;
		else  MusicVolume = 0;

		SetVolumeOfAudioEngine();
	
		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === .5)
	{
		if (SoundVolume > 0)  SoundVolume-=.25;
		else  SoundVolume = 1;

		SetVolumeOfAudioEngine();
		
		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 1)
	{
		if (SoundVolume < 1)  SoundVolume+=.25;
		else  SoundVolume = 0;

		SetVolumeOfAudioEngine();
	
		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 1.5)
	{
		if (GameMode > 0)  GameMode--;
		else  GameMode = 4;

		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 2)
	{
		if (GameMode < 4)  GameMode++;
		else  GameMode = 0;

		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 2.5)
	{
		if (ControlScheme > 0)  ControlScheme--;
		else  ControlScheme = 1;

		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 3)
	{
		if (ControlScheme < 1)  ControlScheme++;
		else  ControlScheme = 0;

		NextScreenToDisplay = OptionsScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 3.5)
	{
		if (SecretCodeOne > 0)  SecretCodeOne--;
		else  SecretCodeOne = 9;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[0] ].text = SecretCodeOne;
	}
	else if (ArrowPressed === 4)
	{
		if (SecretCodeOne < 9)  SecretCodeOne++;
		else  SecretCodeOne = 0;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[0] ].text = SecretCodeOne;
	}
	else if (ArrowPressed === 4.5)
	{
		if (SecretCodeTwo > 0)  SecretCodeTwo--;
		else  SecretCodeTwo = 9;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[1] ].text = SecretCodeTwo;
	}
	else if (ArrowPressed === 5)
	{
		if (SecretCodeTwo < 9)  SecretCodeTwo++;
		else  SecretCodeTwo = 0;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[1] ].text = SecretCodeTwo;
	}
	else if (ArrowPressed === 5.5)
	{
		if (SecretCodeThree > 0)  SecretCodeThree--;
		else  SecretCodeThree = 9;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[2] ].text = SecretCodeThree;
	}
	else if (ArrowPressed === 6)
	{
		if (SecretCodeThree < 9)  SecretCodeThree++;
		else  SecretCodeThree = 0;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[2] ].text = SecretCodeThree;
	}
	else if (ArrowPressed === 6.5)
	{
		if (SecretCodeFour > 0)  SecretCodeFour--;
		else  SecretCodeFour = 9;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[3] ].text = SecretCodeFour;
	}
	else if (ArrowPressed === 7)
	{
		if (SecretCodeFour < 9)  SecretCodeFour++;
		else  SecretCodeFour = 0;

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );
		
		TextSprites[ SecretCodeText[3] ].text = SecretCodeFour;
	}

	if (ButtonPressed === 6)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = TitleScreen;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		DontChangeArrowSetSelected = true;

		stage.removeChild(titleBG);

		var index;
		for (index = 0; index < 4; index++)
		{
			stage.removeChild(WhiteLine[index]);
		}
		
		DeleteAllArrowSetsOnScreen();
		DeleteAllButtonsOnScreen();
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function DisplayHowToPlayScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		titleBG = new PIXI.Sprite(id["Arcade-Room-02.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		WhiteLine[0] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[0].anchor.set(0.5);
		WhiteLine[0].x = ( OriginalCanvasWidth/2 );
		WhiteLine[0].y = ( 43 );
		WhiteLine[0].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[0]);

		GhostRedPlusEyes[0] = new PIXI.Sprite(id["Ghost_Red1.png"]);
		GhostRedPlusEyes[0].anchor.set(0.5);
		GhostRedPlusEyes[0].x = ( 75 );
		GhostRedPlusEyes[0].y = ( 480/2 );
		GhostRedPlusEyes[0].scale.x = 4;
		GhostRedPlusEyes[0].scale.y = 4;
		stage.addChild(GhostRedPlusEyes[0]);
		GhostRedPlusEyes[1] = new PIXI.Sprite(id["Ghost_Eyes_RIGHT.png"]);
		GhostRedPlusEyes[1].anchor.set(0.5);
		GhostRedPlusEyes[1].x = ( 75 );
		GhostRedPlusEyes[1].y = ( 480/2 );
		GhostRedPlusEyes[1].scale.x = 4;
		GhostRedPlusEyes[1].scale.y = 4;
		stage.addChild(GhostRedPlusEyes[1]);
		
		PowerPellet = new PIXI.Sprite(id["Power_Pellet.png"]);
		PowerPellet.anchor.set(0.5);
		PowerPellet.x = ( OriginalCanvasWidth - 160 );
		PowerPellet.y = ( 480/2 );
		PowerPellet.scale.x = 4;
		PowerPellet.scale.y = 4;
		stage.addChild(PowerPellet);

		WhiteLine[1] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[1].anchor.set(0.5);
		WhiteLine[1].x = ( OriginalCanvasWidth/2 );
		WhiteLine[1].y = ( 430 );
		WhiteLine[1].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[1]);

		LoadPlayingGameSprites();
		
		PlaceTextOntoScreen(35, TextCenter, "How To Play Screen", 320, 17, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 3);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		NextScreenToDisplay = TitleScreen;

		ButtonSelectedByKeyboard = 6;
		AddButtonToScreen( 6, 455 );
		
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}

	PacDudeFrames[RIGHT][2].x = (OriginalCanvasWidth/2);
	PacDudeFrames[RIGHT][2].y = (480/2);
	PacDudeFrames[RIGHT][2].scale.x = 4;
	PacDudeFrames[RIGHT][2].scale.y = 4;
	
	if (ButtonPressed === 6)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = TitleScreen;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(titleBG);

		stage.removeChild(GhostRedPlusEyes[0]);
		stage.removeChild(GhostRedPlusEyes[1]);
		
		stage.removeChild(PowerPellet);
	
		var index;
		for (index = 0; index < 2; index++)
		{
			stage.removeChild(WhiteLine[index]);
		}

		UnloadPlayingGameSprites();
		
		DeleteAllButtonsOnScreen();
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function DisplayHighScoresScreen()
{
	var index;

	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		titleBG = new PIXI.Sprite(id["Arcade-Room-02.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		WhiteLine[0] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[0].anchor.set(0.5);
		WhiteLine[0].x = ( OriginalCanvasWidth/2 );
		WhiteLine[0].y = ( 43 );
		WhiteLine[0].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[0]);
		WhiteLine[1] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[1].anchor.set(0.5);
		WhiteLine[1].x = ( OriginalCanvasWidth/2 );
		WhiteLine[1].y = ( 430 );
		WhiteLine[1].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[1]);
		
		PlaceTextOntoScreen(35, TextCenter, "High Scores Screen", 320, 17, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 3);
		
		PlaceTextOntoScreen( 15, TextLeft, "NAME:", 5+30, 110, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
		PlaceTextOntoScreen( 15, TextLeft, "LEVEL:", 5+30+380, 110, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
		PlaceTextOntoScreen( 15, TextLeft, "SCORE:", 5+30+380+80, 110, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
		var screenY = 130;
		var offsetY = 31;
		for (index = 0; index < 10; index++)
		{		
			PlaceTextOntoScreen( 15, TextLeft, (index+1)+".", 5, screenY+(index*offsetY), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
			
			PlaceTextOntoScreen( 25, TextLeft, "''"+HighScoresName[GameMode][index]+"''", 5+30, screenY+(index*offsetY), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
			
			if (HighScoresLevel[GameMode][index] === 6)
			{
				PlaceTextOntoScreen( 25, TextLeft, "WON!", 5+30+380, screenY+(index*offsetY), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
			}
			else
			{
				PlaceTextOntoScreen( 25, TextLeft, HighScoresLevel[GameMode][index], 5+30+380, screenY+(index*offsetY), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
			}
				
			PlaceTextOntoScreen( 25, TextLeft, HighScoresScore[GameMode][index], 5+30+380+80, screenY+(index*offsetY), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3 );
		}
		
		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		AddArrowSetToScreen(0, 75);

		if (GameMode === VerySlowMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextCenter, "Very Slow Mode", 320, 75, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === SlowMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextCenter, "Slow Mode", 320, 75, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === NormalMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextCenter, "Normal Mode", 320, 75, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === FastMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextCenter, "Fast Mode", 320, 75, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		else if (GameMode === VeryFastMode)  OptionsTexts[2] = PlaceTextOntoScreen(25, TextCenter, "Turbo! Mode", 320, 75, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		NextScreenToDisplay = TitleScreen;

		ButtonSelectedByKeyboard = 6;
		AddButtonToScreen( 6, 455 );
		
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}
	
	if (ArrowPressed === -.5)
	{
		if (GameMode > 0)  GameMode--;
		else  GameMode = 4;
		
		NextScreenToDisplay = HighScoresScreen;
		ScreenFadeStatus = FadeOut;
	}
	else if (ArrowPressed === 0)
	{
		if (GameMode < 4)  GameMode++;
		else  GameMode = 0;
		
		NextScreenToDisplay = HighScoresScreen;
		ScreenFadeStatus = FadeOut;
	}
		
	if (ButtonPressed === 6)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = TitleScreen;
	}
	
	if (KeyboardCharacterPressed === "C")
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = HighScoresScreen;

		PlayEffect(EffectEatGhost);
		DelayAllUserInput = 20;
		
		InitializeHighScores();
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(titleBG);

		for (index = 0; index < 2; index++)
		{
			stage.removeChild(WhiteLine[index]);
		}
		
		DeleteAllArrowSetsOnScreen();
		DeleteAllButtonsOnScreen();
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function AddStaffLineToBuffer(blue, text)
{
	StaffBlue[StaffMaxIndex] = blue;
	var y = 0;
	
	if (StaffMaxIndex === 7)  y+=20
	else
	{
		if (StaffBlue[StaffMaxIndex] === 0 && StaffBlue[StaffMaxIndex-1] === 1)  y = 90;
		else if (StaffBlue[StaffMaxIndex] === 1 && StaffBlue[StaffMaxIndex-1] === 1)  y = 30;
		else  y = 30;
	}
	
	if (text === "''A 110% By Team www.16BitSoft.com!''")	y+=210;
	
	StaffTextY[StaffMaxIndex] = (StaffTextY[StaffMaxIndex-1]+=y);
	StaffTextTextIndex[StaffMaxIndex] = PlaceTextOntoScreen(25, TextCenter, text, 320, StaffTextY[StaffMaxIndex], 1, 1, StaffBlue[StaffMaxIndex], 1, 1, StaffBlue[StaffMaxIndex], 0, 0, 0, 1, 7);
	TextSprites[ StaffTextTextIndex[StaffMaxIndex] ].renderable = false;

	StaffMaxIndex+=1;
}

//--------------------------------------------------------------------------------------------------------------
function SetupAboutScreenTexts()
{
	StaffMaxIndex = 6;

	var screenY = 510;
	
	StaffMaxIndex++;
	StaffBlue[StaffMaxIndex] = 0;
	StaffTextY[StaffMaxIndex] = screenY;
	StaffTextTextIndex[StaffMaxIndex] = PlaceTextOntoScreen(15, TextRight, "TM", 135-8, StaffTextY[StaffMaxIndex], 1, 1, StaffBlue[StaffMaxIndex], 1, 1, StaffBlue[StaffMaxIndex], 0, 0, 0, 1, 7);

	StaffMaxIndex++;

	AddStaffLineToBuffer(0, "''PacDude Hero IV 110% Turbo''");
	AddStaffLineToBuffer(1, "©2020 By Team '''www.16BitSoft.com''");

	AddStaffLineToBuffer(0, "Original Concept By:");
	AddStaffLineToBuffer(1, "Namco®");

	AddStaffLineToBuffer(0, "WebGL/HTML5 Graphic Engine:");
	AddStaffLineToBuffer(1, "''PixiJSv5''");
	AddStaffLineToBuffer(1, "www.PixiJS.com");

	AddStaffLineToBuffer(0, "HTML5 Audio Engine:");
	AddStaffLineToBuffer(1, "''Howler.js''");
	AddStaffLineToBuffer(1, "www.HowlerJS.com");

	AddStaffLineToBuffer(0, "''1993 Mustang GT Cobra 5.0™'' 2-D Game Engine By:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Lead Game Designer:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Lead Game Programmer:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Lead Game Tester:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Lead Graphic Artist:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Lead Music Artist:");
	AddStaffLineToBuffer(1, "''D.J. Fading Twilight''");

	AddStaffLineToBuffer(0, "Sound Effects Compiled & Edited By:");
	AddStaffLineToBuffer(1, "''JeZxLee''");

	AddStaffLineToBuffer(0, "Support Game Designers/Programmers/Testers:");
	AddStaffLineToBuffer(1, "''Doatheman''");
	AddStaffLineToBuffer(1, "''mattmatteh''");

	AddStaffLineToBuffer(0, "PixiJS Version 4 To PixiJS Version 5 Conversion By:");
	AddStaffLineToBuffer(1, "''jonforum''");
	AddStaffLineToBuffer(1, "''bubamara''");

	AddStaffLineToBuffer(0, "Image Sprites Packed By:");
	AddStaffLineToBuffer(1, "''Texture Packer''");
	AddStaffLineToBuffer(1, "www.CodeAndWeb.com/TexturePacker");

	AddStaffLineToBuffer(0, "JavaScript Source Code Typed In:");
	AddStaffLineToBuffer(1, "''NotePad++''");
	AddStaffLineToBuffer(1, "www.Notepad-Plus-Plus.org");

	AddStaffLineToBuffer(0, "PNG Sprite Graphics Made In:");
	AddStaffLineToBuffer(1, "''NeoPaint''");
	AddStaffLineToBuffer(1, "www.NeoSoftware.com/NPW.html");

	AddStaffLineToBuffer(0, "Audio Edited In:");
	AddStaffLineToBuffer(1, "''GoldWave''");
	AddStaffLineToBuffer(1, "www.GoldWave.com");

	AddStaffLineToBuffer(0, "Game Made On A JeZxLee Pro-Built Desktop:");
	AddStaffLineToBuffer(1, "Desktop Code Name: ''JetFire''");
	AddStaffLineToBuffer(1, "Genuine ''openSUSE Tumbleweed KDE 64Bit'' Linux O.S.");
	AddStaffLineToBuffer(1, "VNC'ing Into A ''Windows 10 Pro 64Bit'' Desktop");

	AddStaffLineToBuffer(0, "Support Game Programmers:");
	AddStaffLineToBuffer(1, "''alex_h''");
	AddStaffLineToBuffer(1, "''Jinz''");
	AddStaffLineToBuffer(1, "''bubamara''");
	AddStaffLineToBuffer(1, "''ivan.popelyshev''");
	AddStaffLineToBuffer(1, "''themoonrat''");
	AddStaffLineToBuffer(1, "''mattstyles''");
	AddStaffLineToBuffer(1, "''xerver''");
	AddStaffLineToBuffer(1, "''zap0''");
	AddStaffLineToBuffer(1, "''ArRay_''");
	AddStaffLineToBuffer(1, "''jonforum''");
	AddStaffLineToBuffer(1, "''LunarJetman''");
	AddStaffLineToBuffer(1, "''EvanR''");
	AddStaffLineToBuffer(1, "''alex_h''");
	AddStaffLineToBuffer(1, "''MrFlibble''");
	AddStaffLineToBuffer(1, "''Nesh108''");
	AddStaffLineToBuffer(1, "''magig''");
	AddStaffLineToBuffer(1, "''heraclitus_''");
	AddStaffLineToBuffer(1, "''Exca''");
	AddStaffLineToBuffer(1, "''Umz''");
	AddStaffLineToBuffer(1, "''bmarotta''");

	AddStaffLineToBuffer(0, "Support Game Testers:");
	AddStaffLineToBuffer(1, "''Mekka23''");
	AddStaffLineToBuffer(1, "''patwotrik''");
	AddStaffLineToBuffer(1, "''MarioMario456GD''");
	AddStaffLineToBuffer(1, "''i0Vi''");
	AddStaffLineToBuffer(1, "''You!''");

	AddStaffLineToBuffer(0, "Special Thanks To:");
	AddStaffLineToBuffer(1, "''www.Itch.io''");
	AddStaffLineToBuffer(1, "For Internet Publishing");

	AddStaffLineToBuffer(0, "''A 110% By Team www.16BitSoft.com!''");

	StaffMaxIndex-=1;

	var index;
	for ( index = 7; index < (StaffMaxIndex+1); index++ )
	{
		StaffTextIsOff[index] = true;
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayAboutScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		if (Level === 6)
		{
			titleBG = new PIXI.Sprite(id["Warehouse_Sunrise.png"]);
			titleBG.anchor.set(0.5);
			titleBG.x = ( OriginalCanvasWidth/2 );
			titleBG.y = ( 480/2 );
			stage.addChild(titleBG);
		
			EndPacDude = new PIXI.Sprite(id["PacDude_Right.png"]);
			EndPacDude.anchor.set(0.5);
			EndPacDude.x = ( 460 );
			EndPacDude.y = ( 240 );
			stage.addChild(EndPacDude);
		
			EndMsPacDude = new PIXI.Sprite(id["MsPacDude.png"]);
			EndMsPacDude.anchor.set(0.5);
			EndMsPacDude.x = ( 210 );
			EndMsPacDude.y = ( 260 );
			stage.addChild(EndMsPacDude);
		
			EndPowerPellet = new PIXI.Sprite(id["Power_Pellet.png"]);
			EndPowerPellet.anchor.set(0.5);
			EndPowerPellet.x = ( 62 );
			EndPowerPellet.y = ( 93 );
			EndPowerPellet.scale.x = 1.6;
			EndPowerPellet.scale.y = 1.6;
			stage.addChild(EndPowerPellet);
		}
		else
		{
			titleBG = new PIXI.Sprite(id["Arcade-Room-02.png"]);
			titleBG.anchor.set(0.5);
			titleBG.x = ( OriginalCanvasWidth/2 );
			titleBG.y = ( 480/2 );
			stage.addChild(titleBG);
		}
			
		SetupAboutScreenTexts();

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		NextScreenToDisplay = TitleScreen;
	
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
	}

	var frameSkip = ( (1000/FrameRate) / FPS );
	
	var originalX;
	var originalY;
	var index;
	for ( index = 7; index < (1+StaffMaxIndex); index++ )
	{
		originalY = TextSprites[index].position.y;
		if (  ( originalY < - 30 || originalY > (480+30) ) && StaffTextIsOff[index] === false  )
		{
			TextSprites[ StaffTextTextIndex[index] ].renderable = false;
			StaffTextIsOff[index] = true;
		}
		else if (StaffTextIsOff[index] === true) 
		{	
			TextSprites[ StaffTextTextIndex[index] ].renderable = true;
			StaffTextIsOff[index] = false;
		}

		originalX = TextSprites[index].position.x;

		originalY-=frameSkip;
		TextSprites[index].position.set(originalX, originalY);
	}
	
	originalY = TextSprites[StaffMaxIndex].position.y;
	if ( (originalY < -30 || KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = TitleScreen;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(titleBG);

		if (Level === 6)
		{
			stage.removeChild(EndPacDude);
			stage.removeChild(EndMsPacDude);
			stage.removeChild(EndPowerPellet);
			
			if (GameJustPlayed === true)
			{
				if (NewHighScoreRank < 10)  NextScreenToDisplay = NewHighScoreNameInputScreen;
				else  NextScreenToDisplay = HighScoresScreen;
				
				GameJustPlayed = false;
			}
		}
		
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function PutAllSpritesOffScreen()
{
	var index;

	for (index = 0; index < 6; index++)
	{
		PacDudeFrames[UP][index].x = ( OriginalCanvasWidth/2 );
		PacDudeFrames[UP][index].y = ( 480+700 );
	}
	for (index = 0; index < 6; index++)
	{
		PacDudeFrames[DOWN][index].x = ( OriginalCanvasWidth/2 );
		PacDudeFrames[DOWN][index].y = ( 480+700 );
	}
	for (index = 0; index < 6; index++)
	{
		PacDudeFrames[LEFT][index].x = ( OriginalCanvasWidth/2 );
		PacDudeFrames[LEFT][index].y = ( 480+700 );
	}
	for (index = 0; index < 6; index++)
	{
		PacDudeFrames[RIGHT][index].x = ( OriginalCanvasWidth/2 );
		PacDudeFrames[RIGHT][index].y = ( 480+700 );
	}	
	
	for (index = 0; index < 200; index++)
	{
		Legos[index].x = ( 9999 );
		Legos[index].y = ( 9999 );
	}
	
	for (index = 0; index < 200; index++)
	{
		Pellets[index].x = ( 9999 );
		Pellets[index].y = ( 9999 );
	}

	for (index = 0; index < 4; index++)
	{
		PowerPellets[index][0].x = ( 9999 );
		PowerPellets[index][0].y = ( 9999 );
		
		PowerPellets[index][1].x = ( 9999 );
		PowerPellets[index][1].y = ( 9999 );
	}	
	
	for (index = 0; index < 8; index++)
	{
		Ghosts[index][0].x = ( 9999 );
		Ghosts[index][0].y = ( 9999 );
		
		Ghosts[index][1].x = ( 9999 );
		Ghosts[index][1].y = ( 9999 );
	}

	for (index = 0; index < 8; index++)
	{
		GhostsEyes[index][1].x = ( 9999 );
		GhostsEyes[index][1].y = ( 9999 );

		GhostsEyes[index][2].x = ( 9999 );
		GhostsEyes[index][2].y = ( 9999 );

		GhostsEyes[index][3].x = ( 9999 );
		GhostsEyes[index][3].y = ( 9999 );

		GhostsEyes[index][4].x = ( 9999 );
		GhostsEyes[index][4].y = ( 9999 );
	}
}

//--------------------------------------------------------------------------------------------------------------
function DisplayPlayingGameScreen()
{
	var index;

	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		SetFrameRate();
		
		for (index = 0; index < 200; index++)
		{
			Legos[index] = new PIXI.Sprite(id["BoundaryLEGO.png"]);
			Legos[index].anchor.set(0.5);
			Legos[index].x = ( 9999 );
			Legos[index].y = ( 9999 );
			stage.addChild(Legos[index]);
		}

		for (index = 0; index < 200; index++)
		{
			Pellets[index] = new PIXI.Sprite(id["Pellet.png"]);
			Pellets[index].anchor.set(0.5);
			Pellets[index].x = ( 9999 );
			Pellets[index].y = ( 9999 );
			stage.addChild(Pellets[index]);
		}

		for (index = 0; index < 4; index++)
		{
			PowerPellets[index][0] = new PIXI.Sprite(id["Pellet.png"]);
			PowerPellets[index][0].anchor.set(0.5);
			PowerPellets[index][0].x = ( 9999 );
			PowerPellets[index][0].y = ( 9999 );
			stage.addChild(PowerPellets[index][0]);
			
			PowerPellets[index][1] = new PIXI.Sprite(id["Power_Pellet.png"]);
			PowerPellets[index][1].anchor.set(0.5);
			PowerPellets[index][1].x = ( 9999 );
			PowerPellets[index][1].y = ( 9999 );
			stage.addChild(PowerPellets[index][1]);
		}
				
		LoadPlayingGameSprites();
		
		if (Level === -1)  SetupForNewGame();
		else if (LevelStatus === LevelCleared)
		{
			SetupNextLevel(true);
		}
		else  SetupNextLevel(false);

		if (Level === 1)  renderer.backgroundColor = PIXI.utils.rgb2hex([.1, .1, .1]);
		else if (Level === 2)  renderer.backgroundColor = PIXI.utils.rgb2hex([.25, .25, .25]);
		else if (Level === 3)  renderer.backgroundColor = PIXI.utils.rgb2hex([.5, .5, .5]);
		else if (Level === 4)  renderer.backgroundColor = PIXI.utils.rgb2hex([.75, .75, .75]);
		else if (Level === 5)  renderer.backgroundColor = PIXI.utils.rgb2hex([.9, .9, .9]);
		
		TimerText = PlaceTextOntoScreen(25, TextCenter, " ", 320, 480-55, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 7);

		ScoreText = PlaceTextOntoScreen(25, TextCenter, " ", 320, 30+35, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 7);
		
		LivesChararacter.x = ( OriginalCanvasWidth-70-40 );
		LivesChararacter.y = ( 30+35 );
		LivesText = PlaceTextOntoScreen(25, TextRight, " ", 30+40, 30+35, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 7);

		LevelText = PlaceTextOntoScreen(25, TextLeft, " ", 50+40, 30+35, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 7);
		
		NextScreenToDisplay = PlayingGameScreen;
		
		ReadyText = PlaceTextOntoScreen( 25, TextCenter, "READY!", 320, (480/2), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 7 );

		PauseBG = new PIXI.Sprite(id["Screen-Fade-Black-Box.png"]);
		PauseBG.anchor.set(0.5);
		PauseBG.alpha = 0;
		PauseBG.x = ( OriginalCanvasWidth/2 );
		PauseBG.y = ( 480/2 );
		stage.addChild(PauseBG);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		PauseText = PlaceTextOntoScreen( 70, TextCenter, " ", 320, (480/2), 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 7 );

		if (isMobile === true)
		{
			PauseIcon[0] = new PIXI.Sprite(id["Pause.png"]);
			PauseIcon[0].anchor.set(0.5);
			PauseIcon[0].alpha = .75;
			PauseIcon[0].x = ( 85 );
			PauseIcon[0].y = ( 480-85 );
			PauseIcon[0].scale.x = 1;
			PauseIcon[0].scale.y = 1;
			PauseIcon[0].interactive = true;
			PauseIcon[0].buttonMode = true;
			stage.addChild(PauseIcon[0]);
			PauseIcon[0].on( 'pointerdown', onClickOnPause );

			PauseIcon[1] = new PIXI.Sprite(id["Play.png"]);
			PauseIcon[1].anchor.set(0.5);
			PauseIcon[1].alpha = .75;
			PauseIcon[1].x = ( 85 );
			PauseIcon[1].y = ( 480-85+9999 );
			PauseIcon[1].scale.x = 1;
			PauseIcon[1].scale.y = 1;
			PauseIcon[1].interactive = true;
			PauseIcon[1].buttonMode = true;
			stage.addChild(PauseIcon[1]);
			PauseIcon[1].on( 'pointerdown', onClickOnUnPause );
		}
				
		if (isMobile === true && SecretCodeTotal === 4666)
		{
			PauseIcon[2] = new PIXI.Sprite(id["UP-Button.png"]);
			PauseIcon[2].anchor.set(0.5);
			PauseIcon[2].x = ( 70 );
			PauseIcon[2].y = ( 480/2 );
			PauseIcon[2].scale.x = 1;
			PauseIcon[2].scale.y = 1;
			PauseIcon[2].interactive = true;
			PauseIcon[2].buttonMode = true;
			PauseIcon[2].alpha = .1;
			stage.addChild(PauseIcon[2]);
			PauseIcon[2].on( 'pointerdown', onClickOnLevelSkip );
		}
			
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}
	
	if (isMobile === true)
	{
		if (PauseIcon[0].scale.x < .99)
		{
			PauseIcon[0].scale.x+=.01;
			PauseIcon[0].scale.y+=.01;
		}	
		else if (PauseIcon[0].scale.x < 1)
		{	
			PauseIcon[0].scale.x = 1;
			PauseIcon[0].scale.y = 1;

			PauseIcon[0].x = ( 85 );
			PauseIcon[0].y = ( 480-85+9999 );

			PauseIcon[1].x = ( 85 );
			PauseIcon[1].y = ( 480-85 );
		}
		
		if (PauseIcon[1].scale.x < .99)
		{
			PauseIcon[1].scale.x+=.01;
			PauseIcon[1].scale.y+=.01;
		}	
		else if (PauseIcon[1].scale.x < 1)
		{	
			PauseIcon[1].scale.x = 1;
			PauseIcon[1].scale.y = 1;

			PauseIcon[1].x = ( 85 );
			PauseIcon[1].y = ( 480-85+9999 );

			PauseIcon[0].x = ( 85 );
			PauseIcon[0].y = ( 480-85 );
		}
	}
	
	if (ReadyTimer === 1)  TextSprites[ReadyText].text = " ";
	
	if (ScoreText !== null)  TextSprites[ScoreText].text = Score;
	
	var LivesTextAll;
	LivesTextAll = "= "+Lives;
	if (LivesText !== null)  TextSprites[LivesText].text = LivesTextAll;
	
	var LevelTextAll;
	LevelTextAll = Level+ " Of 5";
	if (LevelText !== null)  TextSprites[LevelText].text = LevelTextAll;
	
	var	TimeText;
	if (SecondsLeft > 9)  TimeText = ""+MinutesLeft+":"+SecondsLeft;
	else  TimeText = ""+MinutesLeft+":0"+SecondsLeft;
	
	if (TimerText !== null)  TextSprites[TimerText].text = TimeText;
	
	if (ScreenFadeStatus === FadeNone && GameOver === 0 && LevelStatus === LevelNotCleared)  RunGameplayCore();
		
	PutAllSpritesOffScreen();
	
	if (SecretCodeTotal === 4777)
	{
		for (index = 0; index < 1000; index++)
		{
			DebugGhostDir[index][UP].y = ( -9999 );

			DebugGhostDir[index][DOWN].y = ( -9999 );

			DebugGhostDir[index][LEFT].y = ( -9999 );

			DebugGhostDir[index][RIGHT].y = ( -9999 );

			DebugGhostDir[index][5].y = ( -9999 );
		}	
	}
		
    var playfieldX;
    var playfieldY;
    var tileScreenY = 0 - 80 - PlayerYInBetweenTiles;
    var tileScreenX = 0 - 64 - PlayerXInBetweenTiles;
	
    var startYindex = PlayerPlayfieldY - 5;
    var startXindex = PlayerPlayfieldX - 6;

	var indexLego = 0;
	var indexPellet = 0;
	var indexPowerPellet = 0;
	
	var indexDebugDir = 0;
	
    for (playfieldY = startYindex; playfieldY < startYindex+11; playfieldY++)
    {
        for (playfieldX = startXindex; playfieldX < startXindex+13; playfieldX++)
        {
            if ( (playfieldX > -1 && playfieldX < 27)&&(playfieldY > -1 && playfieldY < 27) )
            {
                if (MapBoard[Level][playfieldX][playfieldY] === 0)
                {
					Legos[indexLego].x = ( tileScreenX );
					Legos[indexLego].y = ( tileScreenY );
	
					indexLego++;
				}
                else if (MapBoard[Level][playfieldX][playfieldY] === 1)
                {
					Pellets[indexPellet].x = ( tileScreenX );
					Pellets[indexPellet].y = ( tileScreenY );
	
					indexPellet++;
				}
                else if (MapBoard[Level][playfieldX][playfieldY] === 2)
                {
					var powerPelletFrame = 0;
					if (PowerPelletAnimationTimer > 1)  powerPelletFrame = 1;
					
					PowerPellets[indexPowerPellet][powerPelletFrame].x = ( tileScreenX );
					PowerPellets[indexPowerPellet][powerPelletFrame].y = ( tileScreenY );
	
					indexPowerPellet++;
				}
				
				if (SecretCodeTotal === 4777)
				{
					if (MapReturn[Level][playfieldY][playfieldX] === UP && MapReturn[Level][playfieldX][playfieldY] !== 0)
					{
						DebugGhostDir[indexDebugDir][UP].x = ( tileScreenX );
						DebugGhostDir[indexDebugDir][UP].y = ( tileScreenY );
						
						indexDebugDir++;
					}
					else if (MapReturn[Level][playfieldY][playfieldX] === DOWN && MapReturn[Level][playfieldX][playfieldY] !== 0)
					{
						DebugGhostDir[indexDebugDir][DOWN].x = ( tileScreenX );
						DebugGhostDir[indexDebugDir][DOWN].y = ( tileScreenY );

						indexDebugDir++;
					}
					else if (MapReturn[Level][playfieldY][playfieldX] === LEFT && MapReturn[Level][playfieldX][playfieldY] !== 0)
					{
						DebugGhostDir[indexDebugDir][LEFT].x = ( tileScreenX );
						DebugGhostDir[indexDebugDir][LEFT].y = ( tileScreenY );

						indexDebugDir++;
					}
					else if (MapReturn[Level][playfieldY][playfieldX] === RIGHT && MapReturn[Level][playfieldX][playfieldY] !== 0)
					{
						DebugGhostDir[indexDebugDir][RIGHT].x = ( tileScreenX );
						DebugGhostDir[indexDebugDir][RIGHT].y = ( tileScreenY );

						indexDebugDir++;
					}
					else if (MapReturn[Level][playfieldY][playfieldX] !== 0)
					{
						DebugGhostDir[indexDebugDir][5].x = ( tileScreenX );
						DebugGhostDir[indexDebugDir][5].y = ( tileScreenY );

						indexDebugDir++;
					}
				}
			}
		
			var ghost;
			for (ghost = 0; ghost < 8; ghost++)
			{
				if (GhostActive[ghost] === true)
				{
					if (GhostPlayfieldX[ghost] === playfieldX && GhostPlayfieldY[ghost] === playfieldY)
					{
						if (GhostStatus[ghost] === Attack)
						{
							if (GhostAnimationFrame === 0)
							{
								Ghosts[ghost][0].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][0].y = tileScreenY+GhostYInBetweenTiles[ghost];
								Ghosts[ghost][1].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][1].y = -9999;
							}
							else
							{
								Ghosts[ghost][1].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][1].y = tileScreenY+GhostYInBetweenTiles[ghost];
								Ghosts[ghost][0].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][0].y = -9999;
							}
						}
						else if (GhostStatus[ghost] === Scared)
						{
							if (GhostAnimationFrame === 0)
							{
								Ghosts[ghost][2].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][2].y = tileScreenY+GhostYInBetweenTiles[ghost];
								Ghosts[ghost][3].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][3].y = -9999;
							}
							else if (PowerPelletEatTimer > 50)
							{
								Ghosts[ghost][3].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][3].y = tileScreenY+GhostYInBetweenTiles[ghost];
								Ghosts[ghost][2].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][2].y = -9999;
							}
							else
							{
								Ghosts[ghost][1].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][1].y = tileScreenY+GhostYInBetweenTiles[ghost];
								Ghosts[ghost][2].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][2].y = -9999;
								Ghosts[ghost][3].x = tileScreenX+GhostXInBetweenTiles[ghost];
								Ghosts[ghost][3].y = -9999;
							}
						}
						
						GhostsEyes[ghost][ GhostDirection[ghost] ].x = tileScreenX+GhostXInBetweenTiles[ghost];
						GhostsEyes[ghost][ GhostDirection[ghost] ].y = tileScreenY+GhostYInBetweenTiles[ghost];
					}
				}
			}
			
			tileScreenX+=64;
		}
		
        tileScreenX = 0 - 64 - PlayerXInBetweenTiles;
        tileScreenY+=64;
	}
		
	var framePacDude;
	if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)  framePacDude = 2;
	else if (PlayerYInBetweenTiles === -8)  framePacDude = 2;
	else if (PlayerYInBetweenTiles === -16)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === -24)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === -32)  framePacDude = 0;
	else if (PlayerYInBetweenTiles === -40)  framePacDude = 0;
	else if (PlayerYInBetweenTiles === -48)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === -56)  framePacDude = 1;

	else if (PlayerYInBetweenTiles === 8)  framePacDude = 2;
	else if (PlayerYInBetweenTiles === 16)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === 24)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === 32)  framePacDude = 0;
	else if (PlayerYInBetweenTiles === 40)  framePacDude = 0;
	else if (PlayerYInBetweenTiles === 48)  framePacDude = 1;
	else if (PlayerYInBetweenTiles === 56)  framePacDude = 1;

	else if (PlayerXInBetweenTiles === -8)  framePacDude = 2;
	else if (PlayerXInBetweenTiles === -16)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === -24)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === -32)  framePacDude = 0;
	else if (PlayerXInBetweenTiles === -40)  framePacDude = 0;
	else if (PlayerXInBetweenTiles === -48)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === -56)  framePacDude = 1;

	else if (PlayerXInBetweenTiles === 8)  framePacDude = 2;
	else if (PlayerXInBetweenTiles === 16)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === 24)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === 32)  framePacDude = 0;
	else if (PlayerXInBetweenTiles === 40)  framePacDude = 0;
	else if (PlayerXInBetweenTiles === 48)  framePacDude = 1;
	else if (PlayerXInBetweenTiles === 56)  framePacDude = 1;
	
	PacDudeFrames[PlayerDirection][framePacDude].x = ( 320 );
	PacDudeFrames[PlayerDirection][framePacDude].y = ( 240 );
	
	if (PacDudePowerUp[UP].alpha > 0)
	{
		PacDudePowerUp[UP].alpha-=.07;
		PacDudePowerUp[UP].scale.x+=.25;
		PacDudePowerUp[UP].scale.y+=.25;
	}
	
	if (PacDudePowerUp[DOWN].alpha > 0)
	{
		PacDudePowerUp[DOWN].alpha-=.07;
		PacDudePowerUp[DOWN].scale.x+=.25;
		PacDudePowerUp[DOWN].scale.y+=.25;
	}
	
	if (PacDudePowerUp[LEFT].alpha > 0)
	{
		PacDudePowerUp[LEFT].alpha-=.07;
		PacDudePowerUp[LEFT].scale.x+=.25;
		PacDudePowerUp[LEFT].scale.y+=.25;
	}
	
	if (PacDudePowerUp[RIGHT].alpha > 0)
	{
		PacDudePowerUp[RIGHT].alpha-=.07;
		PacDudePowerUp[RIGHT].scale.x+=.25;
		PacDudePowerUp[RIGHT].scale.y+=.25;
	}

	if (PlayerDied === true)
	{
		if (PlayerScale > 0)
		{
			PlayerScale-=.025;
			PacDudeFrames[PlayerDirection][framePacDude].scale.x = PlayerScale;
			PacDudeFrames[PlayerDirection][framePacDude].scale.y = PlayerScale;
		}
		else
		{
			if (PlayerDied === true)
			{
				if (Lives > 0)
				{
					Lives--;
					
					ScreenFadeStatus = FadeOut;
				}
				else
				{
					PlayEffect(EffectGameOver);
					GameOver = 250;
					Lives = 0;
				}
				
				PlayerDied = false;
			}
		}
	}
	
	if (GameOver > 1)
	{
		if (GameOver === 250)  PlaceTextOntoScreen( 60, TextCenter, "GAME OVER!", 320, (480/2), 1, 0, 0, .75, 0, 0, 0, 0, 0, 1, 7 );

		GameOver--;
	}
	else if (GameOver === 1)
	{
		GameOver = 1;
		
		NextScreenToDisplay = HighScoresScreen;
		ScreenFadeStatus = FadeOut;	
	}
	
	if (ScreenFadeStatus === FadeNone && SecretCodeTotal !== 4666)
	{
		if (PAUSEgame === true)
		{
			PauseBG.alpha = .75;
			TextSprites[PauseText].text = "P A U S E D";
		}
		else if (PAUSEgame === false)
		{
			PauseBG.alpha = 0;
			TextSprites[PauseText].text = " ";
		}
	}	
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		if (EffectsHowler[EffectGhostsScared] !== null)  EffectsHowler[EffectGhostsScared].stop();
		
		FrameRate = 19;
		
		UnloadPlayingGameSprites();

		PowerPelletEatTimer = 0;

		if (GameOver === 1 || Level === 6)  CheckForNewHighScores();
		
		if (GameOver === 1)
		{
			if (NewHighScoreRank === 0)
			{
				NextScreenToDisplay = NewHighScoreNameInputScreen;
				PlayMusic("BGM-NewHighScoreOne");
			}
			else if (NewHighScoreRank > 0 && NewHighScoreRank < 10)
			{
				NextScreenToDisplay = NewHighScoreNameInputScreen;
				PlayMusic("BGM-NewHighScoreTwo");
			}
			else
			{
				NextScreenToDisplay = HighScoresScreen;
				PlayMusic("BGM-Title");
			}
		}
		else if (Level === 6)
		{
			NextScreenToDisplay = EndingScreen;
		}		
		
		for (index = 0; index < 600; index++)
		{
			stage.removeChild(Legos[index]);
		}

		for (index = 0; index < 600; index++)
		{
			stage.removeChild(Pellets[index]);
		}

		for (index = 0; index < 4; index++)
		{
			stage.removeChild(PowerPellets[index][0]);
			
			stage.removeChild(PowerPellets[index][1]);
		}		

		stage.removeChild(TVScreen);
		
		stage.removeChild(PauseBG);
		
		if (isMobile === true)
		{
			stage.removeChild(PauseIcon[0]);
			stage.removeChild(PauseIcon[1]);
			if (SecretCodeTotal === 4666)  stage.removeChild(PauseIcon[2]);
		}
	
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
		
		renderer.backgroundColor = PIXI.utils.rgb2hex([0, 0, 0]);
	}
}	

//--------------------------------------------------------------------------------------------------------------
function DisplayIntroScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		if (CurrentMusicPlaying !== -1)  MusicHowler[CurrentMusicPlaying].stop();
		
		titleBG = new PIXI.Sprite(id["Supermarket.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		GhostRedPlusEyesIntro[0] = new PIXI.Sprite(id["Ghost_Character.png"]);
		GhostRedPlusEyesIntro[0].anchor.set(0.5);
		GhostRedPlusEyesIntro[0].x = ( 840 );
		GhostRedPlusEyesIntro[0].y = ( 290 );
		GhostRedPlusEyesIntro[0].tint = PIXI.utils.rgb2hex([1, 0, 0]);
		stage.addChild(GhostRedPlusEyesIntro[0]);
		
		MsPacDude = new PIXI.Sprite(id["MsPacDude.png"]);
		MsPacDude.anchor.set(0.5);
		MsPacDude.x = ( 320 );
		MsPacDude.y = ( 290 );
		stage.addChild(MsPacDude);

		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		NextScreenToDisplay = PlayingGameScreen;
		
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
	}

	var frameSkip = ( (1000/FrameRate) / FPS );

    if (GhostRedPlusEyesIntro[0].x > 470)
    {
        GhostRedPlusEyesIntro[0].x-=(2*frameSkip);
    }
    else if (GhostRedPlusEyesIntro[0].x > 468)
    {
        GhostRedPlusEyesIntro[0].x = 468;
        PlayEffect(13);
    }
    else if(GhostRedPlusEyesIntro[0].x > -200)
    {
        MsPacDude.x-=(5*frameSkip);
        GhostRedPlusEyesIntro[0].x-=(5*frameSkip);
    }
    else
    {
        ScreenFadeStatus = FadeOut;
    }

	if ( (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		Level = -1;
		
		PlayMusic("BGM-Stage1");
		
		PlayEffect(EffectStart);
		
		stage.removeChild(titleBG);
		stage.removeChild(MsPacDude);
		stage.removeChild(GhostRedPlusEyesIntro[0]);

		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function DisplayEndingScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		PlayMusic("BGM-EndingTwo");		
		
		titleBG = new PIXI.Sprite(id["Warehouse.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);
	
		EndPacDude = new PIXI.Sprite(id["PacDude_Right.png"]);
		EndPacDude.anchor.set(0.5);
		EndPacDude.x = ( 320 );
		EndPacDude.y = ( 300 );
		EndPacDude.scale.x = 0;
		EndPacDude.scale.y = 0;
		stage.addChild(EndPacDude);
			
		EndGhost = new PIXI.Sprite(id["Ghost_Character2.png"]);
		EndGhost.anchor.set(0.5);
		EndGhost.x = ( 320 );
		EndGhost.y = ( 300 );
		EndGhost.scale.x = 0;
		EndGhost.scale.y = 0;
		EndGhost.tint = PIXI.utils.rgb2hex([1, 0, 0]);
		stage.addChild(EndGhost);
		
		EndingSceneAnimationFrame = 0;
		
		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);
		
		NextScreenToDisplay = AboutScreen;
		
		LoadScreenFade();
		EnableScreenFadeClick();
		ScreenChanged = false;
	}

    if (EndingSceneAnimationFrame === 0)
    {
		EndGhost.scale.x+=.005;
		EndGhost.scale.y+=.005;

        if (EndGhost.scale.x > 1)
        {
            PlayEffect(EffectGhostScream);

			EndGhost.tint = PIXI.utils.rgb2hex([1, 1, 1]);

			PlayEffect(EffectEatPellet);
			
            EndingSceneAnimationFrame++;
        }
    }
    else if (EndingSceneAnimationFrame === 1)
    {
        EndPacDude.scale.x+=.0095;
        EndPacDude.scale.y+=.0095;

        EndGhost.y+=5;

        if (EndPacDude.scale.x > 2)
        {
            PlayEffect(EffectEatGhost);

            EndingSceneAnimationFrame++;
            ScreenFadeStatus = FadeOut;
        }
    }
	
	if ( (KeyboardCharacterPressed === "/" || KeyboardCharacterPressed === " " || JoystickButtonOne === ON) && ScreenFadeStatus === FadeNone )
	{
		DelayAllUserInput = 20;
		ScreenFadeStatus = FadeOut;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		stage.removeChild(titleBG);

		stage.removeChild(EndGhost);
		stage.removeChild(EndPacDude);
		
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	

//--------------------------------------------------------------------------------------------------------------
function DisplayNewHighScoreNameInputScreen()
{
	if (ScreenFadeStatus === FadeIn && ScreenChanged === true)
	{
		titleBG = new PIXI.Sprite(id["Arcade-Room-02.png"]);
		titleBG.anchor.set(0.5);
		titleBG.x = ( OriginalCanvasWidth/2 );
		titleBG.y = ( 480/2 );
		stage.addChild(titleBG);

		WhiteLine[0] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[0].anchor.set(0.5);
		WhiteLine[0].x = ( OriginalCanvasWidth/2 );
		WhiteLine[0].y = ( 43 );
		WhiteLine[0].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[0]);
		WhiteLine[1] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[1].anchor.set(0.5);
		WhiteLine[1].x = ( OriginalCanvasWidth/2 );
		WhiteLine[1].y = ( 430 );
		WhiteLine[1].tint = PIXI.utils.rgb2hex([1, 1, 0]);
		stage.addChild(WhiteLine[1]);
		
		PlaceTextOntoScreen(35, TextCenter, "New High Score Screen", 320, 17, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 3);
		
		FPSmessage = PlaceTextOntoScreen(15, TextRight, "FPS=", 19, 10, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		PlaceTextOntoScreen(25, TextCenter, "You Achieved A New High Score, Enter Your Name!", 320, 70, 1, 1, 1, .75, .75, .75, 0, 0, 0, 1, 3);

		NewHighScoreNameText = PlaceTextOntoScreen(40, TextCenter, " ", 320, 110, 1, 1, 0, .75, .75, 0, 0, 0, 0, 1, 3);

		NewHighScoreNameIndex = 0;
		NewHighScoreTempName = "";

		WhiteLine[2] = new PIXI.Sprite(id["WhiteLine.png"]);
		WhiteLine[2].anchor.set(0.5);
		WhiteLine[2].x = ( OriginalCanvasWidth/2 );
		WhiteLine[2].y = ( 145 );
		WhiteLine[2].tint = PIXI.utils.rgb2hex([1, 1, 1]);
		stage.addChild(WhiteLine[2]);
		
		NextScreenToDisplay = HighScoresScreen;

		var buttonIndex = 0;
		var charX = 33;
		var offsetX = 48;
		var charY = 185;
		var offsetY = 49;
		for (var indexY = 0; indexY < 5; indexY++)
		{
			for (var indexX = 0; indexX < 13; indexX++)
			{
				if (indexY === 0)
				{
					AddCharButtonToScreen( buttonIndex, String.fromCharCode(65+indexX), charX, charY );
				}
				else if (indexY === 1)
				{
					AddCharButtonToScreen(   buttonIndex, String.fromCharCode(  65+indexX+( 13*(indexY) )  ), charX, charY  );
				}
				else if (indexY === 2)
				{
					AddCharButtonToScreen( buttonIndex, String.fromCharCode(97+indexX), charX, charY );
				}
				else if (indexY === 3)
				{
					AddCharButtonToScreen(   buttonIndex, String.fromCharCode(  97+indexX+( 13*(1) )  ), charX, charY  );
				}
				else if (indexY === 4)
				{
					if (indexX < 10)  AddCharButtonToScreen(  buttonIndex, String.fromCharCode(48+indexX), charX, charY );
					else if (indexX === 10)  AddCharButtonToScreen(  buttonIndex, "_", charX, charY );
					else if (indexX === 11)  AddCharButtonToScreen(  buttonIndex, "+", charX, charY );
					else if (indexX === 12)  AddCharButtonToScreen(  buttonIndex, "Back", charX, charY );
				}
			
				charX = (  33 + ( (indexX+1)*offsetX )  );
				
				buttonIndex++;
			}

			charX = 33;
			charY = (  185 + ( (indexY+1)*offsetY )  );
		}
		
		ButtonSelectedByKeyboard = 5;
		AddButtonToScreen( 5, 455 );
	
		LoadScreenFade();
		DisableScreenFadeClick();
		ScreenChanged = false;
	}

	for (index = 0; index < 65; index++)
	{
		if (CharButton[index].scale.x < 1)
		{
			CharButton[index].scale.x+=.01;
			CharButton[index].scale.y+=.01;
			
			TextSprites[ CharButtonText[index] ].scale.x+=.01;
			TextSprites[ CharButtonText[index] ].scale.y+=.01;
		}
	}
		
	TextSprites[NewHighScoreNameText].text = NewHighScoreTempName;
	
	var charIndex;
	for (charIndex = 65; charIndex < 91; charIndex++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndex) )
		{
			onClickCharAll();
			
			NewHighScoreTempName += String.fromCharCode(charIndex);
			if (NewHighScoreNameIndex < 20)  NewHighScoreNameIndex++;
			
			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
	}
	for (charIndex = 97; charIndex < 123; charIndex++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndex) )
		{
			onClickCharAll();

			NewHighScoreTempName += String.fromCharCode(charIndex);
			if (NewHighScoreNameIndex < 20)  NewHighScoreNameIndex++;
			
			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
	}
	for (charIndex = 48; charIndex < 58; charIndex++)
	{
		if ( KeyboardCharacterPressed === String.fromCharCode(charIndex) )
		{
			onClickCharAll();

			NewHighScoreTempName += String.fromCharCode(charIndex);
			if (NewHighScoreNameIndex < 20)  NewHighScoreNameIndex++;
			
			PlayEffect(EffectMenuMove);
			DelayAllUserInput = 10;
		}
	}
		
	if ( KeyboardCharacterPressed === String.fromCharCode(32) )
	{
		if (KeyboardCharacterPressed === " ")  onClickCharAll();
		
		NewHighScoreTempName += " ";
		if (NewHighScoreNameIndex < 20)  NewHighScoreNameIndex++;
		
		PlayEffect(EffectMenuMove);
		DelayAllUserInput = 10;
	}
		
	if ( KeyboardCharacterPressed === String.fromCharCode(43) )
	{
		if (KeyboardCharacterPressed === "+")  onClickCharAll();
		
		NewHighScoreTempName += "+";
		if (NewHighScoreNameIndex < 20)  NewHighScoreNameIndex++;
		
		PlayEffect(EffectMenuMove);
		DelayAllUserInput = 10;
	}
		
	if ( KeyboardCharacterPressed === "=" )
	{
		if (KeyboardCharacterPressed === "=")  onClickCharAll();
		
		NewHighScoreTempName = NewHighScoreTempName.substring(0, NewHighScoreTempName.length - 1);
		if (NewHighScoreNameIndex > 0)  NewHighScoreNameIndex--;
		
		PlayEffect(EffectMenuMove);
		DelayAllUserInput = 10;
	}
			
	if (KeyboardCharacterPressed === "/")
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = HighScoresScreen;
	}

	if (ButtonPressed === 5)
	{
		ScreenFadeStatus = FadeOut;
		NextScreenToDisplay = HighScoresScreen;
	}
	
	if (ScreenFadeStatus === FadeOut && ScreenFadeAlpha === 1)
	{
		GameJustPlayed = false;
		
		stage.removeChild(titleBG);

		for (index = 0; index < 3; index++)
		{
			stage.removeChild(WhiteLine[index]);
		}
		
		HighScoresName[GameMode][NewHighScoreRank] = TextSprites[NewHighScoreNameText].text;
	
		DeleteAllCharButtonsOnScreen();
	
		DeleteAllButtonsOnScreen();
		RemoveAllTextsOnScreen();
		ProcessNextScreen();
	}
}	
