function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parâmetros precisam ser números');
  }

  return a + b;
}

module.exports = sum;
