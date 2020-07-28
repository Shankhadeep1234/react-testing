const googleSearch = require("./script");

dbMock = [
  "cats.com",
  "movies.com",
  "catpictures.com",
  "cars.com",
  "flowers.com",
  "myfavoritecats.com",
];

describe("googleSearch", () => {
  it("This is the google search", () => {
    expect(googleSearch("cat", dbMock)).toEqual([
      "cats.com",
      "catpictures.com",
      "myfavoritecats.com",
    ]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
