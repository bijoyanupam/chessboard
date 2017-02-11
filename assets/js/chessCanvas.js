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

        this.addChessCoins();
    },

    /**
     * Draw the chess cell.
     *
     * @param cellCount number Current cell count.
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
     * @param cellCount number Current cell count.
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

    /**
     * Draw chess coins.
     *
     * @return void.
     */
    'addChessCoins': function () {
        this.addCoinRook(0, true);
        this.addCoinRook(chessConfig.boardCellNumber - 1, true);
        this.addCoinRook((chessConfig.boardCellNumber * chessConfig.boardCellNumber) - chessConfig.boardCellNumber, false);
        this.addCoinRook((chessConfig.boardCellNumber * chessConfig.boardCellNumber) - 1, false);
    },

    /**
     * Add a rook chess coin using unicode font.
     *
     * @param cellNumber number Current cell count.
     * @param isWhite    boolean Is white or black coin.
     * 
     * @return void.
     */
    'addCoinRook': function (cellNumber, isWhite) {
        var rookCoinCode;

        rookCoinCode = (isWhite === true) ? '&#9814;' : '&#9820;';
        $('<div>' + rookCoinCode + '</div>')
            .appendTo($(chessConfig.boardIdentifier).find('.' + chessConfig.boardCellIdentifier).eq(cellNumber))
            .addClass('cbg-rook')
            .css({
                'fontSize': chessConfig.boardCellNumber * 10,
                'lineHeight': this.cellHeight - 2 + 'px'
            });
    }
};

ChessBoard.init();