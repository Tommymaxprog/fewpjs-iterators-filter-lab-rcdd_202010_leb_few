// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase() === name.toLowerCase()
  )
}

function fuzzyMatch(drivers, testString) {
  return drivers.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName(drivers, testName) {
  return drivers.filter( record => record.name === testName)
}