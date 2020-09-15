const deep = require("./index");
deep({}, ["__proto__", "polluted"], {});
deep({}, ["__proto__", "PROTOTYPE"], true);
// ReferenceError: PROTOTYPE is not defined
console.log(PROTOTYPE);
// ReferenceError: polluted is not defined
console.log(polluted);
