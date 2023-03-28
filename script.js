function calculate() {
    const distance = document.getElementById("distance").value;
    const mileage = document.getElementById("mileage").value;
    const price = document.getElementById("price").value;
    const result = distance / mileage;
    const result2 = price*result;
    document.getElementById("result").value = result.toFixed(2);
    document.getElementById("result2").value = result2.toFixed(2);
  }
  