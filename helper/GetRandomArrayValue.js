import { getRandomIndexArray } from "./GetRandomIndexArray.js";
import {logger} from "../log/log.js";

function getRandomArrayValue (array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 505;
    }
    return array[getRandomIndexArray(array)];
}

export { getRandomArrayValue };