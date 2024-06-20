describe('DELETE', () => {
    it('Delete all users', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:4000/users'
        }).then(({status, body}) => {
            expect(status).to.eq(200)

            cy.log(body)

            body.forEach((user) => {
                cy.request({
                    method: 'DELETE',
                    url: `http://localhost:4000/user/${user._id}`
                }).then(({status, body}) => {
                    expect(status).to.eq(200)

                    cy.log(body)
                })
            })
        })
    })
})