const walk = require("acorn-walk");
const ast1 = require("./ast-1.json")
const ast2 = require("./ast-2.json")

try {
  walk.simple(ast1, {});
  console.log('Walk ast-1 success');
} catch (error) {
  console.log('Walk ast-1 error: ', error);
}

try {
  walk.simple(ast2, {});
  console.log('Walk ast-2 success');
} catch (error) {
  console.log('Walk ast-2 error: ', error);
}
