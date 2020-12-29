// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 1
  )
}

function matchName(source, soughtName) {
  return source.filter( record => record.name === soughtName)
}