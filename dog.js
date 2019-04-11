'use strict';

// Understands needs and game stats for dog
function Dog() {
  var obj = {};

  obj.energy = 100;
  obj.hunger = 100;

  // Neutral dog gets tired in 20 mins
  obj.neutral = function() {
    clearInterval(obj.energyIntervalFn);
    obj.energyIntervalFn = setInterval(() => {
      obj.energy--;
      if (obj.energy == 0) {
        obj.rest();
      }
    }, 20*60/100);
  };
  obj.neutral();

  // Resting dog recovers in an hour
  obj.rest = function() {
    clearInterval(obj.energyIntervalFn);
    obj.energyIntervalFn = setInterval(() => {
      obj.energy++;
      if (obj.energy == 100) {
        obj.neutral();
      }
    }, 60*60/100);
  };

  // Dog gets hungry in 3 hours
  setInterval(() => {
    obj.hunger--;
  }, 3*60*60/100);

  // Status based on needs
  obj.getStatus = function() {
    if (obj.energy == 0) {
      return 'tired';
    } else if (obj.hunger == 0) {
      return 'hungry';
    } else {
      return 'satisfied';
    }
  };

  return obj;
}
module.exports = Dog;
