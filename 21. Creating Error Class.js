class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}
class MathUtil {
  static sum(...numbers) {
    if (numbers.length < 2) {
      throw new ValidationError("input minimal 2 angka", "numbers");
    } else {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    }
  }
}

try {
  const result = MathUtil.sum(8);
  console.log(result);
} catch (error) {
  console.log(`Terjadi error : ${error.message} di variabel ${error.field}`);
} finally {
  console.log("Kode MathUtil selesai");
}
console.log("process still running");
