const Dog = require('./dog');

test('Beginning Dog status should be satisfied', () => {
  var dog = new Dog();
  expect(dog.getStatus()).toBe('satisfied');
});
