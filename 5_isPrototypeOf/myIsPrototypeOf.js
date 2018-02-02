/*
The myIsPrototypeOf() method checks if an object exists in another object's prototype chain.

** Parameters:
prototypeObj:   The prototype object which will be searched for.
object:         The object whose prototype chain will be searched.

** Return value:
A Boolean indicating whether the calling object lies in the prototype chain of the specified object.

*/

function myIsPrototypeOf(prototypeObj, object) {
	var objectPrototype = Object.getPrototypeOf(object);

	// exclude null
	if (objectPrototype === null) {
		return false;
		// Check if prototypeObj is the direct prototype of object
	} else if (prototypeObj === objectPrototype) {
		return true;
		// Check if Object.prototype is the prototype of object
	} else if (Object.prototype === objectPrototype) {
		return true;
		// step up the prototype chain
	} else {
		myIsPrototypeOf(prototypeObj, objectPrototype);
	}
	// no prototype found
	return false;
}
