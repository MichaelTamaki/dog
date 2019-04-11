// Understands needs and game stats for dog
function Dog() {
  var obj = {};

  obj.energy = 100;

  obj.getStatus = function() {
    if (obj.energy == 0) {
      return 'tired';
    } else {
      return 'satisfied';
    }
  }
  return obj;
}
module.exports = Dog;
