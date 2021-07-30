'use strict';
const settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 2,
    winFoodCount: 50,
};

/*Настройки игры */
const config = {
    settings,

    init(userSettings) {
        Object.assign(this.settings, userSettings);
    },

    getRowsCount() {
        return this.settings.rowsCount;
    },

    getColsCount() {
        return this.settings.colsCount;
    },

    getSpeed() {
        return this.settings.speed;
    },

    getWinFoodCount() {
        return this.settings.winFoodCount;
    },

    /*Проверка настроек пользователя на валидность */
    validate() {
        const result = {
            isValid: true,
            errors: [],
        };

        if (this.getRowsCount() < 10 || this.getRowsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getColsCount() < 10 || this.getColsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение colsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getSpeed() < 1 || this.getSpeed() > 10) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
        }

        if (this.getWinFoodCount() < 5 || this.getWinFoodCount() > 50) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение winFoodCount должно быть в диапазоне [5, 50].');
        }

        return result;
    },
};

/*Создание игрового поля */
const map = {
    cells: {},
    usedCells: [],

    init(rowsCount, colsCount) {
        const table = document.getElementById('game');
        table.innerHTML = '';

        this.cells = {};
        this.usedCells = [];

        for (let row = 0; row < rowsCount; row++) {
            const tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                const td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);

                this.cells[`x${col}_y${row}`] = td;/*Способ для хранения координат ячеек */
            }
        }
    },

    /*Размещение всех точек(элементов игры) */
    render(snakePointsArray, foodPoint) {
        for (const cell of this.usedCells) {
            cell.className = 'cell'; /*сначала "обнуляем" значения всех ячеек */
        }

        this.usedCells = [];

        /*добавляем координаты змейки */
        snakePointsArray.forEach((point, index) => {
            const snakeCell = this.cells[`x${point.x}_y${point.y}`];
            snakeCell.classList.add(index === 0 ? 'snakeHead' : 'snakeBody');
            this.usedCells.push(snakeCell);
        });

        /*добаляем координаты еды */
        const foodCell = this.cells[`x${foodPoint.x}_y${foodPoint.y}`];
        foodCell.classList.add('food');
        this.usedCells.push(foodCell);
    },
};

/*работа змейки */
const snake = {
    body: [],
    direction: null,
    lastStepDirection: null,

    /*стартовые значения змейки */
    init(startBody, direction) {
        this.body = startBody;
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getBody() {
        return this.body;
    },

    getLastStepDirection() {
        return this.lastStepDirection;
    },

    setDirection(direction) {
        this.direction = direction;
    },

    /*проверка будующей точки головы */
    isOnPoint(point) {
        return this.getBody().some((snakePoint) => {
            return snakePoint.x === point.x && snakePoint.y === point.y;
        });
    },

    makeStep() {
        this.lastStepDirection = this.direction;
        this.getBody().unshift(this.getNextStepHeadPoint());
        this.getBody().pop();
    },

    growUp() {
        const lastBodyIdx = this.getBody().length - 1;/* получаем индекс последней точки тела змейки*/
        const lastBodyPoint = this.getBody()[lastBodyIdx];/*получаем координаты этой точки */
        const lastBodyPointClone = Object.assign({}, lastBodyPoint);/* копируем эти координаты*/

        this.getBody().push(lastBodyPointClone);/*добавляем эти координаты в конец тела змейки*/
    },

    getNextStepHeadPoint() {
        const firstPoint = this.getBody()[0];
        switch (this.direction) {
            case 'up':
                return { x: firstPoint.x, y: firstPoint.y - 1 };
            case 'right':
                return { x: firstPoint.x + 1, y: firstPoint.y };
            case 'down':
                return { x: firstPoint.x, y: firstPoint.y + 1 };
            case 'left':
                return { x: firstPoint.x - 1, y: firstPoint.y };
        }
    },
};

/*еда змейки */
const food = {
    x: null,
    y: null,

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    /*проверка не попала ли змейка на еду */
    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
};

/*механизм управления статусами */
const status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },

    setStopped() {
        this.condition = 'stopped';
    },

    setFinished() {
        this.condition = 'finished';
    },

    isPlaying() {
        return this.condition === 'playing';
    },

    isStopped() {
        return this.condition === 'stopped';
    },
};

