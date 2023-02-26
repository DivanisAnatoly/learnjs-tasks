let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.ceil(styles.length / 2)] = "Классика";
console.log( styles.shift() );
styles.unshift("Рэп", "Регги");