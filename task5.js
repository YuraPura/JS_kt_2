function zicIcPalindrome(word) {
    return word === word.split('').reverse().join('');
};

let word = prompt("Введите слово");

if (zicIcPalindrome(word)) {
    alert("Yes");
} else {
    alert("No");
};
// Тесты
console.assert(zicIcPalindrome('потоп') === true, "Ошибка: 'потоп' - палиндром");
console.assert(zicIcPalindrome('радар') === true, "Ошибка: 'радар' - палиндром");
console.assert(zicIcPalindrome('привет') === false, "Ошибка: 'привет' - не палиндром");
console.assert(zicIcPalindrome('') === true, "Ошибка: пустая строка - палиндром");
console.assert(zicIcPalindrome('а') === true, "Ошибка: 'а' - палиндром");