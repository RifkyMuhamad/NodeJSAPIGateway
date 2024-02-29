function getRandomIndexArray(array) {
    return !array.length ? "" : Math.floor(Math.random() * array.length);
}

export { getRandomIndexArray };
