//just see is there any problem in for black and for white function and there are some unfinished function which i have commented out

var tileSize = 100;
var database;
var white_KingPosition, white_QueenPosition, white_Rook1Position, white_Rook2Position, white_Bishub1Position, white_Bishub2Position, white_Knight1Position, white_Knight2Position;
var white_Pawn1Position, white_Pawn2Position, white_Pawn3Position, white_Pawn4Position, white_Pawn5Position, white_Pawn6Position, white_Pawn7Position, white_Pawn8Position;

var black_KingPosition, black_QueenPosition, black_Rook1Position, black_Rook2Position, black_Bishub1Position, black_Bishub2Position, black_Knight1Position, black_Knight2Position;
var black_Pawn1Position, black_Pawn2Position, black_Pawn3Position, black_Pawn4Position, black_Pawn5Position, black_Pawn6Position, black_Pawn7Position, black_Pawn8Position;

var gameState = "selecting";

var chance = "white";

var movement = "continue";

var canWhiteCastle = "yes";

var canBlackCastle = "yes";

var canIGo = "no";

var touches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  white_King = createSprite(450,450,25,25);
  black_King = createSprite(450,450,25,25);

  white_Queen = createSprite(350,750,25,25);
  black_Queen = createSprite(450,450,25,25);

  white_Rook1 = createSprite(450,450,25,25);
  black_Rook1 = createSprite(450,450,25,25);

  white_Rook2 = createSprite(450,450,25,25);
  black_Rook2 = createSprite(450,450,25,25);

  white_Knight1 = createSprite(450,450,25,25);
  black_Knight1 = createSprite(450,450,25,25);

  white_Knight2 = createSprite(450,450,25,25);
  black_Knight2 = createSprite(450,450,25,25);

  white_Bishub1 = createSprite(450,450,25,25);
  black_Bishub1 = createSprite(450,450,25,25);

  white_Bishub2 = createSprite(450,450,25,25);
  black_Bishub2 = createSprite(450,450,25,25);

  white_Pawn1 = createSprite(450,450,25,25);
  black_Pawn1 = createSprite(450,450,25,25);

  white_Pawn2 = createSprite(450,450,25,25);
  black_Pawn2 = createSprite(450,450,25,25);

  white_Pawn3 = createSprite(450,450,25,25);
  black_Pawn3 = createSprite(450,450,25,25);

  white_Pawn4 = createSprite(450,450,25,25);
  black_Pawn4 = createSprite(450,450,25,25);

  white_Pawn5 = createSprite(450,450,25,25);
  black_Pawn5 = createSprite(450,450,25,25);

  white_Pawn6 = createSprite(450,450,25,25);
  black_Pawn6 = createSprite(450,450,25,25);

  white_Pawn7 = createSprite(450,450,25,25);
  black_Pawn7 = createSprite(450,450,25,25);

  white_Pawn8 = createSprite(450,450,25,25);
  black_Pawn8 = createSprite(450,450,25,25);


  king1MovesA = createSprite(0,0, 50, 50);
  king1MovesB = createSprite(0,0, 50, 50);
  king1MovesC = createSprite(0,0, 50, 50);
  king1MovesD = createSprite(0,0, 50, 50);
  king1MovesE = createSprite(0,0, 50, 50);
  king1MovesF = createSprite(0,0, 50, 50);
  king1MovesG = createSprite(0,0, 50, 50);
  king1MovesH = createSprite(0,0, 50, 50);

  king2MovesA = createSprite(0,0, 50, 50);
  king2MovesB = createSprite(0,0, 50, 50);
  king2MovesC = createSprite(0,0, 50, 50);
  king2MovesD = createSprite(0,0, 50, 50);
  king2MovesE = createSprite(0,0, 50, 50);
  king2MovesF = createSprite(0,0, 50, 50);
  king2MovesG = createSprite(0,0, 50, 50);
  king2MovesH = createSprite(0,0, 50, 50);

  WhitePawn1Move1 = createSprite(0,0,50,50);
  WhitePawn1Move2 = createSprite(0,0,50,50);
  WhitePawn1Move3 = createSprite(0,0,50,50);
  WhitePawn1Move4 = createSprite(0,0,50,50);

  WhitePawn2Move1 = createSprite(0,0,50,50);
  WhitePawn2Move2 = createSprite(0,0,50,50);
  WhitePawn2Move3 = createSprite(0,0,50,50);
  WhitePawn2Move4 = createSprite(0,0,50,50);

  WhitePawn3Move1 = createSprite(0,0,50,50);
  WhitePawn3Move2 = createSprite(0,0,50,50);
  WhitePawn3Move3 = createSprite(0,0,50,50);
  WhitePawn3Move4 = createSprite(0,0,50,50);

  WhitePawn4Move1 = createSprite(0,0,50,50);
  WhitePawn4Move2 = createSprite(0,0,50,50);
  WhitePawn4Move3 = createSprite(0,0,50,50);
  WhitePawn4Move4 = createSprite(0,0,50,50);

  WhitePawn5Move1 = createSprite(0,0,50,50);
  WhitePawn5Move2 = createSprite(0,0,50,50);
  WhitePawn5Move3 = createSprite(0,0,50,50);
  WhitePawn5Move4 = createSprite(0,0,50,50);

  WhitePawn6Move1 = createSprite(0,0,50,50);
  WhitePawn6Move2 = createSprite(0,0,50,50);
  WhitePawn6Move3 = createSprite(0,0,50,50);
  WhitePawn6Move4 = createSprite(0,0,50,50);

  WhitePawn7Move1 = createSprite(0,0,50,50);
  WhitePawn7Move2 = createSprite(0,0,50,50);
  WhitePawn7Move3 = createSprite(0,0,50,50);
  WhitePawn7Move4 = createSprite(0,0,50,50);

  WhitePawn8Move1 = createSprite(0,0,50,50);
  WhitePawn8Move2 = createSprite(0,0,50,50);
  WhitePawn8Move3 = createSprite(0,0,50,50);
  WhitePawn8Move4 = createSprite(0,0,50,50);
  

  blackPawn1Move1 = createSprite(0,0,50,50);
  blackPawn1Move2 = createSprite(0,0,50,50);
  blackPawn1Move3 = createSprite(0,0,50,50);
  blackPawn1Move4 = createSprite(0,0,50,50);

  blackPawn2Move1 = createSprite(0,0,50,50);
  blackPawn2Move2 = createSprite(0,0,50,50);
  blackPawn2Move3 = createSprite(0,0,50,50);
  blackPawn2Move4 = createSprite(0,0,50,50);

  blackPawn3Move1 = createSprite(0,0,50,50);
  blackPawn3Move2 = createSprite(0,0,50,50);
  blackPawn3Move3 = createSprite(0,0,50,50);
  blackPawn3Move4 = createSprite(0,0,50,50);

  blackPawn4Move1 = createSprite(0,0,50,50);
  blackPawn4Move2 = createSprite(0,0,50,50);
  blackPawn4Move3 = createSprite(0,0,50,50);
  blackPawn4Move4 = createSprite(0,0,50,50);

  blackPawn5Move1 = createSprite(0,0,50,50);
  blackPawn5Move2 = createSprite(0,0,50,50);
  blackPawn5Move3 = createSprite(0,0,50,50);
  blackPawn5Move4 = createSprite(0,0,50,50);

  blackPawn6Move1 = createSprite(0,0,50,50);
  blackPawn6Move2 = createSprite(0,0,50,50);
  blackPawn6Move3 = createSprite(0,0,50,50);
  blackPawn6Move4 = createSprite(0,0,50,50);

  blackPawn7Move1 = createSprite(0,0,50,50);
  blackPawn7Move2 = createSprite(0,0,50,50);
  blackPawn7Move3 = createSprite(0,0,50,50);
  blackPawn7Move4 = createSprite(0,0,50,50);

  blackPawn8Move1 = createSprite(0,0,50,50);
  blackPawn8Move2 = createSprite(0,0,50,50);
  blackPawn8Move3 = createSprite(0,0,50,50);
  blackPawn8Move4 = createSprite(0,0,50,50);



  whiteQueenMove1 = createSprite(0,0,50,50);
  whiteQueenMove2 = createSprite(0,0,50,50);
  whiteQueenMove3 = createSprite(0,0,50,50);
  whiteQueenMove4 = createSprite(0,0,50,50);

  whiteQueenMove5 = createSprite(0,0,50,50);
  whiteQueenMove6 = createSprite(0,0,50,50);
  whiteQueenMove7 = createSprite(0,0,50,50);
  whiteQueenMove8 = createSprite(0,0,50,50);

  whiteQueenMove9 = createSprite(0,0,50,50);
  whiteQueenMove10 = createSprite(0,0,50,50);
  whiteQueenMove11 = createSprite(0,0,50,50);
  whiteQueenMove12 = createSprite(0,0,50,50);

  whiteQueenMove13 = createSprite(0,0,50,50);
  whiteQueenMove14 = createSprite(0,0,50,50);
  whiteQueenMove15 = createSprite(0,0,50,50);
  whiteQueenMove16 = createSprite(0,0,50,50);

  whiteQueenMove17 = createSprite(0,0,50,50);
  whiteQueenMove18 = createSprite(0,0,50,50);
  whiteQueenMove19 = createSprite(0,0,50,50);
  whiteQueenMove20 = createSprite(0,0,50,50);

  whiteQueenMove21 = createSprite(0,0,50,50);
  whiteQueenMove22 = createSprite(0,0,50,50);
  whiteQueenMove23 = createSprite(0,0,50,50);
  whiteQueenMove24 = createSprite(0,0,50,50);

  whiteQueenMove25 = createSprite(0,0,50,50);
  whiteQueenMove26 = createSprite(0,0,50,50);
  whiteQueenMove27 = createSprite(0,0,50,50);
  whiteQueenMove28 = createSprite(0,0,50,50);

  whiteQueenMove29 = createSprite(0,0,50,50);
  whiteQueenMove30 = createSprite(0,0,50,50);
  whiteQueenMove31 = createSprite(0,0,50,50);
  whiteQueenMove32 = createSprite(0,0,50,50);

  whiteQueenMove33 = createSprite(0,0,50,50);
  whiteQueenMove34 = createSprite(0,0,50,50);
  whiteQueenMove35 = createSprite(0,0,50,50);
  whiteQueenMove36 = createSprite(0,0,50,50);

  whiteQueenMove37 = createSprite(0,0,50,50);
  whiteQueenMove38 = createSprite(0,0,50,50);
  whiteQueenMove39 = createSprite(0,0,50,50);
  whiteQueenMove40 = createSprite(0,0,50,50);

  whiteQueenMove41 = createSprite(0,0,50,50);
  whiteQueenMove42 = createSprite(0,0,50,50);
  whiteQueenMove43 = createSprite(0,0,50,50);
  whiteQueenMove44 = createSprite(0,0,50,50);

  whiteQueenMove45 = createSprite(0,0,50,50);
  whiteQueenMove46 = createSprite(0,0,50,50);
  whiteQueenMove47 = createSprite(0,0,50,50);
  whiteQueenMove48 = createSprite(0,0,50,50);

  whiteQueenMove49 = createSprite(0,0,50,50);
  whiteQueenMove50 = createSprite(0,0,50,50);
  whiteQueenMove51 = createSprite(0,0,50,50);
  whiteQueenMove52 = createSprite(0,0,50,50);

  whiteQueenMove53 = createSprite(0,0,50,50);
  whiteQueenMove54 = createSprite(0,0,50,50);
  whiteQueenMove55 = createSprite(0,0,50,50);
  whiteQueenMove56 = createSprite(0,0,50,50);

  

  blackQueenMove1 = createSprite(0,0,50,50);
  blackQueenMove2 = createSprite(0,0,50,50);
  blackQueenMove3 = createSprite(0,0,50,50);
  blackQueenMove4 = createSprite(0,0,50,50);

  blackQueenMove5 = createSprite(0,0,50,50);
  blackQueenMove6 = createSprite(0,0,50,50);
  blackQueenMove7 = createSprite(0,0,50,50);
  blackQueenMove8 = createSprite(0,0,50,50);

  blackQueenMove9 = createSprite(0,0,50,50);
  blackQueenMove10 = createSprite(0,0,50,50);
  blackQueenMove11 = createSprite(0,0,50,50);
  blackQueenMove12 = createSprite(0,0,50,50);

  blackQueenMove13 = createSprite(0,0,50,50);
  blackQueenMove14 = createSprite(0,0,50,50);
  blackQueenMove15 = createSprite(0,0,50,50);
  blackQueenMove16 = createSprite(0,0,50,50);

  blackQueenMove17 = createSprite(0,0,50,50);
  blackQueenMove18 = createSprite(0,0,50,50);
  blackQueenMove19 = createSprite(0,0,50,50);
  blackQueenMove20 = createSprite(0,0,50,50);

  blackQueenMove21 = createSprite(0,0,50,50);
  blackQueenMove22 = createSprite(0,0,50,50);
  blackQueenMove23 = createSprite(0,0,50,50);
  blackQueenMove24 = createSprite(0,0,50,50);

  blackQueenMove25 = createSprite(0,0,50,50);
  blackQueenMove26 = createSprite(0,0,50,50);
  blackQueenMove27 = createSprite(0,0,50,50);
  blackQueenMove28 = createSprite(0,0,50,50);

  blackQueenMove29 = createSprite(0,0,50,50);
  blackQueenMove30 = createSprite(0,0,50,50);
  blackQueenMove31 = createSprite(0,0,50,50);
  blackQueenMove32 = createSprite(0,0,50,50);

  blackQueenMove33 = createSprite(0,0,50,50);
  blackQueenMove34 = createSprite(0,0,50,50);
  blackQueenMove35 = createSprite(0,0,50,50);
  blackQueenMove36 = createSprite(0,0,50,50);

  blackQueenMove37 = createSprite(0,0,50,50);
  blackQueenMove38 = createSprite(0,0,50,50);
  blackQueenMove39 = createSprite(0,0,50,50);
  blackQueenMove40 = createSprite(0,0,50,50);

  blackQueenMove41 = createSprite(0,0,50,50);
  blackQueenMove42 = createSprite(0,0,50,50);
  blackQueenMove43 = createSprite(0,0,50,50);
  blackQueenMove44 = createSprite(0,0,50,50);

  blackQueenMove45 = createSprite(0,0,50,50);
  blackQueenMove46 = createSprite(0,0,50,50);
  blackQueenMove47 = createSprite(0,0,50,50);
  blackQueenMove48 = createSprite(0,0,50,50);

  blackQueenMove49 = createSprite(0,0,50,50);
  blackQueenMove50 = createSprite(0,0,50,50);
  blackQueenMove51 = createSprite(0,0,50,50);
  blackQueenMove52 = createSprite(0,0,50,50);

  blackQueenMove53 = createSprite(0,0,50,50);
  blackQueenMove54 = createSprite(0,0,50,50);
  blackQueenMove55 = createSprite(0,0,50,50);
  blackQueenMove56 = createSprite(0,0,50,50);



  whiteBishubMove1 = createSprite(0,0,50,50);
  whiteBishubMove2 = createSprite(0,0,50,50);
  whiteBishubMove3 = createSprite(0,0,50,50);
  whiteBishubMove4 = createSprite(0,0,50,50);

  whiteBishubMove5 = createSprite(0,0,50,50);
  whiteBishubMove6 = createSprite(0,0,50,50);
  whiteBishubMove7 = createSprite(0,0,50,50);
  whiteBishubMove8 = createSprite(0,0,50,50);

  whiteBishubMove9 = createSprite(0,0,50,50);
  whiteBishubMove10 = createSprite(0,0,50,50);
  whiteBishubMove11 = createSprite(0,0,50,50);
  whiteBishubMove12 = createSprite(0,0,50,50);

  whiteBishubMove13 = createSprite(0,0,50,50);
  whiteBishubMove14 = createSprite(0,0,50,50);
  whiteBishubMove15 = createSprite(0,0,50,50);
  whiteBishubMove16 = createSprite(0,0,50,50);

  whiteBishubMove17 = createSprite(0,0,50,50);
  whiteBishubMove18 = createSprite(0,0,50,50);
  whiteBishubMove19 = createSprite(0,0,50,50);
  whiteBishubMove20 = createSprite(0,0,50,50);

  whiteBishubMove21 = createSprite(0,0,50,50);
  whiteBishubMove22 = createSprite(0,0,50,50);
  whiteBishubMove23 = createSprite(0,0,50,50);
  whiteBishubMove24 = createSprite(0,0,50,50);

  whiteBishubMove25 = createSprite(0,0,50,50);
  whiteBishubMove26 = createSprite(0,0,50,50);
  whiteBishubMove27 = createSprite(0,0,50,50);
  whiteBishubMove28 = createSprite(0,0,50,50);



  whiteBishub2Move1 = createSprite(0,0,50,50);
  whiteBishub2Move2 = createSprite(0,0,50,50);
  whiteBishub2Move3 = createSprite(0,0,50,50);
  whiteBishub2Move4 = createSprite(0,0,50,50);

  whiteBishub2Move5 = createSprite(0,0,50,50);
  whiteBishub2Move6 = createSprite(0,0,50,50);
  whiteBishub2Move7 = createSprite(0,0,50,50);
  whiteBishub2Move8 = createSprite(0,0,50,50);

  whiteBishub2Move9 = createSprite(0,0,50,50);
  whiteBishub2Move10 = createSprite(0,0,50,50);
  whiteBishub2Move11 = createSprite(0,0,50,50);
  whiteBishub2Move12 = createSprite(0,0,50,50);

  whiteBishub2Move13 = createSprite(0,0,50,50);
  whiteBishub2Move14 = createSprite(0,0,50,50);
  whiteBishub2Move15 = createSprite(0,0,50,50);
  whiteBishub2Move16 = createSprite(0,0,50,50);

  whiteBishub2Move17 = createSprite(0,0,50,50);
  whiteBishub2Move18 = createSprite(0,0,50,50);
  whiteBishub2Move19 = createSprite(0,0,50,50);
  whiteBishub2Move20 = createSprite(0,0,50,50);

  whiteBishub2Move21 = createSprite(0,0,50,50);
  whiteBishub2Move22 = createSprite(0,0,50,50);
  whiteBishub2Move23 = createSprite(0,0,50,50);
  whiteBishub2Move24 = createSprite(0,0,50,50);

  whiteBishub2Move25 = createSprite(0,0,50,50);
  whiteBishub2Move26 = createSprite(0,0,50,50);
  whiteBishub2Move27 = createSprite(0,0,50,50);
  whiteBishub2Move28 = createSprite(0,0,50,50);



  whiteRook1Move1 = createSprite(0,0,50,50);
  whiteRook1Move2 = createSprite(0,0,50,50);
  whiteRook1Move3 = createSprite(0,0,50,50);
  whiteRook1Move4 = createSprite(0,0,50,50);

  whiteRook1Move5 = createSprite(0,0,50,50);
  whiteRook1Move6 = createSprite(0,0,50,50);
  whiteRook1Move7 = createSprite(0,0,50,50);
  whiteRook1Move8 = createSprite(0,0,50,50);

  whiteRook1Move9 = createSprite(0,0,50,50);
  whiteRook1Move10 = createSprite(0,0,50,50);
  whiteRook1Move11 = createSprite(0,0,50,50);
  whiteRook1Move12 = createSprite(0,0,50,50);

  whiteRook1Move13 = createSprite(0,0,50,50);
  whiteRook1Move14 = createSprite(0,0,50,50);
  whiteRook1Move15 = createSprite(0,0,50,50);
  whiteRook1Move16 = createSprite(0,0,50,50);

  whiteRook1Move17 = createSprite(0,0,50,50);
  whiteRook1Move18 = createSprite(0,0,50,50);
  whiteRook1Move19 = createSprite(0,0,50,50);
  whiteRook1Move20 = createSprite(0,0,50,50);

  whiteRook1Move21 = createSprite(0,0,50,50);
  whiteRook1Move22 = createSprite(0,0,50,50);
  whiteRook1Move23 = createSprite(0,0,50,50);
  whiteRook1Move24 = createSprite(0,0,50,50);

  whiteRook1Move25 = createSprite(0,0,50,50);
  whiteRook1Move26 = createSprite(0,0,50,50);
  whiteRook1Move27 = createSprite(0,0,50,50);
  whiteRook1Move28 = createSprite(0,0,50,50);



  whiteRook2Move1 = createSprite(0,0,50,50);
  whiteRook2Move2 = createSprite(0,0,50,50);
  whiteRook2Move3 = createSprite(0,0,50,50);
  whiteRook2Move4 = createSprite(0,0,50,50);

  whiteRook2Move5 = createSprite(0,0,50,50);
  whiteRook2Move6 = createSprite(0,0,50,50);
  whiteRook2Move7 = createSprite(0,0,50,50);
  whiteRook2Move8 = createSprite(0,0,50,50);

  whiteRook2Move9 = createSprite(0,0,50,50);
  whiteRook2Move10 = createSprite(0,0,50,50);
  whiteRook2Move11 = createSprite(0,0,50,50);
  whiteRook2Move12 = createSprite(0,0,50,50);

  whiteRook2Move13 = createSprite(0,0,50,50);
  whiteRook2Move14 = createSprite(0,0,50,50);
  whiteRook2Move15 = createSprite(0,0,50,50);
  whiteRook2Move16 = createSprite(0,0,50,50);

  whiteRook2Move17 = createSprite(0,0,50,50);
  whiteRook2Move18 = createSprite(0,0,50,50);
  whiteRook2Move19 = createSprite(0,0,50,50);
  whiteRook2Move20 = createSprite(0,0,50,50);

  whiteRook2Move21 = createSprite(0,0,50,50);
  whiteRook2Move22 = createSprite(0,0,50,50);
  whiteRook2Move23 = createSprite(0,0,50,50);
  whiteRook2Move24 = createSprite(0,0,50,50);

  whiteRook2Move25 = createSprite(0,0,50,50);
  whiteRook2Move26 = createSprite(0,0,50,50);
  whiteRook2Move27 = createSprite(0,0,50,50);
  whiteRook2Move28 = createSprite(0,0,50,50);



  whiteKnight1Move1 = createSprite(0,0,50,50);
  whiteKnight1Move2 = createSprite(0,0,50,50);
  whiteKnight1Move3 = createSprite(0,0,50,50);
  whiteKnight1Move4 = createSprite(0,0,50,50);

  whiteKnight1Move5 = createSprite(0,0,50,50);
  whiteKnight1Move6 = createSprite(0,0,50,50);
  whiteKnight1Move7 = createSprite(0,0,50,50);
  whiteKnight1Move8 = createSprite(0,0,50,50);

  whiteKnight2Move1 = createSprite(0,0,50,50);
  whiteKnight2Move2 = createSprite(0,0,50,50);
  whiteKnight2Move3 = createSprite(0,0,50,50);
  whiteKnight2Move4 = createSprite(0,0,50,50);

  whiteKnight2Move5 = createSprite(0,0,50,50);
  whiteKnight2Move6 = createSprite(0,0,50,50);
  whiteKnight2Move7 = createSprite(0,0,50,50);
  whiteKnight2Move8 = createSprite(0,0,50,50);



  blackBishubMove1 = createSprite(0,0,50,50);
  blackBishubMove2 = createSprite(0,0,50,50);
  blackBishubMove3 = createSprite(0,0,50,50);
  blackBishubMove4 = createSprite(0,0,50,50);

  blackBishubMove5 = createSprite(0,0,50,50);
  blackBishubMove6 = createSprite(0,0,50,50);
  blackBishubMove7 = createSprite(0,0,50,50);
  blackBishubMove8 = createSprite(0,0,50,50);

  blackBishubMove9 = createSprite(0,0,50,50);
  blackBishubMove10 = createSprite(0,0,50,50);
  blackBishubMove11 = createSprite(0,0,50,50);
  blackBishubMove12 = createSprite(0,0,50,50);

  blackBishubMove13 = createSprite(0,0,50,50);
  blackBishubMove14 = createSprite(0,0,50,50);
  blackBishubMove15 = createSprite(0,0,50,50);
  blackBishubMove16 = createSprite(0,0,50,50);

  blackBishubMove17 = createSprite(0,0,50,50);
  blackBishubMove18 = createSprite(0,0,50,50);
  blackBishubMove19 = createSprite(0,0,50,50);
  blackBishubMove20 = createSprite(0,0,50,50);

  blackBishubMove21 = createSprite(0,0,50,50);
  blackBishubMove22 = createSprite(0,0,50,50);
  blackBishubMove23 = createSprite(0,0,50,50);
  blackBishubMove24 = createSprite(0,0,50,50);

  blackBishubMove25 = createSprite(0,0,50,50);
  blackBishubMove26 = createSprite(0,0,50,50);
  blackBishubMove27 = createSprite(0,0,50,50);
  blackBishubMove28 = createSprite(0,0,50,50);



  blackBishub2Move1 = createSprite(0,0,50,50);
  blackBishub2Move2 = createSprite(0,0,50,50);
  blackBishub2Move3 = createSprite(0,0,50,50);
  blackBishub2Move4 = createSprite(0,0,50,50);

  blackBishub2Move5 = createSprite(0,0,50,50);
  blackBishub2Move6 = createSprite(0,0,50,50);
  blackBishub2Move7 = createSprite(0,0,50,50);
  blackBishub2Move8 = createSprite(0,0,50,50);

  blackBishub2Move9 = createSprite(0,0,50,50);
  blackBishub2Move10 = createSprite(0,0,50,50);
  blackBishub2Move11 = createSprite(0,0,50,50);
  blackBishub2Move12 = createSprite(0,0,50,50);

  blackBishub2Move13 = createSprite(0,0,50,50);
  blackBishub2Move14 = createSprite(0,0,50,50);
  blackBishub2Move15 = createSprite(0,0,50,50);
  blackBishub2Move16 = createSprite(0,0,50,50);

  blackBishub2Move17 = createSprite(0,0,50,50);
  blackBishub2Move18 = createSprite(0,0,50,50);
  blackBishub2Move19 = createSprite(0,0,50,50);
  blackBishub2Move20 = createSprite(0,0,50,50);

  blackBishub2Move21 = createSprite(0,0,50,50);
  blackBishub2Move22 = createSprite(0,0,50,50);
  blackBishub2Move23 = createSprite(0,0,50,50);
  blackBishub2Move24 = createSprite(0,0,50,50);

  blackBishub2Move25 = createSprite(0,0,50,50);
  blackBishub2Move26 = createSprite(0,0,50,50);
  blackBishub2Move27 = createSprite(0,0,50,50);
  blackBishub2Move28 = createSprite(0,0,50,50);



  blackRook1Move1 = createSprite(0,0,50,50);
  blackRook1Move2 = createSprite(0,0,50,50);
  blackRook1Move3 = createSprite(0,0,50,50);
  blackRook1Move4 = createSprite(0,0,50,50);

  blackRook1Move5 = createSprite(0,0,50,50);
  blackRook1Move6 = createSprite(0,0,50,50);
  blackRook1Move7 = createSprite(0,0,50,50);
  blackRook1Move8 = createSprite(0,0,50,50);

  blackRook1Move9 = createSprite(0,0,50,50);
  blackRook1Move10 = createSprite(0,0,50,50);
  blackRook1Move11 = createSprite(0,0,50,50);
  blackRook1Move12 = createSprite(0,0,50,50);

  blackRook1Move13 = createSprite(0,0,50,50);
  blackRook1Move14 = createSprite(0,0,50,50);
  blackRook1Move15 = createSprite(0,0,50,50);
  blackRook1Move16 = createSprite(0,0,50,50);

  blackRook1Move17 = createSprite(0,0,50,50);
  blackRook1Move18 = createSprite(0,0,50,50);
  blackRook1Move19 = createSprite(0,0,50,50);
  blackRook1Move20 = createSprite(0,0,50,50);

  blackRook1Move21 = createSprite(0,0,50,50);
  blackRook1Move22 = createSprite(0,0,50,50);
  blackRook1Move23 = createSprite(0,0,50,50);
  blackRook1Move24 = createSprite(0,0,50,50);

  blackRook1Move25 = createSprite(0,0,50,50);
  blackRook1Move26 = createSprite(0,0,50,50);
  blackRook1Move27 = createSprite(0,0,50,50);
  blackRook1Move28 = createSprite(0,0,50,50);



  blackRook2Move1 = createSprite(0,0,50,50);
  blackRook2Move2 = createSprite(0,0,50,50);
  blackRook2Move3 = createSprite(0,0,50,50);
  blackRook2Move4 = createSprite(0,0,50,50);

  blackRook2Move5 = createSprite(0,0,50,50);
  blackRook2Move6 = createSprite(0,0,50,50);
  blackRook2Move7 = createSprite(0,0,50,50);
  blackRook2Move8 = createSprite(0,0,50,50);

  blackRook2Move9 = createSprite(0,0,50,50);
  blackRook2Move10 = createSprite(0,0,50,50);
  blackRook2Move11 = createSprite(0,0,50,50);
  blackRook2Move12 = createSprite(0,0,50,50);

  blackRook2Move13 = createSprite(0,0,50,50);
  blackRook2Move14 = createSprite(0,0,50,50);
  blackRook2Move15 = createSprite(0,0,50,50);
  blackRook2Move16 = createSprite(0,0,50,50);

  blackRook2Move17 = createSprite(0,0,50,50);
  blackRook2Move18 = createSprite(0,0,50,50);
  blackRook2Move19 = createSprite(0,0,50,50);
  blackRook2Move20 = createSprite(0,0,50,50);

  blackRook2Move21 = createSprite(0,0,50,50);
  blackRook2Move22 = createSprite(0,0,50,50);
  blackRook2Move23 = createSprite(0,0,50,50);
  blackRook2Move24 = createSprite(0,0,50,50);

  blackRook2Move25 = createSprite(0,0,50,50);
  blackRook2Move26 = createSprite(0,0,50,50);
  blackRook2Move27 = createSprite(0,0,50,50);
  blackRook2Move28 = createSprite(0,0,50,50);



  blackKnight1Move1 = createSprite(0,0,50,50);
  blackKnight1Move2 = createSprite(0,0,50,50);
  blackKnight1Move3 = createSprite(0,0,50,50);
  blackKnight1Move4 = createSprite(0,0,50,50);

  blackKnight1Move5 = createSprite(0,0,50,50);
  blackKnight1Move6 = createSprite(0,0,50,50);
  blackKnight1Move7 = createSprite(0,0,50,50);
  blackKnight1Move8 = createSprite(0,0,50,50);

  blackKnight2Move1 = createSprite(0,0,50,50);
  blackKnight2Move2 = createSprite(0,0,50,50);
  blackKnight2Move3 = createSprite(0,0,50,50);
  blackKnight2Move4 = createSprite(0,0,50,50);

  blackKnight2Move5 = createSprite(0,0,50,50);
  blackKnight2Move6 = createSprite(0,0,50,50);
  blackKnight2Move7 = createSprite(0,0,50,50);
  blackKnight2Move8 = createSprite(0,0,50,50);


  blackPieces = createGroup();

  blackPieces.add(black_King);
  blackPieces.add(black_Queen);
  blackPieces.add(black_Rook1);
  blackPieces.add(black_Rook2);
  blackPieces.add(black_Bishub1);
  blackPieces.add(black_Bishub2);
  blackPieces.add(black_Knight1);
  blackPieces.add(black_Knight2);
  blackPieces.add(black_Pawn1);
  blackPieces.add(black_Pawn2);
  blackPieces.add(black_Pawn3);
  blackPieces.add(black_Pawn4);
  blackPieces.add(black_Pawn5);
  blackPieces.add(black_Pawn6);
  blackPieces.add(black_Pawn7);
  blackPieces.add(black_Pawn8);
  
  white = createGroup();

  white.add(white_King);
  white.add(white_Queen);
  white.add(white_Rook1);
  white.add(white_Rook2);
  white.add(white_Bishub1);
  white.add(white_Bishub2);
  white.add(white_Knight1);
  white.add(white_Knight2);
  white.add(white_Pawn1);
  white.add(white_Pawn2);
  white.add(white_Pawn3);
  white.add(white_Pawn4);
  white.add(white_Pawn5);
  white.add(white_Pawn6);
  white.add(white_Pawn7);
  white.add(white_Pawn8);


  whiteQueenMoveGroup = createGroup();

  whiteQueenMoveGroup.add(whiteQueenMove1);
  whiteQueenMoveGroup.add(whiteQueenMove2);
  whiteQueenMoveGroup.add(whiteQueenMove3);
  whiteQueenMoveGroup.add(whiteQueenMove4);
  whiteQueenMoveGroup.add(whiteQueenMove5);
  whiteQueenMoveGroup.add(whiteQueenMove6);
  whiteQueenMoveGroup.add(whiteQueenMove7);
  whiteQueenMoveGroup.add(whiteQueenMove8);
  whiteQueenMoveGroup.add(whiteQueenMove9);
  whiteQueenMoveGroup.add(whiteQueenMove10);
  whiteQueenMoveGroup.add(whiteQueenMove11);
  whiteQueenMoveGroup.add(whiteQueenMove12);
  whiteQueenMoveGroup.add(whiteQueenMove13);
  whiteQueenMoveGroup.add(whiteQueenMove14);
  whiteQueenMoveGroup.add(whiteQueenMove15);
  whiteQueenMoveGroup.add(whiteQueenMove16);
  whiteQueenMoveGroup.add(whiteQueenMove17);
  whiteQueenMoveGroup.add(whiteQueenMove18);
  whiteQueenMoveGroup.add(whiteQueenMove19);
  whiteQueenMoveGroup.add(whiteQueenMove20);
  whiteQueenMoveGroup.add(whiteQueenMove21);
  whiteQueenMoveGroup.add(whiteQueenMove22);
  whiteQueenMoveGroup.add(whiteQueenMove23);
  whiteQueenMoveGroup.add(whiteQueenMove24);
  whiteQueenMoveGroup.add(whiteQueenMove25);
  whiteQueenMoveGroup.add(whiteQueenMove26);
  whiteQueenMoveGroup.add(whiteQueenMove27);
  whiteQueenMoveGroup.add(whiteQueenMove28);
  whiteQueenMoveGroup.add(whiteQueenMove29);
  whiteQueenMoveGroup.add(whiteQueenMove30);
  whiteQueenMoveGroup.add(whiteQueenMove31);
  whiteQueenMoveGroup.add(whiteQueenMove32);
  whiteQueenMoveGroup.add(whiteQueenMove33);
  whiteQueenMoveGroup.add(whiteQueenMove34);
  whiteQueenMoveGroup.add(whiteQueenMove35);
  whiteQueenMoveGroup.add(whiteQueenMove36);
  whiteQueenMoveGroup.add(whiteQueenMove37);
  whiteQueenMoveGroup.add(whiteQueenMove38);
  whiteQueenMoveGroup.add(whiteQueenMove39);
  whiteQueenMoveGroup.add(whiteQueenMove40);
  whiteQueenMoveGroup.add(whiteQueenMove41);
  whiteQueenMoveGroup.add(whiteQueenMove42);
  whiteQueenMoveGroup.add(whiteQueenMove43);
  whiteQueenMoveGroup.add(whiteQueenMove44);
  whiteQueenMoveGroup.add(whiteQueenMove45);
  whiteQueenMoveGroup.add(whiteQueenMove46);
  whiteQueenMoveGroup.add(whiteQueenMove47);
  whiteQueenMoveGroup.add(whiteQueenMove48);
  whiteQueenMoveGroup.add(whiteQueenMove49);
  whiteQueenMoveGroup.add(whiteQueenMove50);
  whiteQueenMoveGroup.add(whiteQueenMove51);
  whiteQueenMoveGroup.add(whiteQueenMove52);
  whiteQueenMoveGroup.add(whiteQueenMove53);
  whiteQueenMoveGroup.add(whiteQueenMove54);
  whiteQueenMoveGroup.add(whiteQueenMove55);
  whiteQueenMoveGroup.add(whiteQueenMove56);



  whiteBishubMoveGroup = createGroup();

  whiteBishubMoveGroup.add(whiteBishubMove1);
  whiteBishubMoveGroup.add(whiteBishubMove2);
  whiteBishubMoveGroup.add(whiteBishubMove3);
  whiteBishubMoveGroup.add(whiteBishubMove4);
  whiteBishubMoveGroup.add(whiteBishubMove5);
  whiteBishubMoveGroup.add(whiteBishubMove6);
  whiteBishubMoveGroup.add(whiteBishubMove7);
  whiteBishubMoveGroup.add(whiteBishubMove8);
  whiteBishubMoveGroup.add(whiteBishubMove9);
  whiteBishubMoveGroup.add(whiteBishubMove10);
  whiteBishubMoveGroup.add(whiteBishubMove11);
  whiteBishubMoveGroup.add(whiteBishubMove12);
  whiteBishubMoveGroup.add(whiteBishubMove13);
  whiteBishubMoveGroup.add(whiteBishubMove14);
  whiteBishubMoveGroup.add(whiteBishubMove15);
  whiteBishubMoveGroup.add(whiteBishubMove16);
  whiteBishubMoveGroup.add(whiteBishubMove17);
  whiteBishubMoveGroup.add(whiteBishubMove18);
  whiteBishubMoveGroup.add(whiteBishubMove19);
  whiteBishubMoveGroup.add(whiteBishubMove20);
  whiteBishubMoveGroup.add(whiteBishubMove21);
  whiteBishubMoveGroup.add(whiteBishubMove22);
  whiteBishubMoveGroup.add(whiteBishubMove23);
  whiteBishubMoveGroup.add(whiteBishubMove24);
  whiteBishubMoveGroup.add(whiteBishubMove25);
  whiteBishubMoveGroup.add(whiteBishubMove26);
  whiteBishubMoveGroup.add(whiteBishubMove27);
  whiteBishubMoveGroup.add(whiteBishubMove28);




  whiteBishub2MoveGroup = createGroup();

  whiteBishub2MoveGroup.add(whiteBishub2Move1);
  whiteBishub2MoveGroup.add(whiteBishub2Move2);
  whiteBishub2MoveGroup.add(whiteBishub2Move3);
  whiteBishub2MoveGroup.add(whiteBishub2Move4);
  whiteBishub2MoveGroup.add(whiteBishub2Move5);
  whiteBishub2MoveGroup.add(whiteBishub2Move6);
  whiteBishub2MoveGroup.add(whiteBishub2Move7);
  whiteBishub2MoveGroup.add(whiteBishub2Move8);
  whiteBishub2MoveGroup.add(whiteBishub2Move9);
  whiteBishub2MoveGroup.add(whiteBishub2Move10);
  whiteBishub2MoveGroup.add(whiteBishub2Move11);
  whiteBishub2MoveGroup.add(whiteBishub2Move12);
  whiteBishub2MoveGroup.add(whiteBishub2Move13);
  whiteBishub2MoveGroup.add(whiteBishub2Move14);
  whiteBishub2MoveGroup.add(whiteBishub2Move15);
  whiteBishub2MoveGroup.add(whiteBishub2Move16);
  whiteBishub2MoveGroup.add(whiteBishub2Move17);
  whiteBishub2MoveGroup.add(whiteBishub2Move18);
  whiteBishub2MoveGroup.add(whiteBishub2Move19);
  whiteBishub2MoveGroup.add(whiteBishub2Move20);
  whiteBishub2MoveGroup.add(whiteBishub2Move21);
  whiteBishub2MoveGroup.add(whiteBishub2Move22);
  whiteBishub2MoveGroup.add(whiteBishub2Move23);
  whiteBishub2MoveGroup.add(whiteBishub2Move24);
  whiteBishub2MoveGroup.add(whiteBishub2Move25);
  whiteBishub2MoveGroup.add(whiteBishub2Move26);
  whiteBishub2MoveGroup.add(whiteBishub2Move27);
  whiteBishub2MoveGroup.add(whiteBishub2Move28);




  whiteRook1MoveGroup = createGroup();

  whiteRook1MoveGroup.add(whiteRook1Move1);
  whiteRook1MoveGroup.add(whiteRook1Move2);
  whiteRook1MoveGroup.add(whiteRook1Move3);
  whiteRook1MoveGroup.add(whiteRook1Move4);
  whiteRook1MoveGroup.add(whiteRook1Move5);
  whiteRook1MoveGroup.add(whiteRook1Move6);
  whiteRook1MoveGroup.add(whiteRook1Move7);
  whiteRook1MoveGroup.add(whiteRook1Move8);
  whiteRook1MoveGroup.add(whiteRook1Move9);
  whiteRook1MoveGroup.add(whiteRook1Move10);
  whiteRook1MoveGroup.add(whiteRook1Move11);
  whiteRook1MoveGroup.add(whiteRook1Move12);
  whiteRook1MoveGroup.add(whiteRook1Move13);
  whiteRook1MoveGroup.add(whiteRook1Move14);
  whiteRook1MoveGroup.add(whiteRook1Move15);
  whiteRook1MoveGroup.add(whiteRook1Move16);
  whiteRook1MoveGroup.add(whiteRook1Move17);
  whiteRook1MoveGroup.add(whiteRook1Move18);
  whiteRook1MoveGroup.add(whiteRook1Move19);
  whiteRook1MoveGroup.add(whiteRook1Move20);
  whiteRook1MoveGroup.add(whiteRook1Move21);
  whiteRook1MoveGroup.add(whiteRook1Move22);
  whiteRook1MoveGroup.add(whiteRook1Move23);
  whiteRook1MoveGroup.add(whiteRook1Move24);
  whiteRook1MoveGroup.add(whiteRook1Move25);
  whiteRook1MoveGroup.add(whiteRook1Move26);
  whiteRook1MoveGroup.add(whiteRook1Move27);
  whiteRook1MoveGroup.add(whiteRook1Move28);




  whiteRook2MoveGroup = createGroup();

  whiteRook2MoveGroup.add(whiteRook2Move1);
  whiteRook2MoveGroup.add(whiteRook2Move2);
  whiteRook2MoveGroup.add(whiteRook2Move3);
  whiteRook2MoveGroup.add(whiteRook2Move4);
  whiteRook2MoveGroup.add(whiteRook2Move5);
  whiteRook2MoveGroup.add(whiteRook2Move6);
  whiteRook2MoveGroup.add(whiteRook2Move7);
  whiteRook2MoveGroup.add(whiteRook2Move8);
  whiteRook2MoveGroup.add(whiteRook2Move9);
  whiteRook2MoveGroup.add(whiteRook2Move10);
  whiteRook2MoveGroup.add(whiteRook2Move11);
  whiteRook2MoveGroup.add(whiteRook2Move12);
  whiteRook2MoveGroup.add(whiteRook2Move13);
  whiteRook2MoveGroup.add(whiteRook2Move14);
  whiteRook2MoveGroup.add(whiteRook2Move15);
  whiteRook2MoveGroup.add(whiteRook2Move16);
  whiteRook2MoveGroup.add(whiteRook2Move17);
  whiteRook2MoveGroup.add(whiteRook2Move18);
  whiteRook2MoveGroup.add(whiteRook2Move19);
  whiteRook2MoveGroup.add(whiteRook2Move20);
  whiteRook2MoveGroup.add(whiteRook2Move21);
  whiteRook2MoveGroup.add(whiteRook2Move22);
  whiteRook2MoveGroup.add(whiteRook2Move23);
  whiteRook2MoveGroup.add(whiteRook2Move24);
  whiteRook2MoveGroup.add(whiteRook2Move25);
  whiteRook2MoveGroup.add(whiteRook2Move26);
  whiteRook2MoveGroup.add(whiteRook2Move27);
  whiteRook2MoveGroup.add(whiteRook2Move28);



  whiteKnight1MoveGroup = createGroup();

  whiteKnight1MoveGroup.add(whiteKnight1Move1);
  whiteKnight1MoveGroup.add(whiteKnight1Move2);
  whiteKnight1MoveGroup.add(whiteKnight1Move3);
  whiteKnight1MoveGroup.add(whiteKnight1Move4);
  whiteKnight1MoveGroup.add(whiteKnight1Move5);
  whiteKnight1MoveGroup.add(whiteKnight1Move6);
  whiteKnight1MoveGroup.add(whiteKnight1Move7);
  whiteKnight1MoveGroup.add(whiteKnight1Move8);




  whiteKnight2MoveGroup = createGroup();

  whiteKnight2MoveGroup.add(whiteKnight2Move1);
  whiteKnight2MoveGroup.add(whiteKnight2Move2);
  whiteKnight2MoveGroup.add(whiteKnight2Move3);
  whiteKnight2MoveGroup.add(whiteKnight2Move4);
  whiteKnight2MoveGroup.add(whiteKnight2Move5);
  whiteKnight2MoveGroup.add(whiteKnight2Move6);
  whiteKnight2MoveGroup.add(whiteKnight2Move7);
  whiteKnight2MoveGroup.add(whiteKnight2Move8);


  blackBishubMoveGroup = createGroup();

  blackBishubMoveGroup.add(blackBishubMove1);
  blackBishubMoveGroup.add(blackBishubMove2);
  blackBishubMoveGroup.add(blackBishubMove3);
  blackBishubMoveGroup.add(blackBishubMove4);
  blackBishubMoveGroup.add(blackBishubMove5);
  blackBishubMoveGroup.add(blackBishubMove6);
  blackBishubMoveGroup.add(blackBishubMove7);
  blackBishubMoveGroup.add(blackBishubMove8);
  blackBishubMoveGroup.add(blackBishubMove9);
  blackBishubMoveGroup.add(blackBishubMove10);
  blackBishubMoveGroup.add(blackBishubMove11);
  blackBishubMoveGroup.add(blackBishubMove12);
  blackBishubMoveGroup.add(blackBishubMove13);
  blackBishubMoveGroup.add(blackBishubMove14);
  blackBishubMoveGroup.add(blackBishubMove15);
  blackBishubMoveGroup.add(blackBishubMove16);
  blackBishubMoveGroup.add(blackBishubMove17);
  blackBishubMoveGroup.add(blackBishubMove18);
  blackBishubMoveGroup.add(blackBishubMove19);
  blackBishubMoveGroup.add(blackBishubMove20);
  blackBishubMoveGroup.add(blackBishubMove21);
  blackBishubMoveGroup.add(blackBishubMove22);
  blackBishubMoveGroup.add(blackBishubMove23);
  blackBishubMoveGroup.add(blackBishubMove24);
  blackBishubMoveGroup.add(blackBishubMove25);
  blackBishubMoveGroup.add(blackBishubMove26);
  blackBishubMoveGroup.add(blackBishubMove27);
  blackBishubMoveGroup.add(blackBishubMove28);




  blackBishub2MoveGroup = createGroup();

  blackBishub2MoveGroup.add(blackBishub2Move1);
  blackBishub2MoveGroup.add(blackBishub2Move2);
  blackBishub2MoveGroup.add(blackBishub2Move3);
  blackBishub2MoveGroup.add(blackBishub2Move4);
  blackBishub2MoveGroup.add(blackBishub2Move5);
  blackBishub2MoveGroup.add(blackBishub2Move6);
  blackBishub2MoveGroup.add(blackBishub2Move7);
  blackBishub2MoveGroup.add(blackBishub2Move8);
  blackBishub2MoveGroup.add(blackBishub2Move9);
  blackBishub2MoveGroup.add(blackBishub2Move10);
  blackBishub2MoveGroup.add(blackBishub2Move11);
  blackBishub2MoveGroup.add(blackBishub2Move12);
  blackBishub2MoveGroup.add(blackBishub2Move13);
  blackBishub2MoveGroup.add(blackBishub2Move14);
  blackBishub2MoveGroup.add(blackBishub2Move15);
  blackBishub2MoveGroup.add(blackBishub2Move16);
  blackBishub2MoveGroup.add(blackBishub2Move17);
  blackBishub2MoveGroup.add(blackBishub2Move18);
  blackBishub2MoveGroup.add(blackBishub2Move19);
  blackBishub2MoveGroup.add(blackBishub2Move20);
  blackBishub2MoveGroup.add(blackBishub2Move21);
  blackBishub2MoveGroup.add(blackBishub2Move22);
  blackBishub2MoveGroup.add(blackBishub2Move23);
  blackBishub2MoveGroup.add(blackBishub2Move24);
  blackBishub2MoveGroup.add(blackBishub2Move25);
  blackBishub2MoveGroup.add(blackBishub2Move26);
  blackBishub2MoveGroup.add(blackBishub2Move27);
  blackBishub2MoveGroup.add(blackBishub2Move28);




  blackRook1MoveGroup = createGroup();

  blackRook1MoveGroup.add(blackRook1Move1);
  blackRook1MoveGroup.add(blackRook1Move2);
  blackRook1MoveGroup.add(blackRook1Move3);
  blackRook1MoveGroup.add(blackRook1Move4);
  blackRook1MoveGroup.add(blackRook1Move5);
  blackRook1MoveGroup.add(blackRook1Move6);
  blackRook1MoveGroup.add(blackRook1Move7);
  blackRook1MoveGroup.add(blackRook1Move8);
  blackRook1MoveGroup.add(blackRook1Move9);
  blackRook1MoveGroup.add(blackRook1Move10);
  blackRook1MoveGroup.add(blackRook1Move11);
  blackRook1MoveGroup.add(blackRook1Move12);
  blackRook1MoveGroup.add(blackRook1Move13);
  blackRook1MoveGroup.add(blackRook1Move14);
  blackRook1MoveGroup.add(blackRook1Move15);
  blackRook1MoveGroup.add(blackRook1Move16);
  blackRook1MoveGroup.add(blackRook1Move17);
  blackRook1MoveGroup.add(blackRook1Move18);
  blackRook1MoveGroup.add(blackRook1Move19);
  blackRook1MoveGroup.add(blackRook1Move20);
  blackRook1MoveGroup.add(blackRook1Move21);
  blackRook1MoveGroup.add(blackRook1Move22);
  blackRook1MoveGroup.add(blackRook1Move23);
  blackRook1MoveGroup.add(blackRook1Move24);
  blackRook1MoveGroup.add(blackRook1Move25);
  blackRook1MoveGroup.add(blackRook1Move26);
  blackRook1MoveGroup.add(blackRook1Move27);
  blackRook1MoveGroup.add(blackRook1Move28);




  blackRook2MoveGroup = createGroup();

  blackRook2MoveGroup.add(blackRook2Move1);
  blackRook2MoveGroup.add(blackRook2Move2);
  blackRook2MoveGroup.add(blackRook2Move3);
  blackRook2MoveGroup.add(blackRook2Move4);
  blackRook2MoveGroup.add(blackRook2Move5);
  blackRook2MoveGroup.add(blackRook2Move6);
  blackRook2MoveGroup.add(blackRook2Move7);
  blackRook2MoveGroup.add(blackRook2Move8);
  blackRook2MoveGroup.add(blackRook2Move9);
  blackRook2MoveGroup.add(blackRook2Move10);
  blackRook2MoveGroup.add(blackRook2Move11);
  blackRook2MoveGroup.add(blackRook2Move12);
  blackRook2MoveGroup.add(blackRook2Move13);
  blackRook2MoveGroup.add(blackRook2Move14);
  blackRook2MoveGroup.add(blackRook2Move15);
  blackRook2MoveGroup.add(blackRook2Move16);
  blackRook2MoveGroup.add(blackRook2Move17);
  blackRook2MoveGroup.add(blackRook2Move18);
  blackRook2MoveGroup.add(blackRook2Move19);
  blackRook2MoveGroup.add(blackRook2Move20);
  blackRook2MoveGroup.add(blackRook2Move21);
  blackRook2MoveGroup.add(blackRook2Move22);
  blackRook2MoveGroup.add(blackRook2Move23);
  blackRook2MoveGroup.add(blackRook2Move24);
  blackRook2MoveGroup.add(blackRook2Move25);
  blackRook2MoveGroup.add(blackRook2Move26);
  blackRook2MoveGroup.add(blackRook2Move27);
  blackRook2MoveGroup.add(blackRook2Move28);



  blackKnight1MoveGroup = createGroup();

  blackKnight1MoveGroup.add(blackKnight1Move1);
  blackKnight1MoveGroup.add(blackKnight1Move2);
  blackKnight1MoveGroup.add(blackKnight1Move3);
  blackKnight1MoveGroup.add(blackKnight1Move4);
  blackKnight1MoveGroup.add(blackKnight1Move5);
  blackKnight1MoveGroup.add(blackKnight1Move6);
  blackKnight1MoveGroup.add(blackKnight1Move7);
  blackKnight1MoveGroup.add(blackKnight1Move8);




  blackKnight2MoveGroup = createGroup();

  blackKnight2MoveGroup.add(blackKnight2Move1);
  blackKnight2MoveGroup.add(blackKnight2Move2);
  blackKnight2MoveGroup.add(blackKnight2Move3);
  blackKnight2MoveGroup.add(blackKnight2Move4);
  blackKnight2MoveGroup.add(blackKnight2Move5);
  blackKnight2MoveGroup.add(blackKnight2Move6);
  blackKnight2MoveGroup.add(blackKnight2Move7);
  blackKnight2MoveGroup.add(blackKnight2Move8);


  blackQueenMoveGroup = createGroup();

  blackQueenMoveGroup.add(blackQueenMove1);
  blackQueenMoveGroup.add(blackQueenMove2);
  blackQueenMoveGroup.add(blackQueenMove3);
  blackQueenMoveGroup.add(blackQueenMove4);
  blackQueenMoveGroup.add(blackQueenMove5);
  blackQueenMoveGroup.add(blackQueenMove6);
  blackQueenMoveGroup.add(blackQueenMove7);
  blackQueenMoveGroup.add(blackQueenMove8);
  blackQueenMoveGroup.add(blackQueenMove9);
  blackQueenMoveGroup.add(blackQueenMove10);
  blackQueenMoveGroup.add(blackQueenMove11);
  blackQueenMoveGroup.add(blackQueenMove12);
  blackQueenMoveGroup.add(blackQueenMove13);
  blackQueenMoveGroup.add(blackQueenMove14);
  blackQueenMoveGroup.add(blackQueenMove15);
  blackQueenMoveGroup.add(blackQueenMove16);
  blackQueenMoveGroup.add(blackQueenMove17);
  blackQueenMoveGroup.add(blackQueenMove18);
  blackQueenMoveGroup.add(blackQueenMove19);
  blackQueenMoveGroup.add(blackQueenMove20);
  blackQueenMoveGroup.add(blackQueenMove21);
  blackQueenMoveGroup.add(blackQueenMove22);
  blackQueenMoveGroup.add(blackQueenMove23);
  blackQueenMoveGroup.add(blackQueenMove24);
  blackQueenMoveGroup.add(blackQueenMove25);
  blackQueenMoveGroup.add(blackQueenMove26);
  blackQueenMoveGroup.add(blackQueenMove27);
  blackQueenMoveGroup.add(blackQueenMove28);
  blackQueenMoveGroup.add(blackQueenMove29);
  blackQueenMoveGroup.add(blackQueenMove30);
  blackQueenMoveGroup.add(blackQueenMove31);
  blackQueenMoveGroup.add(blackQueenMove32);
  blackQueenMoveGroup.add(blackQueenMove33);
  blackQueenMoveGroup.add(blackQueenMove34);
  blackQueenMoveGroup.add(blackQueenMove35);
  blackQueenMoveGroup.add(blackQueenMove36);
  blackQueenMoveGroup.add(blackQueenMove37);
  blackQueenMoveGroup.add(blackQueenMove38);
  blackQueenMoveGroup.add(blackQueenMove39);
  blackQueenMoveGroup.add(blackQueenMove40);
  blackQueenMoveGroup.add(blackQueenMove41);
  blackQueenMoveGroup.add(blackQueenMove42);
  blackQueenMoveGroup.add(blackQueenMove43);
  blackQueenMoveGroup.add(blackQueenMove44);
  blackQueenMoveGroup.add(blackQueenMove45);
  blackQueenMoveGroup.add(blackQueenMove46);
  blackQueenMoveGroup.add(blackQueenMove47);
  blackQueenMoveGroup.add(blackQueenMove48);
  blackQueenMoveGroup.add(blackQueenMove49);
  blackQueenMoveGroup.add(blackQueenMove50);
  blackQueenMoveGroup.add(blackQueenMove51);
  blackQueenMoveGroup.add(blackQueenMove52);
  blackQueenMoveGroup.add(blackQueenMove53);
  blackQueenMoveGroup.add(blackQueenMove54);
  blackQueenMoveGroup.add(blackQueenMove55);
  blackQueenMoveGroup.add(blackQueenMove56);




  database = firebase.database();

  var whiteKing = database.ref("whitePLayer/king");
  whiteKing.on("value", WhightKingPosition);

  var whiteQueen = database.ref("whitePLayer/queen1");
  whiteQueen.on("value", WhightQueenPosition);

  var whiterook1 = database.ref("whitePLayer/rook1");
  whiterook1.on("value", WhightRook1Position);

  var whiterook2 = database.ref("whitePLayer/rook2");
  whiterook2.on("value", WhightRook2Position);

  var whiteKnight1 = database.ref("whitePLayer/knight1");
  whiteKnight1.on("value", WhightKnight1Position);

  var whiteKnight2 = database.ref("whitePLayer/knight2");
  whiteKnight2.on("value", WhightKnight2Position);

  var whiteBishub1 = database.ref("whitePLayer/bishub1");
  whiteBishub1.on("value", WhightBishub1Position);

  var whiteBishub2 = database.ref("whitePLayer/bishub2");
  whiteBishub2.on("value", WhightBishub2Position);

  var whitePawn1 = database.ref("whitePLayer/pawn1");
  whitePawn1.on("value", WhightPawn1Position);

  var whitePawn2 = database.ref("whitePLayer/pawn2");
  whitePawn2.on("value", WhightPawn2Position);

  var whitePawn3 = database.ref("whitePLayer/pawn3");
  whitePawn3.on("value", WhightPawn3Position);

  var whitePawn4 = database.ref("whitePLayer/pawn4");
  whitePawn4.on("value", WhightPawn4Position);

  var whitePawn5 = database.ref("whitePLayer/pawn5");
  whitePawn5.on("value", WhightPawn5Position);

  var whitePawn6 = database.ref("whitePLayer/pawn6");
  whitePawn6.on("value", WhightPawn6Position);

  var whitePawn7 = database.ref("whitePLayer/pawn7");
  whitePawn7.on("value", WhightPawn7Position);

  var whitePawn8 = database.ref("whitePLayer/pawn8");
  whitePawn8.on("value", WhightPawn8Position);

  var blackKing = database.ref("blackPlayer/king1");
  blackKing.on("value", blackKingPosition);

  var blackQueen = database.ref("blackPlayer/queen1");
  blackQueen.on("value", blackQueenPosition);

  var blackrook1 = database.ref("blackPlayer/rook1");
  blackrook1.on("value", blackRook1Position);

  var blackrook2 = database.ref("blackPlayer/rook2");
  blackrook2.on("value", blackRook2Position);

  var blackKnight1 = database.ref("blackPlayer/knight1");
  blackKnight1.on("value", blackKnight1Position);

  var blackKnight2 = database.ref("blackPlayer/knight2");
  blackKnight2.on("value", blackKnight2Position);

  var blackBishub1 = database.ref("blackPlayer/bishub1");
  blackBishub1.on("value", blackBishub1Position);

  var blackBishub2 = database.ref("blackPlayer/bishub2");
  blackBishub2.on("value", blackBishub2Position);

  var blackPawn1 = database.ref("blackPlayer/pawn1");
  blackPawn1.on("value", blackPawn1Position);

  var blackPawn2 = database.ref("blackPlayer/pawn2");
  blackPawn2.on("value", blackPawn2Position);

  var blackPawn3 = database.ref("blackPlayer/pawn3");
  blackPawn3.on("value", blackPawn3Position);

  var blackPawn4 = database.ref("blackPlayer/pawn4");
  blackPawn4.on("value", blackPawn4Position);

  var blackPawn5 = database.ref("blackPlayer/pawn5");
  blackPawn5.on("value", blackPawn5Position);

  var blackPawn6 = database.ref("blackPlayer/pawn6");
  blackPawn6.on("value", blackPawn6Position);

  var blackPawn7 = database.ref("blackPlayer/pawn7");
  blackPawn7.on("value", blackPawn7Position);

  var blackPawn8 = database.ref("blackPlayer/pawn8");
  blackPawn8.on("value", blackPawn8Position);

  //king1 = new king();

  //king1MovesA = new point();
  //king1MovesB = new point();
  //king1MovesC = new point();
  //king1MovesD = new point();
  //king1MovesE = new point();
  //king1MovesF = new point();
  //king1MovesG = new point();
  //king1MovesH = new point();
  
  //queen1 = new queen();
  //bishub1 = new bishub();
  //bishub2 = new bishub();
  //knight1 = new knight();
  //knight2 = new knight();
  //rook1 = new rook();  
  //rook2 = new rook();
  //pawn1 = new pawn();
  //pawn2 = new pawn();
  //pawn3 = new pawn();
  //pawn4 = new pawn();
  //pawn5 = new pawn();
  //pawn6 = new pawn();
  //pawn7 = new pawn();
  //pawn8 = new pawn();
  
  //black pieces
  /*king2 = new king();
  queen2 = new queen();
  bishub3 = new bishub();
  bishub4 = new bishub();
  knight3 = new knight();
  knight4 = new knight();
  rook3 = new rook();
  rook4 = new rook();
  bpawn1 = new pawn();
  bpawn2 = new pawn();
  bpawn3 = new pawn();
  bpawn4 = new pawn();
  bpawn5 = new pawn();
  bpawn6 = new pawn();
  bpawn7 = new pawn();
  bpawn8 = new pawn();*/
  
}

