let exceptVocab = [];

function setExceptVocab (value) {
    exceptVocab = value;
}

function getExceptVocab () {
    return exceptVocab;
}

let exceptLang = [];

function setExceptLang (value) {
    exceptLang = value;
}

function getExceptLang () {
    return exceptLang;
}

let justThisLang = [];

function setJustThisLang (value) {
    justThisLang = value;
}

function getJustThisLang () {
    return justThisLang;
}

let categories = [];

function setCategories (value) {
    categories = value
}

function getCategories() {
    return categories;
}

export {
    setExceptVocab,
    getExceptVocab ,
    setExceptLang,
    getExceptLang,
    setJustThisLang,
    getJustThisLang,
    setCategories,
    getCategories
};