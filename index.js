// Code your solution here
function findMatching(names, query) {
    return names.filter(name => name.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(names, query) {
    return names.filter(name => name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  