function draw() {
  background(220);

  board();

  

  king1MovesA.x = white_King.x - 100;
  king1MovesA.y = white_King.y;

  king1MovesB.x = white_King.x + 100;
  king1MovesB.y = white_King.y;

  king1MovesC.x = white_King.x;
  king1MovesC.y = white_King.y - 100;

  king1MovesD.x = white_King.x;
  king1MovesD.y = white_King.y + 100;

  king1MovesE.x = white_King.x - 100;
  king1MovesE.y = white_King.y + 100;

  king1MovesF.x = white_King.x - 100;
  king1MovesF.y = white_King.y - 100;

  king1MovesG.x = white_King.x + 100;
  king1MovesG.y = white_King.y - 100;

  king1MovesH.x = white_King.x + 100;
  king1MovesH.y = white_King.y + 100;



  king2MovesA.x = black_King.x - 100;
  king2MovesA.y = black_King.y;

  king2MovesB.x = black_King.x + 100;
  king2MovesB.y = black_King.y;

  king2MovesC.x = black_King.x;
  king2MovesC.y = black_King.y - 100;

  king2MovesD.x = black_King.x;
  king2MovesD.y = black_King.y + 100;

  king2MovesE.x = black_King.x - 100;
  king2MovesE.y = black_King.y + 100;

  king2MovesF.x = black_King.x - 100;
  king2MovesF.y = black_King.y - 100;

  king2MovesG.x = black_King.x + 100;
  king2MovesG.y = black_King.y - 100;

  king2MovesH.x = black_King.x + 100;
  king2MovesH.y = black_King.y + 100;


  WhitePawn1Move1.x = white_Pawn1.x;
  WhitePawn1Move1.y = white_Pawn1.y - 100;

  WhitePawn1Move2.x = white_Pawn1.x;
  WhitePawn1Move2.y = white_Pawn1.y - 200;

  WhitePawn1Move3.x = white_Pawn1.x - 100;
  WhitePawn1Move3.y = white_Pawn1.y - 100;

  WhitePawn1Move4.x = white_Pawn1.x + 100;
  WhitePawn1Move4.y = white_Pawn1.y - 100;


  WhitePawn2Move1.x = white_Pawn2.x;
  WhitePawn2Move1.y = white_Pawn2.y - 100;

  WhitePawn2Move2.x = white_Pawn2.x;
  WhitePawn2Move2.y = white_Pawn2.y - 200;

  WhitePawn2Move3.x = white_Pawn2.x - 100;
  WhitePawn2Move3.y = white_Pawn2.y - 100;

  WhitePawn2Move4.x = white_Pawn2.x + 100;
  WhitePawn2Move4.y = white_Pawn2.y - 100;


  WhitePawn3Move1.x = white_Pawn3.x;
  WhitePawn3Move1.y = white_Pawn3.y - 100;

  WhitePawn3Move2.x = white_Pawn3.x;
  WhitePawn3Move2.y = white_Pawn3.y - 200;

  WhitePawn3Move3.x = white_Pawn3.x - 100;
  WhitePawn3Move3.y = white_Pawn3.y - 100;

  WhitePawn3Move4.x = white_Pawn3.x + 100;
  WhitePawn3Move4.y = white_Pawn3.y - 100;


  WhitePawn4Move1.x = white_Pawn4.x;
  WhitePawn4Move1.y = white_Pawn4.y - 100;

  WhitePawn4Move2.x = white_Pawn4.x;
  WhitePawn4Move2.y = white_Pawn4.y - 200;

  WhitePawn4Move3.x = white_Pawn4.x - 100;
  WhitePawn4Move3.y = white_Pawn4.y - 100;

  WhitePawn4Move4.x = white_Pawn4.x + 100;
  WhitePawn4Move4.y = white_Pawn4.y - 100;


  WhitePawn5Move1.x = white_Pawn5.x;
  WhitePawn5Move1.y = white_Pawn5.y - 100;

  WhitePawn5Move2.x = white_Pawn5.x;
  WhitePawn5Move2.y = white_Pawn5.y - 200;

  WhitePawn5Move3.x = white_Pawn5.x - 100;
  WhitePawn5Move3.y = white_Pawn5.y - 100;

  WhitePawn5Move4.x = white_Pawn5.x + 100;
  WhitePawn5Move4.y = white_Pawn5.y - 100;


  WhitePawn6Move1.x = white_Pawn6.x;
  WhitePawn6Move1.y = white_Pawn6.y - 100;

  WhitePawn6Move2.x = white_Pawn6.x;
  WhitePawn6Move2.y = white_Pawn6.y - 200;

  WhitePawn6Move3.x = white_Pawn6.x - 100;
  WhitePawn6Move3.y = white_Pawn6.y - 100;

  WhitePawn6Move4.x = white_Pawn6.x + 100;
  WhitePawn6Move4.y = white_Pawn6.y - 100;


  WhitePawn7Move1.x = white_Pawn7.x;
  WhitePawn7Move1.y = white_Pawn7.y - 100;

  WhitePawn7Move2.x = white_Pawn7.x;
  WhitePawn7Move2.y = white_Pawn7.y - 200;

  WhitePawn7Move3.x = white_Pawn7.x - 100;
  WhitePawn7Move3.y = white_Pawn7.y - 100;

  WhitePawn7Move4.x = white_Pawn7.x + 100;
  WhitePawn7Move4.y = white_Pawn7.y - 100;


  WhitePawn8Move1.x = white_Pawn8.x;
  WhitePawn8Move1.y = white_Pawn8.y - 100;

  WhitePawn8Move2.x = white_Pawn8.x;
  WhitePawn8Move2.y = white_Pawn8.y - 200;

  WhitePawn8Move3.x = white_Pawn8.x - 100;
  WhitePawn8Move3.y = white_Pawn8.y - 100;

  WhitePawn8Move4.x = white_Pawn8.x + 100;
  WhitePawn8Move4.y = white_Pawn8.y - 100;



  blackPawn1Move1.x = black_Pawn1.x;
  blackPawn1Move1.y = black_Pawn1.y + 100;

  blackPawn1Move2.x = black_Pawn1.x;
  blackPawn1Move2.y = black_Pawn1.y + 200;

  blackPawn1Move3.x = black_Pawn1.x - 100;
  blackPawn1Move3.y = black_Pawn1.y + 100;

  blackPawn1Move4.x = black_Pawn1.x + 100;
  blackPawn1Move4.y = black_Pawn1.y + 100;


  blackPawn2Move1.x = black_Pawn2.x;
  blackPawn2Move1.y = black_Pawn2.y + 100;

  blackPawn2Move2.x = black_Pawn2.x;
  blackPawn2Move2.y = black_Pawn2.y + 200;

  blackPawn2Move3.x = black_Pawn2.x - 100;
  blackPawn2Move3.y = black_Pawn2.y + 100;

  blackPawn2Move4.x = black_Pawn2.x + 100;
  blackPawn2Move4.y = black_Pawn2.y + 100;


  blackPawn3Move1.x = black_Pawn3.x;
  blackPawn3Move1.y = black_Pawn3.y + 100;

  blackPawn3Move2.x = black_Pawn3.x;
  blackPawn3Move2.y = black_Pawn3.y + 200;

  blackPawn3Move3.x = black_Pawn3.x - 100;
  blackPawn3Move3.y = black_Pawn3.y + 100;

  blackPawn3Move4.x = black_Pawn3.x + 100;
  blackPawn3Move4.y = black_Pawn3.y + 100;


  blackPawn4Move1.x = black_Pawn4.x;
  blackPawn4Move1.y = black_Pawn4.y + 100;

  blackPawn4Move2.x = black_Pawn4.x;
  blackPawn4Move2.y = black_Pawn4.y + 200;

  blackPawn4Move3.x = black_Pawn4.x - 100;
  blackPawn4Move3.y = black_Pawn4.y + 100;

  blackPawn4Move4.x = black_Pawn4.x + 100;
  blackPawn4Move4.y = black_Pawn4.y + 100;


  blackPawn5Move1.x = black_Pawn5.x;
  blackPawn5Move1.y = black_Pawn5.y + 100;

  blackPawn5Move2.x = black_Pawn5.x;
  blackPawn5Move2.y = black_Pawn5.y + 200;

  blackPawn5Move3.x = black_Pawn5.x - 100;
  blackPawn5Move3.y = black_Pawn5.y + 100;

  blackPawn5Move4.x = black_Pawn5.x + 100;
  blackPawn5Move4.y = black_Pawn5.y + 100;


  blackPawn6Move1.x = black_Pawn6.x;
  blackPawn6Move1.y = black_Pawn6.y + 100;

  blackPawn6Move2.x = black_Pawn6.x;
  blackPawn6Move2.y = black_Pawn6.y + 200;

  blackPawn6Move3.x = black_Pawn6.x - 100;
  blackPawn6Move3.y = black_Pawn6.y + 100;

  blackPawn6Move4.x = black_Pawn6.x + 100;
  blackPawn6Move4.y = black_Pawn6.y + 100;


  blackPawn7Move1.x = black_Pawn7.x;
  blackPawn7Move1.y = black_Pawn7.y + 100;

  blackPawn7Move2.x = black_Pawn7.x;
  blackPawn7Move2.y = black_Pawn7.y + 200;

  blackPawn7Move3.x = black_Pawn7.x - 100;
  blackPawn7Move3.y = black_Pawn7.y + 100;

  blackPawn7Move4.x = black_Pawn7.x + 100;
  blackPawn7Move4.y = black_Pawn7.y + 100;


  blackPawn8Move1.x = black_Pawn8.x;
  blackPawn8Move1.y = black_Pawn8.y + 100;

  blackPawn8Move2.x = black_Pawn8.x;
  blackPawn8Move2.y = black_Pawn8.y + 200;

  blackPawn8Move3.x = black_Pawn8.x - 100;
  blackPawn8Move3.y = black_Pawn8.y + 100;

  blackPawn8Move4.x = black_Pawn8.x + 100;
  blackPawn8Move4.y = black_Pawn8.y + 100;



  whiteQueenMove1.x = white_Queen.x + 100;
  whiteQueenMove1.y = white_Queen.y;

  whiteQueenMove2.x = white_Queen.x + 200;
  whiteQueenMove2.y = white_Queen.y;

  whiteQueenMove3.x = white_Queen.x + 300;
  whiteQueenMove3.y = white_Queen.y;

  whiteQueenMove4.x = white_Queen.x + 400;
  whiteQueenMove4.y = white_Queen.y;

  whiteQueenMove5.x = white_Queen.x + 500;
  whiteQueenMove5.y = white_Queen.y;

  whiteQueenMove6.x = white_Queen.x + 600;
  whiteQueenMove6.y = white_Queen.y;

  whiteQueenMove7.x = white_Queen.x + 700;
  whiteQueenMove7.y = white_Queen.y;

  whiteQueenMove8.x = white_Queen.x - 100;
  whiteQueenMove8.y = white_Queen.y;

  whiteQueenMove9.x = white_Queen.x - 200;
  whiteQueenMove9.y = white_Queen.y;

  whiteQueenMove10.x = white_Queen.x - 300;
  whiteQueenMove10.y = white_Queen.y;

  whiteQueenMove11.x = white_Queen.x - 400;
  whiteQueenMove11.y = white_Queen.y;

  whiteQueenMove12.x = white_Queen.x - 500;
  whiteQueenMove12.y = white_Queen.y;

  whiteQueenMove13.x = white_Queen.x - 600;
  whiteQueenMove13.y = white_Queen.y;

  whiteQueenMove14.x = white_Queen.x - 700;
  whiteQueenMove14.y = white_Queen.y;

  whiteQueenMove15.x = white_Queen.x;
  whiteQueenMove15.y = white_Queen.y - 100;

  whiteQueenMove16.x = white_Queen.x;
  whiteQueenMove16.y = white_Queen.y - 200;

  whiteQueenMove17.x = white_Queen.x;
  whiteQueenMove17.y = white_Queen.y - 300;

  whiteQueenMove18.x = white_Queen.x;
  whiteQueenMove18.y = white_Queen.y - 400;

  whiteQueenMove19.x = white_Queen.x;
  whiteQueenMove19.y = white_Queen.y - 500;

  whiteQueenMove20.x = white_Queen.x;
  whiteQueenMove20.y = white_Queen.y - 600;

  whiteQueenMove21.x = white_Queen.x;
  whiteQueenMove21.y = white_Queen.y - 700;

  whiteQueenMove22.x = white_Queen.x;
  whiteQueenMove22.y = white_Queen.y + 100;

  whiteQueenMove23.x = white_Queen.x;
  whiteQueenMove23.y = white_Queen.y + 200;

  whiteQueenMove24.x = white_Queen.x;
  whiteQueenMove24.y = white_Queen.y + 300;

  whiteQueenMove25.x = white_Queen.x;
  whiteQueenMove25.y = white_Queen.y + 400;

  whiteQueenMove26.x = white_Queen.x;
  whiteQueenMove26.y = white_Queen.y + 500;

  whiteQueenMove27.x = white_Queen.x;
  whiteQueenMove27.y = white_Queen.y + 600;

  whiteQueenMove28.x = white_Queen.x;
  whiteQueenMove28.y = white_Queen.y + 700;

  whiteQueenMove29.x = white_Queen.x + 100;
  whiteQueenMove29.y = white_Queen.y + 100;

  whiteQueenMove30.x = white_Queen.x + 200;
  whiteQueenMove30.y = white_Queen.y + 200;

  whiteQueenMove31.x = white_Queen.x + 300;
  whiteQueenMove31.y = white_Queen.y + 300;

  whiteQueenMove32.x = white_Queen.x + 400;
  whiteQueenMove32.y = white_Queen.y + 400;

  whiteQueenMove33.x = white_Queen.x + 500;
  whiteQueenMove33.y = white_Queen.y + 500;

  whiteQueenMove34.x = white_Queen.x + 600;
  whiteQueenMove34.y = white_Queen.y + 600;

  whiteQueenMove35.x = white_Queen.x + 700;
  whiteQueenMove35.y = white_Queen.y + 700;

  whiteQueenMove36.x = white_Queen.x - 100;
  whiteQueenMove36.y = white_Queen.y - 100;

  whiteQueenMove37.x = white_Queen.x - 200;
  whiteQueenMove37.y = white_Queen.y - 200;

  whiteQueenMove38.x = white_Queen.x - 300;
  whiteQueenMove38.y = white_Queen.y - 300;

  whiteQueenMove39.x = white_Queen.x - 400;
  whiteQueenMove39.y = white_Queen.y - 400;

  whiteQueenMove40.x = white_Queen.x - 500;
  whiteQueenMove40.y = white_Queen.y - 500;

  whiteQueenMove41.x = white_Queen.x - 600;
  whiteQueenMove41.y = white_Queen.y - 600;

  whiteQueenMove42.x = white_Queen.x - 700;
  whiteQueenMove42.y = white_Queen.y - 700;

  whiteQueenMove43.x = white_Queen.x - 100;
  whiteQueenMove43.y = white_Queen.y + 100;

  whiteQueenMove44.x = white_Queen.x - 200;
  whiteQueenMove44.y = white_Queen.y + 200;

  whiteQueenMove45.x = white_Queen.x - 300;
  whiteQueenMove45.y = white_Queen.y + 300;

  whiteQueenMove46.x = white_Queen.x - 400;
  whiteQueenMove46.y = white_Queen.y + 400;

  whiteQueenMove47.x = white_Queen.x - 500;
  whiteQueenMove47.y = white_Queen.y + 500;

  whiteQueenMove48.x = white_Queen.x - 600;
  whiteQueenMove48.y = white_Queen.y + 600;

  whiteQueenMove49.x = white_Queen.x - 700;
  whiteQueenMove49.y = white_Queen.y + 700;

  whiteQueenMove50.x = white_Queen.x + 100;
  whiteQueenMove50.y = white_Queen.y - 100;

  whiteQueenMove51.x = white_Queen.x + 200;
  whiteQueenMove51.y = white_Queen.y - 200;

  whiteQueenMove52.x = white_Queen.x + 300;
  whiteQueenMove52.y = white_Queen.y - 300;

  whiteQueenMove53.x = white_Queen.x + 400;
  whiteQueenMove53.y = white_Queen.y - 400;

  whiteQueenMove54.x = white_Queen.x + 500;
  whiteQueenMove54.y = white_Queen.y - 500;

  whiteQueenMove55.x = white_Queen.x + 600;
  whiteQueenMove55.y = white_Queen.y - 600;

  whiteQueenMove56.x = white_Queen.x + 700;
  whiteQueenMove56.y = white_Queen.y - 700;



  blackQueenMove1.x = black_Queen.x + 100;
  blackQueenMove1.y = black_Queen.y;

  blackQueenMove2.x = black_Queen.x + 200;
  blackQueenMove2.y = black_Queen.y;

  blackQueenMove3.x = black_Queen.x + 300;
  blackQueenMove3.y = black_Queen.y;

  blackQueenMove4.x = black_Queen.x + 400;
  blackQueenMove4.y = black_Queen.y;

  blackQueenMove5.x = black_Queen.x + 500;
  blackQueenMove5.y = black_Queen.y;

  blackQueenMove6.x = black_Queen.x + 600;
  blackQueenMove6.y = black_Queen.y;

  blackQueenMove7.x = black_Queen.x + 700;
  blackQueenMove7.y = black_Queen.y;

  blackQueenMove8.x = black_Queen.x - 100;
  blackQueenMove8.y = black_Queen.y;

  blackQueenMove9.x = black_Queen.x - 200;
  blackQueenMove9.y = black_Queen.y;

  blackQueenMove10.x = black_Queen.x - 300;
  blackQueenMove10.y = black_Queen.y;

  blackQueenMove11.x = black_Queen.x - 400;
  blackQueenMove11.y = black_Queen.y;

  blackQueenMove12.x = black_Queen.x - 500;
  blackQueenMove12.y = black_Queen.y;

  blackQueenMove13.x = black_Queen.x - 600;
  blackQueenMove13.y = black_Queen.y;

  blackQueenMove14.x = black_Queen.x - 700;
  blackQueenMove14.y = black_Queen.y;

  blackQueenMove15.x = black_Queen.x;
  blackQueenMove15.y = black_Queen.y - 100;

  blackQueenMove16.x = black_Queen.x;
  blackQueenMove16.y = black_Queen.y - 200;

  blackQueenMove17.x = black_Queen.x;
  blackQueenMove17.y = black_Queen.y - 300;

  blackQueenMove18.x = black_Queen.x;
  blackQueenMove18.y = black_Queen.y - 400;

  blackQueenMove19.x = black_Queen.x;
  blackQueenMove19.y = black_Queen.y - 500;

  blackQueenMove20.x = black_Queen.x;
  blackQueenMove20.y = black_Queen.y - 600;

  blackQueenMove21.x = black_Queen.x;
  blackQueenMove21.y = black_Queen.y - 700;

  blackQueenMove22.x = black_Queen.x;
  blackQueenMove22.y = black_Queen.y + 100;

  blackQueenMove23.x = black_Queen.x;
  blackQueenMove23.y = black_Queen.y + 200;

  blackQueenMove24.x = black_Queen.x;
  blackQueenMove24.y = black_Queen.y + 300;

  blackQueenMove25.x = black_Queen.x;
  blackQueenMove25.y = black_Queen.y + 400;

  blackQueenMove26.x = black_Queen.x;
  blackQueenMove26.y = black_Queen.y + 500;

  blackQueenMove27.x = black_Queen.x;
  blackQueenMove27.y = black_Queen.y + 600;

  blackQueenMove28.x = black_Queen.x;
  blackQueenMove28.y = black_Queen.y + 700;

  blackQueenMove29.x = black_Queen.x + 100;
  blackQueenMove29.y = black_Queen.y + 100;

  blackQueenMove30.x = black_Queen.x + 200;
  blackQueenMove30.y = black_Queen.y + 200;

  blackQueenMove31.x = black_Queen.x + 300;
  blackQueenMove31.y = black_Queen.y + 300;

  blackQueenMove32.x = black_Queen.x + 400;
  blackQueenMove32.y = black_Queen.y + 400;

  blackQueenMove33.x = black_Queen.x + 500;
  blackQueenMove33.y = black_Queen.y + 500;

  blackQueenMove34.x = black_Queen.x + 600;
  blackQueenMove34.y = black_Queen.y + 600;

  blackQueenMove35.x = black_Queen.x + 700;
  blackQueenMove35.y = black_Queen.y + 700;

  blackQueenMove36.x = black_Queen.x - 100;
  blackQueenMove36.y = black_Queen.y - 100;

  blackQueenMove37.x = black_Queen.x - 200;
  blackQueenMove37.y = black_Queen.y - 200;

  blackQueenMove38.x = black_Queen.x - 300;
  blackQueenMove38.y = black_Queen.y - 300;

  blackQueenMove39.x = black_Queen.x - 400;
  blackQueenMove39.y = black_Queen.y - 400;

  blackQueenMove40.x = black_Queen.x - 500;
  blackQueenMove40.y = black_Queen.y - 500;

  blackQueenMove41.x = black_Queen.x - 600;
  blackQueenMove41.y = black_Queen.y - 600;

  blackQueenMove42.x = black_Queen.x - 700;
  blackQueenMove42.y = black_Queen.y - 700;

  blackQueenMove43.x = black_Queen.x - 100;
  blackQueenMove43.y = black_Queen.y + 100;

  blackQueenMove44.x = black_Queen.x - 200;
  blackQueenMove44.y = black_Queen.y + 200;

  blackQueenMove45.x = black_Queen.x - 300;
  blackQueenMove45.y = black_Queen.y + 300;

  blackQueenMove46.x = black_Queen.x - 400;
  blackQueenMove46.y = black_Queen.y + 400;

  blackQueenMove47.x = black_Queen.x - 500;
  blackQueenMove47.y = black_Queen.y + 500;

  blackQueenMove48.x = black_Queen.x - 600;
  blackQueenMove48.y = black_Queen.y + 600;

  blackQueenMove49.x = black_Queen.x - 700;
  blackQueenMove49.y = black_Queen.y + 700;

  blackQueenMove50.x = black_Queen.x + 100;
  blackQueenMove50.y = black_Queen.y - 100;

  blackQueenMove51.x = black_Queen.x + 200;
  blackQueenMove51.y = black_Queen.y - 200;

  blackQueenMove52.x = black_Queen.x + 300;
  blackQueenMove52.y = black_Queen.y - 300;

  blackQueenMove53.x = black_Queen.x + 400;
  blackQueenMove53.y = black_Queen.y - 400;

  blackQueenMove54.x = black_Queen.x + 500;
  blackQueenMove54.y = black_Queen.y - 500;

  blackQueenMove55.x = black_Queen.x + 600;
  blackQueenMove55.y = black_Queen.y - 600;

  blackQueenMove56.x = black_Queen.x + 700;
  blackQueenMove56.y = black_Queen.y - 700;

  

  whiteBishubMove1.x = white_Bishub1.x + 100;
  whiteBishubMove1.y = white_Bishub1.y + 100;

  whiteBishubMove2.x = white_Bishub1.x + 200;
  whiteBishubMove2.y = white_Bishub1.y + 200;

  whiteBishubMove3.x = white_Bishub1.x + 300;
  whiteBishubMove3.y = white_Bishub1.y + 300;

  whiteBishubMove4.x = white_Bishub1.x + 400;
  whiteBishubMove4.y = white_Bishub1.y + 400;

  whiteBishubMove5.x = white_Bishub1.x + 500;
  whiteBishubMove5.y = white_Bishub1.y + 500;

  whiteBishubMove6.x = white_Bishub1.x + 600;
  whiteBishubMove6.y = white_Bishub1.y + 600;

  whiteBishubMove7.x = white_Bishub1.x + 700;
  whiteBishubMove7.y = white_Bishub1.y + 700;

  whiteBishubMove8.x = white_Bishub1.x - 100;
  whiteBishubMove8.y = white_Bishub1.y - 100;

  whiteBishubMove9.x = white_Bishub1.x - 200;
  whiteBishubMove9.y = white_Bishub1.y - 200;

  whiteBishubMove10.x = white_Bishub1.x - 300;
  whiteBishubMove10.y = white_Bishub1.y - 300;

  whiteBishubMove11.x = white_Bishub1.x - 400;
  whiteBishubMove11.y = white_Bishub1.y - 400;

  whiteBishubMove12.x = white_Bishub1.x - 500;
  whiteBishubMove12.y = white_Bishub1.y - 500;

  whiteBishubMove13.x = white_Bishub1.x - 600;
  whiteBishubMove13.y = white_Bishub1.y - 600;

  whiteBishubMove14.x = white_Bishub1.x - 700;
  whiteBishubMove14.y = white_Bishub1.y - 700;

  whiteBishubMove15.x = white_Bishub1.x - 100;
  whiteBishubMove15.y = white_Bishub1.y + 100;

  whiteBishubMove16.x = white_Bishub1.x - 200;
  whiteBishubMove16.y = white_Bishub1.y + 200;

  whiteBishubMove17.x = white_Bishub1.x - 300;
  whiteBishubMove17.y = white_Bishub1.y + 300;

  whiteBishubMove18.x = white_Bishub1.x - 400;
  whiteBishubMove18.y = white_Bishub1.y + 400;

  whiteBishubMove19.x = white_Bishub1.x - 500;
  whiteBishubMove19.y = white_Bishub1.y + 500;

  whiteBishubMove20.x = white_Bishub1.x - 600;
  whiteBishubMove20.y = white_Bishub1.y + 600;

  whiteBishubMove21.x = white_Bishub1.x - 700;
  whiteBishubMove21.y = white_Bishub1.y + 700;

  whiteBishubMove22.x = white_Bishub1.x + 100;
  whiteBishubMove22.y = white_Bishub1.y - 100;

  whiteBishubMove23.x = white_Bishub1.x + 200;
  whiteBishubMove23.y = white_Bishub1.y - 200;

  whiteBishubMove24.x = white_Bishub1.x + 300;
  whiteBishubMove24.y = white_Bishub1.y - 300;

  whiteBishubMove25.x = white_Bishub1.x + 400;
  whiteBishubMove25.y = white_Bishub1.y - 400;

  whiteBishubMove26.x = white_Bishub1.x + 500;
  whiteBishubMove26.y = white_Bishub1.y - 500;

  whiteBishubMove27.x = white_Bishub1.x + 600;
  whiteBishubMove27.y = white_Bishub1.y - 600;

  whiteBishubMove28.x = white_Bishub1.x + 700;
  whiteBishubMove28.y = white_Bishub1.y - 700;



  whiteBishub2Move1.x = white_Bishub2.x + 100;
  whiteBishub2Move1.y = white_Bishub2.y + 100;

  whiteBishub2Move2.x = white_Bishub2.x + 200;
  whiteBishub2Move2.y = white_Bishub2.y + 200;

  whiteBishub2Move3.x = white_Bishub2.x + 300;
  whiteBishub2Move3.y = white_Bishub2.y + 300;

  whiteBishub2Move4.x = white_Bishub2.x + 400;
  whiteBishub2Move4.y = white_Bishub2.y + 400;

  whiteBishub2Move5.x = white_Bishub2.x + 500;
  whiteBishub2Move5.y = white_Bishub2.y + 500;

  whiteBishub2Move6.x = white_Bishub2.x + 600;
  whiteBishub2Move6.y = white_Bishub2.y + 600;

  whiteBishub2Move7.x = white_Bishub2.x + 700;
  whiteBishub2Move7.y = white_Bishub2.y + 700;

  whiteBishub2Move8.x = white_Bishub2.x - 100;
  whiteBishub2Move8.y = white_Bishub2.y - 100;

  whiteBishub2Move9.x = white_Bishub2.x - 200;
  whiteBishub2Move9.y = white_Bishub2.y - 200;

  whiteBishub2Move10.x = white_Bishub2.x - 300;
  whiteBishub2Move10.y = white_Bishub2.y - 300;

  whiteBishub2Move11.x = white_Bishub2.x - 400;
  whiteBishub2Move11.y = white_Bishub2.y - 400;

  whiteBishub2Move12.x = white_Bishub2.x - 500;
  whiteBishub2Move12.y = white_Bishub2.y - 500;

  whiteBishub2Move13.x = white_Bishub2.x - 600;
  whiteBishub2Move13.y = white_Bishub2.y - 600;

  whiteBishub2Move14.x = white_Bishub2.x - 700;
  whiteBishub2Move14.y = white_Bishub2.y - 700;

  whiteBishub2Move15.x = white_Bishub2.x - 100;
  whiteBishub2Move15.y = white_Bishub2.y + 100;

  whiteBishub2Move16.x = white_Bishub2.x - 200;
  whiteBishub2Move16.y = white_Bishub2.y + 200;

  whiteBishub2Move17.x = white_Bishub2.x - 300;
  whiteBishub2Move17.y = white_Bishub2.y + 300;

  whiteBishub2Move18.x = white_Bishub2.x - 400;
  whiteBishub2Move18.y = white_Bishub2.y + 400;

  whiteBishub2Move19.x = white_Bishub2.x - 500;
  whiteBishub2Move19.y = white_Bishub2.y + 500;

  whiteBishub2Move20.x = white_Bishub2.x - 600;
  whiteBishub2Move20.y = white_Bishub2.y + 600;

  whiteBishub2Move21.x = white_Bishub2.x - 700;
  whiteBishub2Move21.y = white_Bishub2.y + 700;

  whiteBishub2Move22.x = white_Bishub2.x + 100;
  whiteBishub2Move22.y = white_Bishub2.y - 100;

  whiteBishub2Move23.x = white_Bishub2.x + 200;
  whiteBishub2Move23.y = white_Bishub2.y - 200;

  whiteBishub2Move24.x = white_Bishub2.x + 300;
  whiteBishub2Move24.y = white_Bishub2.y - 300;

  whiteBishub2Move25.x = white_Bishub2.x + 400;
  whiteBishub2Move25.y = white_Bishub2.y - 400;

  whiteBishub2Move26.x = white_Bishub2.x + 500;
  whiteBishub2Move26.y = white_Bishub2.y - 500;

  whiteBishub2Move27.x = white_Bishub2.x + 600;
  whiteBishub2Move27.y = white_Bishub2.y - 600;

  whiteBishub2Move28.x = white_Bishub2.x + 700;
  whiteBishub2Move28.y = white_Bishub2.y - 700;

  

  whiteRook1Move1.x = white_Rook1.x + 100;
  whiteRook1Move1.y = white_Rook1.y;

  whiteRook1Move2.x = white_Rook1.x + 200;
  whiteRook1Move2.y = white_Rook1.y;

  whiteRook1Move3.x = white_Rook1.x + 300;
  whiteRook1Move3.y = white_Rook1.y;

  whiteRook1Move4.x = white_Rook1.x + 400;
  whiteRook1Move4.y = white_Rook1.y;

  whiteRook1Move5.x = white_Rook1.x + 500;
  whiteRook1Move5.y = white_Rook1.y;

  whiteRook1Move6.x = white_Rook1.x + 600;
  whiteRook1Move6.y = white_Rook1.y;

  whiteRook1Move7.x = white_Rook1.x + 700;
  whiteRook1Move7.y = white_Rook1.y;

  whiteRook1Move8.x = white_Rook1.x - 100;
  whiteRook1Move8.y = white_Rook1.y;

  whiteRook1Move9.x = white_Rook1.x - 200;
  whiteRook1Move9.y = white_Rook1.y;

  whiteRook1Move10.x = white_Rook1.x - 300;
  whiteRook1Move10.y = white_Rook1.y;

  whiteRook1Move11.x = white_Rook1.x - 400;
  whiteRook1Move11.y = white_Rook1.y;

  whiteRook1Move12.x = white_Rook1.x - 500;
  whiteRook1Move12.y = white_Rook1.y;

  whiteRook1Move13.x = white_Rook1.x - 600;
  whiteRook1Move13.y = white_Rook1.y;

  whiteRook1Move14.x = white_Rook1.x - 700;
  whiteRook1Move14.y = white_Rook1.y;

  whiteRook1Move15.x = white_Rook1.x;
  whiteRook1Move15.y = white_Rook1.y + 100;

  whiteRook1Move16.x = white_Rook1.x;
  whiteRook1Move16.y = white_Rook1.y + 200;

  whiteRook1Move17.x = white_Rook1.x;
  whiteRook1Move17.y = white_Rook1.y + 300;

  whiteRook1Move18.x = white_Rook1.x;
  whiteRook1Move18.y = white_Rook1.y + 400;

  whiteRook1Move19.x = white_Rook1.x;
  whiteRook1Move19.y = white_Rook1.y + 500;

  whiteRook1Move20.x = white_Rook1.x;
  whiteRook1Move20.y = white_Rook1.y + 600;

  whiteRook1Move21.x = white_Rook1.x;
  whiteRook1Move21.y = white_Rook1.y + 700;

  whiteRook1Move22.x = white_Rook1.x;
  whiteRook1Move22.y = white_Rook1.y - 100;

  whiteRook1Move23.x = white_Rook1.x;
  whiteRook1Move23.y = white_Rook1.y - 200;

  whiteRook1Move24.x = white_Rook1.x;
  whiteRook1Move24.y = white_Rook1.y - 300;

  whiteRook1Move25.x = white_Rook1.x;
  whiteRook1Move25.y = white_Rook1.y - 400;

  whiteRook1Move26.x = white_Rook1.x;
  whiteRook1Move26.y = white_Rook1.y - 500;

  whiteRook1Move27.x = white_Rook1.x;
  whiteRook1Move27.y = white_Rook1.y - 600;

  whiteRook1Move28.x = white_Rook1.x;
  whiteRook1Move28.y = white_Rook1.y - 700;



  whiteRook2Move1.x = white_Rook2.x + 100;
  whiteRook2Move1.y = white_Rook2.y;

  whiteRook2Move2.x = white_Rook2.x + 200;
  whiteRook2Move2.y = white_Rook2.y;

  whiteRook2Move3.x = white_Rook2.x + 300;
  whiteRook2Move3.y = white_Rook2.y;

  whiteRook2Move4.x = white_Rook2.x + 400;
  whiteRook2Move4.y = white_Rook2.y;

  whiteRook2Move5.x = white_Rook2.x + 500;
  whiteRook2Move5.y = white_Rook2.y;

  whiteRook2Move6.x = white_Rook2.x + 600;
  whiteRook2Move6.y = white_Rook2.y;

  whiteRook2Move7.x = white_Rook2.x + 700;
  whiteRook2Move7.y = white_Rook2.y;

  whiteRook2Move8.x = white_Rook2.x - 100;
  whiteRook2Move8.y = white_Rook2.y;

  whiteRook2Move9.x = white_Rook2.x - 200;
  whiteRook2Move9.y = white_Rook2.y;

  whiteRook2Move10.x = white_Rook2.x - 300;
  whiteRook2Move10.y = white_Rook2.y;

  whiteRook2Move11.x = white_Rook2.x - 400;
  whiteRook2Move11.y = white_Rook2.y;

  whiteRook2Move12.x = white_Rook2.x - 500;
  whiteRook2Move12.y = white_Rook2.y;

  whiteRook2Move13.x = white_Rook2.x - 600;
  whiteRook2Move13.y = white_Rook2.y;

  whiteRook2Move14.x = white_Rook2.x - 700;
  whiteRook2Move14.y = white_Rook2.y;

  whiteRook2Move15.x = white_Rook2.x;
  whiteRook2Move15.y = white_Rook2.y + 100;

  whiteRook2Move16.x = white_Rook2.x;
  whiteRook2Move16.y = white_Rook2.y + 200;

  whiteRook2Move17.x = white_Rook2.x;
  whiteRook2Move17.y = white_Rook2.y + 300;

  whiteRook2Move18.x = white_Rook2.x;
  whiteRook2Move18.y = white_Rook2.y + 400;

  whiteRook2Move19.x = white_Rook2.x;
  whiteRook2Move19.y = white_Rook2.y + 500;

  whiteRook2Move20.x = white_Rook2.x;
  whiteRook2Move20.y = white_Rook2.y + 600;

  whiteRook2Move21.x = white_Rook2.x;
  whiteRook2Move21.y = white_Rook2.y + 700;

  whiteRook2Move22.x = white_Rook2.x;
  whiteRook2Move22.y = white_Rook2.y - 100;

  whiteRook2Move23.x = white_Rook2.x;
  whiteRook2Move23.y = white_Rook2.y - 200;

  whiteRook2Move24.x = white_Rook2.x;
  whiteRook2Move24.y = white_Rook2.y - 300;

  whiteRook2Move25.x = white_Rook2.x;
  whiteRook2Move25.y = white_Rook2.y - 400;

  whiteRook2Move26.x = white_Rook2.x;
  whiteRook2Move26.y = white_Rook2.y - 500;

  whiteRook2Move27.x = white_Rook2.x;
  whiteRook2Move27.y = white_Rook2.y - 600;

  whiteRook2Move28.x = white_Rook2.x;
  whiteRook2Move28.y = white_Rook2.y - 700;

  


  whiteKnight1Move1.x = white_Knight1.x + 100;
  whiteKnight1Move1.y = white_Knight1.y - 200;

  whiteKnight1Move2.x = white_Knight1.x - 100;
  whiteKnight1Move2.y = white_Knight1.y - 200;

  whiteKnight1Move3.x = white_Knight1.x + 100;
  whiteKnight1Move3.y = white_Knight1.y + 200;

  whiteKnight1Move4.x = white_Knight1.x - 100;
  whiteKnight1Move4.y = white_Knight1.y + 200;

  whiteKnight1Move5.x = white_Knight1.x + 200;
  whiteKnight1Move5.y = white_Knight1.y - 100;

  whiteKnight1Move6.x = white_Knight1.x + 200;
  whiteKnight1Move6.y = white_Knight1.y + 100;

  whiteKnight1Move7.x = white_Knight1.x - 200;
  whiteKnight1Move7.y = white_Knight1.y - 100;

  whiteKnight1Move8.x = white_Knight1.x - 200;
  whiteKnight1Move8.y = white_Knight1.y + 100;




  whiteKnight2Move1.x = white_Knight2.x + 100;
  whiteKnight2Move1.y = white_Knight2.y - 200;

  whiteKnight2Move2.x = white_Knight2.x - 100;
  whiteKnight2Move2.y = white_Knight2.y - 200;

  whiteKnight2Move3.x = white_Knight2.x + 100;
  whiteKnight2Move3.y = white_Knight2.y + 200;

  whiteKnight2Move4.x = white_Knight2.x - 100;
  whiteKnight2Move4.y = white_Knight2.y + 200;

  whiteKnight2Move5.x = white_Knight2.x + 200;
  whiteKnight2Move5.y = white_Knight2.y - 100;

  whiteKnight2Move6.x = white_Knight2.x + 200;
  whiteKnight2Move6.y = white_Knight2.y + 100;

  whiteKnight2Move7.x = white_Knight2.x - 200;
  whiteKnight2Move7.y = white_Knight2.y - 100;

  whiteKnight2Move8.x = white_Knight2.x - 200;
  whiteKnight2Move8.y = white_Knight2.y + 100;



  blackBishubMove1.x = black_Bishub1.x + 100;
  blackBishubMove1.y = black_Bishub1.y + 100;

  blackBishubMove2.x = black_Bishub1.x + 200;
  blackBishubMove2.y = black_Bishub1.y + 200;

  blackBishubMove3.x = black_Bishub1.x + 300;
  blackBishubMove3.y = black_Bishub1.y + 300;

  blackBishubMove4.x = black_Bishub1.x + 400;
  blackBishubMove4.y = black_Bishub1.y + 400;

  blackBishubMove5.x = black_Bishub1.x + 500;
  blackBishubMove5.y = black_Bishub1.y + 500;

  blackBishubMove6.x = black_Bishub1.x + 600;
  blackBishubMove6.y = black_Bishub1.y + 600;

  blackBishubMove7.x = black_Bishub1.x + 700;
  blackBishubMove7.y = black_Bishub1.y + 700;

  blackBishubMove8.x = black_Bishub1.x - 100;
  blackBishubMove8.y = black_Bishub1.y - 100;

  blackBishubMove9.x = black_Bishub1.x - 200;
  blackBishubMove9.y = black_Bishub1.y - 200;

  blackBishubMove10.x = black_Bishub1.x - 300;
  blackBishubMove10.y = black_Bishub1.y - 300;

  blackBishubMove11.x = black_Bishub1.x - 400;
  blackBishubMove11.y = black_Bishub1.y - 400;

  blackBishubMove12.x = black_Bishub1.x - 500;
  blackBishubMove12.y = black_Bishub1.y - 500;

  blackBishubMove13.x = black_Bishub1.x - 600;
  blackBishubMove13.y = black_Bishub1.y - 600;

  blackBishubMove14.x = black_Bishub1.x - 700;
  blackBishubMove14.y = black_Bishub1.y - 700;

  blackBishubMove15.x = black_Bishub1.x - 100;
  blackBishubMove15.y = black_Bishub1.y + 100;

  blackBishubMove16.x = black_Bishub1.x - 200;
  blackBishubMove16.y = black_Bishub1.y + 200;

  blackBishubMove17.x = black_Bishub1.x - 300;
  blackBishubMove17.y = black_Bishub1.y + 300;

  blackBishubMove18.x = black_Bishub1.x - 400;
  blackBishubMove18.y = black_Bishub1.y + 400;

  blackBishubMove19.x = black_Bishub1.x - 500;
  blackBishubMove19.y = black_Bishub1.y + 500;

  blackBishubMove20.x = black_Bishub1.x - 600;
  blackBishubMove20.y = black_Bishub1.y + 600;

  blackBishubMove21.x = black_Bishub1.x - 700;
  blackBishubMove21.y = black_Bishub1.y + 700;

  blackBishubMove22.x = black_Bishub1.x + 100;
  blackBishubMove22.y = black_Bishub1.y - 100;

  blackBishubMove23.x = black_Bishub1.x + 200;
  blackBishubMove23.y = black_Bishub1.y - 200;

  blackBishubMove24.x = black_Bishub1.x + 300;
  blackBishubMove24.y = black_Bishub1.y - 300;

  blackBishubMove25.x = black_Bishub1.x + 400;
  blackBishubMove25.y = black_Bishub1.y - 400;

  blackBishubMove26.x = black_Bishub1.x + 500;
  blackBishubMove26.y = black_Bishub1.y - 500;

  blackBishubMove27.x = black_Bishub1.x + 600;
  blackBishubMove27.y = black_Bishub1.y - 600;

  blackBishubMove28.x = black_Bishub1.x + 700;
  blackBishubMove28.y = black_Bishub1.y - 700;



  blackBishub2Move1.x = black_Bishub2.x + 100;
  blackBishub2Move1.y = black_Bishub2.y + 100;

  blackBishub2Move2.x = black_Bishub2.x + 200;
  blackBishub2Move2.y = black_Bishub2.y + 200;

  blackBishub2Move3.x = black_Bishub2.x + 300;
  blackBishub2Move3.y = black_Bishub2.y + 300;

  blackBishub2Move4.x = black_Bishub2.x + 400;
  blackBishub2Move4.y = black_Bishub2.y + 400;

  blackBishub2Move5.x = black_Bishub2.x + 500;
  blackBishub2Move5.y = black_Bishub2.y + 500;

  blackBishub2Move6.x = black_Bishub2.x + 600;
  blackBishub2Move6.y = black_Bishub2.y + 600;

  blackBishub2Move7.x = black_Bishub2.x + 700;
  blackBishub2Move7.y = black_Bishub2.y + 700;

  blackBishub2Move8.x = black_Bishub2.x - 100;
  blackBishub2Move8.y = black_Bishub2.y - 100;

  blackBishub2Move9.x = black_Bishub2.x - 200;
  blackBishub2Move9.y = black_Bishub2.y - 200;

  blackBishub2Move10.x = black_Bishub2.x - 300;
  blackBishub2Move10.y = black_Bishub2.y - 300;

  blackBishub2Move11.x = black_Bishub2.x - 400;
  blackBishub2Move11.y = black_Bishub2.y - 400;

  blackBishub2Move12.x = black_Bishub2.x - 500;
  blackBishub2Move12.y = black_Bishub2.y - 500;

  blackBishub2Move13.x = black_Bishub2.x - 600;
  blackBishub2Move13.y = black_Bishub2.y - 600;

  blackBishub2Move14.x = black_Bishub2.x - 700;
  blackBishub2Move14.y = black_Bishub2.y - 700;

  blackBishub2Move15.x = black_Bishub2.x - 100;
  blackBishub2Move15.y = black_Bishub2.y + 100;

  blackBishub2Move16.x = black_Bishub2.x - 200;
  blackBishub2Move16.y = black_Bishub2.y + 200;

  blackBishub2Move17.x = black_Bishub2.x - 300;
  blackBishub2Move17.y = black_Bishub2.y + 300;

  blackBishub2Move18.x = black_Bishub2.x - 400;
  blackBishub2Move18.y = black_Bishub2.y + 400;

  blackBishub2Move19.x = black_Bishub2.x - 500;
  blackBishub2Move19.y = black_Bishub2.y + 500;

  blackBishub2Move20.x = black_Bishub2.x - 600;
  blackBishub2Move20.y = black_Bishub2.y + 600;

  blackBishub2Move21.x = black_Bishub2.x - 700;
  blackBishub2Move21.y = black_Bishub2.y + 700;

  blackBishub2Move22.x = black_Bishub2.x + 100;
  blackBishub2Move22.y = black_Bishub2.y - 100;

  blackBishub2Move23.x = black_Bishub2.x + 200;
  blackBishub2Move23.y = black_Bishub2.y - 200;

  blackBishub2Move24.x = black_Bishub2.x + 300;
  blackBishub2Move24.y = black_Bishub2.y - 300;

  blackBishub2Move25.x = black_Bishub2.x + 400;
  blackBishub2Move25.y = black_Bishub2.y - 400;

  blackBishub2Move26.x = black_Bishub2.x + 500;
  blackBishub2Move26.y = black_Bishub2.y - 500;

  blackBishub2Move27.x = black_Bishub2.x + 600;
  blackBishub2Move27.y = black_Bishub2.y - 600;

  blackBishub2Move28.x = black_Bishub2.x + 700;
  blackBishub2Move28.y = black_Bishub2.y - 700;

  

  blackRook1Move1.x = black_Rook1.x + 100;
  blackRook1Move1.y = black_Rook1.y;

  blackRook1Move2.x = black_Rook1.x + 200;
  blackRook1Move2.y = black_Rook1.y;

  blackRook1Move3.x = black_Rook1.x + 300;
  blackRook1Move3.y = black_Rook1.y;

  blackRook1Move4.x = black_Rook1.x + 400;
  blackRook1Move4.y = black_Rook1.y;

  blackRook1Move5.x = black_Rook1.x + 500;
  blackRook1Move5.y = black_Rook1.y;

  blackRook1Move6.x = black_Rook1.x + 600;
  blackRook1Move6.y = black_Rook1.y;

  blackRook1Move7.x = black_Rook1.x + 700;
  blackRook1Move7.y = black_Rook1.y;

  blackRook1Move8.x = black_Rook1.x - 100;
  blackRook1Move8.y = black_Rook1.y;

  blackRook1Move9.x = black_Rook1.x - 200;
  blackRook1Move9.y = black_Rook1.y;

  blackRook1Move10.x = black_Rook1.x - 300;
  blackRook1Move10.y = black_Rook1.y;

  blackRook1Move11.x = black_Rook1.x - 400;
  blackRook1Move11.y = black_Rook1.y;

  blackRook1Move12.x = black_Rook1.x - 500;
  blackRook1Move12.y = black_Rook1.y;

  blackRook1Move13.x = black_Rook1.x - 600;
  blackRook1Move13.y = black_Rook1.y;

  blackRook1Move14.x = black_Rook1.x - 700;
  blackRook1Move14.y = black_Rook1.y;

  blackRook1Move15.x = black_Rook1.x;
  blackRook1Move15.y = black_Rook1.y + 100;

  blackRook1Move16.x = black_Rook1.x;
  blackRook1Move16.y = black_Rook1.y + 200;

  blackRook1Move17.x = black_Rook1.x;
  blackRook1Move17.y = black_Rook1.y + 300;

  blackRook1Move18.x = black_Rook1.x;
  blackRook1Move18.y = black_Rook1.y + 400;

  blackRook1Move19.x = black_Rook1.x;
  blackRook1Move19.y = black_Rook1.y + 500;

  blackRook1Move20.x = black_Rook1.x;
  blackRook1Move20.y = black_Rook1.y + 600;

  blackRook1Move21.x = black_Rook1.x;
  blackRook1Move21.y = black_Rook1.y + 700;

  blackRook1Move22.x = black_Rook1.x;
  blackRook1Move22.y = black_Rook1.y - 100;

  blackRook1Move23.x = black_Rook1.x;
  blackRook1Move23.y = black_Rook1.y - 200;

  blackRook1Move24.x = black_Rook1.x;
  blackRook1Move24.y = black_Rook1.y - 300;

  blackRook1Move25.x = black_Rook1.x;
  blackRook1Move25.y = black_Rook1.y - 400;

  blackRook1Move26.x = black_Rook1.x;
  blackRook1Move26.y = black_Rook1.y - 500;

  blackRook1Move27.x = black_Rook1.x;
  blackRook1Move27.y = black_Rook1.y - 600;

  blackRook1Move28.x = black_Rook1.x;
  blackRook1Move28.y = black_Rook1.y - 700;



  blackRook2Move1.x = black_Rook2.x + 100;
  blackRook2Move1.y = black_Rook2.y;

  blackRook2Move2.x = black_Rook2.x + 200;
  blackRook2Move2.y = black_Rook2.y;

  blackRook2Move3.x = black_Rook2.x + 300;
  blackRook2Move3.y = black_Rook2.y;

  blackRook2Move4.x = black_Rook2.x + 400;
  blackRook2Move4.y = black_Rook2.y;

  blackRook2Move5.x = black_Rook2.x + 500;
  blackRook2Move5.y = black_Rook2.y;

  blackRook2Move6.x = black_Rook2.x + 600;
  blackRook2Move6.y = black_Rook2.y;

  blackRook2Move7.x = black_Rook2.x + 700;
  blackRook2Move7.y = black_Rook2.y;

  blackRook2Move8.x = black_Rook2.x - 100;
  blackRook2Move8.y = black_Rook2.y;

  blackRook2Move9.x = black_Rook2.x - 200;
  blackRook2Move9.y = black_Rook2.y;

  blackRook2Move10.x = black_Rook2.x - 300;
  blackRook2Move10.y = black_Rook2.y;

  blackRook2Move11.x = black_Rook2.x - 400;
  blackRook2Move11.y = black_Rook2.y;

  blackRook2Move12.x = black_Rook2.x - 500;
  blackRook2Move12.y = black_Rook2.y;

  blackRook2Move13.x = black_Rook2.x - 600;
  blackRook2Move13.y = black_Rook2.y;

  blackRook2Move14.x = black_Rook2.x - 700;
  blackRook2Move14.y = black_Rook2.y;

  blackRook2Move15.x = black_Rook2.x;
  blackRook2Move15.y = black_Rook2.y + 100;

  blackRook2Move16.x = black_Rook2.x;
  blackRook2Move16.y = black_Rook2.y + 200;

  blackRook2Move17.x = black_Rook2.x;
  blackRook2Move17.y = black_Rook2.y + 300;

  blackRook2Move18.x = black_Rook2.x;
  blackRook2Move18.y = black_Rook2.y + 400;

  blackRook2Move19.x = black_Rook2.x;
  blackRook2Move19.y = black_Rook2.y + 500;

  blackRook2Move20.x = black_Rook2.x;
  blackRook2Move20.y = black_Rook2.y + 600;

  blackRook2Move21.x = black_Rook2.x;
  blackRook2Move21.y = black_Rook2.y + 700;

  blackRook2Move22.x = black_Rook2.x;
  blackRook2Move22.y = black_Rook2.y - 100;

  blackRook2Move23.x = black_Rook2.x;
  blackRook2Move23.y = black_Rook2.y - 200;

  blackRook2Move24.x = black_Rook2.x;
  blackRook2Move24.y = black_Rook2.y - 300;

  blackRook2Move25.x = black_Rook2.x;
  blackRook2Move25.y = black_Rook2.y - 400;

  blackRook2Move26.x = black_Rook2.x;
  blackRook2Move26.y = black_Rook2.y - 500;

  blackRook2Move27.x = black_Rook2.x;
  blackRook2Move27.y = black_Rook2.y - 600;

  blackRook2Move28.x = black_Rook2.x;
  blackRook2Move28.y = black_Rook2.y - 700;

  


  blackKnight1Move1.x = black_Knight1.x + 100;
  blackKnight1Move1.y = black_Knight1.y - 200;

  blackKnight1Move2.x = black_Knight1.x - 100;
  blackKnight1Move2.y = black_Knight1.y - 200;

  blackKnight1Move3.x = black_Knight1.x + 100;
  blackKnight1Move3.y = black_Knight1.y + 200;

  blackKnight1Move4.x = black_Knight1.x - 100;
  blackKnight1Move4.y = black_Knight1.y + 200;

  blackKnight1Move5.x = black_Knight1.x + 200;
  blackKnight1Move5.y = black_Knight1.y - 100;

  blackKnight1Move6.x = black_Knight1.x + 200;
  blackKnight1Move6.y = black_Knight1.y + 100;

  blackKnight1Move7.x = black_Knight1.x - 200;
  blackKnight1Move7.y = black_Knight1.y - 100;

  blackKnight1Move8.x = black_Knight1.x - 200;
  blackKnight1Move8.y = black_Knight1.y + 100;




  blackKnight2Move1.x = black_Knight2.x + 100;
  blackKnight2Move1.y = black_Knight2.y - 200;

  blackKnight2Move2.x = black_Knight2.x - 100;
  blackKnight2Move2.y = black_Knight2.y - 200;

  blackKnight2Move3.x = black_Knight2.x + 100;
  blackKnight2Move3.y = black_Knight2.y + 200;

  blackKnight2Move4.x = black_Knight2.x - 100;
  blackKnight2Move4.y = black_Knight2.y + 200;

  blackKnight2Move5.x = black_Knight2.x + 200;
  blackKnight2Move5.y = black_Knight2.y - 100;

  blackKnight2Move6.x = black_Knight2.x + 200;
  blackKnight2Move6.y = black_Knight2.y + 100;

  blackKnight2Move7.x = black_Knight2.x - 200;
  blackKnight2Move7.y = black_Knight2.y - 100;

  blackKnight2Move8.x = black_Knight2.x - 200;
  blackKnight2Move8.y = black_Knight2.y + 100;




  //king1.display();
  /*queen1.display();
  bishub1.display();
  bishub2.display();
  knight1.display();
  knight2.display();
  rook1.display();
  rook2.display();

  pawn1.display();
  pawn2.display();
  pawn3.display();
  pawn4.display();
  pawn5.display();
  pawn6.display();
  pawn7.display();
  pawn8.display();

  //black pieces
  king2.display();
  queen2.display();
  bishub3.display();
  bishub4.display();
  knight3.display();
  knight4.display();
  rook3.display();
  rook4.display();

  bpawn1.display();
  bpawn2.display();
  bpawn3.display();
  bpawn4.display();
  bpawn5.display();
  bpawn6.display();
  bpawn7.display();
  bpawn8.display();

  if(gameState !== "queenSelected" && chance === "white"){  
    for (var x = 100; x < 800; x=x+100) {

      
      
      queenMove1 = createSprite(0,0,50,50);
      queenMove1.x = white_Queen.x + x;
      queenMove1.y = white_Queen.y;
      
      queenMove2 = createSprite(0,0,50,50);
      queenMove2.x = white_Queen.x - x;
      queenMove2.y = white_Queen.y;
      
      queenMove3 = createSprite(0,0,50,50);
      queenMove3.x = white_Queen.x;
      queenMove3.y = white_Queen.y + x;
    
      queenMove4 = createSprite(0,0,50,50);
      queenMove4.x = white_Queen.x;
      queenMove4.y = white_Queen.y - x;
      
      if(gameState !== "queenSelected"){
        queenMove1.visible = false;
        queenMove2.visible = false;
        queenMove3.visible = false;
        queenMove4.visible = false;
      }

      if(gameState === "queenSelected" && chance === "white"){
        queenMove1.visible = true;
        queenMove2.visible = true;
        queenMove3.visible = true;
        queenMove4.visible = true;

        if(mousePressedOver(queenMove1)){
          white_Queen.x = queenMove1.x;
          white_Queen.y = queenMove1.y;
    
          queenMove1.visible = false;
          queenMove2.visible = false;
          queenMove3.visible = false;
          queenMove4.visible = false;
    
    
          gameState = "selecting";
          chance = "white"
        }
    
        if(mousePressedOver(queenMove2)){
          white_Queen.x = queenMove2.x;
          white_Queen.y = queenMove2.y;
    
          queenMove1.visible = false;
          queenMove2.visible = false;
          queenMove3.visible = false;
          queenMove4.visible = false;
          
    
          gameState = "selecting";
          chance = "white"
        }
    
        if(mousePressedOver(queenMove3)){
          white_Queen.x = queenMove3.x;
          white_Queen.y = queenMove3.y;
    
          queenMove1.visible = false;
          queenMove2.visible = false;
          queenMove3.visible = false;
          queenMove4.visible = false;
          
    
          gameState = "selecting";
          chance = "white"
        }
    
        if(mousePressedOver(queenMove4)){
          white_Queen.x = queenMove4.x;
          white_Queen.y = queenMove4.y;
    
          queenMove1.visible = false;
          queenMove2.visible = false;
          queenMove3.visible = false;
          queenMove4.visible = false;
      
    
          gameState = "selecting";
          chance = "white"
        }
      }
      
    }
  }*/
  

  


  whiteKingMoves();

  blackKingMoves();

  whitePawn1Move();

  whitePawn2Move();

  whitePawn3Move();

  whitePawn4Move();

  whitePawn5Move();

  whitePawn6Move();

  whitePawn7Move();

  whitePawn8Move();

  blackPawn1Move();

  blackPawn2Move();

  blackPawn3Move();

  blackPawn4Move();

  blackPawn5Move();

  blackPawn6Move();

  blackPawn7Move();

  blackPawn8Move();

  whiteQueenMove();

  blackQueenMove();

  whiteBishub1Move();

  whiteBishub2Move();

  whiteRook1Move();

  whiteRook2Move();

  whiteKnight1Move();

  whiteKnight2Move();

  blackBishub1Move();

  blackBishub2Move();

  blackRook1Move();

  blackRook2Move();

  blackKnight1Move();

  blackKnight2Move();

  blackPiecesPositionX();

  drawSprites();
}

