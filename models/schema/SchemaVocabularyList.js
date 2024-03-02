import mongoose from "mongoose";

const { Schema } = mongoose;

const japaneseVocabSchema = new Schema(
    {
        kanji: String,
        furigana: [ String ],
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                kanji: String,
                furigana: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                japanese: String,
                furigana: String,
                translate: String,
            },
        ],
    },
);

const koreanVocabSchema = new Schema(
    {
        hangul: String,
        latin: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                hangul: String,
                latin: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                korean: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const chineseVocabSchema = new Schema(
    {
        hanzi: String,
        latin: [ String ],
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                hanzi: String,
                latin: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                chinese: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const arabicVocabSchema = new Schema(
    {
        arab: String,
        latin: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                arabic: String,
                latin: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                arabic: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const greekVocabSchema = new Schema(
    {
        vocab: String,
        latin: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                greek: String,
                latin: String,
                translate: String,
            },
        ],
        exampleSentence: [
            {
                greek: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const thaiVocabSchema = new Schema(
    {
        thai: String,
        latin: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                thai: String,
                latin: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                thai: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const englishVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: {
            ipa: String,
        },
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                english: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                english: String,
                translate: String,
            },
        ],
    },
);

const russianVocabSchema = new Schema(
    {
        cyrilic: String,
        latin: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                cyrilic: String,
                latin: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                cyrilic: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const frenchVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                french: String,
                pronounce: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                french: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);

const germanVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                german: String,
                pronounce: String,
                translate: String,
            },
        ],
        exampleSentence: [
            {
                german: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);

const italyVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                italy: String,
                pronounce: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                italy: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);

const spainVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                spain: String,
                pronounce: String,
                translate: String
            }
        ],
        exampleSentence: [
            {
                spain: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);


const hebrewVocabSchema = new Schema(
    {
        vocab: String,
        latin: String,
        explanation: String,
        level: String,
        examplePhrase: [
            {
                hebrew: String,
                latin: String,
                translate: String,
            },
        ],
        exampleSentence: [
            {
                hebrew: String,
                latin: String,
                translate: String,
            },
        ],
    },
);

const swedishVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                swedish: String,
                pronounce: String,
                translate: String,
            },
        ],
        exampleSentence: [
            {
                swedish: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);

const finnishVocabSchema = new Schema(
    {
        vocab: String,
        pronounce: String,
        explanation: [ String ],
        level: String,
        examplePhrase: [
            {
                finnish: String,
                pronounce: String,
                translate: String,
            },
        ],
        exampleSentence: [
            {
                finnish: String,
                pronounce: String,
                translate: String,
            },
        ],
    },
);


/**
 *
 * @type {
 *     {
 *         module:mongoose.Schema<
 *             any,
 *             Model<any, any, any, any>,
 *             {},
 *             {},
 *             {},
 *             {},
 *             DefaultSchemaOptions,
 *             {
 *                 german: {
 *                     vocab: *[]
 *                 },
 *                 spain: {
 *                     vocab: *[]
 *                 },
 *                 khmer: {},
 *                 hebrew: {
 *                     vocab: *[]
 *                 },
 *                 explanation: StringConstructor[],
 *                 norwegian: {},
 *                 dutch: {},
 *                 chinese: {
 *                     vocab: *[]
 *                 },
 *                 vocabulary: StringConstructor,
 *                 japanese: {
 *                     vocab: *[]
 *                 },
 *                 tamil: {},
 *                 arabic: {
 *                     vocab: *[]
 *                 },
 *                 dannish: {},
 *                 bengali: {},
 *                 urdu: {},
 *                 english: {
 *                     vocab: *[]
 *                 },
 *                 argentine: {},
 *                 portuguese: {},
 *                 lao: {},
 *                 french: {
 *                     vocab: *[]
 *                 },
 *                 italy: {vocab: *[]},
 *                 georgian: {},
 *                 greek: {vocab: *[]},
 *                 swedish: {vocab: *[]},
 *                 azerbaijan: {},
 *                 russian: {vocab: *[]},
 *                 uzbek: {},
 *                 armenian: {},
 *                 thai: {vocab: *[]},
 *                 burmese: {},
 *                 vietnamese: {},
 *                 korean: {vocab: *[]},
 *                 turkmen: {},
 *                 tajik: {},
 *                 persian: {},
 *                 tagalog: {},
 *                 kyrgyz: {},
 *                 finnish: {vocab: *[]},
 *                 turkish: {},
 *                 hindi: {},
 *                 kazakh: {}},
 *                 HydratedDocument<
 *                     FlatRecord<{
 *                         german: {vocab: *[]},
 *                         spain: {vocab: *[]},
 *                         khmer: {},
 *                         hebrew: {vocab: *[]},
 *                         explanation: StringConstructor[],
 *                         norwegian: {},
 *                         dutch: {},
 *                         chinese: {vocab: *[]},
 *                         vocabulary: StringConstructor,
 *                         japanese: {vocab: *[]},
 *                         tamil: {},
 *                         arabic: {vocab: *[]},
 *                         dannish: {},
 *                         bengali: {},
 *                         urdu: {},
 *                         english: {vocab: *[]},
 *                         argentine: {},
 *                         portuguese: {},
 *                         lao: {},
 *                         french: {vocab: *[]},
 *                         italy: {vocab: *[]},
 *                         georgian: {},
 *                         greek: {vocab: *[]},
 *                         swedish: {vocab: *[]},
 *                         azerbaijan: {},
 *                         russian: {vocab: *[]},
 *                         uzbek: {},
 *                         armenian: {},
 *                         thai: {vocab: *[]},
 *                         burmese: {},
 *                         vietnamese: {},
 *                         korean: {vocab: *[]},
 *                         turkmen: {},
 *                         tajik: {},
 *                         persian: {},
 *                         tagalog: {},
 *                         kyrgyz: {},
 *                         finnish: {vocab: *[]},
 *                         turkish: {},
 *                         hindi: {},
 *                         kazakh: {}
 *                     }>,
 *                     {}>
 *         >
 *     }
 * }
 */
const vocabularySchema = new Schema(
    {
        vocabulary: String,
        explanation: [ String ],
        japanese: {
            vocab: [ japaneseVocabSchema ],
        },
        korean: {
            vocab: [ koreanVocabSchema ],
        },
        chinese: {
            vocab: [ chineseVocabSchema ],
        },
        kazakh: {},
        kyrgyz: {},
        tajik: {},
        turkmen: {},
        uzbek: {},
        turkish: {},
        arabic: {
            vocab: [ arabicVocabSchema ],
        },
        armenian: {},
        azerbaijan: {},
        georgian: {},
        persian: {},
        greek: {
            vocab: [ greekVocabSchema ],
        },
        hindi: {},
        bengali: {},
        urdu: {},
        tamil: {},
        thai: {
            vocab: [ thaiVocabSchema ],
        },
        vietnamese: {},
        khmer: {},
        lao: {},
        burmese: {},
        tagalog: {},
        english: {
            vocab: [ englishVocabSchema ],
        },
        russian: {
            vocab: [ russianVocabSchema ],
        },
        french: {
            vocab: [ frenchVocabSchema ],
        },
        german: {
            vocab: [ germanVocabSchema ],
        },
        italy: {
            vocab: [ italyVocabSchema ],
        },
        spain: {
            vocab: [ spainVocabSchema ],
        },
        hebrew: {
            vocab: [ hebrewVocabSchema ],
        },
        dutch: {},
        portuguese: {},
        swedish: {
            vocab: [ swedishVocabSchema ],
        },
        finnish: {
            vocab: [ finnishVocabSchema ],
        },
        dannish: {},
        norwegian: {},
        argentine: {},
    }
);

export { vocabularySchema };