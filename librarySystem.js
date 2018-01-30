// Cuurent approach
// 1. Create: Run library in IIFE and attach to window.
// 2. Use: Access library from window

// Another approach. One lobal variable period.
// 1. Create: librarySystem('libraryName', function () { /* return library */ })
// 2. Use: librarySystem('libraryName');

(function() {
	var libraryStorage = {};

	function librarySystem(libraryName, callback) {
		if (arguments.length > 1) {
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStorage[libraryName];
		}
	}

	window.librarySystem = librarySystem;
})();
