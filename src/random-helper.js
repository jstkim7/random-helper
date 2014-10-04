/* Copyright (c) 2014 Sung Kim; Licensed MIT*/

function RandomHelper() {
  function posOrNeg(bool) {
    if (bool === undefined) bool = true;
    bool ? bool = 1 : bool = -1;
    return bool;
  }

  this.randomInt = function(min, max, pos) {
    return (Math.floor(Math.random() * max) + min) * posOrNeg(pos);
  }

  this.randomFloat = function(min, max, scale, pos) {
    scale = scale || 2;
    return (Math.random() * (max - min) + min).toFixed(scale) * posOrNeg(pos);
  }

  this.randomBool = function() {
    return [true, false][Math.round(Math.random())];
  }
}

module.exports = RandomHelper;