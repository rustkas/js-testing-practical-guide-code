export function add(numbers) {
  let sum = 0;
  console.log(numbers);
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
