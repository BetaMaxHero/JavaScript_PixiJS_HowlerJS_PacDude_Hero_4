// "logic.js"

let VerySlowMode = 0;
let SlowMode = 1;
let NormalMode = 2;
let FastMode = 3;
let VeryFastMode = 4;
let GameMode = NormalMode;

let GameJustPlayed = false;

let ControlScheme = 0;

let TimerText = null;

let level;
let indexY;

let MapBoards = new Array(7);
	for (level = 1; level < 7; level++)
	{
		if (level === 1)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}	
				
				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 4] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 5] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 6] = [0,0,0,0,0,0,2,1,1,1,1,1,0,0,0,1,1,1,1,1,2,0,0,0,0,0,0];
				MapBoards[level][ 7] = [0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][ 8] = [0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][ 9] = [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0];
				MapBoards[level][10] = [0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][11] = [0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0];
				MapBoards[level][12] = [0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0];
				MapBoards[level][13] = [0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0];
				MapBoards[level][14] = [0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0];
				MapBoards[level][15] = [0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0];
				MapBoards[level][16] = [0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][17] = [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0];
				MapBoards[level][18] = [0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][19] = [0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0];
				MapBoards[level][20] = [0,0,0,0,0,0,2,1,1,1,1,1,0,0,0,1,1,1,1,1,2,0,0,0,0,0,0];
				MapBoards[level][21] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][22] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][23] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 2)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}
				
				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 4] = [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0];
				MapBoards[level][ 5] = [0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0];
				MapBoards[level][ 6] = [0,0,0,0,1,1,2,0,1,0,0,0,0,1,0,0,0,0,1,0,2,1,1,0,0,0,0];
				MapBoards[level][ 7] = [0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0];
				MapBoards[level][ 8] = [0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0];
				MapBoards[level][ 9] = [0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0];
				MapBoards[level][10] = [0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0];
				MapBoards[level][11] = [0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][12] = [0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][13] = [0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0];
				MapBoards[level][14] = [0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][15] = [0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][16] = [0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0];
				MapBoards[level][17] = [0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0];
				MapBoards[level][18] = [0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0];
				MapBoards[level][19] = [0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0];
				MapBoards[level][20] = [0,0,0,0,1,1,2,0,1,0,0,0,0,1,0,0,0,0,1,0,2,1,1,0,0,0,0];
				MapBoards[level][21] = [0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0];
				MapBoards[level][22] = [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0];
				MapBoards[level][23] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 3)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}
				
				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 3] = [0,0,0,2,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,2,0,0,0];
				MapBoards[level][ 4] = [0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0];
				MapBoards[level][ 5] = [0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0];
				MapBoards[level][ 6] = [0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0];
				MapBoards[level][ 7] = [0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0];
				MapBoards[level][ 8] = [0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0];
				MapBoards[level][ 9] = [0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0];
				MapBoards[level][10] = [0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][11] = [0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0];
				MapBoards[level][12] = [0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0];
				MapBoards[level][13] = [0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0];
				MapBoards[level][14] = [0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0];
				MapBoards[level][15] = [0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0];
				MapBoards[level][16] = [0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0];
				MapBoards[level][17] = [0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0];
				MapBoards[level][18] = [0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0];
				MapBoards[level][19] = [0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0];
				MapBoards[level][20] = [0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0];
				MapBoards[level][21] = [0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0];
				MapBoards[level][22] = [0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0];
				MapBoards[level][23] = [0,0,0,2,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,2,0,0,0];
				MapBoards[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 4)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}
				
				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 2] = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0];
				MapBoards[level][ 3] = [0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0];
				MapBoards[level][ 4] = [0,0,1,0,2,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,2,0,1,0,0];
				MapBoards[level][ 5] = [0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0];
				MapBoards[level][ 6] = [0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0];
				MapBoards[level][ 7] = [0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0];
				MapBoards[level][ 8] = [0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0];
				MapBoards[level][ 9] = [0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0];
				MapBoards[level][10] = [0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0];
				MapBoards[level][11] = [0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0];
				MapBoards[level][12] = [0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0];
				MapBoards[level][13] = [0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0];
				MapBoards[level][14] = [0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0];
				MapBoards[level][15] = [0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0];
				MapBoards[level][16] = [0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0];
				MapBoards[level][17] = [0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0];
				MapBoards[level][18] = [0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0];
				MapBoards[level][19] = [0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0];
				MapBoards[level][20] = [0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0];
				MapBoards[level][21] = [0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0];
				MapBoards[level][22] = [0,0,1,0,2,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,2,0,1,0,0];
				MapBoards[level][23] = [0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0];
				MapBoards[level][24] = [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0];
				MapBoards[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 5)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}

				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0];
				MapBoards[level][ 2] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapBoards[level][ 3] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][ 4] = [0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][ 5] = [0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][ 6] = [0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0];
				MapBoards[level][ 7] = [0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0];
				MapBoards[level][ 8] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapBoards[level][ 9] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][10] = [0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][11] = [0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][12] = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][13] = [0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][14] = [0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][15] = [0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][16] = [0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][17] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][18] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapBoards[level][19] = [0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0];
				MapBoards[level][20] = [0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0];
				MapBoards[level][21] = [0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][22] = [0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][23] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][24] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapBoards[level][25] = [0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 6)
		{
			MapBoards[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapBoards[level][indexY] = new Array(27);
				}

				MapBoards[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapBoards[level][ 1] = [0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0];
				MapBoards[level][ 2] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapBoards[level][ 3] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][ 4] = [0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][ 5] = [0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][ 6] = [0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0];
				MapBoards[level][ 7] = [0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0];
				MapBoards[level][ 8] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapBoards[level][ 9] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][10] = [0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][11] = [0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][12] = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][13] = [0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][14] = [0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][15] = [0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][16] = [0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][17] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][18] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapBoards[level][19] = [0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0];
				MapBoards[level][20] = [0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0];
				MapBoards[level][21] = [0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0];
				MapBoards[level][22] = [0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0];
				MapBoards[level][23] = [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0];
				MapBoards[level][24] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapBoards[level][25] = [0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0];
				MapBoards[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
	}
	
for (level = 1; level < 7; level++)
{
	let changeX = 26;
	let changeY = 0;
	for (indexY = 26; indexY > 0; indexY--)
	{
		for (let indexX = 26; indexX > 0; indexX--)
		{
			let old = MapBoards[level][changeY][changeX];
			MapBoards[level][changeY][changeX] = MapBoards[level][indexX][indexY]; 
			MapBoards[level][indexX][indexY] = old;
			
			changeX--;
		}
		
		changeX = 26;
		changeY++;
	}
}

let MapBoard = new Array(7);
	for (level = 0; level < 7; level++)
	{
		MapBoard[level] = new Array(27);
			for (indexY = 0; indexY < 27; indexY++)
			{
				MapBoard[level][indexY] = new Array(27);
			}
	}

