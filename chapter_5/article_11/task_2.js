function getWeekDay(date) {
    let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return week[date.getDay()];
}

let date = new Date(2014, 0, 3);

console.log(getWeekDay(date)); // ПТ