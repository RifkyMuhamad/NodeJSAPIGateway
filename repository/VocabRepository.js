import { Animal } from "../models/AnimalModels.js";
import { Fruit } from "../models/FruitModels.js";
import { logger } from "../log/log.js";
import {CardinalDirection} from "../models/CardinalDirectionModels.js";

/**
 * Function VocabRepository.get digunakan untuk melakukan
 * find All ke dalam collection Animal dan Fruit
 *
 * @return { Promise<String[]> }
 */
async function get () {
    try {
        const terminalSource = [];
        const animal = await Animal.find();
        const fruit = await Fruit.find();
        const cardinalDirection = await CardinalDirection.find();

        terminalSource.push(animal);
        terminalSource.push(fruit);
        terminalSource.push(cardinalDirection);

        return terminalSource;
    } catch (error) {
        logger.log({
            level: "error",
            message: `Gagal mengambil data: ${ error }`
        });
    }
}

export default { get };