function board(){
  for(var x = 0; x < 8; x++){
    for(var y = 0; y < 8; y++){
      if((x + y) % 2 === 1){
        fill("black");
      }else{
        fill("white");
      }
      
      rect(x*tileSize, y*tileSize, tileSize, tileSize);
    }
  }
}

function WhightKingPosition(data){
  white_KingPosition = data.val();

  white_King.x = white_KingPosition.x;
  white_King.y = white_KingPosition.y;
}

function WhightQueenPosition(data){
  white_QueenPosition = data.val();

  white_Queen.x = white_QueenPosition.x;
  white_Queen.y = white_QueenPosition.y;
}

function WhightRook1Position(data){
  white_Rook1Position = data.val();

  white_Rook1.x = white_Rook1Position.x;
  white_Rook1.y = white_Rook1Position.y;
}

function WhightRook2Position(data){
  white_Rook2Position = data.val();

  white_Rook2.x = white_Rook2Position.x;
  white_Rook2.y = white_Rook2Position.y;
}

function WhightKnight1Position(data){
  white_Knight1Position = data.val();

  white_Knight1.x = white_Knight1Position.x;
  white_Knight1.y = white_Knight1Position.y;
}

function WhightKnight2Position(data){
  white_Knight2Position = data.val();

  white_Knight2.x = white_Knight2Position.x;
  white_Knight2.y = white_Knight2Position.y;
}

