var foo = 1
console.log(foo)
const bar = 1
console.log(bar)
function test() { // Notice that ESLint does not complain about whitespaces here
    console.log(baz)
}
var baz = 123
test()