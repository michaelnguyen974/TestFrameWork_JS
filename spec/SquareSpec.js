describe("Area", () => {
  it("can find area", () => {
    square = new Square(5);
    expect(square.area()).toBeIdenticalTo(23)
  });
});