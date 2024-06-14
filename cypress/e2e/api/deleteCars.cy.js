context('many', () => {
    it('delete many cars', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:4000/cars'
        }).then(({status, body}) => {
            expect(status).to.eq(200)

            cy.log(body)

            body.forEach((carro) => {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:4000/car/${carro._id}`
                }).then(({status, body}) => {
                    expect(status).to.eq(200)

                    cy.log(body)
                })
            })
        })
    })
})