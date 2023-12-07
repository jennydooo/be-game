"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.droneColony = void 0;
const index_1 = require("@/utils/index");
const constants_1 = require("@/utils/constants");
const droneColony = (array2D) => {
    const index = 3; // center position
    const index2D = 3; // center position
    const centerValue = array2D[index2D][index];
    const arrAdjacentWithCenterPosition = (0, index_1.searchSlotRelateFollowFormula)(array2D, index2D, index);
    const array2DAfterChange = (0, index_1.changeIntoCenterValue)(array2D, arrAdjacentWithCenterPosition, centerValue);
    return randomPositionWild(array2DAfterChange, arrAdjacentWithCenterPosition, centerValue);
};
exports.droneColony = droneColony;
const randomPositionWild = (array2D, positionRelative, centerValue) => {
    const random = positionRelative[Math.floor(Math.random() * 6)];
    const [index2D, index] = random.split(',').map(Number);
    const arrayDifferenceValue = (0, index_1.searchSlotRelateFollowFormula)(array2D, index2D, index).filter(item => {
        const [_, __, value] = item.split(',').map(Number);
        return array2D[index2D][index] != value;
    });
    while (arrayDifferenceValue.length == 0) {
        return randomPositionWild(array2D, positionRelative, centerValue);
    }
    const [index2DRandom, indexRandom] = arrayDifferenceValue[Math.floor(Math.random() * arrayDifferenceValue.length)].split(',').map(Number);
    const randomValue = array2D[index2DRandom][indexRandom];
    if (randomValue == centerValue || constants_1.WILDS.includes(randomValue)) {
        return randomPositionWild(array2D, positionRelative, centerValue);
    }
    array2D[index2DRandom][indexRandom] = constants_1.WILDS[Math.floor(Math.random() * constants_1.WILDS.length)];
    return array2D;
};
//# sourceMappingURL=drone.js.map