export function getData(type) {
 return getLocalJsonData(type);
}

export function setData(type, data) {
    return setLocalJsonData(type, data);
}

function getLocalJsonData(type) {
    const res = localStorage.getItem(type);
    return JSON.parse(res);
}

function setLocalJsonData(type, data) {
    localStorage.setItem(type, JSON.stringify(data));
}