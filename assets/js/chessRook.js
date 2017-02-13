/**
 * Chess board game behaviour for rook.
 */

var ChessRook = {
    '$currentCell': '',

    'init': function (currentElement) {
        this.$currentCell = currentElement;
        this.showAllowedMoves(this.getCurrentPosition(currentElement));
    },

    'showAllowedMoves': function (currentIndex) {
        var allowedMinX = 1,
            allowedMinY = 1,
            allowedMaxX = chessConfig.boardCellNumber,
            allowedMaxY = chessConfig.boardCellNumber,
            xCount,
            yCount;

        debugConsole('Show allowed moves.');
        // Allowed moves for ROOK is calculated on the basis of the below logic:
        // One of the coordinates has to be the same before and after.

        // Checking vertical moves.
        for (xCount = 1; xCount <= allowedMaxX; xCount++) {
            if (currentIndex[0] !== xCount) {
                this.selectCell(xCount, currentIndex[1]);
            }
        }

        // Checking horizantal moves.
        for (yCount = 1; yCount <= allowedMaxY; yCount++) {
            if (currentIndex[1] !== yCount) {
                this.selectCell(currentIndex[0], yCount);
            }
        }
    },

    'getCurrentPosition': function (element) {
        var currentClassName, currentIndex;

        currentClassName = $(element).closest('.' + chessConfig.boardCellIdentifier).attr('class').split(' ')[1];
        currentClassName = currentClassName.split('-')[2];
        currentIndex = currentClassName.split('x');
        return currentIndex;
    },

    'selectCell': function (indexX, indexY) {
        var $selectedCell;

        $selectedCell = $(chessConfig.boardIdentifier)
            .find('.cbg-cell-' + indexX + 'x' + indexY);
        if ($selectedCell.children().length === 0) {
            // Check if given chess cell has no coin placed.
            $selectedCell.addClass('cbg-droppable');
        } else {
            // Check if given chess cell is of opposite color.
            if ($selectedCell.children().data('coinType') !== $(this.$currentCell).data('coinType')) {
                $selectedCell.addClass('cbg-droppable');
            }
        }
    }
};