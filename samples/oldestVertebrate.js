animals = [
  {
    isVertebrate: true,
    genus: 'canis',
    subgenus: 'familiaris',
    breed: 'golden retriever',
    age: 3
  },
  {
    isVertebrate: true,
    genus: 'canis',
    subgenus: 'familiaris',
    breed: 'poodle',
    age: 13
  },
  {
    isVertebrate: true,
    genus: 'felis',
    subgenus: 'catus',
    breed: 'persian',
    age: 12
  },
  {
    isVertebrate: true,
    genus: 'carassius',
    subgenus: 'auratus',
    breed: 'common',
    age: 8
  },
  {
    isVertebrate: false,
    genus: 'spongia',
    subgenus: 'officinalis',
    breed: 'linnaeus',
    age: 13
  }
]

initial: {
  const getRelativelyOldestVertebrate = (animals) => {
    let eldest = { animal: null, relativeAge: 0 }
  
    for (const animal of animals) {
      if (animal.isVertebrate) {
        let relativeAge = 0
  
        switch (animal.genus) {
          case 'carassius': {
            relativeAge = animal.age * 5
          } case 'canis': {
            relativeAge =
              Math.round(16 * Math.log(animal.age) + 31)
          } case 'felis': {
            switch (animal.age) {
              case 1: relativeAge = 15
              case 2: relativeAge = 25
              default: {
                relativeAge = (animal.age - 2) * 4 + 25
              }
            }
          }
        }
  
        // compare relative age to eldest so far
        if (relativeAge > eldest.relativeAge) {
          eldest = { animal, relativeAge }
        }
      }
    }
  
    return eldest
  }

  getRelativelyOldestVertebrate(animals) //?
}

domainAbstraction: {
  const relativeGoldfishAge = (fish) => {
    return fish.age * 5
  }
  
  const relativeDogAge = (dog) => {
    return Math.round(16 * Math.log(dog.age) + 31)
  }
  
  const relativeCatAge = (cat) => {
    switch (cat.age) {
      case 1: return 15
      case 2: return 25
      default: {
        return (cat.age - 2) * 4 + 25
      }
    }
  }
  
  const getRelativeAge = (animal) => {
    switch(animal.genus) {
      case 'carassius': return relativeGoldfishAge(animal)
      case 'canis': return relativeDogAge(animal)
      case 'felis': return relativeCatAge(animal)
      default: return 0
    }
  }
  
  const getRelativelyOldestVertebrate = (animals) => {
    let eldest = { animal: null, relativeAge: 0 }
  
    for (const animal of animals) {
      if (animal.isVertebrate) {
        const relativeAge = getRelativeAge(animal)
  
        // compare relative age to eldest so far
        if (relativeAge > eldest.relativeAge) {
          eldest = { animal: animal, relativeAge: relativeAge }
        }
      }
    }
  
    return eldest
  }
  
  getRelativelyOldestVertebrate(animals) //? 
}