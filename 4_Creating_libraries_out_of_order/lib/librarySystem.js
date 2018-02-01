(function() {
	var libraryStorage = {};
	function librarySystem(libraryName, dependencies, callback) {
		if (arguments.length > 1) {
			// Check if dependencies exist, if not return and prepare to set later.
			// TODO: make this less verbose?
			var complete = true;
			for (var i = 0; i < dependencies.length; i++) {
				if (dependencies[i] in libraryStorage === false) {
					complete = false;
				}
			}
			if (!complete) {
				// save to try again later
				libraryStorage[libraryName] = {
					dependencies: dependencies,
					callback: callback
				};

				return;
			}

			// Otherwise, get all dependency returns to use as callback argument
			var dependencyReturns = [];
			for (var i = 0; i < dependencies.length; i++) {
				dependencyReturns.push(libraryStorage[dependencies[i]]);
			}
			// apply all returns as arguments for the callback
			libraryStorage[libraryName] = callback.apply(null, dependencyReturns);
		} else {
			// Check if callbacks have been set, if not try to set again
			// TODO: try/catch?
			if (typeof libraryStorage[libraryName] === 'object') {
				librarySystem(
					libraryName,
					libraryStorage[libraryName].dependencies,
					libraryStorage[libraryName].callback
				);
			}

			// Otherwise return library
			return libraryStorage[libraryName];
		}
	}

	window.librarySystem = librarySystem;
})();
