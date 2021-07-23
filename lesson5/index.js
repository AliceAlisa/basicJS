'use strict';
/*Задание 1 */
const chessBoard = {
    rowCount: 8,
    colCount: 8,

    containerElement: null,
    cellElements: [],
    whiteColor: '#FFFAFA',
    blackColor: '#1C1C1C',

    initCells() {
        this.containerElement = document.getElementById('chess');
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.colCount; col++) {
                const td = document.createElement('td');
                trElem.appendChild(td);

                this.cellElements.push(td);
            }
        }
        this.cellElements.forEach((cell) => {
            cell.style.backgroundColor = this.whiteColor;
        });
        this.cellElements.forEach((cell, i) => {
            if (i % 2 == 0)
                cell.style.backgroundColor = this.blackColor;
        });

    },
}
chessBoard.initCells();

