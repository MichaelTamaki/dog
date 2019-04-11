const Dog = require('./dog');

test('Beginning Dog status should be satisfied', () => {
  var dog = new Dog();
  expect(dog.getStatus()).toBe('satisfied');
});

test('Low energy Dog status should be tired', () => {
  var dog = new Dog();
  dog.energy = 0;
  expect(dog.getStatus()).toBe('tired');
})