function WhightBishub1Position(data){
  white_Bishub1Position = data.val();

  white_Bishub1.x = white_Bishub1Position.x;
  white_Bishub1.y = white_Bishub1Position.y;
}

function WhightBishub2Position(data){
  white_Bishub2Position = data.val();

  white_Bishub2.x = white_Bishub2Position.x;
  white_Bishub2.y = white_Bishub2Position.y;
}

function WhightPawn1Position(data){
  white_Pawn1Position = data.val();

  white_Pawn1.x = white_Pawn1Position.x;
  white_Pawn1.y = white_Pawn1Position.y;
}

function WhightPawn2Position(data){
  white_Pawn2Position = data.val();

  white_Pawn2.x = white_Pawn2Position.x;
  white_Pawn2.y = white_Pawn2Position.y;
}

function WhightPawn3Position(data){
  white_Pawn3Position = data.val();

  white_Pawn3.x = white_Pawn3Position.x;
  white_Pawn3.y = white_Pawn3Position.y;
}

function WhightPawn4Position(data){
  white_Pawn4Position = data.val();

  white_Pawn4.x = white_Pawn4Position.x;
  white_Pawn4.y = white_Pawn4Position.y;
}

function WhightPawn5Position(data){
  white_Pawn5Position = data.val();

  white_Pawn5.x = white_Pawn5Position.x;
  white_Pawn5.y = white_Pawn5Position.y;
}

