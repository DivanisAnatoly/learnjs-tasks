function getSecondsToday() {
    let data = new Date();
    return data.getHours() * 3600
        + data.getMinutes() * 60
        + data.getSeconds();
}

console.log(getSecondsToday());