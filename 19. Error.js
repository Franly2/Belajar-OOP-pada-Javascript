class MathUtil {
  static sum(...numbers) {
    if (numbers.length < 2) {
      throw new Error("input minimal 2 angka");
    } else {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    }
  }
}

const result = MathUtil.sum(1);
console.log(result);