function WhightPawn6Position(data){
  white_Pawn6Position = data.val();

  white_Pawn6.x = white_Pawn6Position.x;
  white_Pawn6.y = white_Pawn6Position.y;
}

function WhightPawn7Position(data){
  white_Pawn7Position = data.val();

  white_Pawn7.x = white_Pawn7Position.x;
  white_Pawn7.y = white_Pawn7Position.y;
}

function WhightPawn8Position(data){
  white_Pawn8Position = data.val();

  white_Pawn8.x = white_Pawn8Position.x;
  white_Pawn8.y = white_Pawn8Position.y;
}

function blackKingPosition(data){
  black_King2Position = data.val();

  black_King.x = black_King2Position.x;
  black_King.y = black_King2Position.y;
}

function blackQueenPosition(data){
  black_Queen2Position = data.val();

  black_Queen.x = black_Queen2Position.x;
  black_Queen.y = black_Queen2Position.y;
}

function blackRook1Position(data){
  black_Rook3Position = data.val();

  black_Rook1.x = black_Rook3Position.x;
  black_Rook1.y = black_Rook3Position.y;
}

function blackRook2Position(data){
  black_Rook4Position = data.val();

  black_Rook2.x = black_Rook4Position.x;
  black_Rook2.y = black_Rook4Position.y;
}

function blackKnight1Position(data){
  black_Knight3Position = data.val();

  black_Knight1.x = black_Knight3Position.x;
  black_Knight1.y = black_Knight3Position.y;
}

function blackKnight2Position(data){
  black_Knight4Position = data.val();

  black_Knight2.x = black_Knight4Position.x;
  black_Knight2.y = black_Knight4Position.y;
}

function blackBishub1Position(data){
  black_Bishub3Position = data.val();

  black_Bishub1.x = black_Bishub3Position.x;
  black_Bishub1.y = black_Bishub3Position.y;
}

function blackBishub2Position(data){
  black_Bishub4Position = data.val();

  black_Bishub2.x = black_Bishub4Position.x;
  black_Bishub2.y = black_Bishub4Position.y;
}

function blackPawn1Position(data){
  black_bpawn1Position = data.val();

  black_Pawn1.x = black_bpawn1Position.x;
  black_Pawn1.y = black_bpawn1Position.y;
}

function blackPawn2Position(data){
  black_bpawn2Position = data.val();

  black_Pawn2.x = black_bpawn2Position.x;
  black_Pawn2.y = black_bpawn2Position.y;
}

function blackPawn3Position(data){
  black_bpawn3Position = data.val();

  black_Pawn3.x = black_bpawn3Position.x;
  black_Pawn3.y = black_bpawn3Position.y;
}

function blackPawn4Position(data){
  black_bpawn4Position = data.val();

  black_Pawn4.x = black_bpawn4Position.x;
  black_Pawn4.y = black_bpawn4Position.y;
}

function blackPawn5Position(data){
  black_bpawn5Position = data.val();

  black_Pawn5.x = black_bpawn5Position.x;
  black_Pawn5.y = black_bpawn5Position.y;
}

function blackPawn6Position(data){
  black_bpawn6Position = data.val();

  black_Pawn6.x = black_bpawn6Position.x;
  black_Pawn6.y = black_bpawn6Position.y;
}

function blackPawn7Position(data){
  black_bpawn7Position = data.val();

  black_Pawn7.x = black_bpawn7Position.x;
  black_Pawn7.y = black_bpawn7Position.y;
}

function blackPawn8Position(data){
  black_bpawn8Position = data.val();

  black_Pawn8.x = black_bpawn8Position.x;
  black_Pawn8.y = black_bpawn8Position.y;
}

function whiteKingMoves(){
  if(gameState === "selecting" && chance === "white"  || gameState === "Selected" && chance === "white"){
    if(mousePressedOver(white_King) || touches.length > 0){

      king1MovesA.visible = true;
      king1MovesB.visible = true;
      king1MovesC.visible = true;
      king1MovesD.visible = true;
      king1MovesE.visible = true;
      king1MovesF.visible = true;
      king1MovesG.visible = true;
      king1MovesH.visible = true; 

      gameState = "Selected";

      touches = [];
    }
    
    if(mouseIsOver(white_King)){
      king1MovesA.visible = true;
      king1MovesB.visible = true;
      king1MovesC.visible = true;
      king1MovesD.visible = true;
      king1MovesE.visible = true;
      king1MovesF.visible = true;
      king1MovesG.visible = true;
      king1MovesH.visible = true;
      
    }else{
      king1MovesA.visible = false;
      king1MovesB.visible = false;
      king1MovesC.visible = false;
      king1MovesD.visible = false;
      king1MovesE.visible = false;
      king1MovesF.visible = false;
      king1MovesG.visible = false;
      king1MovesH.visible = false;

    }
  
  }

  if(gameState === "Selected" && chance === "white"){
    if(mouseIsOver(king1MovesB)){
      forWhite(king1MovesB, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesC)){
      forWhite(king1MovesC, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesD)){
      forWhite(king1MovesD, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesE)){
      forWhite(king1MovesE, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesF)){
      forWhite(king1MovesF, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesG)){
      forWhite(king1MovesG, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesH)){
      forWhite(king1MovesH, white_King, whiteKingVisibilityTrue());
    }

    if(mouseIsOver(king1MovesA)){
      forWhite(king1MovesA, white_King, whiteKingVisibilityTrue());
    }
  }
}

function blackKingMoves(){
  if(chance === "white"){
    king2MovesA.visible = false;
    king2MovesB.visible = false;
    king2MovesC.visible = false;
    king2MovesD.visible = false;
    king2MovesE.visible = false;
    king2MovesF.visible = false;
    king2MovesG.visible = false;
    king2MovesH.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "Selected" && chance === "white" || touches.length > 0){
    if(mousePressedOver(black_King)){
      king2MovesA.visible = true;
      king2MovesB.visible = true;
      king2MovesC.visible = true;
      king2MovesD.visible = true;
      king2MovesE.visible = true;
      king2MovesF.visible = true;
      king2MovesG.visible = true;
      king2MovesH.visible = true; 

      gameState = "Selected";

      touches = []
    }
    
    if(mouseIsOver(black_King)){
      king2MovesA.visible = true;
      king2MovesB.visible = true;
      king2MovesC.visible = true;
      king2MovesD.visible = true;
      king2MovesE.visible = true;
      king2MovesF.visible = true;
      king2MovesG.visible = true;
      king2MovesH.visible = true; 
    }else{
      king2MovesA.visible = false;
      king2MovesB.visible = false;
      king2MovesC.visible = false;
      king2MovesD.visible = false;
      king2MovesE.visible = false;
      king2MovesF.visible = false;
      king2MovesG.visible = false;
      king2MovesH.visible = false;
      
      console.log("by");
    }
  
  }

  if(gameState === "Selected" && chance === "black"){
    if(mouseIsOver(king2MovesB)){
      forBlack(king2MovesB,black_King);
    }

    if(mouseIsOver(king2MovesC)){
      forBlack(king2MovesC,black_King);
    }

    if(mouseIsOver(king2MovesD)){
      forBlack(king2MovesD,black_King);
    }

    if(mouseIsOver(king2MovesE)){
      forBlack(king2MovesE,black_King);
    }

    if(mouseIsOver(king2MovesF)){
      forBlack(king2MovesF,black_King);
    }

    if(mouseIsOver(king2MovesG)){
      forBlack(king2MovesG,black_King);
    }

    if(mouseIsOver(king2MovesH)){
      forBlack(king2MovesH,black_King);
    }

    if(mouseIsOver(king2MovesA)){
      forBlack(king2MovesA,black_King);
    }
  }
}

/*function whitePawn1Move(){
  if(gameState === "selecting" && chance === "white"){
    if(mousePressedOver(white_Pawn1)){
      if(white_Pawn1.y === 650){
        WhitePawn1Move1.visible = true;
        WhitePawn1Move2.visible = true;
      }else if(white_Pawn1 !== 650){
        WhitePawn1Move1.visible = true;
      }

      if(blackPieces.x === white_Pawn1.x-100 && blackPieces.y === white_Pawn1-100){
        WhitePawn1Move3.visible = true;
      }

      if(blackPieces.x === white_Pawn1.x+100 && blackPieces.y === white_Pawn1-100){
        WhitePawn1Move4.visible = true;
      }
      
      gameState = "selected";
    }
    
    if(mouseIsOver(white_Pawn1)){
      if(white_Pawn1.y === 650){
        WhitePawn1Move1.visible = true;
        WhitePawn1Move2.visible = true;
      }else if(white_Pawn1 !== 650){
        WhitePawn1Move1.visible = true;
      }

      if(blackPieces.x === white_Pawn1.x-100 && blackPieces.y === white_Pawn1-100){
        WhitePawn1Move3.visible = true;
      }

      if(blackPieces.x === white_Pawn1.x+100 && blackPieces.y === white_Pawn1-100){
        WhitePawn1Move4.visible = true;
      }
      
    }else{
      WhitePawn1Move1.visible = false;
      WhitePawn1Move2.visible = false;
      WhitePawn1Move3.visible = false;
      WhitePawn1Move4.visible = false;
      
    }
  }
}*/

function whitePawn1Move(){
  if(gameState === "selecting" && chance === "white"){
    if(mousePressedOver(white_Pawn1 || touches.length > 0)){
      touches = [];

      if(white_Pawn1.y === 650){
        WhitePawn1Move1.visible = true;
        WhitePawn1Move2.visible = true;
      }else if(white_Pawn1 !== 650){
        WhitePawn1Move1.visible = true;
      }
      
      gameState = "pawn1Selected";

      
    }
    
    if(mouseIsOver(white_Pawn1)){
      if(white_Pawn1.y === 650){
        WhitePawn1Move1.visible = true;
        WhitePawn1Move2.visible = true;
      }else if(white_Pawn1.y !== 650){
        WhitePawn1Move1.visible = true;
      }


    }else{
      WhitePawn1Move1.visible = false;
      WhitePawn1Move2.visible = false;
      WhitePawn1Move3.visible = false;
      WhitePawn1Move4.visible = false;
      
    }
  }

  if(gameState === "pawn1Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn1Move1)){
      forWhite(WhitePawn1Move1, white_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn1Move2)){
      forWhite(WhitePawn1Move2, white_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn1Move3)){
      forWhite(WhitePawn1Move3, white_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn1Move4)){
      forWhite(WhitePawn1Move4, white_Pawn1, visibilityFalse());
    }
  }
}

function whitePawn2Move(){
  if(gameState === "selecting" && chance === "white"){
    if(mousePressedOver(white_Pawn2) || touches.length > 0){
      touches = [];
      if(white_Pawn2.y === 650){
        WhitePawn2Move1.visible = true;
        WhitePawn2Move2.visible = true;
      }else if(white_Pawn2 !== 650){
        WhitePawn2Move1.visible = true;
      }
      
      gameState = "pawn2Selected";
    }
    
    if(mouseIsOver(white_Pawn2)){
      if(white_Pawn2.y === 650){
        WhitePawn2Move1.visible = true;
        WhitePawn2Move2.visible = true;
      }else if(white_Pawn2 !== 650){
        WhitePawn2Move1.visible = true;
      }


    }else{
      WhitePawn2Move1.visible = false;
      WhitePawn2Move2.visible = false;
      WhitePawn2Move3.visible = false;
      WhitePawn2Move4.visible = false;
      
    }
  }

  if(gameState === "pawn2Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn2Move1)){
      forWhite(WhitePawn2Move1,white_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn2Move2)){
      forWhite(WhitePawn2Move2,white_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn2Move3)){
      forWhite(WhitePawn2Move3,white_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn2Move4)){
      forWhite(WhitePawn2Move4,white_Pawn2, visibilityFalse());
    }
  }
}

function whitePawn3Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn3) || touches.length > 0){
      touches = [];
      if(white_Pawn3.y === 650){
        WhitePawn3Move1.visible = true;
        WhitePawn3Move2.visible = true;
      }else if(white_Pawn3 !== 650){
        WhitePawn3Move1.visible = true;
      }
      
      gameState = "pawn3Selected";
    }
    
    if(mouseIsOver(white_Pawn3)){
      if(white_Pawn3.y === 650){
        WhitePawn3Move1.visible = true;
        WhitePawn3Move2.visible = true;
      }else if(white_Pawn3 !== 650){
        WhitePawn3Move1.visible = true;
      }


    }else{
      WhitePawn3Move1.visible = false;
      WhitePawn3Move2.visible = false;
      WhitePawn3Move3.visible = false;
      WhitePawn3Move4.visible = false;
      
    }
  }

  if(gameState === "pawn3Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn3Move1)){
      forWhite(WhitePawn3Move1,white_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn3Move2)){
      forWhite(WhitePawn3Move2,white_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn3Move3)){
      forWhite(WhitePawn3Move3,white_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn3Move4)){
      forWhite(WhitePawn3Move4,white_Pawn3, visibilityFalse());
    }
  }
}

function whitePawn4Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn4) || touches.length > 0){
      touches = [];
      if(white_Pawn4.y === 650){
        WhitePawn4Move1.visible = true;
        WhitePawn4Move2.visible = true;
      }else if(white_Pawn4 !== 650){
        WhitePawn4Move1.visible = true;
      }
      
      gameState = "pawn4Selected";
    }
    
    if(mouseIsOver(white_Pawn4)){
      if(white_Pawn4.y === 650){
        WhitePawn4Move1.visible = true;
        WhitePawn4Move2.visible = true;
      }else if(white_Pawn4 !== 650){
        WhitePawn4Move1.visible = true;
      }
    }else{
      WhitePawn4Move1.visible = false;
      WhitePawn4Move2.visible = false;
      WhitePawn4Move3.visible = false;
      WhitePawn4Move4.visible = false;
      
    }
  }

  if(gameState === "pawn4Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn4Move1)){
      forWhite(WhitePawn4Move1,white_Pawn4, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn4Move2)){
      forWhite(WhitePawn4Move2,white_Pawn4, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn4Move3)){
      forWhite(WhitePawn4Move3,white_Pawn4, visibilityFalse());

    }

    if(mouseIsOver(WhitePawn4Move4)){
      forWhite(WhitePawn4Move4,white_Pawn4, visibilityFalse());

    }
  }
}

function whitePawn5Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn5) || touches.length > 0){
      touches = [];
      if(white_Pawn5.y === 650){
        WhitePawn5Move1.visible = true;
        WhitePawn5Move2.visible = true;
      }else if(white_Pawn5 !== 650){
        WhitePawn5Move1.visible = true;
      }
      
      gameState = "pawn5Selected";
    }
    
    if(mouseIsOver(white_Pawn5)){
      if(white_Pawn5.y === 650){
        WhitePawn5Move1.visible = true;
        WhitePawn5Move2.visible = true;
      }else if(white_Pawn5 !== 650){
        WhitePawn5Move1.visible = true;
      }
    }else{
      WhitePawn5Move1.visible = false;
      WhitePawn5Move2.visible = false;
      WhitePawn5Move3.visible = false;
      WhitePawn5Move4.visible = false;
      
    }
  }

  if(gameState === "pawn5Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn5Move1)){
      forWhite(WhitePawn5Move1,white_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn5Move2)){
      forWhite(WhitePawn5Move2,white_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn5Move3)){
      forWhite(WhitePawn5Move3,white_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn5Move4)){
      forWhite(WhitePawn5Move4,white_Pawn5, visibilityFalse());
    }
  }
}

function whitePawn6Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn6) || touches.length > 0){
      touches = [];
      if(white_Pawn6.y === 650){
        WhitePawn6Move1.visible = true;
        WhitePawn6Move2.visible = true;
      }else if(white_Pawn6 !== 650){
        WhitePawn6Move1.visible = true;
      }
      
      gameState = "pawn6Selected";
    }
    
    if(mouseIsOver(white_Pawn6)){
      if(white_Pawn6.y === 650){
        WhitePawn6Move1.visible = true;
        WhitePawn6Move2.visible = true;
      }else if(white_Pawn6 !== 650){
        WhitePawn6Move1.visible = true;
      }
    }else{
      WhitePawn6Move1.visible = false;
      WhitePawn6Move2.visible = false;
      WhitePawn6Move3.visible = false;
      WhitePawn6Move4.visible = false;
      
    }
  }

  if(gameState === "pawn6Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn6Move1)){
      forWhite(WhitePawn6Move1,white_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn6Move2)){
      forWhite(WhitePawn6Move2,white_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn6Move3)){
      forWhite(WhitePawn6Move3,white_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn6Move4)){
      forWhite(WhitePawn6Move4,white_Pawn6, visibilityFalse());
    }
  }
}

function whitePawn7Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn7) || touches.length > 0){
      touches = [];
      if(white_Pawn7.y === 650){
        WhitePawn7Move1.visible = true;
        WhitePawn7Move2.visible = true;
      }else if(white_Pawn7 !== 650){
        WhitePawn7Move1.visible = true;
      }
      
      gameState = "pawn7Selected";
    }
    
    if(mouseIsOver(white_Pawn7)){
      if(white_Pawn7.y === 650){
        WhitePawn7Move1.visible = true;
        WhitePawn7Move2.visible = true;
      }else if(white_Pawn7 !== 650){
        WhitePawn7Move1.visible = true;
      }
    }else{
      WhitePawn7Move1.visible = false;
      WhitePawn7Move2.visible = false;
      WhitePawn7Move3.visible = false;
      WhitePawn7Move4.visible = false;
      
    }
  }

  if(gameState === "pawn7Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn7Move1)){
      forWhite(WhitePawn7Move1,white_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn7Move2)){
      forWhite(WhitePawn7Move2,white_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn7Move3)){
      forWhite(WhitePawn7Move3,white_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn7Move4)){
      forWhite(WhitePawn7Move4,white_Pawn7, visibilityFalse());
    }
  }
}

function whitePawn8Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(mousePressedOver(white_Pawn8) || touches.length > 0){
      touches = [];
      if(white_Pawn8.y === 650){
        WhitePawn8Move1.visible = true;
        WhitePawn8Move2.visible = true;
      }else if(white_Pawn8 !== 650){
        WhitePawn8Move1.visible = true;
      }
      
      gameState = "pawn8Selected";
    }
    
    if(mouseIsOver(white_Pawn8)){
      if(white_Pawn8.y === 650){
        WhitePawn8Move1.visible = true;
        WhitePawn8Move2.visible = true;
      }else if(white_Pawn8 !== 650){
        WhitePawn8Move1.visible = true;
      }
    }else{
      WhitePawn8Move1.visible = false;
      WhitePawn8Move2.visible = false;
      WhitePawn8Move3.visible = false;
      WhitePawn8Move4.visible = false;
      
    }
  }

  if(gameState === "pawn8Selected" && chance === "white"){
    if(mouseIsOver(WhitePawn8Move1)){
      forWhite(WhitePawn8Move1,white_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn8Move2)){
      forWhite(WhitePawn8Move2,white_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn8Move3)){
      forWhite(WhitePawn8Move3,white_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(WhitePawn8Move4)){
      forWhite(WhitePawn8Move4,white_Pawn8, visibilityFalse());
    }
  }
}

function blackPawn1Move(){
  if(chance === "white"){
    blackPawn1Move1.visible = false;
    blackPawn1Move2.visible = false;
    blackPawn1Move3.visible = false;
    blackPawn1Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn1) || touches.length > 0){
      touches = [];
      if(black_Pawn1.y === 150){
        blackPawn1Move1.visible = true;
        blackPawn1Move2.visible = true;
      }else if(black_Pawn1.y !== 150){
        blackPawn1Move1.visible = true;
      }
      
      gameState = "pawn1Selected";
    }
    
    if(mouseIsOver(black_Pawn1)){
      if(black_Pawn1.y === 150){
        blackPawn1Move1.visible = true;
        blackPawn1Move2.visible = true;
      }else if(black_Pawn1.y !== 150){
        blackPawn1Move1.visible = true;
      }

    }else{
      blackPawn1Move1.visible = false;
      blackPawn1Move2.visible = false;
      blackPawn1Move3.visible = false;
      blackPawn1Move4.visible = false;
      
    }
  }

  if(gameState === "pawn1Selected" && chance === "black"){
    if(mouseIsOver(blackPawn1Move1)){
      forBlack(blackPawn1Move1,black_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(blackPawn1Move2)){
      forBlack(blackPawn1Move2,black_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(blackPawn1Move3)){
      forBlack(blackPawn1Move3,black_Pawn1, visibilityFalse());
    }

    if(mouseIsOver(blackPawn1Move4)){
      forBlack(blackPawn1Move4,black_Pawn1, visibilityFalse());
    }
  }
}

function blackPawn2Move(){
  if(chance === "white"){
    blackPawn2Move1.visible = false;
    blackPawn2Move2.visible = false;
    blackPawn2Move3.visible = false;
    blackPawn2Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn2) || touches.length > 0){
      touches = [];
      if(black_Pawn2.y === 150){
        blackPawn2Move1.visible = true;
        blackPawn2Move2.visible = true;
      }else if(black_Pawn2 !== 150){
        blackPawn2Move1.visible = true;
      }
      
      gameState = "pawn2Selected";
    }
    
    if(mouseIsOver(black_Pawn2)){
      if(black_Pawn2.y === 150){
        blackPawn2Move1.visible = true;
        blackPawn2Move2.visible = true;
      }else if(black_Pawn2 !== 150){
        blackPawn2Move1.visible = true;
      }

    }else{
      blackPawn2Move1.visible = false;
      blackPawn2Move2.visible = false;
      blackPawn2Move3.visible = false;
      blackPawn2Move4.visible = false;
      
    }
  }

  if(gameState === "pawn2Selected" && chance === "black"){
    if(mouseIsOver(blackPawn2Move1)){
      forBlack(blackPawn2Move1,black_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(blackPawn2Move2)){
      forBlack(blackPawn2Move2,black_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(blackPawn2Move3)){
      forBlack(blackPawn2Move3,black_Pawn2, visibilityFalse());
    }

    if(mouseIsOver(blackPawn2Move4)){
      forBlack(blackPawn2Move4,black_Pawn2, visibilityFalse());
    }
  }
}

function blackPawn3Move(){
  if(chance === "white"){
    blackPawn3Move1.visible = false;
    blackPawn3Move2.visible = false;
    blackPawn3Move3.visible = false;
    blackPawn3Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn3) || touches.length > 0){
      touches = [];
      if(black_Pawn3.y === 150){
        blackPawn3Move1.visible = true;
        blackPawn3Move2.visible = true;
      }else if(black_Pawn3 !== 150){
        blackPawn3Move1.visible = true;
      }
      
      gameState = "pawn3Selected";
    }
    
    if(mouseIsOver(black_Pawn3)){
      if(black_Pawn3.y === 150){
        blackPawn3Move1.visible = true;
        blackPawn3Move2.visible = true;
      }else if(black_Pawn3 !== 150){
        blackPawn3Move1.visible = true;
      }

    }else{
      blackPawn3Move1.visible = false;
      blackPawn3Move2.visible = false;
      blackPawn3Move3.visible = false;
      blackPawn3Move4.visible = false;
      
    }
  }

  if(gameState === "pawn3Selected" && chance === "black"){
    if(mouseIsOver(blackPawn3Move1)){
      forBlack(blackPawn3Move1,black_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(blackPawn3Move2)){
      forBlack(blackPawn3Move2,black_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(blackPawn3Move3)){
      forBlack(blackPawn3Move3,black_Pawn3, visibilityFalse());
    }

    if(mouseIsOver(blackPawn3Move4)){
      forBlack(blackPawn3Move4,black_Pawn3, visibilityFalse());
    }
  }
}

function blackPawn4Move(){
  if(chance === "white"){
    blackPawn4Move1.visible = false;
    blackPawn4Move2.visible = false;
    blackPawn4Move3.visible = false;
    blackPawn4Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn4) || touches.length > 0){
      touches = [];
      if(black_Pawn4.y === 150){
        blackPawn4Move1.visible = true;
        blackPawn4Move2.visible = true;
      }else if(black_Pawn4 !== 150){
        blackPawn4Move1.visible = true;
      }
      
      gameState = "pawn4Selected";
    }
    
    if(mouseIsOver(black_Pawn4)){
      if(black_Pawn4.y === 150){
        blackPawn4Move1.visible = true;
        blackPawn4Move2.visible = true;
      }else if(black_Pawn4 !== 150){
        blackPawn4Move1.visible = true;
      }

    }else{
      blackPawn4Move1.visible = false;
      blackPawn4Move2.visible = false;
      blackPawn4Move3.visible = false;
      blackPawn4Move4.visible = false;
      
    }
  }

  if(gameState === "pawn4Selected" && chance === "black"){
    if(mouseIsOver(blackPawn4Move1)){
      forBlack(blackPawn4Move1,black_Pawn4, visibilityFalse());
    }

    if(mouseIsOver(blackPawn4Move2)){
      forBlack(blackPawn4Move2,black_Pawn4, visibilityFalse());
    }

    if(mouseIsOver(blackPawn4Move3)){
      forBlack(blackPawn4Move3,black_Pawn4, visibilityFalse());
    }

    if(mouseIsOver(blackPawn4Move4)){
      forBlack(blackPawn4Move4,black_Pawn4, visibilityFalse());
    }
  }
}