let MapReturn = new Array(7);
	for (level = 1; level < 7; level++)
	{
		if (level === 1)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}
				
				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 4] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 5] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 6] = [0,0,0,0,0,0,2,4,4,2,4,2,0,0,0,2,3,2,3,3,2,0,0,0,0,0,0];
				MapReturn[level][ 7] = [0,0,0,0,0,0,2,0,0,2,0,4,4,2,3,3,0,2,0,0,2,0,0,0,0,0,0];
				MapReturn[level][ 8] = [0,0,0,0,0,0,2,0,0,2,0,0,0,2,0,0,0,2,0,0,2,0,0,0,0,0,0];
				MapReturn[level][ 9] = [0,0,0,0,0,0,4,4,4,4,4,4,4,2,3,3,3,3,3,3,3,0,0,0,0,0,0];
				MapReturn[level][10] = [0,0,0,0,0,0,2,0,0,1,0,0,0,2,0,0,0,1,0,0,2,0,0,0,0,0,0];
				MapReturn[level][11] = [0,0,0,0,0,0,4,2,0,1,0,4,4,2,3,3,0,1,0,2,3,0,0,0,0,0,0];
				MapReturn[level][12] = [0,0,0,0,0,0,0,2,0,1,0,1,0,2,0,1,0,1,0,2,0,0,0,0,0,0,0];
				MapReturn[level][13] = [0,0,0,0,0,0,0,4,4,4,4,1,0,0,0,1,3,3,3,3,0,0,0,0,0,0,0];
				MapReturn[level][14] = [0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0];
				MapReturn[level][15] = [0,0,0,0,0,0,4,1,0,1,0,1,3,5,4,1,0,1,0,1,3,0,0,0,0,0,0];
				MapReturn[level][16] = [0,0,0,0,0,0,2,0,0,1,0,0,0,1,0,0,0,1,0,0,2,0,0,0,0,0,0];
				MapReturn[level][17] = [0,0,0,0,0,0,4,4,4,4,4,4,4,1,3,3,3,3,3,3,3,0,0,0,0,0,0];
				MapReturn[level][18] = [0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0];
				MapReturn[level][19] = [0,0,0,0,0,0,1,0,0,1,0,4,4,1,3,3,0,1,0,0,1,0,0,0,0,0,0];
				MapReturn[level][20] = [0,0,0,0,0,0,1,4,4,1,4,1,0,0,0,1,3,1,3,3,1,0,0,0,0,0,0];
				MapReturn[level][21] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][22] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][23] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 2)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}
				
				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 4] = [0,0,0,0,0,0,4,4,2,3,2,0,0,0,0,0,2,4,2,3,3,0,0,0,0,0,0];
				MapReturn[level][ 5] = [0,0,0,0,0,0,1,0,2,0,4,4,4,2,3,3,3,0,2,0,1,0,0,0,0,0,0];
				MapReturn[level][ 6] = [0,0,0,0,2,3,1,0,2,0,0,0,0,2,0,0,0,0,2,0,1,4,2,0,0,0,0];
				MapReturn[level][ 7] = [0,0,0,0,2,0,0,0,4,4,2,3,3,5,4,4,2,3,3,0,0,0,2,0,0,0,0];
				MapReturn[level][ 8] = [0,0,0,0,4,4,4,2,0,0,2,0,0,0,0,0,2,0,0,2,3,3,3,0,0,0,0];
				MapReturn[level][ 9] = [0,0,0,0,1,0,0,2,0,4,4,4,4,2,3,3,3,3,0,2,0,0,1,0,0,0,0];
				MapReturn[level][10] = [0,0,0,0,1,2,0,4,4,2,0,0,0,2,0,0,0,2,3,3,0,2,1,0,0,0,0];
				MapReturn[level][11] = [0,0,0,0,0,2,0,1,0,2,0,4,4,2,3,3,0,2,0,1,0,2,0,0,0,0,0];
				MapReturn[level][12] = [0,0,0,0,0,2,0,1,0,2,0,1,0,2,0,1,0,2,0,1,0,2,0,0,0,0,0];
				MapReturn[level][13] = [0,0,0,0,0,4,4,5,0,4,4,1,0,0,0,1,3,3,0,5,3,3,0,0,0,0,0];
				MapReturn[level][14] = [0,0,0,0,0,1,0,2,0,1,0,1,0,0,0,1,0,1,0,2,0,1,0,0,0,0,0];
				MapReturn[level][15] = [0,0,0,0,0,1,0,2,0,1,0,1,3,5,4,1,0,1,0,2,0,1,0,0,0,0,0];
				MapReturn[level][16] = [0,0,0,0,2,1,0,4,4,1,0,0,0,1,0,0,0,1,3,3,0,1,2,0,0,0,0];
				MapReturn[level][17] = [0,0,0,0,2,0,0,1,0,1,4,4,4,1,3,3,3,1,0,1,0,0,2,0,0,0,0];
				MapReturn[level][18] = [0,0,0,0,4,4,4,1,0,0,1,0,0,0,0,0,1,0,0,1,3,3,3,0,0,0,0];
				MapReturn[level][19] = [0,0,0,0,1,0,0,0,4,4,1,3,3,5,4,4,1,3,3,0,0,0,1,0,0,0,0];
				MapReturn[level][20] = [0,0,0,0,1,3,2,0,1,0,0,0,0,1,0,0,0,0,1,0,2,4,1,0,0,0,0];
				MapReturn[level][21] = [0,0,0,0,0,0,2,0,1,0,4,4,4,1,3,3,3,0,1,0,2,0,0,0,0,0,0];
				MapReturn[level][22] = [0,0,0,0,0,0,4,4,1,3,1,0,0,0,0,0,1,4,1,3,3,0,0,0,0,0,0];
				MapReturn[level][23] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 3)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}
				
				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 2] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 3] = [0,0,0,2,4,4,4,4,4,2,0,2,4,2,3,2,0,2,3,3,3,3,3,2,0,0,0];
				MapReturn[level][ 4] = [0,0,0,2,0,0,0,0,0,2,0,2,0,2,0,2,0,2,0,0,0,0,0,2,0,0,0];
				MapReturn[level][ 5] = [0,0,0,2,0,2,4,4,2,3,3,3,0,2,0,4,4,4,2,3,3,2,0,2,0,0,0];
				MapReturn[level][ 6] = [0,0,0,2,0,2,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,2,0,2,0,0,0];
				MapReturn[level][ 7] = [0,0,0,2,0,2,0,2,4,2,4,4,4,2,3,3,3,2,3,2,0,2,0,2,0,0,0];
				MapReturn[level][ 8] = [0,0,0,2,0,4,4,2,0,2,0,0,0,2,0,0,0,2,0,2,3,3,0,2,0,0,0];
				MapReturn[level][ 9] = [0,0,0,4,4,1,0,2,0,2,4,4,4,2,3,3,3,2,0,2,0,1,3,3,0,0,0];
				MapReturn[level][10] = [0,0,0,0,0,1,0,2,0,2,0,0,0,2,0,0,0,2,0,2,0,1,0,0,0,0,0];
				MapReturn[level][11] = [0,0,0,2,3,1,0,2,0,2,0,4,4,2,3,3,0,2,0,2,0,1,4,2,0,0,0];
				MapReturn[level][12] = [0,0,0,2,0,0,0,2,0,2,0,1,0,2,0,1,0,2,0,2,0,0,0,2,0,0,0];
				MapReturn[level][13] = [0,0,0,4,4,4,4,4,4,4,4,1,0,0,0,1,3,3,3,3,3,3,3,3,0,0,0];
				MapReturn[level][14] = [0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0];
				MapReturn[level][15] = [0,0,0,1,3,2,0,1,0,1,0,1,3,5,4,1,0,1,0,1,0,2,4,1,0,0,0];
				MapReturn[level][16] = [0,0,0,0,0,2,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,2,0,0,0,0,0];
				MapReturn[level][17] = [0,0,0,4,4,2,0,1,0,1,4,4,4,1,3,3,3,1,0,1,0,2,3,3,0,0,0];
				MapReturn[level][18] = [0,0,0,1,0,4,4,1,0,1,0,0,0,1,0,0,0,1,0,1,3,3,0,1,0,0,0];
				MapReturn[level][19] = [0,0,0,1,0,1,0,1,4,1,4,4,4,1,3,3,3,1,3,1,0,1,0,1,0,0,0];
				MapReturn[level][20] = [0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0];
				MapReturn[level][21] = [0,0,0,1,0,1,4,4,1,3,3,3,0,1,0,4,4,4,1,3,3,1,0,1,0,0,0];
				MapReturn[level][22] = [0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0];
				MapReturn[level][23] = [0,0,0,1,4,4,4,4,4,1,0,1,4,1,3,1,0,1,3,3,3,3,3,1,0,0,0];
				MapReturn[level][24] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 4)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}

				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 2] = [0,0,1,4,4,4,2,3,3,3,4,4,4,2,3,3,3,4,4,4,2,3,3,3,1,0,0];
				MapReturn[level][ 3] = [0,0,1,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,1,0,0];
				MapReturn[level][ 4] = [0,0,1,0,2,0,2,0,2,3,3,3,0,2,0,4,4,4,2,0,2,0,2,0,1,0,0];
				MapReturn[level][ 5] = [0,0,1,0,2,0,2,0,2,0,0,1,3,5,4,1,0,0,2,0,2,0,2,0,1,0,0];
				MapReturn[level][ 6] = [0,0,1,0,2,0,4,4,2,0,0,0,0,0,0,0,0,0,2,3,3,0,2,0,1,0,0];
				MapReturn[level][ 7] = [0,0,1,0,4,4,1,0,4,4,4,4,4,2,3,3,3,3,3,0,1,3,3,0,1,0,0];
				MapReturn[level][ 8] = [0,0,2,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,2,0,0];
				MapReturn[level][ 9] = [0,0,2,0,2,0,0,2,0,4,4,4,4,2,3,3,3,3,0,2,0,0,2,0,2,0,0];
				MapReturn[level][10] = [0,0,2,0,2,0,0,2,0,1,0,0,0,2,0,0,0,1,0,2,0,0,2,0,2,0,0];
				MapReturn[level][11] = [0,0,2,0,4,2,0,2,0,1,0,4,4,2,3,3,0,1,0,2,0,2,3,0,2,0,0];
				MapReturn[level][12] = [0,0,2,0,0,2,0,2,0,1,0,1,0,2,0,1,0,1,0,2,0,2,0,0,2,0,0];
				MapReturn[level][13] = [0,0,4,4,4,4,4,4,4,4,4,1,0,0,0,1,3,3,3,3,3,3,3,3,3,0,0];
				MapReturn[level][14] = [0,0,1,0,0,1,0,1,0,2,0,1,0,0,0,1,0,2,0,1,0,1,0,0,1,0,0];
				MapReturn[level][15] = [0,0,1,0,4,1,0,1,0,2,0,1,3,5,4,1,0,2,0,1,0,1,3,0,1,0,0];
				MapReturn[level][16] = [0,0,1,0,1,0,0,1,0,2,0,0,0,1,0,0,0,2,0,1,0,0,1,0,1,0,0];
				MapReturn[level][17] = [0,0,1,0,1,0,0,1,0,4,4,4,4,1,3,3,3,3,0,1,0,0,1,0,1,0,0];
				MapReturn[level][18] = [0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0];
				MapReturn[level][19] = [0,0,2,0,4,4,2,0,4,4,4,4,4,1,3,3,3,3,3,0,2,3,3,0,2,0,0];
				MapReturn[level][20] = [0,0,2,0,1,0,4,4,1,0,0,0,0,0,0,0,0,0,1,3,3,0,1,0,2,0,0];
				MapReturn[level][21] = [0,0,2,0,1,0,1,0,1,0,0,2,3,5,4,2,0,0,1,0,1,0,1,0,2,0,0];
				MapReturn[level][22] = [0,0,2,0,1,0,1,0,1,3,3,3,0,1,0,4,4,4,1,0,1,0,1,0,2,0,0];
				MapReturn[level][23] = [0,0,2,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,2,0,0];
				MapReturn[level][24] = [0,0,2,4,4,4,1,3,3,3,4,4,4,1,3,3,3,4,4,4,1,3,3,3,2,0,0];
				MapReturn[level][25] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 5)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}

				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,5,4,4,4,2,3,3,4,4,2,3,4,2,3,4,2,3,3,4,4,2,3,3,3,5,0];
				MapReturn[level][ 2] = [0,2,0,0,0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0];
				MapReturn[level][ 3] = [0,2,0,4,4,4,4,4,4,2,3,3,3,5,4,4,4,2,3,3,3,3,3,3,0,2,0];
				MapReturn[level][ 4] = [0,2,0,1,0,1,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,1,0,1,0,2,0];
				MapReturn[level][ 5] = [0,4,4,5,0,1,0,1,0,2,3,3,3,5,4,4,4,2,0,1,0,1,0,5,3,3,0];
				MapReturn[level][ 6] = [0,1,0,2,0,0,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,1,0];
				MapReturn[level][ 7] = [0,1,0,4,4,4,4,1,0,2,3,3,3,5,4,4,4,2,0,1,3,3,3,3,0,1,0];
				MapReturn[level][ 8] = [0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0];
				MapReturn[level][ 9] = [0,2,0,4,4,4,4,4,4,4,4,4,4,2,3,3,3,3,3,3,3,3,3,3,0,2,0];
				MapReturn[level][10] = [0,4,4,1,0,1,0,1,0,1,0,0,0,2,0,0,0,1,0,1,0,1,0,1,3,3,0];
				MapReturn[level][11] = [0,1,0,1,0,1,0,1,0,1,0,4,4,2,3,3,0,1,0,1,0,1,0,1,0,1,0];
				MapReturn[level][12] = [0,2,0,1,0,1,0,1,0,1,0,1,0,2,0,1,0,1,0,1,0,1,0,1,0,2,0];
				MapReturn[level][13] = [0,4,4,5,0,5,0,5,0,4,4,1,0,5,0,1,3,3,0,5,0,5,0,5,3,3,0];
				MapReturn[level][14] = [0,1,0,2,0,2,0,2,0,2,0,1,0,0,0,1,0,2,0,2,0,2,0,2,0,1,0];
				MapReturn[level][15] = [0,2,0,2,0,2,0,2,0,2,0,1,3,5,4,1,0,2,0,2,0,2,0,2,0,2,0];
				MapReturn[level][16] = [0,4,4,2,0,2,0,2,0,2,0,0,0,1,0,0,0,2,0,2,0,2,0,2,3,3,0];
				MapReturn[level][17] = [0,1,0,4,4,4,4,4,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,0,1,0];
				MapReturn[level][18] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapReturn[level][19] = [0,2,0,4,4,4,4,2,0,1,3,3,3,5,4,4,4,1,0,2,3,3,3,3,0,2,0];
				MapReturn[level][20] = [0,2,0,1,0,0,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,0,0,1,0,2,0];
				MapReturn[level][21] = [0,4,4,5,0,2,0,2,0,1,3,3,3,5,4,4,4,1,0,2,0,2,0,5,3,3,0];
				MapReturn[level][22] = [0,1,0,2,0,2,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,2,0,2,0,1,0];
				MapReturn[level][23] = [0,1,0,4,4,4,4,4,4,1,3,3,3,5,4,4,4,1,3,3,3,3,3,3,0,1,0];
				MapReturn[level][24] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapReturn[level][25] = [0,5,4,4,4,1,3,3,4,4,1,3,4,1,3,4,1,3,3,4,4,1,3,3,3,5,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		else if (level === 6)
		{
			MapReturn[level] = new Array(27);
				for (indexY = 0; indexY < 27; indexY++)
				{
					MapReturn[level][indexY] = new Array(27);
				}

				MapReturn[level][ 0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				MapReturn[level][ 1] = [0,5,4,4,4,2,3,3,4,4,2,3,4,2,3,4,2,3,3,4,4,2,3,3,3,5,0];
				MapReturn[level][ 2] = [0,2,0,0,0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0];
				MapReturn[level][ 3] = [0,2,0,4,4,4,4,4,4,2,3,3,3,5,4,4,4,2,3,3,3,3,3,3,0,2,0];
				MapReturn[level][ 4] = [0,2,0,1,0,1,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,1,0,1,0,2,0];
				MapReturn[level][ 5] = [0,4,4,5,0,1,0,1,0,2,3,3,3,5,4,4,4,2,0,1,0,1,0,5,3,3,0];
				MapReturn[level][ 6] = [0,1,0,2,0,0,0,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,2,0,1,0];
				MapReturn[level][ 7] = [0,1,0,4,4,4,4,1,0,2,3,3,3,5,4,4,4,2,0,1,3,3,3,3,0,1,0];
				MapReturn[level][ 8] = [0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0];
				MapReturn[level][ 9] = [0,2,0,4,4,4,4,4,4,4,4,4,4,2,3,3,3,3,3,3,3,3,3,3,0,2,0];
				MapReturn[level][10] = [0,4,4,1,0,1,0,1,0,1,0,0,0,2,0,0,0,1,0,1,0,1,0,1,3,3,0];
				MapReturn[level][11] = [0,1,0,1,0,1,0,1,0,1,0,4,4,2,3,3,0,1,0,1,0,1,0,1,0,1,0];
				MapReturn[level][12] = [0,2,0,1,0,1,0,1,0,1,0,1,0,2,0,1,0,1,0,1,0,1,0,1,0,2,0];
				MapReturn[level][13] = [0,4,4,5,0,5,0,5,0,4,4,1,0,5,0,1,3,3,0,5,0,5,0,5,3,3,0];
				MapReturn[level][14] = [0,1,0,2,0,2,0,2,0,2,0,1,0,0,0,1,0,2,0,2,0,2,0,2,0,1,0];
				MapReturn[level][15] = [0,2,0,2,0,2,0,2,0,2,0,1,3,5,4,1,0,2,0,2,0,2,0,2,0,2,0];
				MapReturn[level][16] = [0,4,4,2,0,2,0,2,0,2,0,0,0,1,0,0,0,2,0,2,0,2,0,2,3,3,0];
				MapReturn[level][17] = [0,1,0,4,4,4,4,4,4,4,4,4,4,1,3,3,3,3,3,3,3,3,3,3,0,1,0];
				MapReturn[level][18] = [0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0];
				MapReturn[level][19] = [0,2,0,4,4,4,4,2,0,1,3,3,3,5,4,4,4,1,0,2,3,3,3,3,0,2,0];
				MapReturn[level][20] = [0,2,0,1,0,0,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,0,0,1,0,2,0];
				MapReturn[level][21] = [0,4,4,5,0,2,0,2,0,1,3,3,3,5,4,4,4,1,0,2,0,2,0,5,3,3,0];
				MapReturn[level][22] = [0,1,0,2,0,2,0,2,0,1,0,0,0,0,0,0,0,1,0,2,0,2,0,2,0,1,0];
				MapReturn[level][23] = [0,1,0,4,4,4,4,4,4,1,3,3,3,5,4,4,4,1,3,3,3,3,3,3,0,1,0];
				MapReturn[level][24] = [0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0];
				MapReturn[level][25] = [0,5,4,4,4,1,3,3,4,4,1,3,4,1,3,4,1,3,3,4,4,1,3,3,3,5,0];
				MapReturn[level][26] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
	}

let PAUSEgame = false;
let PauseText = null;

let ReadyTimer = 0;
let ReadyText = 999;

let GameOver = 1;

let PlayerPlayfieldX;
let PlayerPlayfieldY;
let PlayerXInBetweenTiles;
let PlayerYInBetweenTiles;
let PlayerDirection;
let PlayerNextDirection;
let PlayerSpeed;

let PlayerScale = 1;
let PlayerDied = false;

let Score;
let ScoreText = null;

let Lives;
let LivesText = null;

let Level;
let LevelText = null;

let MinutesLeft;
let SecondsLeft;

let Oneupawarded = false;
let DeathAnimationTimer;

let NumberOfEatenGhosts;

let NumberOfLevels = 7;
let PowerPelletEatTimer;
let PowerPelletTime = new Array(NumberOfLevels);
let PowerPelletAnimationTimer;

let NumberOfGhosts = 8;
let Attack = 0;
let Scared = 1;
let Eaten = 2;
let DrawGhostsFrontToBack;
let GhostActive = new Array(NumberOfGhosts);
let GhostStatus = new Array(NumberOfGhosts);
let GhostAnimationFrame;
let GhostPlayfieldX = new Array(NumberOfGhosts);
let GhostPlayfieldY = new Array(NumberOfGhosts);
let GhostXInBetweenTiles = new Array(NumberOfGhosts);
let GhostYInBetweenTiles = new Array(NumberOfGhosts);
let GhostDirection = new Array(NumberOfGhosts);
let GhostSpeed = new Array(NumberOfGhosts);
let GhostAttackSpeed = new Array(NumberOfGhosts);
let GhostScaredSpeed = new Array(NumberOfGhosts);
let GhostStamina = new Array(NumberOfGhosts);
let GhostTired = new Array(NumberOfGhosts);

let StopGhostOnHomeBug = new Array(NumberOfGhosts);

let NumberOfLegosOnLevel = new Array(5);
NumberOfLegosOnLevel[0] = 0;
NumberOfLegosOnLevel[1] = 0;
NumberOfLegosOnLevel[2] = 0;
NumberOfLegosOnLevel[3] = 0;
NumberOfLegosOnLevel[4] = 0;

let NumberOfPelletsOnLevel = new Array(5);
NumberOfPelletsOnLevel[0] = 0;
NumberOfPelletsOnLevel[1] = 0;
NumberOfPelletsOnLevel[2] = 0;
NumberOfPelletsOnLevel[3] = 0;
NumberOfPelletsOnLevel[4] = 0;

let CurrentNumberOfPelletsEaten = 0;

let LevelNotCleared = 0;
let LevelCleared = 2;
let LevelStatus = LevelNotCleared;

let oppositeDirection;
let findDirectionTimer;
let searchY;
let searchX;
let scaredIndex;
let inbetweenY;
let inbetweenX;

//-------------------------------------------------------------------------------------------------
function SetupForNewGame()
{
	if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();
	
	PlayerDied = false;
	
	GameJustPlayed = true;
	
	ReadyTimer = 100;
	ReadyText = 999;
	
	LevelStatus = LevelNotCleared;
	
    GameOver = 0;

    PAUSEgame = false;

    PlayerXInBetweenTiles = 0;
    PlayerYInBetweenTiles = 0;
    PlayerPlayfieldX = 13;
    PlayerPlayfieldY = 17;
    PlayerDirection = DOWN;
    PlayerNextDirection = 0;
    PlayerSpeed = 8;

	PlayerScale = 1;
	
	Score = 0;
	Lives = 2;
	Level = 1;
	
	MinutesLeft = 24;
	SecondsLeft = 59;
	
	CurrentNumberOfPelletsEaten = 0;
	
	var indexX;
	var indexY;
	for (indexY = 0; indexY < 27; indexY++)
	{
		for (indexX = 0; indexX < 27; indexX++)
		{
			MapBoard[Level][indexX][indexY] = MapBoards[Level][indexX][indexY];
		}
	}
	
	NumberOfLegosOnLevel[Level] = 0;
	NumberOfPelletsOnLevel[Level] = 0;
	for (indexY = 0; indexY < 27; indexY++)
	{
		for (indexX = 0; indexX < 27; indexX++)
		{
			if (MapBoard[Level][indexX][indexY] === 0)  NumberOfLegosOnLevel[Level]++;
			else if (MapBoard[Level][indexX][indexY] === 1 || MapBoard[Level][indexX][indexY] === 2)  NumberOfPelletsOnLevel[Level]++;
		}
	}

	Oneupawarded = 0;
	DeathAnimationTimer = 0;
		
    NumberOfEatenGhosts = 0;

    PowerPelletEatTimer = 0;

    PowerPelletTime[0] = 600;
    PowerPelletTime[1] = 700;
    PowerPelletTime[2] = 800;
    PowerPelletTime[3] = 900;
    PowerPelletTime[4] = 1000;
    PowerPelletTime[5] = 1300;
	
	PowerPelletAnimationTimer = 0;
		
	if (PacDudePowerUp[UP] !== null)  PacDudePowerUp[UP].alpha = 0;
	if (PacDudePowerUp[DOWN] !== null)  PacDudePowerUp[DOWN].alpha = 0;
	if (PacDudePowerUp[LEFT] !== null)  PacDudePowerUp[LEFT].alpha = 0;
	if (PacDudePowerUp[RIGHT] !== null)  PacDudePowerUp[RIGHT].alpha = 0;
	
	var index;
	for (index = 0; index < 8; index++)
    {
		Ghosts[index][0].x = ( 320 );
		Ghosts[index][0].y = ( 240 );
    }

    for (index = 0; index < 8; index++)
        GhostActive[index] = false;

    // RED
    GhostAttackSpeed[0] = 8; GhostScaredSpeed[0] = 4;
    if (Level > 2)  GhostActive[0] = true;

    // ORANGE
    GhostAttackSpeed[1] = 4; GhostScaredSpeed[1] = 4;
    if (Level > 0)  GhostActive[1] = true;

    // CYAN
    GhostAttackSpeed[2] = 4; GhostScaredSpeed[2] = 4;
    if (Level > 0)  GhostActive[2] = true;

    // YELLOW
    GhostAttackSpeed[3] = 4; GhostScaredSpeed[3] = 4;
    if (Level > 4)  GhostActive[3] = true;

    // GREEN
    GhostAttackSpeed[4] = 4; GhostScaredSpeed[4] = 4;
    if (Level > 0)  GhostActive[4] = true;

    // BLUE
    GhostAttackSpeed[5] = 4; GhostScaredSpeed[5] = 4;
    if (Level > 0)  GhostActive[5] = true;

    // PURPLE
    GhostAttackSpeed[6] = 2; GhostScaredSpeed[6] = 4;
    if (Level > 1)  GhostActive[6] = true;

    // BLACK
    GhostAttackSpeed[7] = 2; GhostScaredSpeed[7] = 2;
    if (Level > 3)  GhostActive[7] = true;

    DrawGhostsFrontToBack = true;
    GhostAnimationFrame = 0;
	var ghost;
    for (ghost = 0; ghost < 8; ghost++)
    {
        GhostPlayfieldX[ghost] = 13;
        GhostPlayfieldY[ghost] = 13;
        GhostXInBetweenTiles[ghost] = 0;
        GhostYInBetweenTiles[ghost] = 0;
        GhostDirection[ghost] = UP;
        GhostStatus[ghost] = Attack;

		GhostSpeed[ghost] = GhostAttackSpeed[ghost];

        GhostStamina[ghost] = 0;

        StopGhostOnHomeBug[ghost] = false;
    }
	
	if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 1)
	{
		Score+=(10*Level);
		if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
		PlayEffect(EffectEatPellet);
		if (SecretCodeTotal !== 4777) CurrentNumberOfPelletsEaten++;
	}
}

//-------------------------------------------------------------------------------------------------
function SetupNextLevel(forceBoardClear)
{
	if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();
	
	PlayerDied = false;
	
	ReadyTimer = 100;
	ReadyText = 999;
	
	LevelStatus = LevelNotCleared;
	
    GameOver = 0;

    PAUSEgame = false;

    PlayerXInBetweenTiles = 0;
    PlayerYInBetweenTiles = 0;
    PlayerPlayfieldX = 13;
    PlayerPlayfieldY = 17;
    PlayerDirection = DOWN;
    PlayerNextDirection = 0;
    PlayerSpeed = 8;

	PlayerScale = 1;
	
	if (forceBoardClear === true)
	{
		if (Level === 2)  PlayMusic("BGM-Stage2");
		else if (Level === 3)  PlayMusic("BGM-Stage3");
		else if (Level === 4)  PlayMusic("BGM-Stage4");
		else if (Level === 5)  PlayMusic("BGM-Stage5");
		
		CurrentNumberOfPelletsEaten = 0;
		
		var indexX;
		var indexY;
		for (indexY = 0; indexY < 27; indexY++)
		{
			for (indexX = 0; indexX < 27; indexX++)
			{
				MapBoard[Level][indexX][indexY] = MapBoards[Level][indexX][indexY];
			}
		}
		
		NumberOfLegosOnLevel[Level] = 0;
		NumberOfPelletsOnLevel[Level] = 0;
		for (indexY = 0; indexY < 27; indexY++)
		{
			for (indexX = 0; indexX < 27; indexX++)
			{
				if (MapBoard[Level][indexX][indexY] === 0)  NumberOfLegosOnLevel[Level]++;
				else if (MapBoard[Level][indexX][indexY] === 1 || MapBoard[Level][indexX][indexY] === 2)  NumberOfPelletsOnLevel[Level]++;
			}
		}

		NumberOfEatenGhosts = 0;

		PowerPelletEatTimer = 0;
	}

    PowerPelletTime[0] = 600;
    PowerPelletTime[1] = 700;
    PowerPelletTime[2] = 800;
    PowerPelletTime[3] = 900;
    PowerPelletTime[4] = 1000;
    PowerPelletTime[5] = 1300;
	
	PowerPelletAnimationTimer = 0;
		
	if (PacDudePowerUp[UP] !== null)  PacDudePowerUp[UP].alpha = 0;
	if (PacDudePowerUp[DOWN] !== null)  PacDudePowerUp[DOWN].alpha = 0;
	if (PacDudePowerUp[LEFT] !== null)  PacDudePowerUp[LEFT].alpha = 0;
	if (PacDudePowerUp[RIGHT] !== null)  PacDudePowerUp[RIGHT].alpha = 0;
	
	var index;
	for (index = 0; index < 8; index++)
    {
		Ghosts[index][0].x = ( 320 );
		Ghosts[index][0].y = ( 240 );
    }

    for (index = 0; index < 8; index++)
        GhostActive[index] = false;

    // RED
    GhostAttackSpeed[0] = 8; GhostScaredSpeed[0] = 4;
    if (Level > 2)  GhostActive[0] = true;

    // ORANGE
    GhostAttackSpeed[1] = 4; GhostScaredSpeed[1] = 4;
    if (Level > 0)  GhostActive[1] = true;

    // CYAN
    GhostAttackSpeed[2] = 4; GhostScaredSpeed[2] = 4;
    if (Level > 0)  GhostActive[2] = true;

    // YELLOW
    GhostAttackSpeed[3] = 4; GhostScaredSpeed[3] = 4;
    if (Level > 4)  GhostActive[3] = true;

    // GREEN
    GhostAttackSpeed[4] = 4; GhostScaredSpeed[4] = 4;
    if (Level > 0)  GhostActive[4] = true;

    // BLUE
    GhostAttackSpeed[5] = 4; GhostScaredSpeed[5] = 4;
    if (Level > 0)  GhostActive[5] = true;

    // PURPLE
    GhostAttackSpeed[6] = 2; GhostScaredSpeed[6] = 4;
    if (Level > 1)  GhostActive[6] = true;

    // BLACK
    GhostAttackSpeed[7] = 2; GhostScaredSpeed[7] = 2;
    if (Level > 3)  GhostActive[7] = true;

    DrawGhostsFrontToBack = true;
    GhostAnimationFrame = 0;
	var ghost;
    for (ghost = 0; ghost < 8; ghost++)
    {
        GhostPlayfieldX[ghost] = 13;
        GhostPlayfieldY[ghost] = 13;
        GhostXInBetweenTiles[ghost] = 0;
        GhostYInBetweenTiles[ghost] = 0;
        GhostDirection[ghost] = UP;
        GhostStatus[ghost] = Attack;

		GhostSpeed[ghost] = GhostAttackSpeed[ghost];

        GhostStamina[ghost] = 0;

        StopGhostOnHomeBug[ghost] = false;
    }
	
	if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 1)
	{
		Score+=(10*Level);
		if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
		PlayEffect(EffectEatPellet);
		if (SecretCodeTotal !== 4777) CurrentNumberOfPelletsEaten++;
	}
}

