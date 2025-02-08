function getNamber(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }
    return result;
}

let num = parseInt(prompt("Введите число:"));

if (!isNaN(num) && num > 0) {
    let result = getNamber(num);
    let output = "";

    for (let i = 0; i < result.length; i++) {
        output += result[i] + "\n";
    }

    alert(output);
} else {
    alert("Ошибка: Введите корректное число!");
}
// Тесты
console.assert(getNamber(20).length === 6, "Тест 1 не пройден");
console.assert(getNamber(10).length === 3, "Тест 2 не пройден");
console.assert(getNamber(5).length === 1, "Тест 3 не пройден");
console.assert(getNamber(1).length === 0, "Тест 4 не пройден");