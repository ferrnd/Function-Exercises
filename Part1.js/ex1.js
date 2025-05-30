function EhPrimo(number) {
  if (number <= 1) {
    return false;
  } else if (number % Math.sqrt(number) === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(EhPrimo(1));