//-------------------------------------------------------------------------------------------------
function GetGhostRandomDirection()
{
var random = Math.floor( Math.random() * 4 ) + 1;

    if      (random === 1)  return(UP);
    else if (random === 2)  return(DOWN);
    else if (random === 3)  return(LEFT);
    else if (random === 4)  return(RIGHT);
}

//-------------------------------------------------------------------------------------------------
function ProcessGhosts()
{
    for (var ghostIndex = 0; ghostIndex < 8; ghostIndex++)
    {
        if (GhostActive[ghostIndex] === true)
        {
            if (GhostPlayfieldX[ghostIndex] === 13 && GhostPlayfieldY[ghostIndex] === 13)
			{
                if (GhostStatus[ghostIndex] === Eaten)
                    {
                        GhostStatus[ghostIndex] = Attack;
						PlayEffect(EffectGhostNewSheet);
                    }
			}

			if (GhostStatus[ghostIndex] === Attack)
			{
				if (GhostXInBetweenTiles[ghostIndex] === 0  && GhostYInBetweenTiles[ghostIndex] === 0)
				{
					proposedDirection = GetGhostRandomDirection();
					oppositeDirection = 0;
					if      (GhostDirection[ghostIndex] ===    UP)  oppositeDirection = DOWN;
					else if (GhostDirection[ghostIndex] ===  DOWN)  oppositeDirection = UP;
					else if (GhostDirection[ghostIndex] ===  LEFT)  oppositeDirection = RIGHT;
					else if (GhostDirection[ghostIndex] === RIGHT)  oppositeDirection = LEFT;

					findDirectionTimer = 100;
					foundDirection = false;

					if (GhostTired[ghostIndex] === false)
					{
						for (searchY = GhostPlayfieldY[ghostIndex]; searchY > -1; searchY--)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][searchY] !== 0)
							{
								if (PlayerPlayfieldX === GhostPlayfieldX[ghostIndex])
								{
									if (PlayerPlayfieldY === searchY)
									{
										GhostDirection[ghostIndex] = UP;
										if (GhostStamina[ghostIndex] < 75)  GhostStamina[ghostIndex]++;
										else  GhostTired[ghostIndex] = true;
										GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
										PlayEffect(EffectScreech);
										foundDirection = true;
									}

								}

							}

							else  searchY = -1;
						}

						for (searchY = GhostPlayfieldY[ghostIndex]; searchY < 27; searchY++)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][searchY] !== 0)
							{
								if (PlayerPlayfieldX === GhostPlayfieldX[ghostIndex])
								{
									if (PlayerPlayfieldY === searchY)
									{
										GhostDirection[ghostIndex] = DOWN;
										if (GhostStamina[ghostIndex] < 75)  GhostStamina[ghostIndex]++;
										else  GhostTired[ghostIndex] = true;
										GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
										PlayEffect(EffectScreech);
										foundDirection = true;
									}

								}

							}

							else  searchY = 27;
						}

						for (searchX = GhostPlayfieldX[ghostIndex]; searchX > -1; searchX--)
						{
							if (MapBoard[Level][searchX][GhostPlayfieldY[ghostIndex]] !== 0)
							{
								if (PlayerPlayfieldY === GhostPlayfieldY[ghostIndex])
								{
									if (PlayerPlayfieldX === searchX)
									{
										GhostDirection[ghostIndex] = LEFT;
										if (GhostStamina[ghostIndex] < 75)  GhostStamina[ghostIndex]++;
										else  GhostTired[ghostIndex] = true;
										GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
										PlayEffect(EffectScreech);
										foundDirection = true;
									}

								}

							}

							else  searchX = -1;
						}

						for (searchX = GhostPlayfieldX[ghostIndex]; searchX < 27; searchX++)
						{
							if (MapBoard[Level][searchX][GhostPlayfieldY[ghostIndex]] !== 0)
							{
								if (PlayerPlayfieldY === GhostPlayfieldY[ghostIndex])
								{
									if (PlayerPlayfieldX === searchX)
									{
										GhostDirection[ghostIndex] = RIGHT;
										if (GhostStamina[ghostIndex] < 75)  GhostStamina[ghostIndex]++;
										else  GhostTired[ghostIndex] = true;
										GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
										PlayEffect(EffectScreech);
										foundDirection = true;
									}

								}

							}

							else  searchX = 27;
						}

					}
					else
					{
						if (GhostStamina[ghostIndex] > 0)  GhostStamina[ghostIndex]--;

						if (GhostStamina[ghostIndex] === 0)  GhostTired[ghostIndex] = false;
					}

					while (foundDirection === false && findDirectionTimer > 0)
					{
						proposedDirection = GetGhostRandomDirection();
						if (proposedDirection === UP && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
							{
								GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = UP;
								foundDirection = true;
							}
						}
						else if (proposedDirection === DOWN && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
							{
								GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = DOWN;
								foundDirection = true;
							}
						}
						else if (proposedDirection === LEFT && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
							{
								GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = LEFT;
								foundDirection = true;
							}
						}
						else if (proposedDirection === RIGHT && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
							{
								GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = RIGHT;
								foundDirection = true;
							}
						}

						if (findDirectionTimer > 0)  findDirectionTimer--;
					}

					if (findDirectionTimer === 0)
					{
						foundDirection = false;
						while (foundDirection === false)
						{
							proposedDirection = GetGhostRandomDirection();
							if (proposedDirection === UP)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = UP;
									foundDirection = true;
								}
							}
							else if (proposedDirection === DOWN)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = DOWN;
									foundDirection = true;
								}
							}
							else if (proposedDirection === LEFT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = LEFT;
									foundDirection = true;
								}
							}
							else if (proposedDirection === RIGHT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = RIGHT;
									foundDirection = true;
								}
							}

							if (findDirectionTimer > 0)  findDirectionTimer--;
						}
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] > -64)  GhostYInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]--;
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] < 64)  GhostYInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]++;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] > -64)  GhostXInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]--;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] < 64)  GhostXInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]++;
					}
				}
			}
			else if (GhostStatus[ghostIndex] === Scared)
			{
				if (GhostXInBetweenTiles[ghostIndex] === 0  && GhostYInBetweenTiles[ghostIndex] === 0)
				{
					vproposedDirection = GetGhostRandomDirection();
					oppositeDirection = 0;
					if      (GhostDirection[ghostIndex] ===    UP)  oppositeDirection = DOWN;
					else if (GhostDirection[ghostIndex] ===  DOWN)  oppositeDirection = UP;
					else if (GhostDirection[ghostIndex] ===  LEFT)  oppositeDirection = RIGHT;
					else if (GhostDirection[ghostIndex] === RIGHT)  oppositeDirection = LEFT;

					findDirectionTimer = 100;
					foundDirection = false;
					while (foundDirection === false && findDirectionTimer > 0)
					{
						proposedDirection = GetGhostRandomDirection();
						if (proposedDirection === UP && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
							{
								GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = UP;
								foundDirection = true;
							}
						}
						else if (proposedDirection === DOWN && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
							{
								GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = DOWN;
								foundDirection = true;
							}
						}
						else if (proposedDirection === LEFT && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
							{
								GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = LEFT;
								foundDirection = true;
							}
						}
						else if (proposedDirection === RIGHT && oppositeDirection !== proposedDirection)
						{
							if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
							{
								GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
								GhostDirection[ghostIndex] = RIGHT;
								foundDirection = true;
							}
						}

						if (findDirectionTimer > 0)  findDirectionTimer--;
					}

					if (findDirectionTimer === 0 && foundDirection === false)
					{
						foundDirection = false;
						while (foundDirection === false)
						{
							proposedDirection = GetGhostRandomDirection();
							if (proposedDirection === UP)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = UP;
									foundDirection = true;
								}
							}
							else if (proposedDirection === DOWN)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = DOWN;
									foundDirection = true;
								}
							}
							else if (proposedDirection === LEFT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = LEFT;
									foundDirection = true;
								}
							}
							else if (proposedDirection === RIGHT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = RIGHT;
									foundDirection = true;
								}
							}
						}
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] > -64)  GhostYInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]--;
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] < 64)  GhostYInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]++;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] > -64)  GhostXInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]--;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] < 64)  GhostXInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]++;
					}
				}
			}
			else if (GhostStatus[ghostIndex] === Eaten)
			{
				if (GhostXInBetweenTiles[ghostIndex] === 0 && GhostYInBetweenTiles[ghostIndex] === 0)
				{
					var foundDirection = false;
					if (MapReturn[Level][GhostPlayfieldY[ghostIndex]][GhostPlayfieldX[ghostIndex]] === 1)
					{
						if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
						{
							GhostDirection[ghostIndex] = UP;
							GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
							foundDirection = true;
						}
					}
					else if (MapReturn[Level][GhostPlayfieldY[ghostIndex]][GhostPlayfieldX[ghostIndex]] === 2)
					{
						if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
						{
							GhostDirection[ghostIndex] = DOWN;
							GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
							foundDirection = true;
						}
					}
					else if (MapReturn[Level][GhostPlayfieldY[ghostIndex]][GhostPlayfieldX[ghostIndex]] === 3)
					{
						if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
						{
							GhostDirection[ghostIndex] = LEFT;
							GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
							foundDirection = true;
						}
					}
					else if (MapReturn[Level][GhostPlayfieldY[ghostIndex]][GhostPlayfieldX[ghostIndex]] === 4)
					{
						if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
						{
							GhostDirection[ghostIndex] = RIGHT;
							GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
							foundDirection = true;
						}
					}

					if (foundDirection === false)
					{
						var proposedDirection = GetGhostRandomDirection();
						while (foundDirection === false)
						{
							proposedDirection = GetGhostRandomDirection();
							if (proposedDirection === UP)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]-1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = UP;
									foundDirection = true;
								}
							}
							else if (proposedDirection === DOWN)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]][GhostPlayfieldY[ghostIndex]+1] > 0)
								{
									GhostYInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = DOWN;
									foundDirection = true;
								}
							}
							else if (proposedDirection === LEFT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]-1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]-=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = LEFT;
									foundDirection = true;
								}
							}
							else if (proposedDirection === RIGHT)
							{
								if (MapBoard[Level][GhostPlayfieldX[ghostIndex]+1][GhostPlayfieldY[ghostIndex]] > 0)
								{
									GhostXInBetweenTiles[ghostIndex]+=GhostAttackSpeed[ghostIndex];
									GhostDirection[ghostIndex] = RIGHT;
									foundDirection = true;
								}
							}
						}
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] > -64)  GhostYInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]--;
					}
				}
				else if (GhostYInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostYInBetweenTiles[ghostIndex] < 64)  GhostYInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostYInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldY[ghostIndex]++;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] < 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] > -64)  GhostXInBetweenTiles[ghostIndex]-=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]--;
					}
				}
				else if (GhostXInBetweenTiles[ghostIndex] > 0)
				{
					if (GhostXInBetweenTiles[ghostIndex] < 64)  GhostXInBetweenTiles[ghostIndex]+=GhostSpeed[ghostIndex];
					else
					{
						GhostXInBetweenTiles[ghostIndex] = 0;
						GhostPlayfieldX[ghostIndex]++;
					}
                }
            }
        }
    }

    DrawGhostsFrontToBack = DrawGhostsFrontToBack !== true;

    if (GhostAnimationFrame < 1)  GhostAnimationFrame++;
    else  GhostAnimationFrame = 0;
}

