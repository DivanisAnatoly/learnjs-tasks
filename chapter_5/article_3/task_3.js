function truncate(str, maxlength){
    if(!str) return null;
    if(str.length<=20){
        return str;
    }
    return str.substr(0,17)+"...";
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));