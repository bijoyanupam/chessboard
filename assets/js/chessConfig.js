/**
 * Chess board game base configuration.
 */

var chessConfig = {
    'debug': true,
    'boardType': '8x8',
    'boardCellNumber': 8,
    'boardIdentifier': '.chessboard'
};

// My debug console.
var debugConsole = function (str) {
    if (chessConfig.debug) {
        console.log(str);
    }
};