//-------------------------------------------------------------------------------------------------
function ProcessPlayer()
{
    if (JoystickDirection === UP)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY-1] > 0)  PlayerDirection = UP;
        }
        else if (PlayerXInBetweenTiles === 0)
        {
            PlayerDirection = UP;
        }
        else
        {
            if (ControlScheme === 1)  PlayerNextDirection = UP;
        }
    }
    else if (JoystickDirection === DOWN)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY+1] > 0)  PlayerDirection = DOWN;
        }
        else if (PlayerXInBetweenTiles === 0)
        {
            PlayerDirection = DOWN;
        }
        else
        {
            if (ControlScheme === 1)  PlayerNextDirection = DOWN;
        }
    }
    else if (JoystickDirection === LEFT)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (MapBoard[Level][PlayerPlayfieldX-1][PlayerPlayfieldY] > 0)  PlayerDirection = LEFT;
        }
        else if (PlayerYInBetweenTiles === 0)
        {
            PlayerDirection = LEFT;
        }
        else
        {
            if (ControlScheme === 1)  PlayerNextDirection = LEFT;
        }
    }
    else if (JoystickDirection === RIGHT)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (MapBoard[Level][PlayerPlayfieldX+1][PlayerPlayfieldY] > 0)  PlayerDirection = RIGHT;
        }
        else if (PlayerYInBetweenTiles === 0)
        {
            PlayerDirection = RIGHT;
        }
        else
        {
            if (ControlScheme === 1)  PlayerNextDirection = RIGHT;
        }
    }
