/* eslint-disable import/prefer-default-export */
export function arifprog(number1, number2) {
  const iter = (item, array) => {
    if (array.length === 10) {
      return array;
    }
    array.push(item);
    const newItem = item + number2;
    return iter(newItem, array);
  };
  return iter(number1, []);
}

export const isprime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
