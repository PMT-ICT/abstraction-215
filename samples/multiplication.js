initial: {
  const twoTimesTwo = () => {
    return 2 * 2
  }
  
  const threeTimesTwo = () => {
    return 3 * 2
  }

  twoTimesTwo() //?
  threeTimesTwo() //?
}

abstraction: {
  const double = (n) => {
    return n * 2
  }
  
  const triple = (n) => {
    return n * 3
  }

  double(2) //?
  triple(2) //?
}

higherAbstraction: {
  const multiply = (a, b) => {
    return a * b
  }
  
  const double = (a) => {
    return multiply(a, 2)
  }
  
  const triple = (a) => {
    return multiply(a, 3)
  }

  double(2) //?
  triple(2) //?
}
