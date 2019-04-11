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
  expect(dog.energy).toBe(100);
});

test('A neutral Dog should lose energy over time', () => {
  var dog = new Dog();
  jest.advanceTimersByTime(20*60);
  expect(dog.getStatus()).toBe('tired');
  expect(dog.energy).toBe(0);
});

test('A neutral Dog should switch to resting upon reaching zero energy', () => {
  var dog = new Dog();
  jest.advanceTimersByTime(20*60 + 60*60);
  expect(dog.getStatus()).toBe('satisfied');
  expect(dog.energy).toBe(100);
});

test('A resting Dog should switch to neutral upon reaching 100 energy', () => {
  var dog = new Dog();
  dog.energy = 0;
  dog.rest();
  jest.advanceTimersByTime(60*60 + 20*60);
  expect(dog.getStatus()).toBe('tired');
  expect(dog.energy).toBe(0);
});
