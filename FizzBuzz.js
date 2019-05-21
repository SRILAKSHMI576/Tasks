for (i = 0; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " Divisible by 3 and 5 'Fizz_Buzz'");
  } else if (i % 3 == 0) {
    console.log(i + " Divisible by 3 'Fizz'");
  } else if (i % 5 == 0) {
    console.log(i + " Divisible by 5 'Buzz'");
  } else {
    console.log(i);
  }
}
