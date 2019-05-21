var product = 1;
for (i = 1; i < 100; i++) {
  if (i % 2 == 0 && i % 5 == 0 && i % 4 == 0) {
    product *= i;
  }
}
console.log(product);
