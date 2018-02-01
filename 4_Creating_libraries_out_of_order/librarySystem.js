(function() {
  var libraryStorage = {};
  function librarySystem(libraryName, dependencies, callback) {
    if (arguments.length > 1) {
      // get all dependency returns to use as callback argument
      var dependencyReturns = [];
      for (var i = 0; i < dependencies.length; i++) {
        dependencyReturns.push(libraryStorage[dependencies[i]]);
      }
      // apply all returns as arguments for the callback
      libraryStorage[libraryName] = callback.apply(null, dependencyReturns);
    } else {
      return libraryStorage[libraryName];
    }
  }

  window.librarySystem = librarySystem;
})();
