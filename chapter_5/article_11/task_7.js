function getSecondsToday() {
    let data = new Date();
    return data.getHours() * 3600
        + data.getMinutes() * 60
        + data.getSeconds();
}

function getSecondsToTomorrow() {
    let secondsInADay = 86400;

    return secondsInADay - getSecondsToday();
}

console.log(getSecondsToTomorrow());