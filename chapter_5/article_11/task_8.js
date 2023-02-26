function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    
    let diff_ms = +Date.now() - (+date);

    if (diff_ms < 1000) {
        return 'прямо сейчас';
    } else if (diff_ms < 60 * 1000) {
        return `${diff_ms / 1000} сек. назад`
    } else if (diff_ms < 3600 * 1000) {
        return `${diff_ms / (60 * 1000)} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}


console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000)));