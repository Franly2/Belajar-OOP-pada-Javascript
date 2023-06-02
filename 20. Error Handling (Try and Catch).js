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

try {
  const result = MathUtil.sum(2, 8);
  console.log(result);
} catch (error) {
  alert(`${error.message}`);
} finally {
  console.log("Kode MathUtil selesai");
}
console.log("process still running");

// ! try finally
class Counter {
  constructor() {
    this.value = 0;
  }

  next() {
    try {
      console.log(this.value);
    } finally {
      this.value++;
    }
  }
}

const counter = new Counter();
counter.next();
counter.next();