function blackPawn5Move(){
  if(chance === "white"){
    blackPawn5Move1.visible = false;
    blackPawn5Move2.visible = false;
    blackPawn5Move3.visible = false;
    blackPawn5Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn5) || touches.length > 0){
      touches = [];
      if(black_Pawn5.y === 150){
        blackPawn5Move1.visible = true;
        blackPawn5Move2.visible = true;
      }else if(black_Pawn5 !== 150){
        blackPawn5Move1.visible = true;
      }
      
      gameState = "pawn5Selected";
    }
    
    if(mouseIsOver(black_Pawn5)){
      if(black_Pawn5.y === 150){
        blackPawn5Move1.visible = true;
        blackPawn5Move2.visible = true;
      }else if(black_Pawn5 !== 150){
        blackPawn5Move1.visible = true;
      }

    }else{
      blackPawn5Move1.visible = false;
      blackPawn5Move2.visible = false;
      blackPawn5Move3.visible = false;
      blackPawn5Move4.visible = false;
      
    }
  }

  if(gameState === "pawn5Selected" && chance === "black"){
    if(mouseIsOver(blackPawn5Move1)){
      forBlack(blackPawn5Move1,black_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(blackPawn5Move2)){
      forBlack(blackPawn5Move2,black_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(blackPawn5Move3)){
      forBlack(blackPawn5Move3,black_Pawn5, visibilityFalse());
    }

    if(mouseIsOver(blackPawn5Move4)){
      forBlack(blackPawn5Move4,black_Pawn5, visibilityFalse());
    }
  }
}

function blackPawn6Move(){
  if(chance === "white"){
    blackPawn6Move1.visible = false;
    blackPawn6Move2.visible = false;
    blackPawn6Move3.visible = false;
    blackPawn6Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn6) || touches.length > 0){
      touches = [];
      if(black_Pawn6.y === 150){
        blackPawn6Move1.visible = true;
        blackPawn6Move2.visible = true;
      }else if(black_Pawn6 !== 150){
        blackPawn6Move1.visible = true;
      }
      
      gameState = "pawn6Selected";
    }
    
    if(mouseIsOver(black_Pawn6)){
      if(black_Pawn6.y === 150){
        blackPawn6Move1.visible = true;
        blackPawn6Move2.visible = true;
      }else if(black_Pawn6 !== 150){
        blackPawn6Move1.visible = true;
      }

    }else{
      blackPawn6Move1.visible = false;
      blackPawn6Move2.visible = false;
      blackPawn6Move3.visible = false;
      blackPawn6Move4.visible = false;
      
    }
  }

  if(gameState === "pawn6Selected" && chance === "black"){
    if(mouseIsOver(blackPawn6Move1)){
      forBlack(blackPawn6Move1,black_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(blackPawn6Move2)){
      forBlack(blackPawn6Move2,black_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(blackPawn6Move3)){
      forBlack(blackPawn6Move3,black_Pawn6, visibilityFalse());
    }

    if(mouseIsOver(blackPawn6Move4)){
      forBlack(blackPawn6Move4,black_Pawn6, visibilityFalse());
    }
  }
}

function blackPawn7Move(){
  if(chance === "white"){
    blackPawn7Move1.visible = false;
    blackPawn7Move2.visible = false;
    blackPawn7Move3.visible = false;
    blackPawn7Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn7) || touches.length > 0){
      touches = [];
      if(black_Pawn7.y === 150){
        blackPawn7Move1.visible = true;
        blackPawn7Move2.visible = true;
      }else if(black_Pawn7 !== 150){
        blackPawn7Move1.visible = true;
      }
      
      gameState = "pawn7Selected";
    }
    
    if(mouseIsOver(black_Pawn7)){
      if(black_Pawn7.y === 150){
        blackPawn7Move1.visible = true;
        blackPawn7Move2.visible = true;
      }else if(black_Pawn7 !== 150){
        blackPawn7Move1.visible = true;
      }

    }else{
      blackPawn7Move1.visible = false;
      blackPawn7Move2.visible = false;
      blackPawn7Move3.visible = false;
      blackPawn7Move4.visible = false;
      
    }
  }

  if(gameState === "pawn7Selected" && chance === "black"){
    if(mouseIsOver(blackPawn7Move1)){
      forBlack(blackPawn7Move1,black_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(blackPawn7Move2)){
      forBlack(blackPawn7Move2,black_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(blackPawn7Move3)){
      forBlack(blackPawn7Move3,black_Pawn7, visibilityFalse());
    }

    if(mouseIsOver(blackPawn7Move4)){
      forBlack(blackPawn7Move4,black_Pawn7, visibilityFalse());
    }
  }
}

function blackPawn8Move(){
  if(chance === "white"){
    blackPawn8Move1.visible = false;
    blackPawn8Move2.visible = false;
    blackPawn8Move3.visible = false;
    blackPawn8Move4.visible = false;
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    if(mousePressedOver(black_Pawn8) || touches.length > 0){
      touches = [];
      if(black_Pawn8.y === 150){
        blackPawn8Move1.visible = true;
        blackPawn8Move2.visible = true;
      }else if(black_Pawn8 !== 150){
        blackPawn8Move1.visible = true;
      }
      
      gameState = "pawn8Selected";
    }
    
    if(mouseIsOver(black_Pawn8)){
      if(black_Pawn8.y === 150){
        blackPawn8Move1.visible = true;
        blackPawn8Move2.visible = true;
      }else if(black_Pawn8 !== 150){
        blackPawn8Move1.visible = true;
      }

    }else{
      blackPawn8Move1.visible = false;
      blackPawn8Move2.visible = false;
      blackPawn8Move3.visible = false;
      blackPawn8Move4.visible = false;
      
    }
  }

  if(gameState === "pawn8Selected" && chance === "black"){
    if(mouseIsOver(blackPawn8Move1)){
      forBlack(blackPawn8Move1,black_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(blackPawn8Move2)){
      forBlack(blackPawn8Move2,black_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(blackPawn8Move3)){
      forBlack(blackPawn8Move3,black_Pawn8, visibilityFalse());
    }

    if(mouseIsOver(blackPawn8Move4)){
      forBlack(blackPawn8Move4,black_Pawn8, visibilityFalse());
    }
  }
}

function whiteQueenMove(){
  if(gameState === "selecting" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteQueenVisibilityFalse();
    }

    if(mousePressedOver(white_Queen) || touches.length > 0){
      touches = [];
      whiteQueenVisibilityTrue();
      console.log("hi");
      gameState = "queenSelected";
    }
    
    if(mouseIsOver(white_Queen)){
      whiteQueenVisibilityTrue();
    }else{
      whiteQueenVisibilityFalse();
    }
  }

  if(gameState === "queenSelected" && chance === "white"){
    

    if(mouseIsOver(whiteQueenMove1)){
      forBlack(whiteQueenMove1,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove2)){
      forBlack(whiteQueenMove2,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove3)){
      forBlack(whiteQueenMove3,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove4)){
      forBlack(whiteQueenMove4,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove5)){
      forBlack(whiteQueenMove5,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove6)){
      forBlack(whiteQueenMove6,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove7)){
      forBlack(whiteQueenMove7,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove8)){
      forBlack(whiteQueenMove8,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove9)){
      forBlack(whiteQueenMove9,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove10)){
      forBlack(whiteQueenMove10,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove11)){
      forBlack(whiteQueenMove11,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove12)){
      forBlack(whiteQueenMove12,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove13)){
      forBlack(whiteQueenMove13,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove14)){
      forBlack(whiteQueenMove14,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove15)){
      forBlack(whiteQueenMove15,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove16)){
      forBlack(whiteQueenMove16,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove17)){
      forBlack(whiteQueenMove17,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove18)){
      forBlack(whiteQueenMove18,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove19)){
      forBlack(whiteQueenMove19,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove20)){
      forBlack(whiteQueenMove20,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove21)){
      forBlack(whiteQueenMove21,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove22)){
      forBlack(whiteQueenMove22,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove23)){
      forBlack(whiteQueenMove23,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove24)){
      forBlack(whiteQueenMove24,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove25)){
      forBlack(whiteQueenMove25,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove26)){
      forBlack(whiteQueenMove26,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove27)){
      forBlack(whiteQueenMove27,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove28)){
      forBlack(whiteQueenMove28,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove29)){
      forBlack(whiteQueenMove29,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove30)){
      forBlack(whiteQueenMove30,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove31)){
      forBlack(whiteQueenMove31,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove32)){
      forBlack(whiteQueenMove32,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove33)){
      forBlack(whiteQueenMove33,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove34)){
      forBlack(whiteQueenMove34,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove35)){
      forBlack(whiteQueenMove35,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove36)){
      forBlack(whiteQueenMove36,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove37)){
      forBlack(whiteQueenMove37,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove38)){
      forBlack(whiteQueenMove38,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove39)){
      forBlack(whiteQueenMove39,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove40)){
      forBlack(whiteQueenMove40,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove41)){
      forBlack(whiteQueenMove41,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove42)){
      forBlack(whiteQueenMove42,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove43)){
      forBlack(whiteQueenMove43,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove44)){
      forBlack(whiteQueenMove44,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove45)){
      forBlack(whiteQueenMove45,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove46)){
      forBlack(whiteQueenMove46,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove47)){
      forBlack(whiteQueenMove47,white_Queen, whiteQueenVisibilityTrue());    }

    if(mouseIsOver(whiteQueenMove48)){
      forBlack(whiteQueenMove48,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove49)){
      forBlack(whiteQueenMove49,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove50)){
      forBlack(whiteQueenMove50,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove51)){
      forBlack(whiteQueenMove51,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove52)){
      forBlack(whiteQueenMove52,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove53)){
      forBlack(whiteQueenMove53,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove54)){
      forBlack(whiteQueenMove54,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove55)){
      forBlack(whiteQueenMove55,white_Queen, whiteQueenVisibilityTrue());
    }

    if(mouseIsOver(whiteQueenMove56)){
      forBlack(whiteQueenMove56,white_Queen, whiteQueenVisibilityTrue());
    }
  }
}

function blackQueenMove(){
  if(chance === "white"){
    blackQueenVisibilityFalse();  
  }

  if(gameState === "selecting" && chance === "black"){
    

    if(mousePressedOver(black_Queen) || touches.length > 0){
      touches = [];
      
      blackQueenVisibilityTrue();

      console.log("hi");

      
      gameState = "queenSelected";
    }
    
    if(mouseIsOver(black_Queen)){
      blackQueenVisibilityTrue();

    }else{
      blackQueenVisibilityFalse();
    }
  }

  if(gameState === "queenSelected" && chance === "black"){
    

    if(mouseIsOver(blackQueenMove1)){
      forBlack(blackQueenMove1,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove2)){
      forBlack(blackQueenMove2,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove3)){
      forBlack(blackQueenMove3,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove4)){
      forBlack(blackQueenMove4,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove5)){
      forBlack(blackQueenMove5,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove6)){
      forBlack(blackQueenMove6,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove7)){
      forBlack(blackQueenMove7,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove8)){
      forBlack(blackQueenMove8,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove9)){
      forBlack(blackQueenMove9,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove10)){
      forBlack(blackQueenMove10,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove11)){
      forBlack(blackQueenMove11,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove12)){
      forBlack(blackQueenMove12,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove13)){
      forBlack(blackQueenMove13,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove14)){
      forBlack(blackQueenMove14,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove15)){
      forBlack(blackQueenMove15,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove16)){
      forBlack(blackQueenMove16,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove17)){
      forBlack(blackQueenMove17,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove18)){
      forBlack(blackQueenMove18,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove19)){
      forBlack(blackQueenMove19,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove20)){
      forBlack(blackQueenMove20,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove21)){
      forBlack(blackQueenMove21,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove22)){
      forBlack(blackQueenMove22,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove23)){
      forBlack(blackQueenMove23,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove24)){
      forBlack(blackQueenMove24,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove25)){
      forBlack(blackQueenMove25,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove26)){
      forBlack(blackQueenMove26,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove27)){
      forBlack(blackQueenMove27,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove28)){
      forBlack(blackQueenMove28,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove29)){
      forBlack(blackQueenMove29,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove30)){
      forBlack(blackQueenMove30,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove31)){
      forBlack(blackQueenMove31,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove32)){
      forBlack(blackQueenMove32,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove33)){
      forBlack(blackQueenMove33,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove34)){
      forBlack(blackQueenMove34,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove35)){
      forBlack(blackQueenMove35,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove36)){
      forBlack(blackQueenMove36,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove37)){
      forBlack(blackQueenMove37,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove38)){
      forBlack(blackQueenMove38,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove39)){
      forBlack(blackQueenMove39,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove40)){
      forBlack(blackQueenMove40,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove41)){
      forBlack(blackQueenMove41,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove42)){
      forBlack(blackQueenMove42,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove43)){
      forBlack(blackQueenMove43,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove44)){
      forBlack(blackQueenMove44,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove45)){
      forBlack(blackQueenMove45,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove46)){
      forBlack(blackQueenMove46,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove47)){
      forBlack(blackQueenMove47,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove48)){
      forBlack(blackQueenMove48,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove49)){
      forBlack(blackQueenMove49,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove50)){
      forBlack(blackQueenMove50,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove51)){
      forBlack(blackQueenMove51,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove52)){
      forBlack(blackQueenMove52,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove53)){
      forBlack(blackQueenMove53,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove54)){
      forBlack(blackQueenMove54,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove55)){
      forBlack(blackQueenMove55,black_Queen, blackQueenVisibilityTrue());
    }

    if(mouseIsOver(blackQueenMove56)){
      forBlack(blackQueenMove56,black_Queen, blackQueenVisibilityTrue());
    }
  }
}

function whiteBishub1Move(){
  if(gameState === "selecting" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteBishubVisibilityFalse();
    }

    if(mousePressedOver(white_Bishub1) || touches.length > 0){
      touches = [];
      whiteBishubVisibilityTrue();
      console.log("hi");
      gameState = "bishub1Selected";
    }
    
    if(mouseIsOver(white_Bishub1)){
      whiteBishubVisibilityTrue();
    }else{
      whiteBishubVisibilityFalse();
    }
  }

  if(gameState === "bishub1Selected" && chance === "white"){
    

    if(mouseIsOver(whiteBishubMove1)){
      forBlack(whiteBishubMove1,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove2)){
      forBlack(whiteBishubMove2,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove3)){
      forBlack(whiteBishubMove3,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove4)){
      forBlack(whiteBishubMove4,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove5)){
      forBlack(whiteBishubMove5,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove6)){
      forBlack(whiteBishubMove6,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove7)){
      forBlack(whiteBishubMove7,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove8)){
      forBlack(whiteBishubMove8,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove9)){
      forBlack(whiteBishubMove9,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove10)){
      forBlack(whiteBishubMove10,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove11)){
      forBlack(whiteBishubMove11,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove12)){
      forBlack(whiteBishubMove12,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove13)){
      forBlack(whiteBishubMove13,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove14)){
      forBlack(whiteBishubMove14,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove15)){
      forBlack(whiteBishubMove15,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove16)){
      forBlack(whiteBishubMove16,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove17)){
      forBlack(whiteBishubMove17,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove18)){
      forBlack(whiteBishubMove18,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove19)){
      forBlack(whiteBishubMove19,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove20)){
      forBlack(whiteBishubMove20,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove21)){
      forBlack(whiteBishubMove21,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove22)){
      forBlack(whiteBishubMove22,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove23)){
      forBlack(whiteBishubMove23,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove24)){
      forBlack(whiteBishubMove24,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove25)){
      forBlack(whiteBishubMove25,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove26)){
      forBlack(whiteBishubMove26,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove27)){
      forBlack(whiteBishubMove27,white_Bishub1, whiteBishubVisibilityTrue());
    }

    if(mouseIsOver(whiteBishubMove28)){
      forBlack(whiteBishubMove28,white_Bishub1, whiteBishubVisibilityTrue());
    }
  }
}

function whiteBishub2Move(){
  if(gameState === "selecting" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteBishub2VisibilityFalse(); 
    }

    if(mousePressedOver(white_Bishub2) || touches.length > 0){
      touches = [];
      whiteBishub2VisibilityTrue();
      console.log("hi");
      gameState = "bishub2Selected";
    }
    
    if(mouseIsOver(white_Bishub2)){
      whiteBishub2VisibilityTrue();
    }else{
      whiteBishub2VisibilityFalse();
    }
  }

  if(gameState === "bishub2Selected" && chance === "white"){
    

    if(mouseIsOver(whiteBishub2Move1)){
      forBlack(whiteBishub2Move1,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move2)){
      forBlack(whiteBishub2Move2,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move3)){
      forBlack(whiteBishub2Move3,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move4)){
      forBlack(whiteBishub2Move4,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move5)){
      forBlack(whiteBishub2Move5,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move6)){
      forBlack(whiteBishub2Move6,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move7)){
      forBlack(whiteBishub2Move7,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move8)){
      forBlack(whiteBishub2Move8,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move9)){
      forBlack(whiteBishub2Move9,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move10)){
      forBlack(whiteBishub2Move10,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move11)){
      forBlack(whiteBishub2Move11,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move12)){
      forBlack(whiteBishub2Move12,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move13)){
      forBlack(whiteBishub2Move13,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move14)){
      forBlack(whiteBishub2Move14,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move15)){
      forBlack(whiteBishub2Move15,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move16)){
      forBlack(whiteBishub2Move16,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move17)){
      forBlack(whiteBishub2Move17,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move18)){
      forBlack(whiteBishub2Move18,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move19)){
      forBlack(whiteBishub2Move19,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move20)){
      forBlack(whiteBishub2Move20,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move21)){
      forBlack(whiteBishub2Move21,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move22)){
      forBlack(whiteBishub2Move22,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move23)){
      forBlack(whiteBishub2Move23,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move24)){
      forBlack(whiteBishub2Move24,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move25)){
      forBlack(whiteBishub2Move25,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move26)){
      forBlack(whiteBishub2Move26,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move27)){
      forBlack(whiteBishub2Move27,white_Bishub2, whiteBishub2VisibilityTrue());
    }

    if(mouseIsOver(whiteBishub2Move28)){
      forBlack(whiteBishub2Move28,white_Bishub2, whiteBishub2VisibilityTrue());
    }
  }
}

function whiteRook1Move(){
  if(gameState === "selecting" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteRook1VisibilityFalse();
    }

    if(mousePressedOver(white_Rook1) || touches.length > 0){
      touches = [];
      whiteRook1VisibilityTrue();
      console.log("hi");
      gameState = "rook1Selected";
    }
    
    if(mouseIsOver(white_Rook1)){
      whiteRook1VisibilityTrue();
    }else{
      whiteRook1VisibilityFalse();
    }
  }

  if(gameState === "rook1Selected" && chance === "white"){
    

    if(mouseIsOver(whiteRook1Move1)){
      forBlack(whiteRook1Move1,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move2)){
      forBlack(whiteRook1Move2,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move3)){
      forBlack(whiteRook1Move3,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move4)){
      forBlack(whiteRook1Move4,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move5)){
      forBlack(whiteRook1Move5,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move6)){
      forBlack(whiteRook1Move6,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move7)){
      forBlack(whiteRook1Move7,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move8)){
      forBlack(whiteRook1Move8,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move9)){
      forBlack(whiteRook1Move9,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move10)){
      forBlack(whiteRook1Move10,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move11)){
      forBlack(whiteRook1Move11,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move12)){
      forBlack(whiteRook1Move12,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move13)){
      forBlack(whiteRook1Move13,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move14)){
      forBlack(whiteRook1Move14,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move15)){
      forBlack(whiteRook1Move15,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move16)){
      forBlack(whiteRook1Move16,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move17)){
      forBlack(whiteRook1Move17,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move18)){
      forBlack(whiteRook1Move18,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move19)){
      forBlack(whiteRook1Move19,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move20)){
      forBlack(whiteRook1Move20,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move21)){
      forBlack(whiteRook1Move21,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move22)){
      forBlack(whiteRook1Move22,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move23)){
      forBlack(whiteRook1Move23,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move24)){
      forBlack(whiteRook1Move24,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move25)){
      forBlack(whiteRook1Move25,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move26)){
      forBlack(whiteRook1Move26,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move27)){
      forBlack(whiteRook1Move27,white_Rook1, whiteRook1VisibilityTrue());
    }

    if(mouseIsOver(whiteRook1Move28)){
      forBlack(whiteRook1Move28,white_Rook1, whiteRook1VisibilityTrue());
    }
  }
}

function whiteRook2Move(){
  if(gameState === "selecting" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteRook2VisibilityFalse();
    }

    if(mousePressedOver(white_Rook2) || touches.length > 0){
      touches = [];
      whiteRook2VisibilityTrue();
      console.log("hi");
      gameState = "rook2Selected";
    }
    
    if(mouseIsOver(white_Rook2)){
      whiteRook2VisibilityTrue();
    }else{
      whiteRook2VisibilityFalse();
    }
  }

  if(gameState === "rook2Selected" && chance === "white"){
    

    if(mouseIsOver(whiteRook2Move1)){
      forBlack(whiteRook2Move1,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move2)){
      forBlack(whiteRook2Move2,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move3)){
      forBlack(whiteRook2Move3,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move4)){
      forBlack(whiteRook2Move4,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move5)){
      forBlack(whiteRook2Move5,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move6)){
      forBlack(whiteRook2Move6,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move7)){
      forBlack(whiteRook2Move7,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move8)){
      forBlack(whiteRook2Move8,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move9)){
      forBlack(whiteRook2Move9,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move10)){
      forBlack(whiteRook2Move10,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move11)){
      forBlack(whiteRook2Move11,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move12)){
      forBlack(whiteRook2Move12,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move13)){
      forBlack(whiteRook2Move13,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move14)){
      forBlack(whiteRook2Move14,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move15)){
      forBlack(whiteRook2Move15,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move16)){
      forBlack(whiteRook2Move16,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move17)){
      forBlack(whiteRook2Move17,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move18)){
      forBlack(whiteRook2Move18,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move19)){
      forBlack(whiteRook2Move19,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move20)){
      forBlack(whiteRook2Move20,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move21)){
      forBlack(whiteRook2Move21,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move22)){
      forBlack(whiteRook2Move22,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move23)){
      forBlack(whiteRook2Move23,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move24)){
      forBlack(whiteRook2Move24,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move25)){
      forBlack(whiteRook2Move25,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move26)){
      forBlack(whiteRook2Move26,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move27)){
      forBlack(whiteRook2Move27,white_Rook2, whiteRook2VisibilityTrue());
    }

    if(mouseIsOver(whiteRook2Move28)){
      forBlack(whiteRook2Move28,white_Rook2, whiteRook2VisibilityTrue());
    }
  }
}

function whiteKnight1Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteKnight1VisibilityFalse();
    }

    if(mousePressedOver(white_Knight1) || touches.length > 0){
      touches = [];
      whiteKnight1VisibilityTrue();
      console.log("hi");
      gameState = "knight1Selected";
    }
    
    if(mouseIsOver(white_Knight1)){
      whiteKnight1VisibilityTrue();
    }else{
      whiteKnight1VisibilityFalse();
    }
  }

  if(gameState === "knight1Selected" && chance === "white"){
    

    if(mouseIsOver(whiteKnight1Move1)){
      forBlack(whiteKnight1Move1,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move2)){
      forBlack(whiteKnight1Move2,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move3)){
      forBlack(whiteKnight1Move3,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move4)){
      forBlack(whiteKnight1Move4,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move5)){
      forBlack(whiteKnight1Move5,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move6)){
      forBlack(whiteKnight1Move6,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move7)){
      forBlack(whiteKnight1Move7,white_Knight1, whiteKnight1VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight1Move8)){
      forBlack(whiteKnight1Move8,white_Knight1, whiteKnight1VisibilityTrue());
    }
  }
}

function whiteKnight2Move(){
  if(gameState === "selecting" && chance === "white" || gameState === "cantMove" && chance === "white"){
    if(chance === "white" || chance === "black"){
      whiteKnight2VisibilityFalse(); 
    }

    if(mousePressedOver(white_Knight2) || touches.length > 0){
      touches = [];
      whiteKnight2VisibilityTrue();
      console.log("hi");      
      gameState = "knight2Selected";
    }
    
    if(mouseIsOver(white_Knight2)){
      whiteKnight2VisibilityTrue();
    }else{
      whiteKnight2VisibilityFalse();
    }
  }

  if(gameState === "knight2Selected" && chance === "white"){
    

    if(mouseIsOver(whiteKnight2Move1)){
      forBlack(whiteKnight2Move1,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move2)){
      forBlack(whiteKnight2Move2,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move3)){
      forBlack(whiteKnight2Move3,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move4)){
      forBlack(whiteKnight2Move4,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move5)){
      forBlack(whiteKnight2Move5,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move6)){
      forBlack(whiteKnight2Move6,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move7)){
      forBlack(whiteKnight2Move7,white_Knight2, whiteKnight2VisibilityTrue());
    }

    if(mouseIsOver(whiteKnight2Move8)){
      forBlack(whiteKnight2Move8,white_Knight2, whiteKnight2VisibilityTrue());
    }
  }
}

function blackBishub1Move(){
  if(chance === "white" || chance === "black"){
    blackBishubVisibilityFalse();
    
    
  }

  if(gameState === "selecting" && chance === "black"){
    

    if(mousePressedOver(black_Bishub1) || touches.length > 0){
      touches = [];
      
      blackBishubVisibilityTrue();

      console.log("hi");

      
      gameState = "bishub1Selected";
    }
    
    if(mouseIsOver(black_Bishub1)){
      blackBishubVisibilityTrue();

    }else{
      blackBishubVisibilityFalse();
    }
  }

  if(gameState === "bishub1Selected" && chance === "black"){
    

    if(mouseIsOver(blackBishubMove1)){
      forBlack(blackBishubMove1,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove2)){
      forBlack(blackBishubMove2,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove3)){
      forBlack(blackBishubMove3,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove4)){
      forBlack(blackBishubMove4,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove5)){
      forBlack(blackBishubMove5,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove6)){
      forBlack(blackBishubMove6,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove7)){
      forBlack(blackBishubMove7,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove8)){
      forBlack(blackBishubMove8,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove9)){
      forBlack(blackBishubMove9,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove10)){
      forBlack(blackBishubMove10,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove11)){
      forBlack(blackBishubMove11,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove12)){
      forBlack(blackBishubMove12,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove13)){
      forBlack(blackBishubMove13,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove14)){
      forBlack(blackBishubMove14,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove15)){
      forBlack(blackBishubMove15,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove16)){
      forBlack(blackBishubMove16,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove17)){
      forBlack(blackBishubMove17,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove18)){
      forBlack(blackBishubMove18,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove19)){
      forBlack(blackBishubMove19,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove20)){
      forBlack(blackBishubMove20,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove21)){
      forBlack(blackBishubMove21,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove22)){
      forBlack(blackBishubMove22,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove23)){
      forBlack(blackBishubMove23,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove24)){
      forBlack(blackBishubMove24,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove25)){
      forBlack(blackBishubMove25,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove26)){
      forBlack(blackBishubMove26,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove27)){
      forBlack(blackBishubMove27,black_Bishub1, blackBishubVisibilityTrue());
    }

    if(mouseIsOver(blackBishubMove28)){
      forBlack(blackBishubMove28,black_Bishub1, blackBishubVisibilityTrue());
    }
  }
}

