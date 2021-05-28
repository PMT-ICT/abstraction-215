initial: {

  const animals = [
    'giraffe', 'cat', 'elephant'
  ]

  const hasDog = (animals) => {
    for (let animal of animals) {
      if (animal == 'dog') return true
    }
    return false
  }

  const hasCat = (animals) => {
    for (let animal of animals) {
      if (animal == 'cat') return true
    }
    return false
  }

  hasDog(animals) //?
  hasCat(animals) //?

}

abstraction: {
  
  const animals = [
    'giraffe', 'cat', 'elephant'
  ]
  
  const hasAnimal = (kind, animals) => {
    for (let animal of animals) {
      if (kind == animal) return true
    }
    return false
  }
  
  const hasDog = (animals) => 
    hasAnimal('dog', animals)
  
  const hasCat = (animals) =>
    hasAnimal('cat', animals)
  
  hasDog(animals) //?
  hasCat(animals) //?

}

idiomatic: {
  
  const animals = [
    'giraffe', 'cat', 'elephant'
  ]
  
  const hasDog = (animals) =>
    animals.includes('dog')
  
  const hasCat = (animals) =>
    animals.includes('cat')

  hasDog(animals) //?
  hasCat(animals) //?

}