//-------------------------------------------
    if (PlayerDirection === UP)
    {
        if (PlayerYInBetweenTiles === 0 && PlayerXInBetweenTiles === 0)
        {
            if (PlayerNextDirection === LEFT)
            {
                if (MapBoard[Level][PlayerPlayfieldX-1][PlayerPlayfieldY] > 0)  {PlayerDirection = LEFT; PlayerNextDirection = 0;}
            }
            else if (PlayerNextDirection === RIGHT)
            {
                if (MapBoard[Level][PlayerPlayfieldX+1][PlayerPlayfieldY] > 0)  {PlayerDirection = RIGHT; PlayerNextDirection = 0;}
            }

            if (PlayerDirection === UP)
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY-1] > 0)  PlayerYInBetweenTiles-=PlayerSpeed;
        }
        else if (PlayerYInBetweenTiles > -56)
        {
            PlayerYInBetweenTiles-=PlayerSpeed;
        }
        else
        {
            PlayerYInBetweenTiles = 0;
            PlayerPlayfieldY--;
        }
    }
    else if (PlayerDirection === DOWN)
    {
        if (PlayerYInBetweenTiles === 0 && PlayerXInBetweenTiles === 0)
        {
            if (PlayerNextDirection === LEFT)
            {
                if (MapBoard[Level][PlayerPlayfieldX-1][PlayerPlayfieldY] > 0)  { PlayerDirection = LEFT; PlayerNextDirection = 0;}
            }
            else if (PlayerNextDirection === RIGHT)
            {
                if (MapBoard[Level][PlayerPlayfieldX+1][PlayerPlayfieldY] > 0)  {PlayerDirection = RIGHT; PlayerNextDirection = 0;}
            }

            if (PlayerDirection === DOWN)
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY+1] > 0)  PlayerYInBetweenTiles+=PlayerSpeed;
        }
        else if (PlayerYInBetweenTiles < 56)
        {
            PlayerYInBetweenTiles+=PlayerSpeed;
        }
        else
        {
            PlayerYInBetweenTiles = 0;
            PlayerPlayfieldY++;
        }
    }
    else if (PlayerDirection === LEFT)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (PlayerNextDirection === UP)
            {
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY-1] > 0)  {PlayerDirection = UP; PlayerNextDirection = 0;}
            }
            else if (PlayerNextDirection === DOWN)
            {
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY+1] > 0)  {PlayerDirection = DOWN; PlayerNextDirection = 0;}
            }

            if (PlayerDirection === LEFT)
                if (MapBoard[Level][PlayerPlayfieldX-1][PlayerPlayfieldY] > 0)  PlayerXInBetweenTiles-=PlayerSpeed;
        }
        else if (PlayerXInBetweenTiles > -56)
        {
            PlayerXInBetweenTiles-=PlayerSpeed;
        }
        else
        {
            PlayerXInBetweenTiles = 0;
            PlayerPlayfieldX--;
        }
    }
    else if (PlayerDirection === RIGHT)
    {
        if (PlayerXInBetweenTiles === 0 && PlayerYInBetweenTiles === 0)
        {
            if (PlayerNextDirection === UP)
            {
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY-1] > 0)  {PlayerDirection = UP; PlayerNextDirection = 0;}
            }
            else if (PlayerNextDirection === DOWN)
            {
                if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY+1] > 0)  {PlayerDirection = DOWN; PlayerNextDirection = 0;}
            }

            if (PlayerDirection === RIGHT)
                if (MapBoard[Level][PlayerPlayfieldX+1][PlayerPlayfieldY] > 0)  PlayerXInBetweenTiles+=PlayerSpeed;
        }
        else if (PlayerXInBetweenTiles < 56)
        {
            PlayerXInBetweenTiles+=PlayerSpeed;
        }
        else
        {
            PlayerXInBetweenTiles = 0;
            PlayerPlayfieldX++;
        }
    }

    if (PlayerDirection === UP && PlayerYInBetweenTiles === 0)
    {
        if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] > 0 && MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] < 9)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 2)
            {
				PacDudePowerUp[UP].x = ( 320 );
				PacDudePowerUp[UP].y = ( 240 );
				PacDudePowerUp[UP].scale.x = 1;
				PacDudePowerUp[UP].scale.y = 1;
				PacDudePowerUp[UP].alpha = 1;

				if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();
				
				PowerPelletEatTimer = PowerPelletTime[Level];

				PlayEffect(EffectGhostsScared);				

                for (scaredIndex = 0; scaredIndex < 8; scaredIndex++)
                    if (GhostStatus[scaredIndex] === Attack)
                        GhostStatus[scaredIndex] = Scared;

                NumberOfEatenGhosts = 0;
            }

            Score+=(10*Level);
            if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
			PlayEffect(EffectEatPellet);
            if (SecretCodeTotal !== 4777)  CurrentNumberOfPelletsEaten++;
        }
    }
    else if (PlayerDirection === DOWN && PlayerYInBetweenTiles === 0)
    {
        if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] > 0 && MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] < 9)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 2)
            {
				PacDudePowerUp[DOWN].x = ( 320 );
				PacDudePowerUp[DOWN].y = ( 240 );
				PacDudePowerUp[DOWN].scale.x = 1;
				PacDudePowerUp[DOWN].scale.y = 1;
				PacDudePowerUp[DOWN].alpha = 1;

				if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();
				
				PowerPelletEatTimer = PowerPelletTime[Level];

				PlayEffect(EffectGhostsScared);				

                for (scaredIndex = 0; scaredIndex < 8; scaredIndex++)
                    if (GhostStatus[scaredIndex] === Attack)
                        GhostStatus[scaredIndex] = Scared;

                NumberOfEatenGhosts = 0;
            }

            Score+=(10*Level);
            if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
			PlayEffect(EffectEatPellet);
            if (SecretCodeTotal !== 4777)  CurrentNumberOfPelletsEaten++;
        }
    }
    else if (PlayerDirection === LEFT && PlayerXInBetweenTiles === 0)
    {
        if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] > 0 && MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] < 9)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 2)
            {
				PacDudePowerUp[LEFT].x = ( 320 );
				PacDudePowerUp[LEFT].y = ( 240 );
				PacDudePowerUp[LEFT].scale.x = 1;
				PacDudePowerUp[LEFT].scale.y = 1;
				PacDudePowerUp[LEFT].alpha = 1;

				if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();
				
				PowerPelletEatTimer = PowerPelletTime[Level];

				PlayEffect(EffectGhostsScared);				

                for (scaredIndex = 0; scaredIndex < 8; scaredIndex++)
                    if (GhostStatus[scaredIndex] === Attack)
                        GhostStatus[scaredIndex] = Scared;

                NumberOfEatenGhosts = 0;
            }

            Score+=(10*Level);
            if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
			PlayEffect(EffectEatPellet);
            if (SecretCodeTotal !== 4777)  CurrentNumberOfPelletsEaten++;
        }
    }
    else if (PlayerDirection === RIGHT && PlayerXInBetweenTiles === 0)
    {
        if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] > 0 && MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] < 9)
        {
            if (MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] === 2)
            {
				PacDudePowerUp[RIGHT].x = ( 320 );
				PacDudePowerUp[RIGHT].y = ( 240 );
				PacDudePowerUp[RIGHT].scale.x = 1;
				PacDudePowerUp[RIGHT].scale.y = 1;
				PacDudePowerUp[RIGHT].alpha = 1;

				if (PowerPelletEatTimer > 0)  EffectsHowler[EffectGhostsScared].stop();

				PowerPelletEatTimer = PowerPelletTime[Level];

				PlayEffect(EffectGhostsScared);				

                for (scaredIndex = 0; scaredIndex < 8; scaredIndex++)
                    if (GhostStatus[scaredIndex] === Attack)
                        GhostStatus[scaredIndex] = Scared;

                NumberOfEatenGhosts = 0;
            }

            Score+=(10*Level);
            if (SecretCodeTotal !== 4777)  MapBoard[Level][PlayerPlayfieldX][PlayerPlayfieldY] = 9;
			PlayEffect(EffectEatPellet);
            if (SecretCodeTotal !== 4777)  CurrentNumberOfPelletsEaten++;
        }
    }

    if (Oneupawarded === 0 && Score > 10000)
    {
        Oneupawarded = 1;
        Lives++;
        PlayEffect(Effect1UP);
    }
    else if (Oneupawarded === 1 && Score > 1000000)
    {
        Oneupawarded = 2;
        Lives++;
        PlayEffect(Effect1UP);
    }
}

