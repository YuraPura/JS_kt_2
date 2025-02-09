function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}