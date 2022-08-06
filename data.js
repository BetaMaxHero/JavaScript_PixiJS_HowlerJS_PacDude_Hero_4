// "data.js"

let HTML5LocalStorageSupported = true;

let NewHighScoreRank = 999;
let NewHighScoreNameIndex = 0;
let NewHighScoreTempName = new Array(20);
let NewHighScoreNameText;

let HighScoresName = new Array(5);
    HighScoresName[0] = new Array(10);
    HighScoresName[1] = new Array(10);
    HighScoresName[2] = new Array(10);
    HighScoresName[3] = new Array(10);
    HighScoresName[4] = new Array(10);

let HighScoresLevel = new Array(5);
    HighScoresLevel[0] = new Array(10);
    HighScoresLevel[1] = new Array(10);
    HighScoresLevel[2] = new Array(10);
    HighScoresLevel[3] = new Array(10);
    HighScoresLevel[4] = new Array(10);

let HighScoresScore = new Array(5);
    HighScoresScore[0] = new Array(10);
    HighScoresScore[1] = new Array(10);
    HighScoresScore[2] = new Array(10);
    HighScoresScore[3] = new Array(10);
    HighScoresScore[4] = new Array(10);

//--------------------------------------------------------------------------------------------------------------
function CreateCookie(name,value,days)
{
    var expires;

    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toUTCString();
    }
    else  expires = "";

    document.cookie = name+"="+value+expires+"; path=/";
}

//--------------------------------------------------------------------------------------------------------------
/**
 * @return {string}
 */
function ReadCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++)
    {
	var c = ca[i];
	while (c.charAt(0)===' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) !== 0) {
        } else return c.substring(nameEQ.length, c.length);
    }
}

//--------------------------------------------------------------------------------------------------------------
/**
 * @return {boolean}
 */
function CheckHTML5LocalStorage()
{
    try
    {
	    return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e)
    {
	    return false;
    }
}

