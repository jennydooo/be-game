"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataGame = exports.changeIntoCenterValue = exports.randomNumberQueen = exports.randomNumberWorker = exports.randomNumber = exports.sortedArray = exports.searchSlotRelateFollowFormula = void 0;
const constants_1 = require("@/utils/constants");
// search all slot adjacent current slot have the same value
const searchAllSlotAdjacentCurrentSlot = (array2D, index2D, index) => {
    if (index2D < 0 || index < 0 || index2D >= array2D.length || index >= array2D[index2D]?.length)
        return null;
    return `${index2D},${index},${array2D[index2D][index]}`;
};
// formula search data in a current slot have the same value
const searchSlotRelateFollowFormula = (array2D, index2D, index) => {
    const calOnSLotCommon = [
        `${index2D},${index},${array2D[index2D][index]}`,
        searchAllSlotAdjacentCurrentSlot(array2D, index2D, index + 1),
        searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index),
        searchAllSlotAdjacentCurrentSlot(array2D, index2D, index - 1),
        searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index),
    ];
    const additionalSlots = {
        '0': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index + 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index - 1)],
        '1': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index + 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index - 1)],
        '2': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index + 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index - 1)],
        '3': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index - 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index - 1)],
        '4': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index - 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index + 1)],
        '5': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index - 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index + 1)],
        '6': [searchAllSlotAdjacentCurrentSlot(array2D, index2D + 1, index - 1), searchAllSlotAdjacentCurrentSlot(array2D, index2D - 1, index + 1)],
    };
    return sortedArray([...calOnSLotCommon, ...(additionalSlots[index2D.toString()] || [])].filter(item => item !== null));
};
exports.searchSlotRelateFollowFormula = searchSlotRelateFollowFormula;
/*
    * @param {string[]} resultSet
    * @example
    * [
        '5,2,4', '5,3,3',
        '6,2,6', '5,1,2',
    ]
    * @return {string[]}
    * @example
    * [
    *  '5,1,2', '5,2,4', '5,3,3', '6,2,6'
    * ]
*/
function sortedArray(resultSet) {
    return Array.from(resultSet).sort((a, b) => {
        let [a1, a2] = a.split(',').map(Number);
        let [b1, b2] = b.split(',').map(Number);
        return a1 - b1 || a2 - b2;
    });
}
exports.sortedArray = sortedArray;
const randomNumber = () => Math.floor(Math.random() * 26);
exports.randomNumber = randomNumber;
const randomNumberWorker = () => Math.floor(Math.random() * 9) + 7;
exports.randomNumberWorker = randomNumberWorker;
const randomNumberQueen = () => Math.floor(Math.random() * 20) + 15;
exports.randomNumberQueen = randomNumberQueen;
//change value adjacent with center position into center value
const changeIntoCenterValue = (array2D, arrAdjacentWithCenterPosition, centerValue) => {
    arrAdjacentWithCenterPosition.forEach((item) => {
        const [index2D, index] = item.split(',').map(Number);
        if (!constants_1.WILDS.includes(array2D[index2D][index]))
            array2D[index2D][index] = centerValue;
    });
    return array2D;
};
exports.changeIntoCenterValue = changeIntoCenterValue;
const initDataGame = () => {
    let array2D = []; // contain 7 sub array
    for (let i = 0; i < constants_1.lengthSubsArray.length; i++) {
        const initSubArray = [];
        for (let j = 0; j < constants_1.lengthSubsArray[i]; j++) {
            initSubArray.push(constants_1.ICONS_POSITION_INDEX[(0, exports.randomNumber)()]);
        }
        array2D.push(initSubArray);
    }
    return array2D;
};
exports.initDataGame = initDataGame;
// /*
// arr2: arr2[0, i]: arr2[i+1], arr3[i+1], arr3[i]
// arr2: arr2[1, i]: arr2[i+1], arr3[i+1], arr3[i], arr2[i-1], arr1[i-1], arr1[i]
// arr2: arr2[2, i]: arr2[i+1], arr3[i+1], arr3[i], arr2[i-1], arr1[i-1], arr1[i]
// arr2: arr2[3, i]: arr2[i+1], arr3[i+1], arr3[i], arr2[i-1], arr1[i-1], arr1[i]
// arr2: arr2[4, i]: arr2[i+1], arr3[i+1], arr3[i], arr2[i-1], arr1[i-1], arr1[i]
// */
// /*
// arr4: arr4[0, i]: arr4[i+1], arr5[i], arr3[i]
// arr4: arr4[1, i]: arr4[i+1], arr5[i], arr5[i-1], arr4[i-1], arr3[i-1], arr3[i]
// arr4: arr4[2, i]: arr4[i+1], arr5[i], arr5[i-1], arr4[i-1], arr3[i-1], arr3[i]
// */
// /*
// arr6: arr6[0, i]: arr6[i+1], arr7[i], arr5[i], arr5[i+1]
// arr6: arr6[1, i]: arr6[i+1], arr7[i], arr7[i-1], arr6[i-1], arr5[i], arr5[i+1]
// arr6: arr6[2, i]: arr6[i+1], arr7[i], arr7[i-1], arr6[i-1], arr5[i], arr5[i+1]
// arr6: arr6[3, i]: arr6[i+1], arr7[i], arr7[i-1], arr6[i-1], arr5[i], arr5[i+1]
// */
//# sourceMappingURL=index.js.map