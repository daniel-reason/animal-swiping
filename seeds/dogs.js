exports.seed = function (knex, Promise) {
  return knex('dogs').del()
    .then(function () {
      return Promise.all([
        knex('dogs').insert({id: 10001, name: 'Fido', age: '2 years', breed: 'collie', size: 'medium', picture: 'http://www.pawculture.com/uploads/collie-main.jpg'}),
        knex('dogs').insert({id: 10002, name: 'Rex', age: '3 months', breed: 'ridgeback', size: 'large', picture: 'https://s-media-cache-ak0.pinimg.com/564x/69/62/7f/69627f67a78540334ef54da048d423b6.jpg'}),
        knex('dogs').insert({id: 10003, name: 'Disco', age: '10 years', breed: 'pug', size: 'small', picture: 'https://i.ytimg.com/vi/J3lK7kZ0_mk/hqdefault.jpg'}),
        knex('dogs').insert({id: 10004, name: 'Sally', age: '6 months', breed: 'labrador-mix', size: 'medium', picture: 'http://www.dogbreedinfo.com/images18/YellowLabLogan3HalfMonths.JPG'}),
        knex('dogs').insert({id: 10005, name: 'Harry', age: '6 months', breed: 'labrador-mix', size: 'medium', picture: 'http://psylabradory.blog.onet.pl/files/2013/03/25.jpg'}),
      ]);
    });
};