//--------------------------------------------------------------------------------------------------------------
function LoadHighScoresAndOptions()
{
var temp = null;
var tempTwo = null;
var tempThree = null;

	if ( CheckHTML5LocalStorage() === false )  HTML5LocalStorageSupported = false;

    if (HTML5LocalStorageSupported === false)
    {
		temp = ReadCookie('PDH4-Alpha3-MusicVolume');
		if (temp)  MusicVolume = parseFloat(temp);

		temp = ReadCookie('PDH4-Alpha3-SoundVolume');
		if (temp)  SoundVolume = parseFloat(temp);

		temp = ReadCookie('PDH4-Alpha3-GameMode');
		if (temp)  GameMode = parseInt(temp);

		temp = ReadCookie('PDH4-Alpha3-SecretCodeOne');
		if (temp)  SecretCodeOne = parseInt(temp);
		
		temp = ReadCookie('PDH4-Alpha3-SecretCodeTwo');
		if (temp)  SecretCodeTwo = parseInt(temp);
		
		temp = ReadCookie('PDH4-Alpha3-SecretCodeThree');
		if (temp)  SecretCodeThree = parseInt(temp);
		
		temp = ReadCookie('PDH4-Alpha3-SecretCodeFour');
		if (temp)  SecretCodeFour = parseInt(temp);
		
		temp = ReadCookie('PDH4-Alpha3-ControlScheme');
		if (temp)  ControlScheme = parseInt(temp);

		SecretCodeTotal = ( SecretCodeFour + (10*SecretCodeThree) + (100*SecretCodeTwo) + (1000*SecretCodeOne) );

		for (var gameMode = 0; gameMode < 5; gameMode++)
		{
			for (var rank = 0; rank < 10; rank++)
			{
			temp = ReadCookie('PDH4-Alpha3-HighScoresName'+gameMode+''+rank+'');
			if (temp)  HighScoresName[gameMode][rank] = temp;

			tempTwo = ReadCookie('PDH4-Alpha3-HighScoresLevel'+gameMode+''+rank+'');
			if (tempTwo)  HighScoresLevel[gameMode][rank] = parseInt(tempTwo);

			tempThree = ReadCookie('PDH4-Alpha3-HighScoresScore'+gameMode+''+rank+'');
			if (tempThree)  HighScoresScore[gameMode][rank] = parseInt(tempThree);
			}
		}
	}
	else
	{
        temp = localStorage.getItem('PDH4-Alpha3-MusicVolume');
        if (temp)  MusicVolume = parseFloat(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-SoundVolume');
        if (temp)  SoundVolume = parseFloat(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-GameMode');
        if (temp)  GameMode = parseInt(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-SecretCodeOne');
        if (temp)  SecretCodeOne = parseInt(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-SecretCodeTwo');
        if (temp)  SecretCodeTwo = parseInt(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-SecretCodeThree');
        if (temp)  SecretCodeThree = parseInt(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-SecretCodeFour');
        if (temp)  SecretCodeFour = parseInt(temp);
		
        temp = localStorage.getItem('PDH4-Alpha3-ControlScheme');
        if (temp)  ControlScheme = parseInt(temp);
		
		for (var gameModeTwo = 0; gameModeTwo < 5; gameModeTwo++)
		{
			for (var rankTwo = 0; rankTwo < 10; rankTwo++)
			{
				temp = localStorage.getItem('PDH4-Alpha3-HighScoresName'+gameModeTwo+''+rankTwo+'');
				if (temp)  HighScoresName[gameModeTwo][rankTwo] = temp;
	
				tempTwo = localStorage.getItem('PDH4-Alpha3-HighScoresLevel'+gameModeTwo+''+rankTwo+'');
				if (tempTwo)  HighScoresLevel[gameModeTwo][rankTwo] = parseInt(tempTwo);

				tempThree = localStorage.getItem('PDH4-Alpha3-HighScoresScore'+gameModeTwo+''+rankTwo+'');
				if (tempThree)  HighScoresScore[gameModeTwo][rankTwo] = parseInt(tempThree);
			}
		}
	}
}

//--------------------------------------------------------------------------------------------------------------
function SaveHighScoresAndOptions()
{
	if ( CheckHTML5LocalStorage() === false )  HTML5LocalStorageSupported = false;

    if (HTML5LocalStorageSupported === false)
    {
		CreateCookie('PDH4-Alpha3-MusicVolume', MusicVolume, 9999);
		CreateCookie('PDH4-Alpha3-SoundVolume', SoundVolume, 9999);
		CreateCookie('PDH4-Alpha3-GameMode', GameMode, 9999);

		CreateCookie('PDH4-Alpha3-SecretCodeOne', SecretCodeOne, 9999);
		CreateCookie('PDH4-Alpha3-SecretCodeTwo', SecretCodeTwo, 9999);
		CreateCookie('PDH4-Alpha3-SecretCodeThree', SecretCodeThree, 9999);
		CreateCookie('PDH4-Alpha3-SecretCodeFour', SecretCodeFour, 9999);

		CreateCookie('PDH4-Alpha3-ControlScheme', ControlScheme, 9999);
		
		for (var gameMode = 0; gameMode < 5; gameMode++)
		{
			for (var rank = 0; rank < 10; rank++)
			{
				CreateCookie('PDH4-Alpha3-HighScoresName'+gameMode+''+rank+'', HighScoresName[gameMode][rank], 9999);
				CreateCookie('PDH4-Alpha3-HighScoresLevel'+gameMode+''+rank+'', HighScoresLevel[gameMode][rank], 9999);
				CreateCookie('PDH4-Alpha3-HighScoresScore'+gameMode+''+rank+'', HighScoresScore[gameMode][rank], 9999);
			}
		}
	}
	else
	{
		localStorage.setItem('PDH4-Alpha3-MusicVolume', MusicVolume);
		
		localStorage.setItem('PDH4-Alpha3-SoundVolume', SoundVolume);
		
		localStorage.setItem('PDH4-Alpha3-GameMode', GameMode);
		
		localStorage.setItem('PDH4-Alpha3-SecretCodeOne', SecretCodeOne);
		
		localStorage.setItem('PDH4-Alpha3-SecretCodeTwo', SecretCodeTwo);
		
		localStorage.setItem('PDH4-Alpha3-SecretCodeThree', SecretCodeThree);
		
		localStorage.setItem('PDH4-Alpha3-SecretCodeFour', SecretCodeFour);
		
		localStorage.setItem('PDH4-Alpha3-ControlScheme', ControlScheme);
		
        for (var gameModeTwo = 0; gameModeTwo < 5; gameModeTwo++)
	    {
            for (var rankTwo = 0; rankTwo < 10; rankTwo++)
            {
                localStorage.setItem('PDH4-Alpha3-HighScoresName'+gameModeTwo+''+rankTwo+'', HighScoresName[gameModeTwo][rankTwo]);

                localStorage.setItem('PDH4-Alpha3-HighScoresLevel'+gameModeTwo+''+rankTwo+'', HighScoresLevel[gameModeTwo][rankTwo]);

                localStorage.setItem('PDH4-Alpha3-HighScoresScore'+gameModeTwo+''+rankTwo+'', HighScoresScore[gameModeTwo][rankTwo]);
            }
        }
	}
}

//--------------------------------------------------------------------------------------------------------------
function InitializeHighScores()
{
    for (var gameMode = 0; gameMode < 5; gameMode++)
    {
		HighScoresName[gameMode][0] = "JeZxLee";
		HighScoresName[gameMode][1] = "Doatheman";
		HighScoresName[gameMode][2] = "mattmatteh";
		HighScoresName[gameMode][3] = "PixiJSv5";
		HighScoresName[gameMode][4] = "Howler.js";
		HighScoresName[gameMode][5] = "D.J. Fading Twilight";
		HighScoresName[gameMode][6] = "WebGL";
		HighScoresName[gameMode][7] = "You!";
		HighScoresName[gameMode][8] = "You!";
		HighScoresName[gameMode][9] = "You!";

		HighScoresLevel[gameMode][0] = 6;
		HighScoresLevel[gameMode][1] = 5;
		HighScoresLevel[gameMode][2] = 5;
		HighScoresLevel[gameMode][3] = 4;
		HighScoresLevel[gameMode][4] = 4;
		HighScoresLevel[gameMode][5] = 3;
		HighScoresLevel[gameMode][6] = 3;
		HighScoresLevel[gameMode][7] = 2;
		HighScoresLevel[gameMode][8] = 2;
		HighScoresLevel[gameMode][9] = 1;

		HighScoresScore[gameMode][0] = 10000;
		HighScoresScore[gameMode][1] = 9000;
		HighScoresScore[gameMode][2] = 8000;
		HighScoresScore[gameMode][3] = 7000;
		HighScoresScore[gameMode][4] = 6000;
		HighScoresScore[gameMode][5] = 5000;
		HighScoresScore[gameMode][6] = 4000;
		HighScoresScore[gameMode][7] = 3000;
		HighScoresScore[gameMode][8] = 2000;
		HighScoresScore[gameMode][9] = 1000;
    }
}

//--------------------------------------------------------------------------------------------------------------
function CheckForNewHighScores()
{
	NewHighScoreRank = 999;
	
	var index;
	for (index = 9; index > -1; index--)
	{
		if (Score > HighScoresScore[GameMode][index])
		{
			NewHighScoreRank = index;
		}
	}

	if (NewHighScoreRank < 10)
	{
		var indexTwo;
		for (indexTwo = 9; indexTwo > NewHighScoreRank; indexTwo--)
		{
			HighScoresName[GameMode][indexTwo] = HighScoresName[GameMode][indexTwo-1];
			HighScoresLevel[GameMode][indexTwo] = HighScoresLevel[GameMode][indexTwo-1];
			HighScoresScore[GameMode][indexTwo] = HighScoresScore[GameMode][indexTwo-1];			
		}
		
		HighScoresName[GameMode][NewHighScoreRank] = " ";
		HighScoresLevel[GameMode][NewHighScoreRank] = Level;
		HighScoresScore[GameMode][NewHighScoreRank] = Score;
	}
}
