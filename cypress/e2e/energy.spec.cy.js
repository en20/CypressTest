describe('Verificar energia em quilotoneladas (kt) ', () => {
    it('Verifica se a energia em quilotoneladas (kt) é maior que o valor recebido como parâmetro ', () => {
      const valorLimite = 1; 
      cy.visit('https://www.windy.com');
      cy.wait(1000); 
      cy.get('.ws-wind').then(($element) => {
        const textoCompleto = $element.text();
        const ktTexto = textoCompleto.match(/\d+/);
        const valorkt = parseFloat(ktTexto);
        expect(valorkt).to.be.greaterThan(valorLimite);
    });
  });
});
  