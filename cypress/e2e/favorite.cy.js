const bookFirst = {
    title: "Джейн Эйр",
    description: "О поисках своего собственного достоинства, несмотря на низкий социальный статус",
    author: "Шарлотта Бронте",
};

const bookSecond = {
    title: "Гаргантюа и Пантагрюэль",
    description: "О жизни 2-х забавных и добрых великанов-обжор, отце и сыне",
    author: "Франсуа Рабле",
};



describe('Favorite book spec', () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("test@test.com", "test");
    })
    
    it("Should add new book", () => {
      cy.addBook(bookFirst);
      cy.get(".card-title").should("contain.text", bookFirst.title);
    });
    
    it("Should add new book to favorite", () => {
      cy.addFavoriteBook(bookSecond);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", bookSecond.title);
    });

    it("Should delete book from favorite", () => {
        cy.visit("/favorites");
        cy.get(".card-body").contains("Гаргантюа и Пантагрюэль").parent().siblings().children("button").click();
        cy.contains("Please add some book to favorit on home page!").should("be.visible");
      });
  })