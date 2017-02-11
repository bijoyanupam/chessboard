/**
 * Draws the chess board basic layout as per the configuration.
 */
var ChessBoard = {
    /**
     * Non-configurable declarations.
     */
    'config': {
        'boardSize': 800,
    },

    'cellWidth': 0,

    'cellHeight': 0,

    '$boardElm': $(chessConfig.boardIdentifier),

    /**
     * Initialize all editables in the current page only once.
     *
     * @return void
     */
    'init': function () {
        this.cellWidth = this.config.boardSize / chessConfig.boardCellNumber;
        this.cellHeight = this.config.boardSize / chessConfig.boardCellNumber;

        this.drawBoard();
    },

    /**
     * Draw the chess canvas.
     *
     * @return void
     */
    'drawBoard': function () {
        debugConsole('Draw the chess canvas.');
        this.$boardElm.height(this.config.boardSize);
        this.$boardElm.width(this.config.boardSize);
    },

    /**
     * Draw the chess cell.
     *
     * @return void
     */
    'drawCell': function () {
        debugConsole('Draw the chess cell.');
    },
};

ChessBoard.init();