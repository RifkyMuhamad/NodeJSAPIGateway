let terminalSource = [];

function setTerminalSource (value) {
    terminalSource = value;
}

function getTerminalSource () {
    return terminalSource;
}

function addTerminalSource (value) {
    terminalSource.push(value);
}

export { addTerminalSource, getTerminalSource, setTerminalSource };