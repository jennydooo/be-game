"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerEvent_Worker_Queen = void 0;
const index_1 = require("@/utils/index");
const constants_1 = require("@/utils/constants");
const triggerEvent_Worker_Queen = (array2D, numberRandom) => {
    const index2D = 3;
    const index = 3;
    const centerValue = array2D[index2D][index];
    const arrAdjacentWithCenterPosition = getAdjacentPositions(array2D, index2D, index, centerValue);
    if (arrAdjacentWithCenterPosition.length > 0) {
        array2D = (0, index_1.changeIntoCenterValue)(array2D, arrAdjacentWithCenterPosition, centerValue);
        numberRandom -= arrAdjacentWithCenterPosition.length;
    }
    if (numberRandom > 0) {
        const arrAdjacentWithCenterPosition = (0, index_1.searchSlotRelateFollowFormula)(array2D, index2D, index);
        const containerChainEvent = new Set([...arrAdjacentWithCenterPosition]);
        const containerChainAllArray = [];
        for (let i = 0; i < array2D.length; i++) {
            for (let j = 0; j < array2D[i].length; j++) {
                if (!containerChainEvent.has(`${i},${j},${array2D[i][j]}`) &&
                    !constants_1.WILDS.includes(array2D[i][j]) &&
                    array2D[i][j] != centerValue)
                    containerChainAllArray.push(`${i},${j},${array2D[i][j]}`);
            }
        }
        return fillDataRemainOfWorkerEvent(array2D, containerChainAllArray, [...containerChainEvent], centerValue, numberRandom);
    }
    return array2D;
};
exports.triggerEvent_Worker_Queen = triggerEvent_Worker_Queen;
const fillDataRemainOfWorkerEvent = (array2D, containerChainAllArray, containerChainEvent, centerValue, numberRandom) => {
    let position = getRandomPosition(containerChainAllArray);
    const [positionIndex2D, positionIndex, _] = position.split(',').map(Number);
    for (let item of containerChainEvent) {
        const [index2D, index, _] = item.split(',').map(Number);
        const arrAdjacentWithCenterPosition = getAdjacentPositions(array2D, index2D, index, centerValue);
        if (arrAdjacentWithCenterPosition.includes(position)) {
            array2D[positionIndex2D][positionIndex] = centerValue;
            numberRandom -= 1;
            containerChainEvent.push(`${positionIndex2D},${positionIndex},${centerValue}`);
            containerChainAllArray = containerChainAllArray.filter(item => item != position);
            break;
        }
    }
    if (numberRandom > 0) {
        return fillDataRemainOfWorkerEvent(array2D, containerChainAllArray, containerChainEvent, centerValue, numberRandom);
    }
    return array2D;
};
const getAdjacentPositions = (array2D, index2D, index, centerValue) => {
    return (0, index_1.searchSlotRelateFollowFormula)(array2D, index2D, index)
        .filter(item => {
        const [_, __, value] = item.split(',').map(Number);
        return value != centerValue && !constants_1.WILDS.includes(value);
    });
};
const getRandomPosition = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};
//# sourceMappingURL=queen-worker.js.map