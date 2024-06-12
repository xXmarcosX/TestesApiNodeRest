const fixture = "car";

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

context("Inserindo carro", () => {
  it("insere carros da fixture", () => {
    cy.fixture(fixture).then((data) => {
      const requestBody = data;

      requestBody.carros.forEach((carro) => {
        carro.plate = 'EVGA' + gerarNumeroAleatorio(1, 1000) + gerarNumeroAleatorio(1, 1000)
        cy.request({
          method: "POST",
          url: "/car",
          body: carro
        }).then(({status}) => {
            expect(status).to.eq(200)
        })
      });
    });
  });
});
