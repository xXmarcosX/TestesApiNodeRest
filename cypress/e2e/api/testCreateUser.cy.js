context('Creating user', () => {
    it('create user', () => {
        cy.fixture('users').then((data) => {
            const requestBody = data

            requestBody.users.forEach((user) => {
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:4000/user',
                    body: user
                }).then(({status, body}) => {
                    expect(status).to.eq(200)
    
                    cy.log(body)
                })
            })
        })
    })
})