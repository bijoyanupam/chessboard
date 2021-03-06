/**
 * Chess board game base configuration.
 */

var chessConfig = {
    'debug': true,
    'boardCellNumber': 8,
    'boardIdentifier': '.chessboard',
    'boardCellIdentifier': 'cbg-cell',
    'boardCellWhiteIdentifier': 'cbg-white',
    'boardCellBlackIdentifier': 'cbg-gray',
    'boardCoinWhiteIdentifier': 'white',
    'boardCoinBlackIdentifier': 'black',
    'boardCoinIndentifier': 'cbg-coin'
};

// My debug console.
var debugConsole = function (str) {
    if (chessConfig.debug) {
        console.info(str);
    }
};