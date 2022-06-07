const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");

function method1() {
  const iterations = document.getElementById("method1").value;

  let number = 1;
  let nnb = 3;
  result1.innerHTML = "Loading...";
  for (var i = 0; i < iterations; i++) {
    number = number - 1 / nnb;
    nnb += 2;
    number = number + 1 / nnb;
    nnb += 2;
  }
  const result = number * 4;
  result1.innerHTML = "PI: " + result;
}

function method2() {
  const iterations = document.getElementById("method2").value;

  let number = 3;
  let nnb = 2;
  result2.innerHTML = "Loading...";
  for (var i = 0; i < iterations; i++) {
    number = number + 4 / (nnb * (nnb + 1) * (nnb + 2));
    nnb += 2;
    number = number - 4 / (nnb * (nnb + 1) * (nnb + 2));
    nnb += 2;
  }
  const result = number;
  result2.innerHTML = "PI: " + result;
}
