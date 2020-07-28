const googleDatabase = [
  "cats.com",
  "movies.com",
  "catpictures.com",
  "cars.com",
  "flowers.com",
  "myfavoritecats.com",
];

const googleSearch = (searchTerm, db) => {
  const matches = db.filter((websites) => {
    return websites.includes(searchTerm);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch("cats", googleDatabase));

module.exports = googleSearch;
