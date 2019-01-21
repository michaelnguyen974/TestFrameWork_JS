describe("Area", () => {
  it("can find area", () => {
    square = new Square(5);
    toBeIdenticalTo(square.area(), 25)

  });
});