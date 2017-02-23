var countAllFromTown = function(regisNum, location){
var countFromStellies = regisNum.split(",");
var onlyStellies = [];

for (var i = 0; i < countFromStellies.length; i++){
  if (countFromStellies[i].startsWith(location)){
    onlyStellies.push(countFromStellies[i]);
    }
  }
  return onlyStellies.length;
}
