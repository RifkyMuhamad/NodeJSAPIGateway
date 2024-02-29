import { Animal } from "../models/AnimalModels.js";
import { Fruit } from "../models/FruitModels.js";

/**
 * Function VocabRepository.get digunakan untuk melakukan
 * find All ke dalam collection Animal dan Fruit
 *
 * @return { Promise<String[]> }
 */
async function get() {
    try {
        const terminalSource = [];
        const animal = await Animal.find();
        const fruit = await Fruit.find();

        terminalSource.push(animal);
        terminalSource.push(fruit);

        return terminalSource;
    } catch (error) {
        console.error('Gagal mengambil data:', error);
    }
}

export default { get };