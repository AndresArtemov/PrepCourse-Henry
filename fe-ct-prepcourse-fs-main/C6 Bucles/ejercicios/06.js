function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num / 100 >= 1 && num / 100 < 10) {
    return true;
  } else {
    return false;
  }
}
console.log(tieneTresDigitos(1000));
module.exports = tieneTresDigitos;
