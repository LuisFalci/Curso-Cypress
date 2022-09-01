// function soma(a, b) {
//     return a + b
// }

// const soma = function (a, b) {
//     return a + b
// }

const soma = (a, b) => {
    return a + b
}

console.log(soma(1, 4))

//Found context
it('a function test', function () {
    console.log('Function', this)
 })

 //Undefined
 it('a arrow test', () => {
    console.log('Arrow', this)
 })