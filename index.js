// Code your solution here:
function driversWithRevenueOver(dArr, rNum) {
  return dArr.filter(d => {return d.revenue > rNum;});
};

function driverNamesWithRevenueOver(dArr, rNum) {
  return dArr.filter(d => d.revenue > rNum).map(d => d.name);
};

function exactMatch(dArr, obj) {
  return dArr.filter(d => { return d[Object.keys(obj)[0]] === Object.values(obj)[0]; });
};

function exactMatchToList(dArr, obj) {
  return dArr.filter(d => { return d[Object.keys(obj)[0]] === Object.values(obj)[0]; } )
  .map(d => d.name);
};