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

    'currentCellColor': chessConfig.boardCellWhiteIdentifier,

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
        var cellCount,
            totalCellCount = chessConfig.boardCellNumber * chessConfig.boardCellNumber;

        debugConsole('Draw the chess canvas.');
        this.$boardElm.empty();
        this.$boardElm.height(this.config.boardSize);
        this.$boardElm.width(this.config.boardSize);

        for (cellCount = 1; cellCount <= totalCellCount; cellCount++) {
            this.drawCell(cellCount);
        }
    },

    /**
     * Draw the chess cell.
     *
     * @param cellCount string Current cell count.
     * 
     * @return void
     */
    'drawCell': function (cellCount) {
        debugConsole('Draw the chess cell.');
        $('<div class="' + chessConfig.boardCellIdentifier + '"></div>').appendTo(this.$boardElm)
            .width(this.cellWidth - 2)
            .height(this.cellHeight - 2)
            .addClass(this.getCellColor(cellCount));
    },

    /**
     * Draw the colored chess cell with approproate color.
     *
     * @param cellCount string Current cell count.
     * 
     * @return string Current cell className.
     */
    'getCellColor': function (cellCount) {
        if (((cellCount - 1) % chessConfig.boardCellNumber) === 0) {
            this.currentCellColor = (this.currentCellColor === chessConfig.boardCellWhiteIdentifier) ? chessConfig.boardCellBlackIdentifier : chessConfig.boardCellWhiteIdentifier;
        }
        this.currentCellColor = (this.currentCellColor === chessConfig.boardCellWhiteIdentifier) ? chessConfig.boardCellBlackIdentifier : chessConfig.boardCellWhiteIdentifier;
        return this.currentCellColor;
    },
};

ChessBoard.init();