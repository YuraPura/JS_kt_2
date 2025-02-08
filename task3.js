function getSteps(num) {
    let steps = [];
    let currentStep = "";
    for (let i = 1; i <= num; i++) {
        currentStep += i;
        steps.push(currentStep);
    }
    return steps;
}

let num = parseInt(prompt("Введите число:"));

if (!isNaN(num) && num > 0) {
    let steps = getSteps(num);
    let output = "";
    for (let i = 0; i < steps.length; i++) {
        output += steps[i] + "\n";
    }
    alert(output);
} else {
    alert("Ошибка: Введите корректное число!");
}

// Функция для сравнения (для тестов)
function getTest(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// Тесты
console.assert(getTest(getSteps(5), ["1", "12", "123", "1234", "12345"]), "Тест 1 не пройден");
console.assert(getTest(getSteps(3), ["1", "12", "123"]), "Тест 2 не пройден");
console.assert(getTest(getSteps(1), ["1"]), "Тест 3 не пройден");
