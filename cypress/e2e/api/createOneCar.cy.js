context('sa', () => {
    it('sa', () => {
        cy.fixture('carOne').then(data => {
            const requestBody = data

            cy.request({
                method: 'POST',
                url: 'http://localhost:4000/car',
                body: requestBody
            }).then(({status, body}) => {
                expect(status).to.eq(200)

                cy.log(body)
            })
        })
    })
})