/*собираем всё вместе */
const game = {
    config,
    map,
    snake,
    food,
    status,
    tickInterval: null,

    init(userSettings = {}) {
        this.config.init(userSettings);
        const validation = this.config.validate();

        if (!validation.isValid) {
            for (const err of validation.errors) {
                console.error(err);
            }
            return;
        }

        this.map.init(this.config.getRowsCount(), this.config.getColsCount());
        this.setEventHandlers();
        this.reset();
    },

    /*обработчики событий */
    setEventHandlers() {
        document.getElementById('playButton').addEventListener('click', () => {
            this.playClickHandler();
        });
        document.getElementById('newGameButton').addEventListener('click', () => {
            this.newGameClickHandler();
        });
        document.addEventListener('keydown', (event) => this.keyDownHandler(event));
    },

    /*клик по кнопке play */
    playClickHandler() {
        if (this.status.isPlaying()) this.stop();
        else if (this.status.isStopped()) this.play();
    },

    /*клик по кнопке новая игра */
    newGameClickHandler() {
        this.reset();
    },

    /*клики изменения направления змейки */
    keyDownHandler(event) {
        if (!this.status.isPlaying()) return;

        const direction = this.getDirectionByCode(event.code);

        if (this.canSetDirection(direction)) this.snake.setDirection(direction);
    },

    /*позвращает направление в зависимости от нажатой кнопки */
    getDirectionByCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
        }
    },

    /*проверяет можно ли использовать выбранное игроком направление */
    canSetDirection(direction) {
        const lastStepDirection = this.snake.getLastStepDirection();

        return direction === 'up' && lastStepDirection !== 'down' ||
            direction === 'right' && lastStepDirection !== 'left' ||
            direction === 'down' && lastStepDirection !== 'up' ||
            direction === 'left' && lastStepDirection !== 'right';
    },

    reset() {
        this.stop();
        this.snake.init(this.getStartSnakeBody(), 'up'); /*начальное состояние змейки */
        this.food.setCoordinates(this.getRandomFreeCoordinates()); /* инециализация еды*/
        this.render()
    },

    /*задает начальное положение змейки на поле */
    getStartSnakeBody() {
        return [
            {
                x: Math.floor(this.config.getColsCount() / 2),
                y: Math.floor(this.config.getRowsCount() / 2),
            }
        ];
    },

    /*генерация свободной координаты */
    getRandomFreeCoordinates() {
        const exclude = [this.food.getCoordinates(), ...this.snake.getBody()];/*занятые точки */

        while (true) {
            const rndPoint = {
                x: Math.floor(Math.random() * this.config.getColsCount()),
                y: Math.floor(Math.random() * this.config.getRowsCount()),
            }

            if (!exclude.some((exPoint) => exPoint.x === rndPoint.x && exPoint.y === rndPoint.y)) return rndPoint;
        }
    },

    /*статус игры: игра идет */
    play() {
        this.status.setPlaying();
        this.tickInterval = setInterval(() => {
            this.tickHandler(); /*метод срабатывающий при каждом тике игры */
        }, 1000 / this.config.getSpeed()); /*скорость игры */
        this.setPlayButton('Стоп');
    },

    /*статус игры: игра остановлена */
    stop() {
        this.status.setStopped();
        clearInterval(this.tickInterval); /*очистить интервал, те остановить игру */
        this.setPlayButton('Старт');
    },

    /*статус игры: игра окончена */
    finish() {
        this.status.setFinished();
        clearInterval(this.tickInterval);
        this.setPlayButton('Игра закончена', true);
    },

    /*проверяем можем ли двигаться и не попала ли змейка на еду*/
    tickHandler() {
        if (!this.canMakeStep()) return this.finish();
        if (this.food.isOnPoint(this.snake.getNextStepHeadPoint())) {
            this.snake.growUp();
            this.food.setCoordinates(this.getRandomFreeCoordinates());

            if (this.isGameWon()) this.finish();
        }

        this.snake.makeStep();
        this.render();
    },

    /*можно ли двигаться */
    canMakeStep() {
        const nextHeadPoint = this.snake.getNextStepHeadPoint();
        return !this.snake.isOnPoint(nextHeadPoint) &&
            nextHeadPoint.x < this.config.getColsCount() &&
            nextHeadPoint.y < this.config.getRowsCount() &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;
    },

    /*проверка на победу */
    isGameWon() {
        return this.snake.getBody().length > this.config.getWinFoodCount();
    },

    /*текст кнопки */
    setPlayButton(text, isDisabled = false) {
        const playButton = document.getElementById('playButton');

        playButton.textContent = text;

        isDisabled
            ? playButton.classList.add('disabled')
            : playButton.classList.remove('disabled');
    },

    /*отрисовывет старт игры */
    render() {
        this.map.render(this.snake.getBody(), this.food.getCoordinates());
    },
};

game.init();