function blackBishub2Move(){
  if(chance === "white" || chance === "black"){
    blackBishub2VisibilityFalse();
    
    
  }

  if(gameState === "selecting" && chance === "black"){
    

    if(mousePressedOver(black_Bishub2) || touches.length > 0){
      touches = [];
      
      blackBishub2VisibilityTrue();

      console.log("hi");

      
      gameState = "bishub2Selected";
    }
    
    if(mouseIsOver(black_Bishub2)){
      blackBishub2VisibilityTrue();

    }else{
      blackBishub2VisibilityFalse();
    }
  }

  if(gameState === "bishub2Selected" && chance === "black"){
    

    if(mouseIsOver(blackBishub2Move1)){
      forBlack(blackBishub2Move1,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move2)){
      forBlack(blackBishub2Move2,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move3)){
      forBlack(blackBishub2Move3,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move4)){
      forBlack(blackBishub2Move4,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move5)){
      forBlack(blackBishub2Move5,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move6)){
      forBlack(blackBishub2Move6,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move7)){
      forBlack(blackBishub2Move7,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move8)){
      forBlack(blackBishub2Move8,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move9)){
      forBlack(blackBishub2Move9,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move10)){
      forBlack(blackBishub2Move10,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move11)){
      forBlack(blackBishub2Move11,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move12)){
      forBlack(blackBishub2Move12,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move13)){
      forBlack(blackBishub2Move13,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move14)){
      forBlack(blackBishub2Move14,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move15)){
      forBlack(blackBishub2Move15,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move16)){
      forBlack(blackBishub2Move16,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move17)){
      forBlack(blackBishub2Move17,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move18)){
      forBlack(blackBishub2Move18,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move19)){
      forBlack(blackBishub2Move19,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move20)){
      forBlack(blackBishub2Move20,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move21)){
      forBlack(blackBishub2Move21,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move22)){
      forBlack(blackBishub2Move22,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move23)){
      forBlack(blackBishub2Move23,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move24)){
      forBlack(blackBishub2Move24,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move25)){
      forBlack(blackBishub2Move25,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move26)){
      forBlack(blackBishub2Move26,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move27)){
      forBlack(blackBishub2Move27,black_Bishub2, blackBishub2VisibilityTrue());
    }

    if(mouseIsOver(blackBishub2Move28)){
      forBlack(blackBishub2Move28,black_Bishub2, blackBishub2VisibilityTrue());
    }
  }
}

function blackRook1Move(){
  if(chance === "white" || chance === "black"){
    blackRook1VisibilityFalse();
    
    
  }

  if(gameState === "selecting" && chance === "black"){
    

    if(mousePressedOver(black_Rook1) || touches.length > 0){
      touches = [];
      
      blackRook1VisibilityTrue();

      console.log("hi");

      
      gameState = "rook1Selected";
    }
    
    if(mouseIsOver(black_Rook1)){
      blackRook1VisibilityTrue();

    }else{
      blackRook1VisibilityFalse();
    }
  }

  if(gameState === "rook1Selected" && chance === "black"){
    

    if(mouseIsOver(blackRook1Move1)){
      forBlack(blackRook1Move1,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move2)){
      forBlack(blackRook1Move2,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move3)){
      forBlack(blackRook1Move3,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move4)){
      forBlack(blackRook1Move4,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move5)){
      forBlack(blackRook1Move5,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move6)){
      forBlack(blackRook1Move6,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move7)){
      forBlack(blackRook1Move7,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move8)){
      forBlack(blackRook1Move8,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move9)){
      forBlack(blackRook1Move9,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move10)){
      forBlack(blackRook1Move10,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move11)){
      forBlack(blackRook1Move11,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move12)){
      forBlack(blackRook1Move12,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move13)){
      forBlack(blackRook1Move13,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move14)){
      forBlack(blackRook1Move14,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move15)){
      forBlack(blackRook1Move15,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move16)){
      forBlack(blackRook1Move16,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move17)){
      forBlack(blackRook1Move17,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move18)){
      forBlack(blackRook1Move18,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move19)){
      forBlack(blackRook1Move19,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move20)){
      forBlack(blackRook1Move20,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move21)){
      forBlack(blackRook1Move21,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move22)){
      forBlack(blackRook1Move22,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move23)){
      forBlack(blackRook1Move23,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move24)){
      forBlack(blackRook1Move24,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move25)){
      forBlack(blackRook1Move25,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move26)){
      forBlack(blackRook1Move26,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move27)){
      forBlack(blackRook1Move27,black_Rook1, blackRook1VisibilityTrue());
    }

    if(mouseIsOver(blackRook1Move28)){
      forBlack(blackRook1Move28,black_Rook1, blackRook1VisibilityTrue());
    }
  }
}

function blackRook2Move(){
  if(chance === "white" || chance === "black"){
    blackRook2VisibilityFalse();
    
    
  }

  if(gameState === "selecting" && chance === "black"){
    

    if(mousePressedOver(black_Rook2) || touches.length > 0){
      touches = [];
      
      blackRook2VisibilityTrue();

      console.log("hi");

      
      gameState = "rook2Selected";
    }
    
    if(mouseIsOver(black_Rook2)){
      blackRook2VisibilityTrue();

    }else{
      blackRook2VisibilityFalse();
    }
  }

  if(gameState === "rook2Selected" && chance === "black"){
    

    if(mouseIsOver(blackRook2Move1)){
      forBlack(blackRook2Move1,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move2)){
      forBlack(blackRook2Move2,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move3)){
      forBlack(blackRook2Move3,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move4)){
      forBlack(blackRook2Move4,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move5)){
      forBlack(blackRook2Move5,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move6)){
      forBlack(blackRook2Move6,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move7)){
      forBlack(blackRook2Move7,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move8)){
      forBlack(blackRook2Move8,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move9)){
      forBlack(blackRook2Move9,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move10)){
      forBlack(blackRook2Move10,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move11)){
      forBlack(blackRook2Move11,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move12)){
      forBlack(blackRook2Move12,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move13)){
      forBlack(blackRook2Move13,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move14)){
      forBlack(blackRook2Move14,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move15)){
      forBlack(blackRook2Move15,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move16)){
      forBlack(blackRook2Move16,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move17)){
      forBlack(blackRook2Move17,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move18)){
      forBlack(blackRook2Move18,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move19)){
      forBlack(blackRook2Move19,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move20)){
      forBlack(blackRook2Move20,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move21)){
      forBlack(blackRook2Move21,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move22)){
      forBlack(blackRook2Move22,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move23)){
      forBlack(blackRook2Move23,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move24)){
      forBlack(blackRook2Move24,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move25)){
      forBlack(blackRook2Move25,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move26)){
      forBlack(blackRook2Move26,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move27)){
      forBlack(blackRook2Move27,black_Rook2, blackRook2VisibilityTrue());
    }

    if(mouseIsOver(blackRook2Move28)){
      forBlack(blackRook2Move28,black_Rook2, blackRook2VisibilityTrue());
    }
  }
}

function blackKnight1Move(){
  if(chance === "white" || chance === "black"){
    blackKnight1VisibilityFalse();
    
    
  }

  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    

    if(mousePressedOver(black_Knight1) || touches.length > 0){
      touches = [];
      
      blackKnight1VisibilityTrue();

      console.log("hi");

      
      gameState = "knight1Selected";
    }
    
    if(mouseIsOver(black_Knight1)){
      blackKnight1VisibilityTrue();

    }else{
      blackKnight1VisibilityFalse();
    }
  }

  if(gameState === "knight1Selected" && chance === "black"){
    

    if(mouseIsOver(blackKnight1Move1)){
      forBlack(blackKnight1Move1,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move2)){
      forBlack(blackKnight1Move2,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move3)){
      forBlack(blackKnight1Move3,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move4)){
      forBlack(blackKnight1Move4,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move5)){
      forBlack(blackKnight1Move5,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move6)){
      forBlack(blackKnight1Move6,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move7)){
      forBlack(blackKnight1Move7,black_Knight1, blackKnight1VisibilityTrue());
    }

    if(mouseIsOver(blackKnight1Move8)){
      forBlack(blackKnight1Move8,black_Knight1, blackKnight1VisibilityTrue());
    }
  }
}

function blackKnight2Move(){
  if(chance === "white" || chance === "black"){
    blackKnight2VisibilityFalse();
    
    
  }
  
  if(gameState === "selecting" && chance === "black" || gameState === "cantMove" && chance === "black"){
    

    if(mousePressedOver(black_Knight2) || touches.length > 0){
      touches = [];
      
      blackKnight2VisibilityTrue();

      console.log("hi");

      
      gameState = "knight2Selected";
    }
    
    if(mouseIsOver(black_Knight2)){
      blackKnight2VisibilityTrue();

    }else{
      blackKnight2VisibilityFalse();
    }
  }

  if(gameState === "knight2Selected" && chance === "black"){
    

    if(mouseIsOver(blackKnight2Move1)){
      forBlack(blackKnight2Move1,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move2)){
      forBlack(blackKnight2Move2,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move3)){
      forBlack(blackKnight2Move3,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move4)){
      forBlack(blackKnight2Move4,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move5)){
      forBlack(blackKnight2Move5,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move6)){
      forBlack(blackKnight2Move6,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move7)){
      forBlack(blackKnight2Move7,black_Knight2, blackKnight2isibilityTrue());
    }

    if(mouseIsOver(blackKnight2Move8)){
      forBlack(blackKnight2Move8,black_Knight2, blackKnight2isibilityTrue());
    }
  }
}

function whiteQueenVisibilityFalse(){
  for(var x = 1; x <whiteQueenMoveGroup.length; x++){
    whiteQueenMoveGroup.get(x - 1).visible = false;
  }
}

function whiteQueenVisibilityTrue(){
  for(var x = 1; x <whiteQueenMoveGroup.length; x++){
    whiteQueenMoveGroup.get(x - 1).visible = true;
  }
}

function whiteBishubVisibilityFalse(){
  for(var x = 1; x <whiteBishubMoveGroup.length; x++){
    whiteBishubMoveGroup.get(x - 1).visible = false;
  }
}

function whiteBishubVisibilityTrue(){
  for(var x = 1; x <whiteBishubMoveGroup.length; x++){
    whiteBishubMoveGroup.get(x - 1).visible = true;
  }
}

function whiteBishub2VisibilityFalse(){
  for(var x = 1; x <whiteBishub2MoveGroup.length; x++){
    whiteBishub2MoveGroup.get(x - 1).visible = false;
  }
}

function whiteBishub2VisibilityTrue(){
  for(var x = 1; x <whiteBishub2MoveGroup.length; x++){
    whiteBishub2MoveGroup.get(x - 1).visible = true;
  }
}

function whiteRook1VisibilityFalse(){
  for(var x = 1; x <whiteRook1MoveGroup.length; x++){
    whiteRook1MoveGroup.get(x - 1).visible = false;
  }
}

function whiteRook1VisibilityTrue(){
  for(var x = 1; x <whiteRook1MoveGroup.length; x++){
    whiteRook1MoveGroup.get(x - 1).visible = true;
  }
}

function whiteRook2VisibilityFalse(){
  for(var x = 1; x <whiteRook2MoveGroup.length; x++){
    whiteRook2MoveGroup.get(x - 1).visible = false;
  }
}

function whiteRook2VisibilityTrue(){
  for(var x = 1; x <whiteRook2MoveGroup.length; x++){
    whiteRook2MoveGroup.get(x - 1).visible = true;
  }
}

function whiteKnight1VisibilityFalse(){
  for(var x = 1; x <whiteKnight1MoveGroup.length; x++){
    whiteKnight1MoveGroup.get(x - 1).visible = false;
  }
}

function whiteKnight1VisibilityTrue(){
  for(var x = 1; x <whiteKnight1MoveGroup.length; x++){
    whiteKnight1MoveGroup.get(x - 1).visible = true;
  }
}

function whiteKnight2VisibilityFalse(){
  for(var x = 1; x <whiteKnight2MoveGroup.length; x++){
    whiteKnight2MoveGroup.get(x - 1).visible = false;
  }
}

function whiteKnight2VisibilityTrue(){
  for(var x = 1; x <whiteKnight2MoveGroup.length; x++){
    whiteKnight2MoveGroup.get(x - 1).visible = true;
  }
}

function blackBishubVisibilityFalse(){
  for(var x = 1; x <blackBishubMoveGroup.length; x++){
    blackBishubMoveGroup.get(x - 1).visible = false;
  }
}

function blackBishubVisibilityTrue(){
  for(var x = 1; x <blackBishubMoveGroup.length; x++){
    blackBishubMoveGroup.get(x - 1).visible = true;
  }
}

function blackBishub2VisibilityFalse(){
  for(var x = 1; x <blackBishub2MoveGroup.length; x++){
    blackBishub2MoveGroup.get(x - 1).visible = false;
  }
}

function blackBishub2VisibilityTrue(){
  for(var x = 1; x <blackBishub2MoveGroup.length; x++){
    blackBishub2MoveGroup.get(x - 1).visible = true;
  }
}

function blackRook1VisibilityFalse(){
  for(var x = 1; x <blackRook1MoveGroup.length; x++){
    blackRook1MoveGroup.get(x - 1).visible = false;
  }
}

function blackRook1VisibilityTrue(){
  for(var x = 1; x <blackRook1MoveGroup.length; x++){
    blackRook1MoveGroup.get(x - 1).visible = true;
  }
}

function blackRook2VisibilityFalse(){
  for(var x = 1; x <blackRook2MoveGroup.length; x++){
    blackRook2MoveGroup.get(x - 1).visible = false;
  }
}

function blackRook2VisibilityTrue(){
  for(var x = 1; x <blackRook2MoveGroup.length; x++){
    blackRook2MoveGroup.get(x - 1).visible = true;
  }
}

function blackKnight1VisibilityFalse(){
  for(var x = 1; x <blackKnight1MoveGroup.length; x++){
    blackKnight1MoveGroup.get(x - 1).visible = false;
  }
}

function blackKnight1VisibilityTrue(){
  for(var x = 1; x <blackKnight1MoveGroup.length; x++){
    blackKnight1MoveGroup.get(x - 1).visible = true;
  }
}

function blackKnight2VisibilityFalse(){
  for(var x = 1; x <blackKnight2MoveGroup.length; x++){
    blackKnight2MoveGroup.get(x - 1).visible = false;
  }
}

function blackKnight2VisibilityTrue(){
  for(var x = 1; x <blackKnight2MoveGroup.length; x++){
    blackKnight2MoveGroup.get(x - 1).visible = true;
  }
}

function blackQueenVisibilityFalse(){
  for(var x = 1; x <blackQueenMoveGroup.length; x++){
    blackQueenMoveGroup.get(x - 1).visible = false;
  }
}

function blackQueenVisibilityTrue(){
  for(var x = 1; x <blackQueenMoveGroup.length; x++){
    blackQueenMoveGroup.get(x - 1).visible = true;
  }
}

/*function blackPiecesPositionX(){
  for(var x = 1; x <blackPieces.length; x++){
    PositionX = blackPieces.get(x - 1).x;
  }

}

function blackPiecesPositionY(){
  for(var x = 1; x <blackPieces.length; x++){
    PositionY = blackPieces.get(x - 1).y;
  }
}

function blackPieceDetection(piece){
  if(piece.x === black_King.x && piece.y === black_King.y){
    piece.x = black_King.x;
    piece.y = black_King.y;

    black_King.x = -200;
    black_King.y = -200;

    gameState = "over";
    chance = "black";

    black_King.destroy();

    console.log(piece);
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    piece.x = black_Queen.x;
    piece.y = black_Queen.y;

    black_King.x = -200;
    black_King.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Queen.destroy();
    
    console.log(piece);
  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    piece.x = black_Rook1.x;
    piece.y = black_Rook1.y;

    black_Rook1.x = -200;
    black_Rook1.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Rook1.destroy();

    console.log(piece);
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    piece.x = black_Rook2.x;
    piece.y = black_Rook2.y;

    black_Rook2.x = -200;
    black_Rook2.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Rook2.destroy();

    console.log(piece);
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    piece.x = black_Bishub1.x;
    piece.y = black_Bishub1.y;

    black_Bishub1.x = -200;
    black_Bishub1.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Bishub1.destroy();

    console.log(piece);
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    piece.x = black_Bishub2.x;
    piece.y = black_Bishub2.y;

    black_Bishub2.x = -200;
    black_Bishub2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Bishub2.destroy();

    console.log(piece);
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    piece.x = black_Knight1.x;
    piece.y = black_Knight1.y;

    black_Knight1.x = -200;
    black_Knight1.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Knight1.destroy();

    console.log(piece);
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    piece.x = black_Knight2.x;
    piece.y = black_Knight2.y;

    black_Knight2.x = -200;
    black_Knight2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Knight2.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    piece.x = black_Pawn1.x;
    piece.y = black_Pawn1.y;

    black_Pawn1.x = -200;
    black_Pawn1.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn1.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    piece.x = black_Pawn2.x;
    piece.y = black_Pawn2.y;

    black_Pawn2.x = -200;
    black_Pawn2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn2.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    piece.x = black_Pawn3.x;
    piece.y = black_Pawn3.y;

    black_Pawn3.x = -200;
    black_Pawn3.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Pawn3.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    piece.x = black_Pawn4.x;
    piece.y = black_Pawn4.y;

    black_Pawn4.x = -200;
    black_Pawn4.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn4.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    piece.x = black_Pawn5.x;
    piece.y = black_Pawn5.y;

    black_Pawn5.x = -200;
    black_Pawn5.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn5.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    piece.x = black_Pawn6.x;
    piece.y = black_Pawn6.y;

    black_Pawn6.x = -200;
    black_Pawn6.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn6.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    piece.x = black_Pawn7.x;
    piece.y = black_Pawn7.y;

    black_Pawn7.x = -200;
    black_Pawn7.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn7.destroy();

    console.log(piece);
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    piece.x = black_Pawn8.x;
    piece.y = black_Pawn8.y;

    black_Pawn8.x = -200;
    black_Pawn8.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn8.destroy();

    console.log(piece);
  }
}

function whitePieceDetection(piece){
  if(piece.x === white_King.x && piece.y === white_King.y){
    piece.x = white_King.x;
    piece.y = white_King.y;

    white_King.x = -200;
    white_King.y = -200;

    gameState = "over";
    chance = "white";

    white_King.destroy();

    console.log(piece);
  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    piece.x = white_Queen.x;
    piece.y = white_Queen.y;

    white_Queen.x = -200;
    white_Queen.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Queen.destroy();

    console.log(piece);
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    piece.x = white_Rook1.x;
    piece.y = white_Rook1.y;

    white_Rook1.x = -200;
    white_Rook1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Rook1.destroy();

    console.log(piece);
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    piece.x = white_Rook2.x;
    piece.y = white_Rook2.y;

    white_Rook2.x = -200;
    white_Rook2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Rook2.destroy();

    console.log(piece);
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    piece.x = white_Bishub1.x;
    piece.y = white_Bishub1.y;

    white_Bishub1.x = -200;
    white_Bishub1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Bishub1.destroy();

    console.log(piece);
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    piece.x = white_Bishub2.x;
    piece.y = white_Bishub2.y;

    white_Bishub2.x = -200;
    white_Bishub2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Bishub2.destroy();

    console.log(piece);
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    piece.x = white_Knight1.x;
    piece.y = white_Knight1.y;

    white_Knight1.x = -200;
    white_Knight1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Knight1.destroy();

    console.log(piece);
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    piece.x = white_Knight2.x;
    piece.y = white_Knight2.y;

    white_Knight2.x = -200;
    white_Knight2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Knight2.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    piece.x = white_Pawn1.x;
    piece.y = white_Pawn1.y;

    white_Pawn1.x = -200;
    white_Pawn1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn1.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    piece.x = white_Pawn2.x;
    piece.y = white_Pawn2.y;

    white_Pawn2.x = -200;
    white_Pawn2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn2.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    piece.x = white_Pawn3.x;
    piece.y = white_Pawn3.y;

    white_Pawn3.x = -200;
    white_Pawn3.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn3.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    piece.x = white_Pawn4.x;
    piece.y = white_Pawn4.y;

    white_Pawn4.x = -200;
    white_Pawn4.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn4.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    piece.x = white_Pawn5.x;
    piece.y = white_Pawn5.y;

    white_Pawn5.x = -200;
    white_Pawn5.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn5.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    piece.x = white_Pawn6.x;
    piece.y = white_Pawn6.y;

    white_Pawn6.x = -200;
    white_Pawn6.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn6.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    piece.x = white_Pawn7.x;
    piece.y = white_Pawn7.y;

    white_Pawn7.x = -200;
    white_Pawn7.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn7.destroy();

    console.log(piece);
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    piece.x = white_Pawn8.x;
    piece.y = white_Pawn8.y;

    white_Pawn8.x = -200;
    white_Pawn8.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn8.destroy();

    console.log(piece);
  }
}

function whiteFriends(piece,a){
  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
  }
}

function blackFriends(piece){
  if(piece.x === black_King2Position.x && piece.y === black_King2Position.y){
    piece.x = piece.x;
    piece.y = piece.y;

    console.log(piece);
  }

  if(piece.x === black_Queen2Position.x && piece.y === black_Queen2Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Rook3Position.x && piece.y === black_Rook3Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Rook4Position.x && piece.y === black_Rook4Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Bishub3Position.x && piece.y === black_Bishub3Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Bishub4Position.x && piece.y === black_Bishub4Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Knight3Position.x && piece.y === black_Knight3Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_Knight4Position.x && piece.y === black_Knight4Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn1Position.x && piece.y === black_bpawn1Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn2Position.x && piece.y === black_bpawn2Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn3Position.x && piece.y === black_bpawn3Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn4Position.x && piece.y === black_bpawn4Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn5Position.x && piece.y === black_bpawn5Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn6Position.x && piece.y === black_bpawn6Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn7Position.x && piece.y === black_bpawn7Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }

  if(piece.x === black_bpawn8Position.x && piece.y === black_bpawn8Position.y){
    piece.x = piece.x;
    piece.y = piece.y;
    
    console.log(piece);
  }
}


function whitePiecePossibleMovesDetection(piece){
  if(movement === "continue"){
    if(piece.x === black_King.x && piece.y === black_King.y){
      movement = "stop";

      piece.visible = false;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = true;
    }
  
    if(piece.x === black_Queen.x && piece.y === black_Queen.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }


    if(piece.x === white_King.x && piece.y === white_King.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Queen.x && piece.y === white_Queen.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  
    if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
      movement = "stop";

      piece.visible = true;

      console.log(piece);
    }else{
      movement = "continue"

      piece.visible = false;
    }
  }
}*/


function forWhite(piece,a,b){
  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = black_King.x;
    a.y = black_King.y;

    black_King.x = -200;
    black_King.y = -200;

    gameState = "over";
    chance = "black";

    black_King.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = black_Queen.x;
    a.y = black_Queen.y;

    black_King.x = -200;
    black_King.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Queen.destroy();
    
    console.log(piece);
    
    visibilityFalse();

  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = black_Rook1.x;
    a.y = black_Rook1.y;

    black_Rook1.x = -200;
    black_Rook1.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Rook1.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = black_Rook2.x;
    a.y = black_Rook2.y;

    black_Rook2.x = -200;
    black_Rook2.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Rook2.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = black_Bishub1.x;
    a.y = black_Bishub1.y;

    black_Bishub1.x = -200;
    black_Bishub1.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Bishub1.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = black_Bishub2.x;
    a.y = black_Bishub2.y;

    black_Bishub2.x = -200;
    black_Bishub2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Bishub2.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = black_Knight1.x;
    a.y = black_Knight1.y;

    black_Knight1.x = -200;
    black_Knight1.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Knight1.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = black_Knight2.x;
    a.y = black_Knight2.y;

    black_Knight2.x = -200;
    black_Knight2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Knight2.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = black_Pawn1.x;
    a.y = black_Pawn1.y;

    black_Pawn1.x = -200;
    black_Pawn1.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn1.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = black_Pawn2.x;
    a.y = black_Pawn2.y;

    black_Pawn2.x = -200;
    black_Pawn2.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn2.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = black_Pawn3.x;
    a.y = black_Pawn3.y;

    black_Pawn3.x = -200;
    black_Pawn3.y = -200;

    gameState = "selecting";
    chance = "black";

    black_Pawn3.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = black_Pawn4.x;
    a.y = black_Pawn4.y;

    black_Pawn4.x = -200;
    black_Pawn4.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn4.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = black_Pawn5.x;
    a.y = black_Pawn5.y;

    black_Pawn5.x = -200;
    black_Pawn5.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn5.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = black_Pawn6.x;
    a.y = black_Pawn6.y;

    black_Pawn6.x = -200;
    black_Pawn6.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn6.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = black_Pawn7.x;
    a.y = black_Pawn7.y;

    black_Pawn7.x = -200;
    black_Pawn7.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn7.destroy();

    console.log(piece);
    
    visibilityFalse();
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = black_Pawn8.x;
    a.y = black_Pawn8.y;

    black_Pawn8.x = -200;
    black_Pawn8.y = -200;

    gameState = "selecting";    
    chance = "black";

    black_Pawn8.destroy();

    console.log(piece);
    
    visibilityFalse();
  }



  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = a.x;
    a.y = a.y;
   
    chance = "white";

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = a.x;
    a.y = a.y;

    chance = "white";
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = a.x;
    a.y = a.y;

    chance = "white";
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = a.x;
    a.y = a.y;
  
    chance = "white";
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    chance = "white";
  }






  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = piece.x;
                                                                  a.y = piece.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "black";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  } 
}


function forBlack(piece,a,b){
  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = piece.x;
    a.y = piece.y;

    white_King.x = -200;
    white_King.y = -200;

    gameState = "over";
    chance = "white";

    white_King.destroy();

    console.log(piece);

    visibilityFalse();

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Queen.x = -200;
    white_Queen.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Queen.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Rook1.x = -200;
    white_Rook1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Rook1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Rook2.x = -200;
    white_Rook2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Rook2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Bishub1.x = -200;
    white_Bishub1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Bishub1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Bishub2.x = -200;
    white_Bishub2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Bishub2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Knight1.x = -200;
    white_Knight1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Knight1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Knight2.x = -200;
    white_Knight2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Knight2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn1.x = -200;
    white_Pawn1.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn2.x = -200;
    white_Pawn2.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn3.x = -200;
    white_Pawn3.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn3.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn4.x = -200;
    white_Pawn4.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn4.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn5.x = -200;
    white_Pawn5.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn5.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn6.x = -200;
    white_Pawn6.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn6.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn7.x = -200;
    white_Pawn7.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn7.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = piece.x;
    a.y = piece.y;

    white_Pawn8.x = -200;
    white_Pawn8.y = -200;

    gameState = "selecting";
    chance = "white";

    white_Pawn8.destroy();

    console.log(piece);

    visibilityFalse();
  }



  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;
    
    chance = "black";
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;


    chance = "black";
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = a.x;
    a.y = a.y;

    console.log(piece);
      
    b;

    chance = "black";
  }



  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = piece.x;
                                                                  a.y = piece.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "white";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }

}


function visibilityFalse(){
  blackPawn1Move1.visible = false;
  blackPawn1Move2.visible = false;
  blackPawn1Move3.visible = false;
  blackPawn1Move4.visible = false;
  
  blackPawn2Move1.visible = false;
  blackPawn2Move2.visible = false;
  blackPawn2Move3.visible = false;
  blackPawn2Move4.visible = false;
  
  blackPawn3Move1.visible = false;
  blackPawn3Move2.visible = false;
  blackPawn3Move3.visible = false;
  blackPawn3Move4.visible = false;
  
  blackPawn4Move1.visible = false;
  blackPawn4Move2.visible = false;
  blackPawn4Move3.visible = false;
  blackPawn4Move4.visible = false;
  
  blackPawn5Move1.visible = false;
  blackPawn5Move2.visible = false;
  blackPawn5Move3.visible = false;
  blackPawn5Move4.visible = false;
  
  blackPawn6Move1.visible = false;
  blackPawn6Move2.visible = false;
  blackPawn6Move3.visible = false;
  blackPawn6Move4.visible = false;
  
  blackPawn7Move1.visible = false;
  blackPawn7Move2.visible = false;
  blackPawn7Move3.visible = false;
  blackPawn7Move4.visible = false;
  
  blackPawn8Move1.visible = false;
  blackPawn8Move2.visible = false;
  blackPawn8Move3.visible = false;
  blackPawn8Move4.visible = false;




  WhitePawn1Move1.visible = false;
  WhitePawn1Move2.visible = false;
  WhitePawn1Move3.visible = false;
  WhitePawn1Move4.visible = false;
  
  WhitePawn2Move1.visible = false;
  WhitePawn2Move2.visible = false;
  WhitePawn2Move3.visible = false;
  WhitePawn2Move4.visible = false;
  
  WhitePawn3Move1.visible = false;
  WhitePawn3Move2.visible = false;
  WhitePawn3Move3.visible = false;
  WhitePawn3Move4.visible = false;
  
  WhitePawn4Move1.visible = false;
  WhitePawn4Move2.visible = false;
  WhitePawn4Move3.visible = false;
  WhitePawn4Move4.visible = false;
  
  WhitePawn5Move1.visible = false;
  WhitePawn5Move2.visible = false;
  WhitePawn5Move3.visible = false;
  WhitePawn5Move4.visible = false;
  
  WhitePawn6Move1.visible = false;
  WhitePawn6Move2.visible = false;
  WhitePawn6Move3.visible = false;
  WhitePawn6Move4.visible = false;
  
  WhitePawn7Move1.visible = false;
  WhitePawn7Move2.visible = false;
  WhitePawn7Move3.visible = false;
  WhitePawn7Move4.visible = false;
  
  WhitePawn8Move1.visible = false;
  WhitePawn8Move2.visible = false;
  WhitePawn8Move3.visible = false;
  WhitePawn8Move4.visible = false;
  
  

  king1MovesA.visible = false;
  king1MovesB.visible = false;
  king1MovesC.visible = false;
  king1MovesD.visible = false;
  king1MovesE.visible = false;
  king1MovesF.visible = false;
  king1MovesG.visible = false;
  king1MovesH.visible = false;



  king2MovesA.visible = false;
  king2MovesB.visible = false;
  king2MovesC.visible = false;
  king2MovesD.visible = false;
  king2MovesE.visible = false;
  king2MovesF.visible = false;
  king2MovesG.visible = false;
  king2MovesH.visible = false;


  whiteQueenVisibilityFalse();
  whiteRook1VisibilityFalse();
  whiteRook2VisibilityFalse();
  whiteKnight1VisibilityFalse();
  whiteKnight2VisibilityFalse();
  whiteBishub2VisibilityFalse();
  whiteBishubVisibilityFalse();

  blackQueenVisibilityFalse();
  blackRook1VisibilityFalse();
  blackRook2VisibilityFalse();
  blackKnight1VisibilityFalse();
  blackKnight2VisibilityFalse();
  blackBishub2VisibilityFalse();
  blackBishubVisibilityFalse()
  
}


