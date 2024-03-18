import {Animal} from "../models/AnimalModels.js";
import {Fruit} from "../models/FruitModels.js";
import {CardinalDirection} from "../models/CardinalDirectionModels.js";
import {Drink} from "../models/DrinkModels.js";
import {Number} from "../models/NumberModels.js";
import {Planet} from "../models/PlanetModels.js";
import {Pronoun} from "../models/PronounModels.js";
import {RandomVocab} from "../models/RandomVocabModels.js";
import {Time} from "../models/TimeModels.js";

export const dataModels = [
    { model: Animal, property: "animals" },
    { model: Fruit, property: "fruits" },
    { model: CardinalDirection, property: "cardinal directions" },
    { model: Drink, property: "drinks" },
    { model: Number, property: "numbers" },
    { model: Planet, property: "planets" },
    { model: Pronoun, property: "pronouns" },
    { model: RandomVocab, property: "random vocabs" },
    { model: Time, property: "times" }
];