//-------------------------------------------------------------------------------------------------
function RunGameplayCore()
{
	if (PlayerDied === false)
	{
        if (!(KeyboardCharacterPressed === " " && DelayAllUserInput === 0)) {
        } else {
            PAUSEgame = PAUSEgame === false;

            PlayEffect(EffectMenuClick);

            if (PAUSEgame === true) {
                MusicHowler[CurrentMusicPlaying].pause();
                DelayAllUserInput = 20;
            }
            else if (PAUSEgame === false) {
                MusicHowler[CurrentMusicPlaying].play();
                DelayAllUserInput = 10;
            }
        }

		if (PAUSEgame === true)  return;

		if (ReadyTimer > 0)
		{
			ReadyTimer--;
			return;
		}
		
		ProcessGhosts();
		
		ProcessPlayer();
			
		if (PowerPelletAnimationTimer < 6)  PowerPelletAnimationTimer++;
		else  PowerPelletAnimationTimer = 0;
					
		if (PowerPelletEatTimer > 1)
		{
			PowerPelletEatTimer--;		
		}
		else if (PowerPelletEatTimer === 1)
		{
			PowerPelletEatTimer = 0;
			
			EffectsHowler[EffectGhostsScared].stop();
			
			var ghost;
			for (ghost = 0; ghost < 8; ghost++)
			{
				if (GhostStatus[ghost] === Scared)  GhostStatus[ghost] = Attack;

				NumberOfEatenGhosts = 0;
				
				Ghosts[ghost][2].y = -9999;
				Ghosts[ghost][3].y = -9999;
			}
		}

		var thereIsScaredGhost = false;
		for (index = 0; index < 8; index++)
		{
			if (GhostActive[index] === true)
			{
				if (GhostStatus[index] === Scared)  thereIsScaredGhost = true;
			}
		}
		
		if (PowerPelletEatTimer > 0 && thereIsScaredGhost === false)  EffectsHowler[EffectGhostsScared].stop();
		
		var playerGhostCollision = new Array(8);
		for (index = 0; index < 8; index++)
		{
			playerGhostCollision[index] = -1;
		}

		for (index = 0; index < 8; index++)
		{
			if (GhostActive[index] === true)
			{
				var pFieldY;
				var pFieldX;
				
				for ( pFieldY = (PlayerPlayfieldY-1); pFieldY < (PlayerPlayfieldY+2); pFieldY++)
				{
					for ( pFieldX = (PlayerPlayfieldX-1); pFieldX < (PlayerPlayfieldX+2); pFieldX++)
					{
						if (playerGhostCollision[index] === -1)
						{
							if (pFieldX === GhostPlayfieldX[index] && pFieldY === GhostPlayfieldY[index])
							{
								if (PlayerPlayfieldY < GhostPlayfieldY[index] && PlayerPlayfieldX === GhostPlayfieldX[index])
								{
									for ( inbetweenY = PlayerYInBetweenTiles; inbetweenY > (PlayerYInBetweenTiles-32); inbetweenY-=2 )
									{
										if ( PlayerPlayfieldX === GhostPlayfieldX[index] && inbetweenY === (GhostYInBetweenTiles[index]+32) && inbetweenY > -64 )
											playerGhostCollision[index] = index;
									}
								}
								else if (PlayerPlayfieldY > GhostPlayfieldY[index] && PlayerPlayfieldX === GhostPlayfieldX[index])
								{
									for ( inbetweenY = PlayerYInBetweenTiles; inbetweenY < (PlayerYInBetweenTiles+32); inbetweenY+=2 )
									{
										if ( PlayerPlayfieldX === GhostPlayfieldX[index] && inbetweenY === (GhostYInBetweenTiles[index]-32) && inbetweenY < 64 )
											playerGhostCollision[index] = index;
									}
								}
								else if (PlayerPlayfieldX < GhostPlayfieldX[index] && PlayerPlayfieldY === GhostPlayfieldY[index])
								{
									for ( inbetweenX = PlayerXInBetweenTiles; inbetweenX > (PlayerXInBetweenTiles-32); inbetweenX-=2 )
									{
										if ( PlayerPlayfieldY === GhostPlayfieldY[index] && inbetweenX === (GhostXInBetweenTiles[index]+32) && inbetweenX > -64 )
											playerGhostCollision[index] = index;
									}
								}
								else if (PlayerPlayfieldX > GhostPlayfieldX[index] && PlayerPlayfieldY === GhostPlayfieldY[index])
								{
									for ( inbetweenX = PlayerXInBetweenTiles; inbetweenX < (PlayerXInBetweenTiles+32); inbetweenX+=2 )
									{
										if ( PlayerPlayfieldY === GhostPlayfieldY[index] && inbetweenX === (GhostXInBetweenTiles[index]-32) && inbetweenX < 64 )
											playerGhostCollision[index] = index;
									}
								}
								
								else if (PlayerPlayfieldY === GhostPlayfieldY[index] && PlayerPlayfieldX === GhostPlayfieldX[index])
								{
									if (PlayerYInBetweenTiles < GhostYInBetweenTiles[index])
									{
										for ( inbetweenY = (PlayerYInBetweenTiles+16); inbetweenY > (PlayerYInBetweenTiles-16); inbetweenY-=2 )
										{
											if ( inbetweenY === (GhostYInBetweenTiles[index]) && inbetweenY > -64 && inbetweenY < 64 )
												playerGhostCollision[index] = index;
										}
									}
									else if (PlayerYInBetweenTiles > GhostYInBetweenTiles[index])
									{
										for ( inbetweenY = (PlayerYInBetweenTiles-16); inbetweenY < (PlayerYInBetweenTiles+16); inbetweenY+=2 )
										{
											if ( inbetweenY === (GhostYInBetweenTiles[index]) && inbetweenY > -64 && inbetweenY < 64 )
												playerGhostCollision[index] = index;
										}
									}
									else if (PlayerXInBetweenTiles < GhostXInBetweenTiles[index])
									{
										for ( inbetweenX = (PlayerXInBetweenTiles+16); inbetweenX > (PlayerXInBetweenTiles-16); inbetweenX-=2 )
										{
											if ( inbetweenX === (GhostXInBetweenTiles[index]) && inbetweenX > -64 && inbetweenX < 64 )
												playerGhostCollision[index] = index;
										}
									}
									else if (PlayerXInBetweenTiles > GhostXInBetweenTiles[index])
									{
										for ( inbetweenX = (PlayerXInBetweenTiles-16); inbetweenX < (PlayerXInBetweenTiles+16); inbetweenX+=2 )
										{
											if ( inbetweenX === (GhostXInBetweenTiles[index]) && inbetweenX > -64 && inbetweenX < 64 )
												playerGhostCollision[index] = index;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		for (var index = 0; index < 8; index++)
		{
			if (playerGhostCollision[index] > -1)
			{
				if (GhostStatus[ playerGhostCollision[index] ] === Attack && SecretCodeTotal !== 4777)
				{
					playerGhostCollision[index] = -1;
					
					PlayEffect(EffectPacDeath);
					PlayerDied = true;
				}
				else if (GhostStatus[ playerGhostCollision[index] ] === Scared)
				{
					NumberOfEatenGhosts++;
										
					Ghosts[ playerGhostCollision[index] ][2].y = -9999;
					Ghosts[ playerGhostCollision[index] ][3].y = -9999;

					Score+=(Level*1000*NumberOfEatenGhosts);
					
					GhostStatus[ playerGhostCollision[index] ] = Eaten;

					playerGhostCollision[index] = -1;
					
					PlayEffect(EffectEatGhost);
				}
			}
		}
	}

	if (NumberOfPelletsOnLevel[Level] === CurrentNumberOfPelletsEaten || KeyboardCharacterPressed === "L")
	{
		CurrentNumberOfPelletsEaten = NumberOfPelletsOnLevel[Level];
		DelayAllUserInput = 20;
		
		if (Level < 6)  Level++;
		else
		{
			Score+=( (MinutesLeft*1000)+(SecondsLeft*100) );
		}
				
		LevelStatus = LevelCleared;
		
		ScreenFadeStatus = FadeOut;
	}
}
