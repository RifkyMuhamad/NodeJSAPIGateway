import { getRandomIndexArray } from "../helper/GetRandomIndexArray.js";

/**
 * Function languageDataService digunakan untuk
 * mencari key vocabulary dan latin
 *
 * @param { String } choiceLanguage
 *
 * @returns {
 *     {
 *         vocabulary: String,
 *         latin: String | (function(Object): (String | String[]))
 *     }
 * }
 */
function languageDataService (choiceLanguage) {

    const languageMappings = {
        japanese: {
            vocabulary: "kanji",
            latin: (choiceLatin) => {
                return choiceLatin.furigana.length === 1
                    ? choiceLatin.furigana[0]
                    : choiceLatin.furigana[
                        getRandomIndexArray(choiceLatin.furigana)
                    ];
            }
        },
        korean: {
            vocabulary: "hangul",
            latin: "latin"
        },
        chinese: {
            vocabulary: "hanzi",
            // latin: "latin"
            latin: (choiceLatin) => {
                return choiceLatin.latin.length === 1
                    ? choiceLatin.latin[0]
                    : choiceLatin.latin[
                        getRandomIndexArray(choiceLatin.latin)
                    ];
            }
        },
        arabic: {
            vocabulary: "arab",
            latin: "latin"
        },
        greek: {
            vocabulary: "vocab",
            latin: "latin"
        },
        thai: {
            vocabulary: "thai",
            latin: "latin"
        },
        english: {
            vocabulary: "vocab",
            latin: (choiceLatin) => {
                // 3
                return choiceLatin.ipa;

                // 2
                // return choiceLatin.APAAN

                // 1
                // return choiceLatin.APAAN
            },
        },
        russian: {
            vocabulary: "cyrilic",
            latin: "latin"
        },
        french: {
            vocabulary: "vocab",
            latin: "pronounce"
        },
        german: {
            vocabulary: "vocab",
            latin: "pronounce"
        },
        italy: {
            vocabulary: "vocab",
            latin: "pronounce"
        },
        spain: {
            vocabulary: "vocab",
            latin: "pronounce"
        }
    };

    return languageMappings[choiceLanguage];
}

export { languageDataService };