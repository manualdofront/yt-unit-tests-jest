const sum = require('./soma');

describe('soma.js', () => {
  it('deve retornar 5 quando somar 2 + 3', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it('deve retornar -1 quando somar -2 + 1', () => {
    expect(sum(-2, 1)).toBe(-1);
  });

  it('deve lançar erro se algum parâmetro não for número', () => {
    expect(() => sum(2, '3')).toThrow('Os parâmetros precisam ser números');
    expect(() => sum('a', {})).toThrow();
    expect(() => sum(null, undefined)).toThrow();
  });
});
