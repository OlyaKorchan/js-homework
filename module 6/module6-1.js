// Task01 
// Your task is to check if arument is undefined and if it is true, 
// throw an exception of type Error with message 'missing parameter'

function m06task01(arg) {
	if (arg === undefined) {
		throw new Error("Missing Paramater");
	}
}
var a;
m06task01(a);