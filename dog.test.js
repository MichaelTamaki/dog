'use strict';

jest.useFakeTimers();

const Dog = require('./dog');

test('Beginning Dog status should be satisfied', () => {
  var dog = new Dog();
  expect(dog.getStatus()).toBe('satisfied');
});

test('Zero energy Dog status should be tired', () => {
  var dog = new Dog();
  dog.energy = 0;
  expect(dog.getStatus()).toBe('tired');
});

test('A resting Dog should recover energy over time', () => {
  var dog = new Dog();
  dog.energy = 0;
  dog.rest();
  expect(dog.getStatus()).toBe('tired');
  jest.advanceTimersByTime(60*60);
  expect(dog.getStatus()).toBe('satisfied');
});
