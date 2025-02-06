// Задача №1
// Задана переменная word, передающая строковое значение. Сформируйте 
// новую строку без символов “а” и “о” вне зависимости от регистра . 
// Метод replace() использовать нельзя. 
// Пример значений переменных: 
// let word = ‘Арнольд’
// Пример результата:
// рнльд
// Не забудь тесты!!!

function remove(word) {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (char.toLowerCase() !== 'а' && char.toLowerCase() !== 'о') {
      result += char;
    }
  }
  return result;
}

let userChar = prompt("Введите строку: ");

if (userChar !== null) {
  let resultStr = remove(userChar);
  alert("Результат: " + resultStr);
}

// Тесты