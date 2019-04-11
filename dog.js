'use strict';

// Understands needs and game stats for dog
function Dog() {
  var obj = {};

  obj.energy = 100;

  // Resting dog recovers in an hour
  obj.rest = function() {
    setInterval(() => {
      obj.energy++;
    }, 60*60/100);
  };

  // Status based on needs
  obj.getStatus = function() {
    if (obj.energy == 0) {
      return 'tired';
    } else {
      return 'satisfied';
    }
  };

  return obj;
}
module.exports = Dog;
