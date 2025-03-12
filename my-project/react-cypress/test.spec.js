describe('Sample Test', () => {
    it('Visits the app', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Welcome');
    });
});
