const printFibonacci = (a,b) => {
    console.log(a)
    setTimeout(() => printFibonacci(b, a+b), 1000)
}

printFibonacci(0,1)