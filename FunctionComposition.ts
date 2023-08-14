type Composable = <A, B, C>(
    f: (input: B) => C , 
    g: (input: A) => B
) => (input: A) => C

const compose: Composable = (f, g) => {
    return function(input) {
        return f(g(input))
    }
}

function increment(input: number) {
    return input + 1
}

function stringify(input: number) {
    return `"${input}"`
}

const incrementAndStringify = compose(stringify, increment)

console.log(incrementAndStringify(1))