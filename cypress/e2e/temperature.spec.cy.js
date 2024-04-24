describe('Verificar temperatura no Windy.com', () => {
  it('Verifica se a temperatura é maior que o valor recebido como parâmetro', () => {
    const valorLimite = 20;
    cy.visit('https://www.windy.com');
    cy.wait(1000);
    cy.get('.w-now').then(($element) => {
      const textoCompleto = $element.text();
      const temperaturaTexto = textoCompleto.match(/\d+/);
      const temperatura = parseFloat(temperaturaTexto);
      expect(temperatura).to.be.greaterThan(valorLimite);
    });
  });
});
