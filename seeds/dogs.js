exports.seed = function (knex, Promise) {
  return knex('dogs').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 10001, name: 'Fido', age: '2 years', breed: 'collie', size: 'medium', picture: 'img1'}),
        knex('users').insert({id: 10002, name: 'Rex', age: '3 months', breed: 'ridgeback', size: 'large', picture: 'img2'}),
        knex('users').insert({id: 10003, name: 'Shadow', age: '10 years', breed: 'pug', size: 'small', picture: 'img3'}),
        knex('users').insert({id: 10004, name: 'Sally', age: '6 months', breed: 'labrador-mixed', size: 'medium', picture: 'img4'}),
        knex('users').insert({id: 10005, name: 'Harry', age: '6 months', breed: 'labrador-mixed', size: 'medium', picture: 'img5'}),
      ]);
    });
};
