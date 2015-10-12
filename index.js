var displayBoard = function(board) {
  var newBoard = '';
  for (var i = 0 ; i < board.length; i++) {
    var newRow = '';
    for (var j = 0 ; j < board.length; j++) {
      newRow += ' ' + board[i][j];
    }
    newBoard += newRow;
    newBoard += '</br>';
  }
  document.getElementById('board')
    .insertAdjacentHTML('afterend', '<div id="gameBoard">' + newBoard + '</div>');
}

/*

var makeGrid = function(gridSize) {
  var board = [];
  
  for (var i = 0; i < gridSize; i++) {
    var eachRow = [];
    for (var j = 0 ; j < gridSize; j++) {
      eachRow.push(0);
    }
    board.push(eachRow);
  }  
  displayBoard(board);
}(8);
*/

/*var insertShip = function(board, xCoord, yCoord, length, ifHorizontal) {
  for (var i = 0; i < board.length; i++) {
    if(i === yCoord) {
      for (var j = 0; j < board.length; j++) {
        if(j === xCoord) {
          
        }
      }   
    }

  }
}*/

// setting up ships



var Board = function(boardSize) {
/*  this.shipCoords = {};*/
  //this.board = [];
  var board = function(gridSize) {  
    var board = [];
    for (var i = 0; i < gridSize; i++) {
      var eachRow = [];
      for (var j = 0 ; j < gridSize; j++) {
        eachRow.push(0);
      }
      board.push(eachRow);
    }  
    
    displayBoard(board);
    
    return board;
  }(boardSize);
  
  
  this.setShip = function(xCoord, yCoord, length, ifHorizontal) {
    if(ifHorizontal) {
      var row = board[yCoord];
      for (var i = xCoord; length; i++) {
        if(board[yCoord][i] ===0) {
          board[yCoord][i] = 1;  
        } else {
          // tell player the coord already has ship;
        }
      }
    } else {
      for (var j = yCoord; length; j++) {
        if(board[j][xCoord] ===0) {
          board[j][xCoord] = 1;
        } else {
          // tell player that the location already has ship
        }
      }
    }
  }
  
  this.getShip = function(xCoord, yCoord) {
    for (var j = 0 ; j < board.length; j++) {
      if(j === yCoord) {
        for (var i = 0 ; i < board.length; i++) {
          if(i === xCoord & board[j][i] === 1) {
            // tell player this has ship
            // change this spot to hit already: int 2
          } else if(i === xCoord & board[j][i] === 0) {
            //tell player this has no ship
            // don't think I need to change grid here
          } else {
            // tell player this has been hit already
            // give the player another turn?
          }
        }      
      }
    }
  }
}

var playerBoard = new Board(8);




