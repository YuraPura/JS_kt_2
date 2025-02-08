function factorialSum(num) {
    let sum = 0;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
        sum += factorial;
    }
    return sum;
}

let num = parseInt(prompt("Введите число:"))

if (!isNaN(num) && num > 0) {
    let result = factorialSum(num);
    alert("Сумма факториалов от 1 до " + num + " равна: " + result);
} else {
    alert("Ошибка: Введите корректное число!");
}

// Тесты
console.assert(factorialSum(4) === 33, "Тест 1 не пройден");
console.assert(factorialSum(1) === 1, "Тест 2 не пройден");
console.assert(factorialSum(5) === 153, "Тест 3 не пройден");
