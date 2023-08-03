// settings.js

const Store = require('electron-store');
const store = new Store();

function getURL () {
    const url = store.get("url")
    if (url) {
        return url
    }
}

function setURL (temp) {
    store.set("url",temp)
    return temp
}

function delURL () {
    store.delete("url")
}

function getHA () {
    const ha = store.get("ha")
    return ha
}

function setHA (status) {
    store.set("ha", status)
    return status
}

module.exports = {
    getURL: getURL,
    setURL: setURL,
    delURL: delURL,
    getHA: getHA,
    setHA: setHA
}