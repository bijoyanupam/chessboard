/**
 * Chess board game behaviour.
 */

var ChessBoardBehaviour = {
    'draggedElement': null,

    'init': function () {
        debugConsole('Bahaviour functionality to be added to coins');
        this.addDraggable();
        this.addDroppable();
    },

    'getCurrentType': function (element) {
        var currentClassName;

        currentClassName = $(element).attr('class').split(' ')[0];
        return currentClassName.split('-')[1];
    },

    'addDraggable': function () {
        debugConsole('Attach draggable event.');

        $(chessConfig.boardIdentifier)
            .find('.' + chessConfig.boardCoinIndentifier)
            .attr('draggable', true)
            .on('dragstart', this.attachBehaviour);
    },

    'addDroppable': function () {
        debugConsole('Attach droppable event.');

        $(chessConfig.boardIdentifier)
            .find('.' + chessConfig.boardCellIdentifier)
            .on('dragenter', function (e) {
                //console.log('dragenter');
            })
            .on('dragover', function (e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                //console.log('dragover');
                return false;
            })
            .on('dragleave', function (e) {
                //console.log('dragleave');
            })
            .on('drop', function (e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                if (ChessBoardBehaviour.draggedElement != $(this).children().get(0)) {
                    if ($(this).hasClass('cbg-droppable')) {
                        debugConsole('Move allowed.');
                        $(this).html(ChessBoardBehaviour.draggedElement);
                    } else {
                        debugConsole('Move not allowed.');
                        alert(chessLang.nomove);
                    }
                }
                ChessBoardBehaviour.resetCell();
                return false;
            })
            .on('dragend', function (e) {
                //console.log('dragend');
            });
    },

    'resetCell': function () {
        $(chessConfig.boardIdentifier)
            .find('.' + chessConfig.boardCellIdentifier)
            .removeClass('cbg-droppable');
    },

    'attachBehaviour': function () {
        ChessBoardBehaviour.draggedElement = this;
        if (ChessBoardBehaviour.getCurrentType(ChessBoardBehaviour.draggedElement) === 'rook') {
            ChessRook.init(ChessBoardBehaviour.draggedElement);
        } else
        if (ChessBoardBehaviour.getCurrentType(ChessBoardBehaviour.draggedElement) === 'queen') {
            // Call chessQueen factory, etc
        }
    }
};