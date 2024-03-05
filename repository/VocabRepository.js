import { Animal } from "../models/AnimalModels.js";
import { Fruit } from "../models/FruitModels.js";
import { logger } from "../log/log.js";
import { CardinalDirection } from "../models/CardinalDirectionModels.js";
import {Drink} from "../models/DrinkModels.js";
import {Number} from "../models/NumberModels.js";
import {Planet} from "../models/PlanetModels.js";
import {Pronoun} from "../models/PronounModels.js";
import {RandomVocab} from "../models/RandomVocabModels.js";
import {Time} from "../models/TimeModels.js";

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
        const drink = await Drink.find();
        const number = await Number.find();
        const planet = await Planet.find();
        const pronoun = await Pronoun.find();
        const randomVocab = await RandomVocab.find();
        const time = await Time.find();

        terminalSource.push(animal);
        terminalSource.push(fruit);
        terminalSource.push(cardinalDirection);
        terminalSource.push(drink);
        terminalSource.push(number);
        terminalSource.push(planet);
        terminalSource.push(pronoun);
        terminalSource.push(randomVocab);
        terminalSource.push(time);

        return terminalSource;
    } catch (error) {
        logger.log({
            level: "error",
            message: `Gagal mengambil data: ${ error }`
        });
    }
}

export default { get };