function visibilityTrue(){
  blackPawn1Move1.visible = true;
  blackPawn1Move2.visible = true;
  blackPawn1Move3.visible = true;
  blackPawn1Move4.visible = true;
  
  blackPawn2Move1.visible = true;
  blackPawn2Move2.visible = true;
  blackPawn2Move3.visible = true;
  blackPawn2Move4.visible = true;
  
  blackPawn3Move1.visible = true;
  blackPawn3Move2.visible = true;
  blackPawn3Move3.visible = true;
  blackPawn3Move4.visible = true;
  
  blackPawn4Move1.visible = true;
  blackPawn4Move2.visible = true;
  blackPawn4Move3.visible = true;
  blackPawn4Move4.visible = true;
  
  blackPawn5Move1.visible = true;
  blackPawn5Move2.visible = true;
  blackPawn5Move3.visible = true;
  blackPawn5Move4.visible = true;
  
  blackPawn6Move1.visible = true;
  blackPawn6Move2.visible = true;
  blackPawn6Move3.visible = true;
  blackPawn6Move4.visible = true;
  
  blackPawn7Move1.visible = true;
  blackPawn7Move2.visible = true;
  blackPawn7Move3.visible = true;
  blackPawn7Move4.visible = true;
  
  blackPawn8Move1.visible = true;
  blackPawn8Move2.visible = true;
  blackPawn8Move3.visible = true;
  blackPawn8Move4.visible = true;




  WhitePawn1Move1.visible = true;
  WhitePawn1Move2.visible = true;
  WhitePawn1Move3.visible = true;
  WhitePawn1Move4.visible = true;
  
  WhitePawn2Move1.visible = true;
  WhitePawn2Move2.visible = true;
  WhitePawn2Move3.visible = true;
  WhitePawn2Move4.visible = true;
  
  WhitePawn3Move1.visible = true;
  WhitePawn3Move2.visible = true;
  WhitePawn3Move3.visible = true;
  WhitePawn3Move4.visible = true;
  
  WhitePawn4Move1.visible = true;
  WhitePawn4Move2.visible = true;
  WhitePawn4Move3.visible = true;
  WhitePawn4Move4.visible = true;
  
  WhitePawn5Move1.visible = true;
  WhitePawn5Move2.visible = true;
  WhitePawn5Move3.visible = true;
  WhitePawn5Move4.visible = true;
  
  WhitePawn6Move1.visible = true;
  WhitePawn6Move2.visible = true;
  WhitePawn6Move3.visible = true;
  WhitePawn6Move4.visible = true;
  
  WhitePawn7Move1.visible = true;
  WhitePawn7Move2.visible = true;
  WhitePawn7Move3.visible = true;
  WhitePawn7Move4.visible = true;
  
  WhitePawn8Move1.visible = true;
  WhitePawn8Move2.visible = true;
  WhitePawn8Move3.visible = true;
  WhitePawn8Move4.visible = true;
  
  

  king1MovesA.visible = true;
  king1MovesB.visible = true;
  king1MovesC.visible = true;
  king1MovesD.visible = true;
  king1MovesE.visible = true;
  king1MovesF.visible = true;
  king1MovesG.visible = true;
  king1MovesH.visible = true;



  king2MovesA.visible = true;
  king2MovesB.visible = true;
  king2MovesC.visible = true;
  king2MovesD.visible = true;
  king2MovesE.visible = true;
  king2MovesF.visible = true;
  king2MovesG.visible = true;
  king2MovesH.visible = true;


  whiteQueenVisibilityTrue();
  whiteRook1VisibilityTrue();
  whiteRook2VisibilityTrue();
  whiteKnight1VisibilityTrue();
  whiteKnight2VisibilityTrue();
  whiteBishub2VisibilityTrue();
  whiteBishubVisibilityTrue();
  
  blackQueenVisibilityTrue();
  blackRook1VisibilityTrue();
  blackRook2VisibilityTrue();
  blackKnight1VisibilityTrue();
  blackKnight2VisibilityTrue();
  blackBishub2VisibilityTrue();
  blackBishubVisibilityTrue();
}

function whiteKingVisibilityTrue(){
  king1MovesA.visible = true;
  king1MovesB.visible = true;
  king1MovesC.visible = true;
  king1MovesD.visible = true;
  king1MovesE.visible = true;
  king1MovesF.visible = true;
  king1MovesG.visible = true;
  king1MovesH.visible = true;
}

function whitePawn1VisibilityTrue(){
  WhitePawn1Move1.visible = true;
  WhitePawn1Move2.visible = true;
  WhitePawn1Move3.visible = true;
  WhitePawn1Move4.visible = true;
}

function whitePawn2VisibilityTrue(){
  WhitePawn2Move1.visible = true;
  WhitePawn2Move2.visible = true;
  WhitePawn2Move3.visible = true;
  WhitePawn2Move4.visible = true;
}

function whitePawn3VisibilityTrue(){
  WhitePawn3Move1.visible = true;
  WhitePawn3Move2.visible = true;
  WhitePawn3Move3.visible = true;
  WhitePawn3Move4.visible = true;
}

function whitePawn4VisibilityTrue(){
  WhitePawn4Move1.visible = true;
  WhitePawn4Move2.visible = true;
  WhitePawn4Move3.visible = true;
  WhitePawn4Move4.visible = true;
}

function whitePawn5VisibilityTrue(){
  WhitePawn5Move1.visible = true;
  WhitePawn5Move2.visible = true;
  WhitePawn5Move3.visible = true;
  WhitePawn5Move4.visible = true;
}

function whitePawn6VisibilityTrue(){
  WhitePawn6Move1.visible = true;
  WhitePawn6Move2.visible = true;
  WhitePawn6Move3.visible = true;
  WhitePawn6Move4.visible = true;
}

function whitePawn7VisibilityTrue(){
  WhitePawn7Move1.visible = true;
  WhitePawn7Move2.visible = true;
  WhitePawn7Move3.visible = true;
  WhitePawn7Move4.visible = true;
}

function whitePawn8VisibilityTrue(){
  WhitePawn8Move1.visible = true;
  WhitePawn8Move2.visible = true;
  WhitePawn8Move3.visible = true;
  WhitePawn8Move4.visible = true;
}

function blackPawn1VisibilityTrue(){
  blackPawn1Move1.visible = true;
  blackPawn1Move2.visible = true;
  blackPawn1Move3.visible = true;
  blackPawn1Move4.visible = true;
}

function blackPawn2VisibilityTrue(){
  blackPawn2Move1.visible = true;
  blackPawn2Move2.visible = true;
  blackPawn2Move3.visible = true;
  blackPawn2Move4.visible = true;
}

function blackPawn3VisibilityTrue(){
  blackPawn3Move1.visible = true;
  blackPawn3Move2.visible = true;
  blackPawn3Move3.visible = true;
  blackPawn3Move4.visible = true;
}

function blackPawn4VisibilityTrue(){
  blackPawn4Move1.visible = true;
  blackPawn4Move2.visible = true;
  blackPawn4Move3.visible = true;
  blackPawn4Move4.visible = true;
}

function blackPawn5VisibilityTrue(){
  blackPawn5Move1.visible = true;
  blackPawn5Move2.visible = true;
  blackPawn5Move3.visible = true;
  blackPawn5Move4.visible = true;
}

function blackPawn6VisibilityTrue(){
  blackPawn6Move1.visible = true;
  blackPawn6Move2.visible = true;
  blackPawn6Move3.visible = true;
  blackPawn6Move4.visible = true;
}

function blackPawn7VisibilityTrue(){
  blackPawn7Move1.visible = true;
  blackPawn7Move2.visible = true;
  blackPawn7Move3.visible = true;
  blackPawn7Move4.visible = true;
}

function blackPawn8VisibilityTrue(){
  blackPawn8Move1.visible = true;
  blackPawn8Move2.visible = true;
  blackPawn8Move3.visible = true;
  blackPawn8Move4.visible = true;
}


/*function forWhitePawnForward(piece,a,b){
  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";

  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";
  }



  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
 
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = piece.x;
                                                                  a.y = piece.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "black";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }
}

function forBlackPawnForward(piece,a,b){
  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }



  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
 
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "black";
    gameState = "selecting";
  }

  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = piece.x;
                                                                  a.y = piece.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "white";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }
}

function forBlackPawnSide(piece,a,b){
  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";
  }



  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "white";
    gameState = "over";

    white_King.x = -200;
    white_King.y = -200;
    white_King.destroy();
    visibilityFalse();

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Queen.x = -200;
    white_Queen.y = -200;
    white_Queen.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Rook1.x = -200;
    white_Rook1.y = -200;
    white_Rook1.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Rook2.x = -200;
    white_ROok2.y = -200;
    white_Rook2.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Bishub1.x = -200;
    white_Bishub1.y = -200;
    white_Bishub1.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Bishub2.x = -200;
    white_Bishub2.y = -200;
    white_Bishub2.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Knight1.x = -200;
    white_Knight1.y = -200;
    white_Knight1.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Knight2.x = -200;
    white_Knight2.y = -200;
    white_Knight2.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn1.x = -200;
    white_Pawn1.y = -200;
    white_Pawn1.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn2.x = -200;
    white_Pawn2.y = -200;
    white_Pawn2.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn3.x = -200;
    white_Pawn3.y = -200;
    white_Pawn3.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn4.x = -200;
    white_Pawn4.y = -200;
    white_Pawn4.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn5.x = -200;
    white_Pawn5.y = -200;
    white_Pawn5.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn6.x = -200;
    white_Pawn6.y = -200;
    white_Pawn6.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
 
    chance = "white";
    gameState = "selecting";

    white_Pawn7.x = -200;
    white_Pawn7.y = -200;
    white_Pawn7.destroy();
    visibilityFalse();
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;

    chance = "white";
    gameState = "selecting";

    white_Pawn8.x = -200;
    white_Pawn8.y = -200;
    white_Pawn8.destroy();
    visibilityFalse();
  }

  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = a.x;
                                                                  a.y = a.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "black";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }
}

function forWhitePawnSide(piece,a,b){
  if(piece.x === black_King.x && piece.y === black_King.y){
    a.x = piece.x;
    a.y = piece.y;

    black_King.x = -200;
    black_King.y = -200;

    gameState = "over";
    chance = "black";

    black_King.destroy();

    console.log(piece);

    visibilityFalse();
    
    b;
   
  }

  if(piece.x === black_Queen.x && piece.y === black_Queen.y){
    a.x = piece.x;
    a.y = piece.y;

    black_Queen.x = -200;
    black_Queen.y = -200;

    black_Queen.destroy();

    console.log(piece);

    visibilityFalse();
    
    b;
   
    chance = "black";
    gameState = "selecting";

  }

  if(piece.x === black_Rook1.x && piece.y === black_Rook1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Rook1.x = -200;
    black_Rook1.y = -200;

    black_Rook1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Rook2.x && piece.y === black_Rook2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Rook2.x = -200;
    black_Rook2.y = -200;

    black_Rook2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Bishub1.x && piece.y === black_Bishub1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Bishub1.x = -200;
    black_Bishub1.y = -200;

    black_Bishub1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Bishub2.x && piece.y === black_Bishub2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Bishub2.x = -200;
    black_Bishub2.y = -200;

    black_Bishub2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Knight1.x && piece.y === black_Knight1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Knight1.x = -200;
    black_Knight1.y = -200;

    black_Knight1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Knight2.x && piece.y === black_Knight2.y){
    a.x = piece.x;
    a.y = piece.y;

    b;
   
    chance = "black";
    gameState = "selecting";

    black_Knight2.x = -200;
    black_Knight2.y = -200;

    black_Knight2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn1.x && piece.y === black_Pawn1.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn1.x = -200;
    black_Pawn1.y = -200;

    black_Pawn1.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn2.x && piece.y === black_Pawn2.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn2.x = -200;
    black_Pawn2.y = -200;

    black_Pawn2.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn3.x && piece.y === black_Pawn3.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn3.x = -200;
    black_Pawn3.y = -200;

    black_Pawn3.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn4.x && piece.y === black_Pawn4.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn4.x = -200;
    black_Pawn4.y = -200;

    black_Pawn4.destroy();
    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn5.x && piece.y === black_Pawn5.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn5.x = -200;
    black_Pawn5.y = -200;

    black_Pawn5.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn6.x && piece.y === black_Pawn6.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn6.x = -200;
    black_Pawn6.y = -200;
    black_Pawn6.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn7.x && piece.y === black_Pawn7.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn7.x = -200;
    black_Pawn7.y = -200;

    black_Pawn7.destroy();

    console.log(piece);

    visibilityFalse();
  }

  if(piece.x === black_Pawn8.x && piece.y === black_Pawn8.y){
    a.x = piece.x;
    a.y = piece.y;
    
    b;
   
    chance = "black";
    gameState = "selecting";

    black_Pawn8.x = -200;
    black_Pawn8.y = -200;

    black_Pawn8.destroy();

    console.log(piece);

    visibilityFalse();
  }



  if(piece.x === white_King.x && piece.y === white_King.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
   
    chance = "white";
    gameState = "selecting";

  }

  if(piece.x === white_Queen.x && piece.y === white_Queen.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Rook1.x && piece.y === white_Rook1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Rook2.x && piece.y === white_Rook2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub1.x && piece.y === white_Bishub1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Bishub2.x && piece.y === white_Bishub2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Knight1.x && piece.y === white_Knight1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Knight2.x && piece.y === white_Knight2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn1.x && piece.y === white_Pawn1.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn2.x && piece.y === white_Pawn2.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn3.x && piece.y === white_Pawn3.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn4.x && piece.y === white_Pawn4.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn5.x && piece.y === white_Pawn5.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn6.x && piece.y === white_Pawn6.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn7.x && piece.y === white_Pawn7.y){
    a.x = a.x;
    a.y = a.y;
    
    b;
 
    chance = "white";
    gameState = "selecting";
  }

  if(piece.x === white_Pawn8.x && piece.y === white_Pawn8.y){
    a.x = a.x;
    a.y = a.y;
    
    b;

    chance = "white";
    gameState = "selecting";
  }

  if(piece.x != black_King.x && piece.y != black_King.y){
    if(piece.x != black_Queen.x && piece.y != black_Queen.y){
      if(piece.x != black_Rook1.x && piece.y != black_Rook1.y){
        if(piece.x != black_Rook2.x && piece.y != black_Rook2.y){
          if(piece.x != black_Bishub1.x && piece.y != black_Bishub1.y){
            if(piece.x != black_Bishub2.x && piece.y != black_Bishub2.y){
              if(piece.x != black_Knight1.x && piece.y != black_Knight1.y){
                if(piece.x != black_Knight2.x && piece.y != black_Knight2.y){
                  if(piece.x != black_Pawn1.x && piece.y != black_Pawn1.y){
                    if(piece.x != black_Pawn2.x && piece.y != black_Pawn2.y){
                      if(piece.x != black_Pawn3.x && piece.y != black_Pawn3.y){
                        if(piece.x != black_Pawn4.x && piece.y != black_Pawn4.y){
                          if(piece.x != black_Pawn5.x && piece.y != black_Pawn5.y){
                            if(piece.x != black_Pawn6.x && piece.y != black_Pawn6.y){
                              if(piece.x != black_Pawn7.x && piece.y != black_Pawn7.y){
                                if(piece.x != black_Pawn8.x && piece.y != black_Pawn8.y){
                                  if(piece.x != white_King.x && piece.y != white_King.y){
                                    if(piece.x != white_Queen.x && piece.y != white_Queen.y){
                                      if(piece.x != white_Rook1.x && piece.y != white_Rook1.y){
                                        if(piece.x != white_Rook2.x && piece.y != white_Rook2.y){
                                          if(piece.x != white_Bishub1.x && piece.y != white_Bishub1.y){
                                            if(piece.x != white_Bishub2.x && piece.y != white_Bishub2.y){
                                              if(piece.x != white_Knight1.x && piece.y != white_Knight1.y){
                                                if(piece.x != white_Knight2.x && piece.y != white_Knight2.y){
                                                  if(piece.x != white_Pawn1.x && piece.y != white_Pawn1.y){
                                                    if(piece.x != white_Pawn2.x && piece.y != white_Pawn2.y){
                                                      if(piece.x != white_Pawn3.x && piece.y != white_Pawn3.y){
                                                        if(piece.x != white_Pawn4.x && piece.y != white_Pawn4.y){
                                                          if(piece.x != white_Pawn5.x && piece.y != white_Pawn5.y){
                                                            if(piece.x != white_Pawn6.x && piece.y != white_Pawn6.y){
                                                              if(piece.x != white_Pawn7.x && piece.y != white_Pawn7.y){
                                                                if(piece.x != white_Pawn8.x && piece.y != white_Pawn8.y){
                                                                  a.x = a.x;
                                                                  a.y = a.y;

                                                                  visibilityFalse();

                                                                  gameState = "selecting";
                                                                  chance = "white";
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }  
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }              
              }
            }
          }
        }
      }
    }
  }
}


function canPeaceGo(piece,a){
  if(piece.x === a.x){
    if(piece.y > a.y){
      if(piece.x === white_King.x){
        if(white_King.y > a.y && white_King.y < piece.y){
          
        }
      }
      
      if(piece.x === white_Queen.x){
        if(white_Queen.y > a.y && white_Queen.y < piece.y){
          
        }
      }
      
      if(piece.x === white_Rook1.x){
        if(white_Rook1.y > a.y && white_Rook1.y < piece.y){
          
        }
      }
      
      if(piece.x === white_Rook2.x){
        if(white_Rook2.y > a.y && white_Rook2.y < piece.y){
          
        }
      }
      
      if(piece.x === white_Bishub1.x){
        if(white_Bishub1.y > a.y && white_Bishub1.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Bishub2.x){
        if(white_Bishub2.y > a.y && white_Bishub2.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Knight1.x){
        if(white_Knight1.y > a.y && white_Knight1.y < piece.y){
          
        }
      }
      
      if(piece.x === white_Knight2.x){
        if(white_Knight2.y > a.y && white_Knight2.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn1.x){
        if(white_Pawn1.y > a.y && white_Pawn1.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn2.x){
        if(white_Pawn2.y > a.y && white_Pawn2.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn3.x){
        if(white_Pawn3.y > a.y && white_Pawn3.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn4.x){
        if(white_Pawn4.y > a.y && white_Pawn4.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn5.x){
        if(white_Pawn5.y > a.y && white_Pawn5.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn6.x){
        if(white_Pawn6.y > a.y && white_Pawn6.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn7.x){
        if(white_Pawn7.y > a.y && white_Pawn7.y < piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn8.x){
        if(white_Pawn8.y > a.y && white_Pawn8.y < piece.y){
          
        } 
      }
      
      
      if(piece.x === black_King.x){
        if(black_King.y > a.y && black_King.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Queen.x){
        if(black_Queen.y > a.y && black_Queen.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Rook1.x){
        if(black_Rook1.y > a.y && black_Rook1.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Rook2.x){
        if(black_Rook2.y > a.y && black_Rook2.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Bishub1.x){
        if(black_Bishub1.y > a.y && black_Bishub1.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Bishub2.x){
        if(black_Bishub2.y > a.y && black_Bishub2.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Knight1.x){
        if(black_Knight1.y > a.y && black_Knight1.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Knight2.x){
        if(black_Knight2.y > a.y && black_Knight2.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn1.x){
        if(black_Pawn1.y > a.y && black_Pawn1.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn2.x){
        if(black_Pawn2.y > a.y && black_Pawn2.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn3.x){
        if(black_Pawn3.y > a.y && black_Pawn3.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn4.x){
        if(black_Pawn4.y > a.y && black_Pawn4.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn5.x){
        if(black_Pawn5.y > a.y && black_Pawn5.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn6.x){
        if(black_Pawn6.y > a.y && black_Pawn6.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn7.x){
        if(black_Pawn7.y > a.y && black_Pawn7.y < piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn8.x){
        if(black_Pawn8.y > a.y && black_Pawn8.y < piece.y){
          
        }
      }
    }else{
      if(piece.x === white_King.x){
        if(white_King.y < a.y && white_King.y > piece.y){
          
        }
      }
      
      if(piece.x === white_Queen.x){
        if(white_Queen.y < a.y && white_Queen.y > piece.y){
          
        }
      }
      
      if(piece.x === white_Rook1.x){
        if(white_Rook1.y < a.y && white_Rook1.y > piece.y){
          
        }
      }
      
      if(piece.x === white_Rook2.x){
        if(white_Rook2.y < a.y && white_Rook2.y > piece.y){
          
        }
      }
      
      if(piece.x === white_Bishub1.x){
        if(white_Bishub1.y < a.y && white_Bishub1.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Bishub2.x){
        if(white_Bishub2.y < a.y && white_Bishub2.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Knight1.x){
        if(white_Knight1.y < a.y && white_Knight1.y > piece.y){
          
        }
      }
      
      if(piece.x === white_Knight2.x){
        if(white_Knight2.y < a.y && white_Knight2.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn1.x){
        if(white_Pawn1.y < a.y && white_Pawn1.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn2.x){
        if(white_Pawn2.y < a.y && white_Pawn2.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn3.x){
        if(white_Pawn3.y < a.y && white_Pawn3.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn4.x){
        if(white_Pawn4.y < a.y && white_Pawn4.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn5.x){
        if(white_Pawn5.y < a.y && white_Pawn5.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn6.x){
        if(white_Pawn6.y < a.y && white_Pawn6.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn7.x){
        if(white_Pawn7.y < a.y && white_Pawn7.y > piece.y){
          
        } 
      }
      
      if(piece.x === white_Pawn8.x){
        if(white_Pawn8.y < a.y && white_Pawn8.y > piece.y){
          
        } 
      }
      
      
      if(piece.x === black_King.x){
        if(black_King.y < a.y && black_King.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Queen.x){
        if(black_Queen.y < a.y && black_Queen.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Rook1.x){
        if(black_Rook1.y < a.y && black_Rook1.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Rook2.x){
        if(black_Rook2.y < a.y && black_Rook2.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Bishub1.x){
        if(black_Bishub1.y < a.y && black_Bishub1.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Bishub2.x){
        if(black_Bishub2.y < a.y && black_Bishub2.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Knight1.x){
        if(black_Knight1.y < a.y && black_Knight1.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Knight2.x){
        if(black_Knight2.y < a.y && black_Knight2.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn1.x){
        if(black_Pawn1.y < a.y && black_Pawn1.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn2.x){
        if(black_Pawn2.y < a.y && black_Pawn2.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn3.x){
        if(black_Pawn3.y < a.y && black_Pawn3.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn4.x){
        if(black_Pawn4.y < a.y && black_Pawn4.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn5.x){
        if(black_Pawn5.y < a.y && black_Pawn5.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn6.x){
        if(black_Pawn6.y < a.y && black_Pawn6.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn7.x){
        if(black_Pawn7.y < a.y && black_Pawn7.y > piece.y){
          
        }
      }
      
      if(piece.x === black_Pawn8.x){
        if(black_Pawn8.y < a.y && black_Pawn8.y > piece.y){
          
        }
      }
    }
  }else if(piece.y === aa.y){
    if(piece.y > a.y){
      if(piece.y === white_King.y){
        if(white_King.x > a.x && white_King.x < piece.x){
          
        }
      }
      
      if(piece.y === white_Queen.y){
        if(white_Queen.x > a.x && white_Queen.x < piece.x){
          
        }
      }
      
      if(piece.y === white_Rook1.y){
        if(white_Rook1.x > a.x && white_Rook1.x < piece.x){
          
        }
      }
      
      if(piece.y === white_Rook2.y){
        if(white_Rook2.x > a.x && white_Rook2.x < piece.x){
          
        }
      }
      
      if(piece.y === white_Bishub1.y){
        if(white_Bishub1.x > a.x && white_Bishub1.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Bishub2.y){
        if(white_Bishub2.x > a.x && white_Bishub2.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Knight1.y){
        if(white_Knight1.x > a.x && white_Knight1.x < piece.x){
          
        }
      }
      
      if(piece.y === white_Knight2.y){
        if(white_Knight2.x > a.x && white_Knight2.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn1.y){
        if(white_Pawn1.x > a.x && white_Pawn1.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn2.y){
        if(white_Pawn2.x > a.x && white_Pawn2.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn3.y){
        if(white_Pawn3.x > a.x && white_Pawn3.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn4.y){
        if(white_Pawn4.x > a.x && white_Pawn4.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn5.y){
        if(white_Pawn5.x > a.x && white_Pawn5.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn6.y){
        if(white_Pawn6.x > a.x && white_Pawn6.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn7.y){
        if(white_Pawn7.x > a.x && white_Pawn7.x < piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn8.y){
        if(white_Pawn8.x > a.x && white_Pawn8.x < piece.x){
          
        } 
      }
      
    
      if(piece.y === black_King.y){
        if(black_King.x > a.x && black_King.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Queen.y){
        if(black_Queen.x > a.x && black_Queen.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Rook1.y){
        if(black_Rook1.x > a.x && black_Rook1.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Rook2.y){
        if(black_Rook2.x > a.x && black_Rook2.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Bishub1.y){
        if(black_Bishub1.x > a.x && black_Bishub1.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Bishub2.y){
        if(black_Bishub2.x > a.x && black_Bishub2.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Knight1.y){
        if(black_Knight1.x > a.x && black_Knight1.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Knight2.y){
        if(black_Knight2.x > a.x && black_Knight2.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn1.y){
        if(black_Pawn1.x > a.x && black_Pawn1.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn2.y){
        if(black_Pawn2.x > a.x && black_Pawn2.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn3.y){
        if(black_Pawn3.x > a.x && black_Pawn3.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn4.y){
        if(black_Pawn4.x > a.x && black_Pawn4.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn5.y){
        if(black_Pawn5.x > a.x && black_Pawn5.x < piece.x){
          
        }
      }
    
      if(piece.y === black_Pawn6.y){
        if(black_Pawn6.x > a.x && black_Pawn6.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn7.y){
        if(black_Pawn7.x > a.x && black_Pawn7.x < piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn8.y){
        if(black_Pawn8.x > a.x && black_Pawn8.x < piece.x){
          
        }
      }
    }else{
      if(piece.y === white_King.y){
        if(white_King.x < a.x && white_King.x > piece.x){
          
        }
      }
      
      if(piece.y === white_Queen.y){
        if(white_Queen.x < a.x && white_Queen.x > piece.x){
          
        }
      }
      
      if(piece.y === white_Rook1.y){
        if(white_Rook1.x < a.x && white_Rook1.x > piece.x){
          
        }
      }
      
      if(piece.y === white_Rook2.y){
        if(white_Rook2.x < a.x && white_Rook2.x > piece.x){
          
        }
      }
      
      if(piece.y === white_Bishub1.y){
        if(white_Bishub1.x < a.x && white_Bishub1.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Bishub2.y){
        if(white_Bishub2.x < a.x && white_Bishub2.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Knight1.y){
        if(white_Knight1.x < a.x && white_Knight1.x > piece.x){
          
        }
      }
      
      if(piece.y === white_Knight2.y){
        if(white_Knight2.x < a.x && white_Knight2.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn1.y){
        if(white_Pawn1.x < a.x && white_Pawn1.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn2.y){
        if(white_Pawn2.x < a.x && white_Pawn2.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn3.y){
        if(white_Pawn3.x < a.x && white_Pawn3.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn4.y){
        if(white_Pawn4.x < a.x && white_Pawn4.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn5.y){
        if(white_Pawn5.x < a.x && white_Pawn5.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn6.y){
        if(white_Pawn6.x < a.x && white_Pawn6.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn7.y){
        if(white_Pawn7.x < a.x && white_Pawn7.x > piece.x){
          
        } 
      }
      
      if(piece.y === white_Pawn8.y){
        if(white_Pawn8.x < a.x && white_Pawn8.x > piece.x){
          
        } 
      }
      
      
      if(piece.y === black_King.y){
        if(black_King.x < a.x && black_King.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Queen.y){
        if(black_Queen.x < a.x && black_Queen.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Rook1.y){
        if(black_Rook1.x < a.x && black_Rook1.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Rook2.y){
        if(black_Rook2.x < a.x && black_Rook2.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Bishub1.y){
        if(black_Bishub1.x < a.x && black_Bishub1.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Bishub2.y){
        if(black_Bishub2.x < a.x && black_Bishub2.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Knight1.y){
        if(black_Knight1.x < a.x && black_Knight1.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Knight2.y){
        if(black_Knight2.x < a.x && black_Knight2.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn1.y){
        if(black_Pawn1.x < a.x && black_Pawn1.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn2.y){
        if(black_Pawn2.x < a.x && black_Pawn2.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn3.y){
        if(black_Pawn3.x < a.x && black_Pawn3.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn4.y){
        if(black_Pawn4.x < a.x && black_Pawn4.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn5.y){
        if(black_Pawn5.x < a.x && black_Pawn5.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn6.y){
        if(black_Pawn6.x < a.x && black_Pawn6.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn7.y){
        if(black_Pawn7.x < a.x && black_Pawn7.x > piece.x){
          
        }
      }
      
      if(piece.y === black_Pawn8.y){
        if(black_Pawn8.x < a.x && black_Pawn8.x > piece.x){
          
        }
      }
    }
  }else{

  }

}*/