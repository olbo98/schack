function Piece(type, colour, img, x, y){
    
    this.type = type;
    this.colour = colour;
    this.img = img;
    this.x = x;
    this.y = y;
    
};

var Pieces = [new Piece("pawn1", "white", pawnWhiteIMG, 0, 450), 
    new Piece("pawn2", "white", pawnWhiteIMG, 75, 450), 
    new Piece("pawn3", "white", pawnWhiteIMG, 150, 450), 
    new Piece("pawn4", "white", pawnWhiteIMG, 225, 450), 
    new Piece("pawn5", "white", pawnWhiteIMG, 300, 450), 
    new Piece("pawn6", "white", pawnWhiteIMG, 375, 450), 
    new Piece("pawn7", "white", pawnWhiteIMG, 450, 450), 
    new Piece("pawn8", "white", pawnWhiteIMG, 525, 450), 
    new Piece("knight1", "white", knightWhiteIMG, 75, 525), 
    new Piece("knight2", "white", knightWhiteIMG, 450, 525), 
    new Piece("bishop1", "white", bishopWhiteIMG, 150, 525), 
    new Piece("bishop2", "white", bishopWhiteIMG, 375, 525), 
    new Piece("rook1", "white", rookWhiteIMG, 0, 525), 
    new Piece("rook2", "white", rookWhiteIMG, 525, 525), 
    new Piece("queen", "white", queenWhiteIMG, 300, 525), 
    new Piece("king", "white", kingWhiteIMG, 225, 525), 
    new Piece("pawn1", "black", pawnBlackIMG, 0, 75), 
    new Piece("pawn2", "black", pawnBlackIMG, 75, 75), 
    new Piece("pawn3", "black", pawnBlackIMG, 150, 75), 
    new Piece("pawn4", "black", pawnBlackIMG, 225, 75), 
    new Piece("pawn5", "black", pawnBlackIMG, 300, 75), 
    new Piece("pawn6", "black", pawnBlackIMG, 375, 75), 
    new Piece("pawn7", "black", pawnBlackIMG, 450, 75), 
    new Piece("pawn8", "black", pawnBlackIMG, 525, 75), 
    new Piece("knight1", "black", knightBlackIMG, 75, 0), 
    new Piece("knight2", "black", knightBlackIMG, 450, 0), 
    new Piece("bishop1", "black", bishopBlackIMG, 150, 0), 
    new Piece("bishop2", "black", bishopBlackIMG, 375, 0), 
    new Piece("rook1", "black", rookBlackIMG, 0, 0), 
    new Piece("rook2", "black", rookBlackIMG, 525, 0), 
    new Piece("queen", "black", queenBlackIMG, 300, 0), 
    new Piece("king", "black", kingBlackIMG, 225, 0)];

Piece.prototype.paint = function(ctx){
        
        ctx.drawImage(this.img, this.x, this.y, 75, 75);
        
};

function paintBoard(){
    
    for(i = 0; i < board.length; i++){
        
        for(j = 0; j < board[0].length; j++){
            
            if(board[i][j] == 0){
                
                ctx.fillStyle = "rgb(255, 255, 204)";
                
            }else if(board[i][j] == 1){
                
                ctx.fillStyle = "brown";
                
            };
            
            ctx.fillRect(j * 75, i * 75, 75, 75);
            
        };
        
    };
    
};

function paintPieces(){
    
    for(i = 0; i < Pieces.length; i++){
        
        Pieces[i].paint(ctx);
        
    };
    
};

function paintBoardAndPieces(){
    
    paintBoard();
    paintPieces();
    
};

//function for clicking on a pieces
function clickPiece(event){
    //Takes the x-coordinates and y-coordinates of the mouse and stores them in variables
    var coordinatesX = event.clientX;
    var coordinatesY = event.clientY;
    
    for(i = 0; i < Pieces.length; i++){
        //If you click on any pieces. add 400 because we moved canvas 400 to the left
        if((coordinatesX > Pieces[i].x + 400) && (coordinatesX < Pieces[i].x + 475) && (coordinatesY > Pieces[i].y) && (coordinatesY < Pieces[i].y + 75)){
            //If the piece i white
            if(Pieces[i].colour == "black"){
                
                if((Pieces[i].type == "pawn1") || (Pieces[i].type == "pawn2") || (Pieces[i].type == "pawn3") || (Pieces[i].type == "pawn4") || (Pieces[i].type == "pawn5") || (Pieces[i].type == "pawn6") || (Pieces[i].type == "pawn7") || (Pieces[i].type == "pawn8")){
                    
                    var y = Pieces[i].y;
                    var x = Pieces[i].x;
                    
                    ctx.fillStyle = "blue";
                    ctx.fillRect(x, y + 75, 75, 75);
                    ctx.fillRect(x, y + 150, 75, 75);
                    
                }
            
            //if the piece is black   
            }else if(Pieces[i].colour == "white"){
                
                if((Pieces[i].type == "pawn1") || (Pieces[i].type == "pawn2") || (Pieces[i].type == "pawn3") || (Pieces[i].type == "pawn4") || (Pieces[i].type == "pawn5") || (Pieces[i].type == "pawn6") || (Pieces[i].type == "pawn7") || (Pieces[i].type == "pawn8")){
                    
                    var y = Pieces[i].y;
                    var x = Pieces[i].x;
                    
                    ctx.fillStyle = "blue";
                    ctx.fillRect(x, y - 75, 75, 75);
                    ctx.fillRect(x, y - 150, 75, 75);
                    
                };
                
            };
            
        };
        
    };
    
}; 
