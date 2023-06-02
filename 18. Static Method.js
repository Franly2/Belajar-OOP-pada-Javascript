class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUtil.sum(1, 2, 3, 5);
console.log(result);
