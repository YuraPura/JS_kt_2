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
alert("Результат: " + remove(userChar));

// Тесты
console.assert(remove('Арнольд') === 'рнльд', 'Test 1 Failed: Арнольд -> рнльд');
console.assert(remove('АааООО') === '', 'Test 2 Failed: АааООО -> ""');
console.assert(remove('Программирование') === 'Пргрммирвние', 'Test 3 Failed: Программирование -> Пргрммирвние');
console.assert(remove('Окошка') === 'кшк', 'Test 4 Failed: Окошка -> кшк');