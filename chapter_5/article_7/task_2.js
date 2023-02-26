function aclean(arr) {
    let map = new Map();
    arr.forEach(str => {
        let key = str.toLowerCase()
            .split('').sort().join('');
        map.set(key, str);
    });
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));